import ProductCardList from "./ProductCardList";
import { FaLine } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./Footer"
import AboutSection from "./About";

export default function OnePageSite() {
    const [showHero, setShowHero] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setShowHero(entry.isIntersecting),
            { threshold: 0.4 }
        );

        if (heroRef.current) observer.observe(heroRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section
                id="hero"
                ref={heroRef}
                className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url('images/cover2.jpg')` }}
            >
                {/* Layer มืด */}
                <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

                <AnimatePresence>
                    {showHero && (
                        <motion.div
                            key="hero-content"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 text-center max-w-2xl px-4"
                        >
                            <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-xl">
                                จำหน่ายตู้ชาร์จ Tablet, iPad, Laptop, MacBook
                            </h1>
                            <p className="mb-6 text-lg sm:text-xl drop-shadow-lg">
                                ใช้งานง่าย ปลอดภัย พร้อมบริการติดตั้งฟรีในเขตกรุงเทพและปริมณฑล
                            </p>
                            <a
                                href="https://line.me/R/ti/p/linejazz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg px-6 py-3 rounded-full transition"
                            >
                                <FaLine className="mr-2 text-xl" />
                                ติดต่อผ่าน LINE
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>


            {/* Products Section */}
            <section id="products" className="p-8 bg-white">
                <h2 className="text-3xl font-semibold mb-6 text-center"></h2>
                <ProductCardList />
            </section>

            {/* About Section */}
            <section id="about" className="p-8 bg-gray-100">
                <AboutSection/>
                {/* เนื้อหา about */}
            </section>

            {/* Contact Section */}
            <section id="contact" className="p-8 bg-white text-center">
                <Contact />
            </section>
        </div>
    );
}
