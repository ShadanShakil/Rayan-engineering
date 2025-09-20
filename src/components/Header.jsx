import logo from "../assets/logo.png";
import Button1 from "./Button";
// import headerbg from "../assets/headerbg.jpg";
import { AlignJustify } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { Link, NavLink, useNavigate } from "react-router";

function Header() {
  const navigate  = useNavigate();
  return (
    <div className="h-25 w-full flex items-center justify-between bg-black px-4 md:px-8">
      {/* Logo Section */}
      <div>
        <img src={logo} className="object-cover h-15 md:h-20" alt="logo" style={{filter: "invert(1)"}}/>
      </div>

      {/* Content Section */}
      <div className="hidden md:flex gap-4 items-center">
        <Button1 text="Home" onClick={() => navigate("/")}/>
        <Button1 text="Services" onClick={() => navigate("/services")}/>
        <Button1 text="Our Projects" onClick={() => navigate("/projects")}/>
        <Button1 text="About Us" onClick={() => navigate("/about")}/>
        <Button1 text="Contact Us" onClick={() => navigate("/contact")}/>

      </div>

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden flex items-center">
        <Dropdown className="bg-black text-white">
          <DropdownTrigger>
            <Button className="text-white" variant="bordered">
              <AlignJustify />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="home" textValue="Home"><NavLink to={"/"}>Home</NavLink></DropdownItem>
              <DropdownItem key="services" textValue="Services"><NavLink to={"/services"}>Services</NavLink></DropdownItem>
              <DropdownItem key="projects" textValue="Projects"><NavLink to={"/projects"}>Our Projects</NavLink></DropdownItem>
              <DropdownItem key="about" textValue="About Us"><NavLink to={"/about"}>About Us</NavLink></DropdownItem>
              <DropdownItem key="contact" textValue="Conatct Us"><NavLink to={"/contact"}>Contact Us</NavLink></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
