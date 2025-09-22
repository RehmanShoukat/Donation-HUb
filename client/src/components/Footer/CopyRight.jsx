import React from 'react'
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom'



export default function CopyRight() {
    return (
        <div className='overflow-x-hidden'>
        <footer className='bg-green-600 py-10 px-6'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 align-middle '>
                <div className='pl-0 sm:pl-10 flex flex-col justify-center'>
                    <div className='flex items-center gap-2 mb-3 '>
                        <img src={logo} alt="logo" className='h-15 w-auto' />
                        <span className='text-xl font-medium text-white '>Dietetics Refill</span>
                    </div>
                    <p className='text-white text-sm mb-4'>It helps designers plan whererthy the content will sitcont ent to be written and approved.</p>
                    <div className='gap-4 flex text-xl mb-8 mt-3'>
                        <a href={window.links.facebook} className='bg-black px-4 py-2 text-white hover:bg-green-700 hover:text-white '><i className="fa-brands fa-facebook-f"></i></a>
                        <a href={window.links.instagram} className='bg-black px-4 py-2 text-white hover:bg-green-700 hover:text-white'><i className="fa-brands fa-instagram"></i></a>
                        <a href={window.links.youtube} className='bg-black px-4 py-2 text-white hover:bg-green-700 hover:text-white'><i className="fa-brands fa-youtube"></i></a>
                        <a href={window.links.whatsapp} className='bg-black px-4 py-2 text-white hover:bg-green-700 hover:text-white'><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
                <div>
                    <h2 className='text-white text-2xl font-semibold'>Quick Link</h2>
                    <ul className='mt-2 space-y-3'>
                        <li>
                            <Link to="/" className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>About us</Link>
                        </li>
                        <li>
                            <Link to= '/contact' className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>Contact us</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>Blog</Link>
                        </li>
                        <li>
                            <Link to="/appointment"  className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>Appointment</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-2xl font-semibold'>Our Service</h2>
                    <ul className='mt-2 space-y-3'>
                        <li>
                            <a href="#" className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>Personalized Nutrition</a>
                        </li>
                        <li>
                            <a href="#" className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>Child Nutrition</a>
                        </li>
                        <li>
                            <a href="#" className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>Balance Body & MInd</a>
                        </li>
                        <li>
                            <a href="#" className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>Fitness Performance</a>
                        </li>
                        <li>
                            <a href="#" className='text-white text-normal'><span><i className="fa-solid fa-angle-right mr-3 text-green-700"></i></span>Weight Loss Programs</a>
                        </li>
                    </ul>
                </div>
                <div className='space-y-3 text-white'>
                    <h3 className='text-white text-2xl font-semibold'>Contact us</h3>
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-envelope align-middle"></i>
                        <span className="leading-none">inforehman49@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2 text-white ">
                        <i className="fa-solid fa-phone-volume"></i>
                        <span>+923392633875</span>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}
