import React from "react";
import { MessageOutlined, UserOutlined } from "@ant-design/icons";

const blogPosts = [
  {
    id: 1,
    date: "12 SEP",
    title: "10 Ways to Reduce Food Waste at Home",
    description:
      "Learn practical tips to minimize food waste in your household and ensure excess food reaches those in need.",
    author: "FoodForAll",
    comments: 0,
    image: "https://res.cloudinary.com/dl6mko7z1/image/upload/v1751996870/gettyimages-557474939-612x612_om3jes.jpg",
  },
  {
    id: 2,
    date: "15 SEP",
    title: "How Community Kitchens Help Fight Hunger",
    description:
      "Discover the impact of community kitchens and how they efficiently distribute meals to vulnerable populations.",
    author: "FoodForAll",
    comments: 0,
    image: "https://res.cloudinary.com/dl6mko7z1/image/upload/v1753079907/pexels-catscoming-406152_ecfpac.jpg",
  },
  {
    id: 3,
    date: "18 SEP",
    title: "The Importance of Donating Surplus Food",
    description:
      "Understand why donating excess food is crucial for reducing hunger and supporting local communities.",
    author: "FoodForAll",
    comments: 0,
    image: "https://res.cloudinary.com/dl6mko7z1/image/upload/v1752131399/6_doapws.jpg",
  },
];


const BlogSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="text-center mb-12">
        <p className="text-green-500 uppercase tracking-wider text-2xl font-semibold">
          Our News
        </p>
        <h2 className="!text-3xl md:!text-4xl tracking-wider font-bold mt-2">
          Featured News And Advice
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-500 text-white text-center  px-3 py-1 rounded-md mr-4">
                  <div className="text-lg font-bold">{post.date.split(" ")[0]}</div>
                  <div className="text-md uppercase">{post.date.split(" ")[1]}</div>
                </div>
                <div className="text-sm text-gray-500 flex gap-4 items-center">
                  <span className="flex items-center gap-1 text-lg font-bold">
                    <i className="fa-solid fa-comments text-green-500 !text-lg"></i>
                    {post.comments} Comments
                  </span>
                  {/* <span className="flex items-center gap-1">
                    <UserOutlined />
                    {post.author}
                  </span> */}
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>

              <p className="text-lg text-gray-600 mb-4">{post.description}</p>

              <a
                href="#"
                className="text-green-500 font-medium text-xl hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
