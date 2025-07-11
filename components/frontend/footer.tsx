"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../global/Logo";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Documentation", href: "/docs" },
    { label: "Support", href: "https://storix.com/support" },
  ];

  const contactInfo = {
    email: "support@storix.com",
    phone: "+1 (800) 123-4567",
    address: "123 Inventory Lane, Commerce City, CA 90210",
  };

  const socialLinks = [
    { icon: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png", href: "https://facebook.com/storix" },
    { icon: "https://cdn-icons-png.flaticon.com/128/3670/3670151.png", href: "https://twitter.com/storix" },
    { icon: "https://cdn-icons-png.flaticon.com/128/145/145807.png", href: "https://linkedin.com/company/storix" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            {/* Logo and Social Media Section */}
            <div className="lg:col-span-4">
              <Logo variant="dark" />
              <div className="flex flex-col mt-6">
                <h3 className="text-base font-semibold mb-4 text-gray-200">
                  Connect with Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500/20 transition-all duration-300"
                    >
                      <Image
                        src={social.icon}
                        alt="Social media icon"
                        width={20}
                        height={20}
                        className="opacity-75 hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-4">
              <h3 className="text-base font-semibold mb-4 text-gray-200">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 transition-opacity group-hover:opacity-100"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-4">
              <h3 className="text-base font-semibold mb-4 text-gray-200">
                Contact Information
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-400 text-sm flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  </span>
                  Phone: {contactInfo.phone}
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  </span>
                  Email: {contactInfo.email}
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  </span>
                  Address: {contactInfo.address}
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()}{" "}
              <Link
                href="/"
                className="hover:text-blue-400 transition-colors"
              >
                Storix
              </Link>{" "}
              |
              <Link
                href="/privacy"
                className="hover:text-blue-400 transition-colors ml-2"
              >
                Privacy Policy
              </Link>{" "}
              |
              <Link
                href="/terms"
                className="hover:text-blue-400 transition-colors ml-2"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}