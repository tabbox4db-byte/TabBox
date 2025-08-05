import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Menu,
  X,
  Home,
  Box,
  Info,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* โลโก้ */}
        <ScrollLink to="hero" smooth={true} duration={500} offset={-80}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/logo.png" alt="TabBox Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-blue-600">TabBox</span>
          </div>
        </ScrollLink>

        {/* Hamburger Button (มือถือ) */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6">
          <NavItem to="hero" icon={<Home size={16} />} label="หน้าแรก" />
          <NavItem to="products" icon={<Box size={16} />} label="สินค้า" />
          <NavItem to="about" icon={<Info size={16} />} label="เกี่ยวกับ" />
          <NavItem to="contact" icon={<Phone size={16} />} label="ติดต่อ" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col space-y-4 px-6 pb-4">
          <NavItem to="hero" icon={<Home size={16} />} label="หน้าแรก" onClick={closeMenu} />
          <NavItem to="products" icon={<Box size={16} />} label="สินค้า" onClick={closeMenu} />
          <NavItem to="about" icon={<Info size={16} />} label="เกี่ยวกับ" onClick={closeMenu} />
          <NavItem to="contact" icon={<Phone size={16} />} label="ติดต่อ" onClick={closeMenu} />
        </div>
      )}
    </nav>
  );
}


function NavItem({
  to,
  label,
  icon,
  onClick,
}: {
  to: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-80}
      spy={true}
      activeClass="text-blue-800 font-semibold"
      className="cursor-pointer hover:text-blue-500 flex items-center space-x-2"
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </ScrollLink>
  );
}
