import video_1 from "../assets/video_1.mp4";
import video_2 from "../assets/video_2.mp4";
import image from "../assets/hero-ban.jpg";

function Hero() {
    const styles ={
        background:{
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover', 
        },
    };
    return (
        <div className="container mx-auto px-10 lg:px-24 bg1" style={styles.background} id="hero">
            <div className="flex flex-col pt-20 items-center px-10 pb-10">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-semibold">
                    A Virtual Classroom for the GenZ
                </h1>
                <p className="mt-10 lg:text-lg text-center max-w-4xl">Transform your learning in a digital-first world with our immersive, collaborative platform. Empowering students through interactive tools and personalized paths, we’re redefining classrooms for the future.</p>
                <div className="flex justify-center gap-4 mt-6 lg:mt-10">
                <button className="py-2 px-3 border rounded-md space-x-6 text-black bg-white">Start for free</button>
                <button className="py-2 px-3 space-x-6 bg-[#1c65ff] text-white rounded-lg">Sign up ＞</button>
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