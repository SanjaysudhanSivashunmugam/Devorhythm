import { Menu, X } from "lucide-react";
import { useState } from "react";
import {Link} from "react-scroll";

function Navbar() {

    const [mobileDrawer, setMobileDrawer] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawer(!mobileDrawer);
    }



    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
            <div className="container mx-auto relative text-sm lg:px-24 px-10">
                <div className="flex justify-between items-center">
                    <div className="flex-item-center flex-shrink-0">
                        <h1 className="text-3xl font-bold">Devo<span className="text-black bg-white">rhythm</span></h1>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        <li className="cursor-pointer"><Link to="hero" smooth={true} offset={-120} duration={500}>Home</Link></li>
                        <li className="cursor-pointer"><Link to="fea" smooth={true} offset={-70} duration={500}>Features</Link></li>
                        <li className="cursor-pointer"><Link to="class" smooth={true} offset={-110} duration={500}>Classes</Link></li>
                        <li className="cursor-pointer"><Link to="test" smooth={true} offset={-70} duration={500}>Testimonials</Link></li>
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-12">
                        <button className="py-2 px-3 border rounded-md bg-[#243b55]">Sign up</button>
                        <button className="py-2 px-3 border rounded-md bg-white text-black">Create an Account</button>
                    </div>
                   <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawer ? <X /> : <Menu />}
                    </button>
                   </div> 
                </div>
                {mobileDrawer && (
                    <div className="right-0 z-20  w-full py-12 flex flex-col justify-center items-center lg:hidden backdrop-blur-lg">
                        <ul>
                       <li className="cursor-pointer py-2"><Link to="hero" smooth={true} offset={-120} duration={500}>Home</Link></li>
                        <li className="cursor-pointer py-2"><Link to="fea" smooth={true} offset={-70} duration={500}>Features</Link></li>
                        <li className="cursor-pointer py-2"><Link to="class" smooth={true} offset={-110} duration={500}>Classes</Link></li>
                        <li className="cursor-pointer py-2"><Link to="test" smooth={true} offset={-70} duration={500}>Testimonials</Link></li>
                        </ul>
                        <div className="flex space-x-6 py-6 flex-wrap">
                        <button className="py-2 px-3 border rounded-md bg-[#243b55]">Sign up</button>
                        <button className="py-2 px-3 border rounded-md text-black bg-white">Create an Account</button>
                        </div>
                    </div>

                )}
            </div>
        </nav>
    );
}

export default Navbar;