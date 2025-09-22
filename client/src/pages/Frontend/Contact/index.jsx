import { Button, Card, Col, Form, Input, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Subscribe from '../../../components/Subscribe';
import BlogSection from '../../../components/BlogSection';

export default function Contact() {


    const Title = Typography

    const { TextArea } = Input;
    const [loading, setLoading] = useState(false)

    // const handleSubmit = async (values) => {
    //     try {
    //         setLoading(true)
    //         const res = await axios.post("http://localhost:8000/api/contact", values)
    //         if (res.data.success) {
    //             window.toastify("Message sent successfully!", "success")
    //         } else {
    //             window.toastify("Failed to send message. Try again.", "error");
    //         }
    //     } catch (err) {
    //         console.error(err)
    //         window.toastify("Message not send something is wrong");
    //     } finally {
    //         setLoading(false);
    //     }

    // }

    return (
        <div className='w-full'>
            <div className='bg-cover bg-center bg-no-repeat h-[300px] lg:h-[550px] flex flex-col items-start justify-center px-12 ' style={{ backgroundImage: `url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752482896/Breadcamp-image_qoiqi4.jpg')` }}>
                <Title level={3} className='text-3xl md:!text-5xl font-semibold text-white '>Contact US</Title>
                <div className='flex items-center gap-3 mt-5'>
                    <div className='text-black hover:text-green-500 duration-300 text-2xl transition'><i className="fa-solid fa-house mr-1"></i><Link to="/"> Home</Link></div>
                    <div className=''><i class="fa-solid fa-chevron-right mr-1 text-xl"></i><span className='text-2xl '>Contact </span></div>
                </div>
            </div>
            <div className='w-full py-16 px-4 sm:px-6 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <Row gutter={[24, 24]} justify='center'>
                        <Col xs={24} sm={12} md={8}>
                            <Card variant="outlined" className="!bg-gray-50 mx-auto flex items-center justify-center text-center shadow-sm hover:shadow-md  ">
                                <div className='w-18 h-18 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500 text-white text-3xl hover:bg-black duration-500'>
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <Title level={1} className='!text-2xl font-bold mt-3 mb-2'>Our Location</Title>
                                <p className='text-lg text-bold '>The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Card variant="outlined" className="!bg-gray-50 mx-auto flex items-center justify-center text-center shadow-sm hover:shadow-md  ">
                                <div className='w-18 h-18 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500 text-white text-3xl hover:bg-black duration-500'>
                                    <i class="fa-solid fa-phone-volume"></i>
                                </div>
                                <Title level={1} className='!text-2xl font-bold mt-3 mb-2'>Our Contact</Title>
                                <p className='text-lg text-bold '>+ (567) 1234-567-8901</p>
                                <p className='text-lg text-bold mt-1 '>+ (567) 1234-567-8901</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Card variant="outlined" className="!bg-gray-50 mx-auto flex items-center justify-center text-center shadow-sm hover:shadow-md  ">
                                <div className='w-18 h-18 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500 text-white text-3xl hover:bg-black duration-500'>
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <Title level={1} className='!text-2xl font-bold mt-3 mb-2'>Mail Us</Title>
                                <p className='text-lg text-bold '>info@peacefulthemes.com</p>
                                <p className='text-lg text-bold mt-1 '>info2@peacefulthemes.com</p>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </div>
            <div className='w-full py-16 px-4 sm:px-6 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <Row gutter={16} align='middle' style={{ minHeight: "500px" }} className='items-stretch'>
                        <Col xs={24} md={8}>
                            <div className='w-full h-full'>
                                <img src="https://res.cloudinary.com/dl6mko7z1/image/upload/v1752667967/6-1_ogaugy.jpg" alt="Contact" className='w-auto h-auto object-cover shadow-md rounded' />

                            </div>
                        </Col>
                        <Col xs={24} md={16} >
                            <div className='flex items-center gap-3 sm:mt-5'>
                                <div className='w-1 h-6 bg-green-500 font-sans'></div>
                                <p className='text-green-500 font-semibold text-xl'>LET'S TALK</p>
                            </div>
                            <h2 className="text-3xl sm:!text-4xl font-bold mb-4 mt-2">Get In Touch</h2>
                            <p className="text-gray-600 mb-6  text-xl">
                                It is a long established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout.
                            </p>
                            <Form layout='vertical' >
                                <Row gutter={16} align="middle" style={{ height: '100%' }} >
                                    <Col col={24} sm={12}>
                                        <Form.Item name='name'>
                                            <Input size="large" style={{ padding: '14px 16px', fontSize: "1rem" }} placeholder="Enter Your Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col col={24} sm={12}>
                                        <Form.Item name='phone'>
                                            <Input size="large" placeholder="Phone Number" style={{ padding: '14px 16px', fontSize: "1rem" }} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item name='email'>
                                    <Input size="large" placeholder="Email Address" style={{ padding: '14px 16px', fontSize: "1rem" }} />
                                </Form.Item>
                                <Form.Item name='subject'>
                                    <Input size="large" placeholder="Subject" style={{ padding: '14px 16px', fontSize: "1rem" }} />
                                </Form.Item>
                                <Form.Item name='message'>
                                    <TextArea rows={4} placeholder="Write Your Message" style={{ padding: '14px 16px', fontSize: "1rem" }} />
                                </Form.Item>
                                <Button type='primary' htmlType='submit'  loading={loading} className='!bg-green-500  !px-6 !py-5 text-white  !text-2xl hover:!bg-black duration-500 transition'>Send Message</Button>
                            </Form>
                        </Col>

                    </Row>
                </div>

            </div>
            
        <Subscribe/>
        <BlogSection/>
        </div>
    )
}
