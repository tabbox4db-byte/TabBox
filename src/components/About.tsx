// AboutSection.tsx
import { FaLightbulb, FaSchool, FaTools } from "react-icons/fa";
import { useInView } from "./hook";

export default function AboutSection() {
    const { ref, isInView } = useInView(0.2);
    return (
        <section
            id="about"
            className="py-16 px-4 bg-gradient-to-b from-white to-gray-100 font-sans"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* รูป */}
                <div className="w-full">
                    <img
                        src="images/about.jpg"
                        alt="ทีมงาน TabBox"
                        className="rounded-xl shadow-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* ข้อความ */}
                <div
                    ref={ref}
                    className={`text-gray-800 text-[1.05rem] leading-relaxed transition-opacity duration-700 ${
                        isInView ? 'opacity-100 animate-fade-in' : 'opacity-0'
                    }`}
                >
                    <h2 className="text-3xl font-bold mb-4 text-blue-800">About us</h2>

                    <p className="mb-4">
                        <span className="font-bold text-blue-700">TabBox </span>
                        คือผู้เชี่ยวชาญด้านโซลูชันการจัดเก็บและชาร์จอุปกรณ์ไอทีแบบครบวงจร 
                        เราออกแบบและผลิตตู้ชาร์จสำหรับแท็บเล็ต โน้ตบุ๊ก สมาร์ทโฟน และอุปกรณ์อื่น ๆ 
                        ที่ตอบโจทย์การใช้งานในโรงเรียนและองค์กรสมัยใหม่
                    </p>

                    <ul className="space-y-3 mt-6">
                        <li className="flex items-start gap-3">
                            <FaLightbulb className="text-green-500 text-xl mt-1" />
                            <span>นวัตกรรมที่ออกแบบให้เหมาะกับการเรียนการสอนยุคใหม่</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaSchool className="text-blue-500 text-xl mt-1" />
                            <span>เหมาะสำหรับโรงเรียน หน่วยงานราชการ และองค์กรธุรกิจ</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaTools className="text-indigo-500 text-xl mt-1" />
                            <span>โครงสร้างแข็งแรง ใช้งานง่าย พร้อมบริการหลังการขาย</span>
                        </li>
                    </ul>

                    <p className="mt-6 italic text-gray-600">
                        “เราไม่ใช่แค่ผู้ผลิตตู้ชาร์จ แต่เราคือผู้สร้างโซลูชันเพื่อการเรียนรู้ที่ดีกว่า”
                    </p>
                </div>
            </div>
        </section>
    );
}