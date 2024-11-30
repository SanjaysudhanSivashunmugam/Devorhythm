import { Circle } from "lucide-react";
import dp from "../assets/dp.png"

function Testimonials(){
    return (
        <div className="container mx-auto lg:px-24 px-5 bg-[#f8f8f8] text-black pb-10" id="test">
            <h1 className="text-center text-3xl lg:text-6xl font-semibold mb-10 pt-10">What People are saying</h1>
            <div className=" flex flex-wrap w-full justify-between">
            
            <div className="border p-5 lg:w-[30%] w-full rounded-xl shadow-lg mb-10">
                <p className="mb-6">This platform revolutionized the way I learn! The interactive lessons and real-world projects helped me build skills quickly and efficiently. I feel more confident than ever in my abilities.</p>
                <div className="flex items-center ">
                <img src={dp} alt="" className="lg:w-[65px] lg:h-[65px] w-[60px] h-[60px] rounded-full"/>
                <div className="ms-4">
                    <h1 className="text-xl">Aarav S</h1>
                    <h2>Student</h2>
                </div>
                </div>
            </div>
            <div className="border p-5 lg:w-[30%] w-full rounded-xl shadow-lg mb-10">
                <p className="mb-6">As a teacher, I’ve found this platform invaluable. The tools and analytics provided help me understand my students’ needs and tailor my teaching methods to ensure their success.</p>
                <div className="flex items-center ">
                <img src={dp} alt="" className="lg:w-[65px] lg:h-[65px] w-[60px] h-[60px] rounded-full"/>
                <div className="ms-4">
                    <h1 className="text-xl">Meera R</h1>
                    <h2>Educator</h2>
                </div>
                </div>
            </div>
            <div className="border p-5 lg:w-[30%] w-full rounded-xl shadow-lg mb-10">
                <p className="mb-6">I’ve tried multiple learning platforms, but this one stands out. The combination of expert mentors, well-structured courses, and hands-on practice keeps me motivated and engaged every day.</p>
                <div className="flex items-center ">
                <img src={dp} alt="" className="lg:w-[65px] lg:h-[65px] w-[60px] h-[60px] rounded-full"/>
                <div className="ms-4">
                    <h1 className="text-xl">Rohan P</h1>
                    <h2>Software Developer</h2>
                </div>
                </div>
            </div>
            <div className="border p-5 lg:w-[30%] w-full rounded-xl shadow-lg mb-10">
                <p className="mb-6">The AI-powered recommendations made it easy for me to identify gaps in my knowledge and work on them. The progress I’ve made in just a few months is incredible!</p>
                <div className="flex items-center ">
                <img src={dp} alt="" className="lg:w-[65px] lg:h-[65px] w-[60px] h-[60px] rounded-full"/>
                <div className="ms-4">
                    <h1 className="text-xl">Ananya M</h1>
                    <h2>College Student</h2>
                </div>
                </div>
            </div>
            <div className="border p-5 lg:w-[30%] w-full rounded-xl shadow-lg mb-10">
                <p className="mb-6">This platform has been a game-changer for our organization. The corporate training modules are tailored to our industry, ensuring our employees stay ahead in their fields.</p>
                <div className="flex items-center ">
                <img src={dp} alt="" className="lg:w-[65px] lg:h-[65px] w-[60px] h-[60px] rounded-full"/>
                <div className="ms-4">
                    <h1 className="text-xl">Kiran V</h1>
                    <h2>HR Manager</h2>
                </div>
                </div>
            </div>
            <div className="border p-5 lg:w-[30%] w-full rounded-xl shadow-lg mb-10">
                <p className="mb-6">I love how user-friendly this platform is. Whether I’m using it on my phone or computer, the experience is seamless. Plus, the community forums are a great place to connect and collaborate with others!</p>
                <div className="flex items-center ">
                <img src={dp} alt="" className="lg:w-[65px] lg:h-[65px] w-[60px] h-[60px] rounded-full"/>
                <div className="ms-4">
                    <h1 className="text-xl">Priya D</h1>
                    <h2>Lifelong Learner</h2>
                </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Testimonials;