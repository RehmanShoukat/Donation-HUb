import { Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../../../components/Subscribe";
import Testimonials from "../../../components/Testimonial";
import BlogSection from "../../../components/BlogSection";

const galleryData = [
    {
        id: 1,
        category: "distribution",
        title: "Food Distribution",
        desc: "Delivering nutritious meals to families in need",
        img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400",
    },
    {
        id: 2,
        category: "volunteers",
        title: "Volunteers",
        desc: "Our dedicated volunteers making a difference",
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400",
    },
    {
        id: 3,
        category: "community",
        title: "Community",
        desc: "Supporting local communities with nutritious food",
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
    },
    {
        id: 4,
        category: "events",
        title: "Events",
        desc: "Engaging community events for food drives",
        img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400",
    },
];

export default function Gallery() {
    const [filter, setFilter] = useState("all");

    const filteredItems =
        filter === "all"
            ? galleryData
            : galleryData.filter((item) => item.category === filter);

    const categories = ["all", "distribution", "volunteers", "community", "events"];

    const {Title} = Typography

    return (
        <div className="w-full">
            <div className='bg-cover bg-center bg-no-repeat h-[300px] lg:h-[550px] flex flex-col items-start justify-center px-12 ' style={{ backgroundImage: `url('https://res.cloudinary.com/dl6mko7z1/image/upload/v1752482896/Breadcamp-image_qoiqi4.jpg')` }}>
                <Title level={3} className='text-3xl md:!text-5xl font-semibold text-white '>Gallery</Title>
                <div className='flex items-center gap-3 mt-5'>
                    <div className='text-black hover:text-green-500 duration-300 text-2xl transition'><i className="fa-solid fa-house mr-1"></i><Link to="/"> Home</Link></div>
                    <div className=''><i class="fa-solid fa-chevron-right mr-1 text-xl"></i><span className='text-2xl '>Gallery </span></div>
                </div>
            </div>
            <div className="p-6 md:p-12 bg-gray-100">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Our Impact Gallery
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl">
                        See the difference we're making in communities through food donation
                    </p>
                </div>
                <div className="flex justify-center gap-4 flex-wrap mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-full font-semibold border-2 transition ${filter === cat
                                    ? "bg-green-600 border-green-600 text-white"
                                    : "bg-white border-gray-300 text-gray-700 hover:bg-green-600 hover:border-green-600 hover:text-white"
                                }`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-64 object-cover transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-green-600 bg-opacity-80 flex flex-col justify-center items-center text-center text-white px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Subscribe/>
            <Testimonials/>
            <BlogSection/>
        </div>
    );
}
