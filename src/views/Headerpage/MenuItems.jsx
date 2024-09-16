import { FaHouse } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

export const MenuItems = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links",
        icon: <FaHouse />
    },
    {
        title: "About",
        url: "/about",
        cName: "nav-links",
        icon: <BsInfoCircleFill />
    },
    {
        title: "Service",
        url: "/service",
        cName: "nav-links",
        icon: <MdHomeRepairService />
    },
    {
        title: "Contact",
        url: "/contact",
        cName: "nav-links",
        icon: <IoMdContact />
    },
    {
        title: "Sign Up",
        url: "/",
        cName: "nav-link-mob"
    }
]