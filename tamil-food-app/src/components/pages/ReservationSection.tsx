import { useState } from 'react'; 
import { Form, Input, DatePicker, TimePicker, Button, Typography, Row, Col, message } from 'antd'; // Import message
import dayjs from 'dayjs';
import '../../assets/styles/ReservationSection.scss';

const { Title, Text } = Typography;

const ReservationSection = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [bookedTimes, setBookedTimes] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<any>(null);

  const onFinish = async (values: any) => {
    setLoading(true); 

    const formattedData = {
      ...values,
      date: values.date ? values.date.format('YYYY-MM-DD') : '',
      time: values.time ? values.time.format('HH:mm') : '',
    };

    console.log('Sending Reservation:', formattedData);

    try {
      const response = await fetch('http://localhost:5001/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      const data = await response.json();

      if (response.ok) {
        message.success("Table Reserved Successfully! We will confirm shortly.");
        form.resetFields(); 
      } else if (!response.ok) {
        message.error(data.message || "Failed to reserve table.");
      }else {
        message.error(data.message || "Failed to reserve table. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      message.error("Cannot connect to server. Is the backend running?");
    } finally {
      setLoading(false); 
    }
  };


  const fetchBookedTimes = async (date: string) => {
    try {
      const res = await fetch(
          `http://localhost:5001/api/reservations?date=${date}`
        );
        const data = await res.json();
        setBookedTimes(data.map((r: any) => r.time));
      } catch (e) {
        console.error('Failed to fetch reservations');
      }
    };

    const toMinutes = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  const getOpeningHours = (date: any) => {
    const day = date.day(); 

    if (day >= 1 && day <= 5) {
      return [
        { start: '12:00', end: '13:30' },
        { start: '18:00', end: '21:00' },
      ];
    }

    if (day === 6) {
      return [{ start: '18:00', end: '21:00' }];
    }

    return [];
  };

  const disabledTime = () => {
  if (!selectedDate) return {};

  const openingHours = getOpeningHours(selectedDate);
  const bookedMinutes = bookedTimes.map(toMinutes);

  const isWithinOpening = (minutes: number) =>
    openingHours.some(({ start, end }) => {
      return (
        minutes >= toMinutes(start) &&
        minutes <= toMinutes(end)
      );
  });

  return {
    disabledHours: () => {
      const hours: number[] = [];
      for (let h = 0; h < 24; h++) {
        if (!isWithinOpening(h * 60)) hours.push(h);
      }
      return hours;
    },

    disabledMinutes: (hour: number) => {
      const minutes: number[] = [];
      for (let m = 0; m < 60; m += 15) {
        const current = hour * 60 + m;

        const outsideOpening = !isWithinOpening(current);
        const conflict = bookedMinutes.some(
          (bm) => Math.abs(bm - current) < 60
        );

        if (outsideOpening || conflict) minutes.push(m);
      }
      return minutes;
    }
  };
};

  return (
    <div className="reservation-section">
      <div className="container">

        <div className="reservation-header">
           <Title level={1}>
             Reserve a table
           </Title>
           <div className="separator"></div>
        </div>
        
        <div className="reservation-card">
          
          <Row gutter={[40, 24]} align="middle">
            
            <Col xs={24} lg={8} className="reservation-text-col">
               <div>
                 <Title level={2} className='mb-0 title '>
                   Reserve <br/> A Table
                 </Title>
                  <div className="separator"></div>
                 <Text className="sub-text">
                   Discover our New Menu !
                 </Text>
               </div>
            </Col>

            <Col xs={24} lg={16} className="reservation-form-col">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={16}>
                  <Col xs={24} md={8}>
                    <Form.Item name="guests" rules={[{ required: true, message: 'Required' }]}>
                      <Input placeholder="No of Guest" type="number" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={8}>
                 <Form.Item name="date" rules={[{ required: true, message: 'Required' }]}>
                    <DatePicker
                      placeholder="Date"
                      style={{ width: '100%' }}
                      disabledDate={(current) =>
                        current &&
                        (current < dayjs().startOf('day') || current.day() === 0)
                      }
                      onChange={(date) => {
                        setSelectedDate(date);
                        if (date) {
                          fetchBookedTimes(date.format('YYYY-MM-DD'));
                        }
                        form.setFieldsValue({ time: null });
                      }}
                    />
                  </Form.Item>
                  </Col>
                  <Col xs={24} md={8}>
                    <Form.Item name="time" rules={[{ required: true, message: 'Required' }]}>
                      <TimePicker
                        placeholder="Time"
                        format="HH:mm"
                        style={{ width: '100%' }}
                        minuteStep={15}
                        // disabled={!selectedDate}
                        // disabledTime={disabledTime}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item name="fullName" rules={[{ required: true, message: 'Please enter your name' }]}>
                      <Input placeholder="Full Name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                   <Form.Item
                      name="phone"
                      rules={[
                        { required: true, message: 'Please enter your phone number' },
                        { pattern: /^[0-9]{8,15}$/, message: 'Enter a valid phone number' }
                      ]}
                    >
                      <Input
                        placeholder="Phone No"
                        maxLength={15}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          form.setFieldsValue({ phone: value });
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <div className="submit-btn-container">
                  <div className="submit-btn-wrapper">
                    <Button
                      htmlType="submit"
                      className="submit-btn"
                      loading={loading}
                    >
                      {loading ? "Booking..." : "Submit"}
                    </Button>
                  </div>
                </div>

              </Form>
            </Col>
          </Row>
        </div>

      </div>
    </div>
  );
};

export default ReservationSection;