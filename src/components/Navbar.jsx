import { Menu, X } from "lucide-react";
import { useState } from "react";

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
                        <a href=""><li>Home</li></a>
                        <a href=""><li>Workflow</li></a>
                        <a href=""><li>Pricing</li></a>
                        <a href=""><li>Testimonials</li></a>
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-12">
                        <button className="py-2 px-3 border rounded-md bg-[#28282c]">Sign up</button>
                        <button className="py-2 px-3 border rounded-md bg-white text-black">Create an Account</button>
                    </div>
                   <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawer ? <X /> : <Menu />}
                    </button>
                   </div> 
                </div>
                {mobileDrawer && (
                    <div className="right-0 z-20  w-full p-12 flex flex-col justify-center items-center lg:hidden backdrop-blur-lg">
                        <ul>
                        <a href="" className="py-4 text-lg"><li>Home</li></a>
                        <a href="" className="py-4 text-lg"><li>Workflow</li></a>
                        <a href="" className="py-4 text-lg"><li>Pricing</li></a>
                        <a href="" className="py-4 text-lg"><li>Testimonials</li></a>
                        </ul>
                        <div className="flex space-x-6 py-6">
                        <button className="py-2 px-3 border rounded-md bg-[#28282c]">Sign up</button>
                        <button className="py-2 px-3 border rounded-md text-black bg-white">Create an Account</button>
                        </div>
                    </div>

                )}
            </div>
        </nav>
    );
}

export default Navbar;