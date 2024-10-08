import React from "react";
import { Link } from 'react-router-dom';
// import Logo from "./Logo";
import Logo from '../../assets/logo.png';

function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white py-8"> 
            <section className="flex flex-wrap justify-between max-w-screen-xl mx-auto px-6"> 
                <div className="w-full md:w-1/2 lg:w-5/12 p-6">
                    <div className="flex h-full flex-col justify-between">
                        <div className="mb-4 inline-flex items-center">
                            <img src={Logo} alt="Logo" width="100px" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-300">
                                &copy; Copyright 2023. All Rights Reserved by Akash.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/12 p-6">
                    <div className="h-full">
                        <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-400">Company</h3>
                        <ul>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Features</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Pricing</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Affiliate Program</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Press Kit</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/12 p-6">
                    <div className="h-full">
                        <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-400">Support</h3>
                        <ul>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Account</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Help</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Customer Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-3/12 p-6">
                    <div className="h-full">
                        <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-400">Legals</h3>
                        <ul>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Terms &amp; Conditions</Link>
                            </li>
                            <li className="mb-4">
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-200 hover:text-gray-400" to="/">Licensing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
