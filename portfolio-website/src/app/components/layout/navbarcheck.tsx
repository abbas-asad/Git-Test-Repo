import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-[#000000] fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/abbaslogo.png"
            alt="Abbas Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white text-2xl font-bold hover:text-cyan transition duration-300">
            Abbas
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-[#3aafa9] transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col mt-6 gap-11">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-[#3aafa9] transition duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
