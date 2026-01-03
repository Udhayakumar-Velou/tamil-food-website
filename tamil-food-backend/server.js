require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const https = require('https');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// --- SCHEMAS & MODELS ---
const reservationSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  date: String,
  time: String,
  guests: String,
  createdAt: { type: Date, default: Date.now }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// --- HELPER FUNCTIONS ---
function sendWhatsApp(reservation) {
  const { fullName, phone, date, time, guests } = reservation;

  const message = `🍽 *New Reservation!*

👤 Name: ${fullName}
📅 Date: ${date}
⏰ Time: ${time}
👥 Guests: ${guests}
📞 Contact: ${phone}`;

  const encodedMessage = encodeURIComponent(message);

  const url = `https://api.textmebot.com/send.php?recipient=${process.env.PHONE_NUMBER}&apikey=${process.env.TEXTMEBOT_API_KEY}&text=${encodedMessage}`;

  https
    .get(url, (res) => {
      console.log(`📨 WhatsApp API Responded: ${res.statusCode}`);
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => console.log('📨 API Response:', data));
    })
    .on('error', (err) => {
      console.error('❌ WhatsApp Send Failed:', err.message);
    });
}

// 1. Root Route (To test if server is alive on Vercel)
app.get('/', (req, res) => {
  res.send('Tamil Food Backend is Running!');
});

// 2. Create Reservation
app.post('/api/reservation', async (req, res) => {
  try {
    const { fullName, phone, date, time, guests } = req.body;

    const toMinutes = (t) => {
      const [h, m] = t.split(':').map(Number);
      return h * 60 + m;
    };

    const requestedTime = toMinutes(time);
    const existingReservations = await Reservation.find({ date });

    const conflict = existingReservations.some((r) => {
      const existingTime = toMinutes(r.time);
      return Math.abs(existingTime - requestedTime) < 60; 
    });

    if (conflict) {
      return res.status(409).json({
        message: 'This time slot is already booked. Please select another time.'
      });
    }

    const newReservation = new Reservation({
      fullName,
      phone,
      date,
      time,
      guests
    });

    await newReservation.save();
    
    // Send WhatsApp notification
    sendWhatsApp({ fullName, phone, date, time, guests });

    res.status(201).json({
      success: true,
      message: 'Reservation saved & WhatsApp sent'
    });

  } catch (error) {
    console.error("Error saving reservation:", error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// 3. Get Reservations
app.get('/api/reservations', async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: 'Date is required' });
    }

    const reservations = await Reservation.find({ date });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reservations' });
  }
});

// --- SERVER STARTUP (MODIFIED FOR VERCEL) ---

// Only run app.listen if we are running locally.
// Vercel handles the server start automatically.
if (require.main === module) {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// Export the app so Vercel can run it
module.exports = app;