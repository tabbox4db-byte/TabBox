import { FaLine, FaFacebook, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="mb-4">สนใจติดต่อสอบถามรายละเอียดเพิ่มเติมได้ที่</p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
        {/* LINE */}
        <a
          href="https://line.me/R/ti/p/linejazz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white p-4 sm:px-6 sm:py-3 rounded-full transition"
        >
          <FaLine className="text-xl sm:mr-2" />
          <span className="hidden sm:inline">แอดไลน์ตอนนี้</span>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/tabboxthailand"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white p-4 sm:px-6 sm:py-3 rounded-full transition"
        >
          <FaFacebook className="text-xl sm:mr-2" />
          <span className="hidden sm:inline">Facebook : TabBox</span>
        </a>

        {/* โทร */}
        <a
          href="tel:0812345678"
          className="flex items-center bg-gray-700 hover:bg-gray-800 text-white p-4 sm:px-6 sm:py-3 rounded-full transition"
        >
          <FaPhoneAlt className="text-xl sm:mr-2" />
          <span className="hidden sm:inline">081-234-5678</span>
        </a>
      </div>
    </section>
  );
}
