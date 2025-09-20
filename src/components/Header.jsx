import logo from "../assets/logo.png";
import Button1 from "./Button";
import { AlignJustify } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="h-25 w-full flex items-center justify-between bg-black px-4 md:px-8">
      {/* Logo Section */}
      <div
        className="cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          className="object-cover h-15 md:h-20"
          alt="logo"
          style={{ filter: "invert(1)" }}
        />
      </div>

      {/* Desktop Menu (with Button1) */}
      <div className="hidden md:flex gap-4 items-center">
        <Button1 text="Home" onClick={() => navigate("/")} />
        <Button1 text="Services" onClick={() => navigate("/services")} />
        <Button1 text="Our Projects" onClick={() => navigate("/projects")} />
        <Button1 text="About Us" onClick={() => navigate("/about")} />
        <Button1 text="Contact Us" onClick={() => navigate("/contact")} />
      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden flex items-center">
        <Dropdown className="bg-black text-white">
          <DropdownTrigger>
            <Button className="text-white" variant="bordered">
              <AlignJustify />
            </Button>
          </DropdownTrigger>

          {/* ✅ Mobile-friendly fix: use onAction for navigation */}
          <DropdownMenu
            aria-label="Navigation Menu"
            onAction={(key) => navigate(key)}
          >
            <DropdownItem key="/">Home</DropdownItem>
            <DropdownItem key="/services">Services</DropdownItem>
            <DropdownItem key="/projects">Our Projects</DropdownItem>
            <DropdownItem key="/about">About Us</DropdownItem>
            <DropdownItem key="/contact">Contact Us</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
