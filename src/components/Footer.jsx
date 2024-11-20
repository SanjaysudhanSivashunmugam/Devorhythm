

function Footer() {
    return (
        <div className="container mx-auto lg:px-24 px-10 mt-10 ">
        <div className="lg:flex mb-5 pt-10 border-t">
            <div className="w-full lg:w-2/3 text-white">
                <a href="" className="mb-12">
                    <h1 className="text-3xl font-bold ">Devo<span className="text-black bg-white">rhythm</span></h1>
                    <p>SkillUp LevelUp</p>
                </a>
                <p className="my-4">
                    DevoRhythm is an innovative edtech platform committed to empowering learners with cutting-edge skills in technology, coding, and personal development.
                </p>
                <p className="mb-12">

                    Founded in 2024, DevoRhythm bridges the gap between learners and modern education by offering dynamic, hands-on, and industry-aligned programs. With an emphasis on personalized learning, DevoRhythm caters to individuals from diverse backgrounds, ensuring accessible and impactful education for all.
                </p>

            </div>
            <div className="w-full lg:w-1/3 flex flex-col justify-evenly items-center">
            <button className="py-3 px-6 text-black bg-white w-[60%] rounded mb-4">Join Us</button>
            <button className="py-3 px-6 text-black bg-white w-[60%] rounded">Refer And Earn</button>
            </div>
           
        </div>
         <footer>
         <div className="flex lg:flex-row flex-col border-t py-5 justify-end lg:space-x-10 space-y-3 lg:space-y-0">
            <div className="space-x-10">
             <a href="" className="hover:underline">Terms and Conditions</a>
             <a href="" className="hover:underline">Privacy Policy</a>
             </div>
             <a href="">© Devorhythm Pvt. Ltd.</a>
         </div>
     </footer>
             </div>
    );
}

export default Footer;