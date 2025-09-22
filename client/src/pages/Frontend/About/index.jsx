import React from "react";
import { Typography } from 'antd'
import { Link } from "react-router-dom";
import Subscribe from "../../../components/Subscribe";

export default function About() {
    const teamMembers = [
        { avatar: "UA", name: "Umair Ahmed", role: "Founder & CEO", bio: "Passionate about social impact and technology, Umair founded Food Donation to make a real difference." },
        { avatar: "AR", name: "Abdul Rehman", role: "Operations Director", bio: "With 10+ years in logistics, Abdul ensures our food distribution network runs smoothly and efficiently." },
        { avatar: "KH", name: "Kashif Hasnat", role: "Community Manager", bio: "Kashif builds relationships with local organizations and volunteers to expand our community impact." },
        { avatar: "B", name: "Bilal", role: "Technology Lead", bio: "Bilal develops and maintains our platform, ensuring it's user-friendly and secure for all users." },
    ];

    const { Title } = Typography

    return (
        <div className="bg-gray-100">
            <div className='bg-cover bg-center bg-no-repeat h-[300px] lg:h-[550px] flex flex-col items-start justify-center px-12 ' style={{ backgroundImage: `url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752482896/Breadcamp-image_qoiqi4.jpg')` }}>
                <Title level={3} className='text-3xl md:!text-5xl font-lg text-white '>About</Title>
                <div className='flex items-center gap-3 mt-5'>
                    <div className='text-black hover:text-green-500 duration-300 text-2xl transition'><i className="fa-solid fa-house mr-1"></i><Link to="/"> Home</Link></div>
                    <div className=''><i className="fa-solid fa-chevron-right mr-1 text-xl"></i><span className='text-2xl '>About </span></div>
                </div>
            </div>
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
                        <p className="text-gray-700 text-base md:text-lg">
                            Food Donation was founded with a simple yet powerful vision: to create a world where no one goes to bed hungry while reducing food waste in our communities. What started as a small local initiative has grown into a comprehensive platform connecting donors with those in need.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg">
                            Our journey began when we realized that millions of pounds of perfectly good food were being wasted every day, while countless families struggled to put meals on their tables. We knew there had to be a better way to bridge this gap.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg">
                            Today, we're proud to have facilitated the donation of over 72 billion pounds of food annually, feeding more than 1 million people and reducing food waste by 50% in our partner communities.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600"
                            alt="Food Distribution"
                            className="rounded-2xl shadow-xl w-full"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
                    <h3 className="text-2xl text-green-500 mb-4"><i className="fas fa-bullseye"></i> Our Mission</h3>
                    <p className="text-gray-700 text-base md:text-lg">
                        To eliminate food waste and hunger by creating an efficient, safe, and accessible platform that connects food donors with recipients, fostering community bonds and promoting sustainable practices.
                    </p>
                </div>
                <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
                    <h3 className="text-2xl text-green-500 mb-4"><i className="fas fa-eye"></i> Our Vision</h3>
                    <p className="text-gray-700 text-base md:text-lg">
                        A world where every person has access to nutritious food, where communities are strengthened through sharing, and where food waste is a thing of the past.
                    </p>
                </div>
            </section>
            <section id="about" className="about" style={{ padding: "60px 20px", background: "#f8f9fa" }}>
                <div
                    className="container"
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "40px",
                    }}
                >
                    {/* Left Column - Content */}
                    <div
                        className="about-text"
                        style={{ flex: "1 1 500px", minWidth: "300px" }}
                    >
                        <h2 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "20px" }}>
                            About Food Donation
                        </h2>
                        <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.8", marginBottom: "15px" }}>
                            Food donation is the act of giving surplus or unused food to
                            individuals or organizations in need, thereby reducing food waste
                            and helping to alleviate hunger. It is a compassionate and
                            sustainable way to ensure that edible food is distributed to those
                            who are less fortunate.
                        </p>
                        <p style={{ fontSize: "1.1rem", color: "#666", lineHeight: "1.8" }}>
                            Our platform promotes social welfare and environmental
                            responsibility by connecting food donors with recipients efficiently.
                            Food donations play a crucial role in addressing food insecurity
                            and supporting communities around the world.
                        </p>
                    </div>

                    {/* Right Column - Image */}
                    <div
                        className="about-image"
                        style={{ flex: "1 1 400px", minWidth: "300px" }}
                    >
                        <img
                            src="https://res.cloudinary.com/dl6mko7z1/image/upload/v1751996870/gettyimages-557474939-612x612_om3jes.jpg"
                            alt="Food Donation"
                            style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
                    <p className="text-gray-600 text-base md:text-lg">The passionate people behind Food Donation</p>
                </div>
                <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="bg-gray-100 p-6 rounded-xl text-center transition-transform hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-orange-600 text-white flex items-center justify-center mx-auto text-2xl font-bold mb-4">
                                {member.avatar}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-green-500 font-medium mb-2">{member.role}</p>
                            <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Subscribe />
        </div>
    );
}
