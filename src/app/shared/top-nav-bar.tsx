import { navLinks } from "./nav-links";

export default function TopNavBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex space-x-6 text-2xl font-bold text-blue-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-700 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

