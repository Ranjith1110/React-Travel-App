import { FaHouse } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

export const MenuItems = [
    {
        title: "Home",
        href: "#",
        cName: "nav-links",
        icon: <FaHouse />
    },
    {
        title: "About",
        href: "#",
        cName: "nav-links",
        icon: <BsInfoCircleFill />
    },
    {
        title: "Service",
        href: "#",
        cName: "nav-links",
        icon: <MdHomeRepairService />
    },
    {
        title: "Contact",
        href: "#",
        cName: "nav-links",
        icon: <IoMdContact />
    },
    {
        title: "Sign Up",
        href: "#",
        cName: "nav-link-mob"
    }
]