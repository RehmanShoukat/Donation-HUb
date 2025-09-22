import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../../../components/Testimonial";
import BlogSection from '../../../components/BlogSection'

export default function Service() {

    const { Title } = Typography
    const services = [
        {
            icon: "fas fa-truck",
            title: "Food Collection & Distribution",
            desc:
                "We provide efficient food collection from donors and safe distribution to recipients through our network of volunteers and partner organizations.",
            features: [
                "Real-time pickup scheduling",
                "Temperature-controlled transport",
                "GPS tracking for transparency",
                "Quality assurance checks",
            ],
            btnText: "Get Started",
            btnLink: "/signup",
        },
        {
            icon: "fas fa-shield-alt",
            title: "Food Safety & Quality Control",
            desc:
                "Our comprehensive food safety program ensures all donated food meets the highest standards before reaching recipients.",
            features: [
                "HACCP certified processes",
                "Regular safety inspections",
                "Expiration date monitoring",
                "Proper storage protocols",
            ],
            btnText: "Learn More",
            btnLink: "/contact",
        },
        {
            icon: "fas fa-users",
            title: "Community Outreach Programs",
            desc:
                "We work with local communities to identify needs, build partnerships, and create sustainable food security solutions.",
            features: [
                "Needs assessment surveys",
                "Partnership development",
                "Volunteer training programs",
                "Community education workshops",
            ],
            btnText: "Join Program",
            btnLink: "/contact",
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Digital Platform & Technology",
            desc:
                "Our user-friendly platform connects donors and recipients with advanced matching algorithms and real-time communication tools.",
            features: [
                "Smart matching system",
                "Mobile-responsive design",
                "Real-time notifications",
                "Analytics and reporting",
            ],
            btnText: "Try Platform",
            btnLink: "/signup",
        },
        {
            icon: "fas fa-heart",
            title: "Emergency Food Relief",
            desc:
                "Rapid response food assistance for communities affected by natural disasters, economic hardship, or other emergencies.",
            features: [
                "24/7 emergency response",
                "Disaster relief coordination",
                "Emergency food supplies",
                "Crisis communication system",
            ],
            btnText: "Request Help",
            btnLink: "/food_request",
        },
        {
            icon: "fas fa-chart-line",
            title: "Impact Tracking & Reporting",
            desc:
                "Comprehensive analytics and reporting tools to measure impact, track progress, and optimize food distribution efforts.",
            features: [
                "Real-time impact metrics",
                "Custom reporting dashboards",
                "Environmental impact tracking",
                "Community feedback analysis",
            ],
            btnText: "View Reports",
            btnLink: "/contact",
        },
    ];

    const processSteps = [
        {
            number: 1,
            title: "Registration",
            desc: "Sign up as a donor or recipient and complete your profile with necessary information",
        },
        {
            number: 2,
            title: "Matching",
            desc: "Our smart algorithm matches donors with recipients based on location, food type, and availability",
        },
        {
            number: 3,
            title: "Coordination",
            desc: "Schedule pickup and delivery times through our platform with real-time communication",
        },
        {
            number: 4,
            title: "Distribution",
            desc: "Safe and efficient food transfer with quality checks and tracking throughout the process",
        },
    ];

    return (
        <div>

            <div className='bg-cover bg-center bg-no-repeat h-[300px] lg:h-[550px] flex flex-col items-start justify-center px-12 ' style={{ backgroundImage: `url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752482896/Breadcamp-image_qoiqi4.jpg')` }}>
                <Title level={3} className='text-3xl md:!text-5xl font-lg text-white '>Services</Title>
                <div className='flex items-center gap-3 mt-5'>
                    <div className='text-black hover:text-green-500 duration-300 text-2xl transition'><i className="fa-solid fa-house mr-1"></i><Link to="/"> Home</Link></div>
                    <div className=''><i className="fa-solid fa-chevron-right mr-1 text-xl"></i><span className='text-2xl '>Services </span></div>
                </div>
            </div>

            <div style={{ padding: "60px 20px", background: "#f8f9fa" }}>
                {/* Page Header */}
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "20px", color: "#333" }}>
                        Our Services
                    </h1>
                    <p style={{ fontSize: "1.2rem", color: "#666" }}>
                        Comprehensive solutions for food donation and distribution
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        gap: "40px",
                        marginBottom: "80px",
                        maxWidth: "1200px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            style={{
                                background: "white",
                                padding: "40px",
                                borderRadius: "20px",
                                boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                                borderLeft: "5px solid #28a745",
                            }}
                        >
                            <div
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    background: "linear-gradient(135deg, #28a745, #38b000)",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "2rem",
                                    color: "white",
                                    marginBottom: "25px",
                                }}
                            >
                                <i className={service.icon}></i>
                            </div>
                            <h3 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "15px", fontWeight: "700" }}>
                                {service.title}
                            </h3>
                            <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "20px" }}>{service.desc}</p>
                            <ul style={{ listStyle: "none", marginBottom: "25px" }}>
                                {service.features.map((feat, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            padding: "8px 0",
                                            color: "#666",
                                        }}
                                    >
                                        <i className="fas fa-check" style={{ color: "#28a745", width: "16px" }}></i>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={service.btnLink}
                                style={{
                                    background: "#28a745",
                                    color: "white",
                                    padding: "12px 25px",
                                    borderRadius: "25px",
                                    fontWeight: "600",
                                    textDecoration: "none",
                                    display: "inline-block",
                                }}
                            >
                                {service.btnText}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div
                    style={{
                        background: "white",
                        padding: "80px 20px",
                        borderRadius: "20px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        marginBottom: "80px",
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h2 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "15px" }}>
                            How Our Services Work
                        </h2>
                        <p style={{ fontSize: "1.1rem", color: "#666" }}>
                            Simple steps to make a difference in your community
                        </p>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "40px",
                            marginTop: "60px",
                        }}
                    >
                        {processSteps.map((step, index) => (
                            <div key={index} style={{ textAlign: "center" }}>
                                <div
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        background: "#28a745",
                                        color: "white",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.5rem",
                                        fontWeight: "700",
                                        margin: "0 auto 20px",
                                    }}
                                >
                                    {step.number}
                                </div>
                                <h4 style={{ fontSize: "1.3rem", color: "#333", marginBottom: "15px" }}>
                                    {step.title}
                                </h4>
                                <p style={{ color: "#666", lineHeight: "1.5" }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Testimonials/>
            <BlogSection/>
        </div>
    );
}
