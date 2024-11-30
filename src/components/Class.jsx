import Classes from "../assets/illu.svg"
import{ Code, ChartColumnBig, PencilRuler, BrainCircuit } from "lucide-react"

function Class() {
    return(
        <div className="container mx-auto lg:px-24 px-5 lg:flex lg:flex-row pt-6 min-h-[550px] text-black bg-[#e7f3ff]" id="class">
            <div className="lg:w-2/3 w-full">
                <h1 className="font-semibold lg:font-bold lg:text-4xl text-xl my-6">🔴 Live Classes + Placement Guidance</h1>
                <div className="lg:w-1/3 w-full my-12  lg:hidden"><img src={Classes} alt="" /></div>
                <div className="flex flex-wrap justify-evenly items-">
                    <div className="text-black border shadow-xl w-full lg:w-[40%] px-4 py-4 rounded-xl mb-10 bg-white ">
                        <Code />
                        <h2 className="font-semibold text-2xl mt-2 mb-4">Full Stack Development</h2>
                        <p className="mb-6">Learn Javascript, HTML, CSS & more</p>
                        <a href="" className="font-medium text-green-500">Know More ＞</a>
                    </div>
                    <div className="border shadow-xl w-full lg:w-[40%]  px-4 py-4 rounded-xl mb-10 bg-white">
                        <ChartColumnBig />
                        <h2 className="font-semibold text-2xl mt-2 mb-4">Data Science</h2>
                        <p className="mb-6">Learn Javascript, HTML, CSS & more</p>
                        <a href="" className="font-medium text-green-500">Know More ＞</a>
                    </div>
                    <div className="border shadow-xl w-full lg:w-[40%]  px-4 py-4 rounded-xl mb-10 bg-white">
                        <PencilRuler />
                        <h2 className="font-semibold text-2xl mt-2 mb-4">UI UX Design</h2>
                        <p className="mb-6">Learn Javascript, HTML, CSS & more</p>
                        <a href="" className="font-medium text-green-500">Know More ＞</a>
                    </div>
                    <div className="border shadow-xl w-full lg:w-[40%]  px-4 py-4 rounded-xl mb-10 bg-white">
                        <BrainCircuit />
                        <h2 className="font-semibold text-2xl mt-2 mb-4">AI & ML</h2>
                        <p className="mb-6">Learn Javascript, HTML, CSS & more</p>
                        <a href="" className="font-medium text-green-500">Know More ＞</a>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 w-full lg:flex hidden"><img src={Classes} alt="" /></div>
        </div>
    );
}

export default Class;