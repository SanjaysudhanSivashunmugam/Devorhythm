import video_1 from "../assets/video_1.mp4";
import video_2 from "../assets/video_2.mp4";

function Hero() {
    return (
        <div className="container mx-auto px-10 lg:px-24 lg:mt-32 mt-20">
            <div className="flex flex-col mt-20 sm:mt-6 items-center ">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    A Virtual Classroom for the GenZ
                </h1>
                <p className="mt-10 lg:text-lg text-center max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatibus iusto autem. Reprehenderit libero aliquid unde expedita excepturi dolor asperiores debitis, doloribus minus doloremque delectus perferendis similique, et aut accusantium.</p>
                <div className="flex justify-center gap-4 mt-6 lg:mt-10">
                <button className="py-2 px-3 border rounded-md space-x-6 text-black bg-white">Start for free</button>
                <button className="py-2 px-3 space-x-6 hover:bg-[#243b55] rounded-lg">Sign up ＞</button>
                </div>
                <div className="lg:flex md:mt-7 lg:mt-10 lg:justify-center">
                    <video autoPlay loop muted src={video_1} className="lg:w-1/2 rounded-lg shadow-lg shadow-gray-500  my-6 lg:mx-6"></video>
                    <video autoPlay loop muted src={video_2} className="lg:w-1/2 rounded-lg shadow-lg shadow-gray-500 my-6 lg:mx-6"></video>
                </div>
            </div>
        </div>
    );
}

export default Hero;