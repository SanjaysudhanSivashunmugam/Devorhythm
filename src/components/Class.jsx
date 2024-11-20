import Classes from "../assets/Classes.svg"
import{ Code, ChartColumnBig, PencilRuler, BrainCircuit } from "lucide-react"

function Class() {
    return(
        <div className="container mx-auto lg:px-24 px-10 lg:flex lg:flex-row mt-6 min-h-[550px]" id="class">
            <div className="lg:w-2/3 w-full">
                <h1 className="font-semibold lg:font-bold lg:text-4xl text-xl mb-6">🔴 Live Classes + Placement Guidance</h1>
                <div className="lg:w-1/3 w-full mt-16  lg:hidden"><img src={Classes} alt="" /></div>
                <div className="flex flex-wrap justify-evenly items-">
                    <div className="border shadow-xl w-full lg:w-[40%] px-4 py-4 rounded-xl mb-10">
                        <Code />
                        <h2 className="font-semibold text-2xl mt-2 mb-4">Full Stack Development</h2>
                        <p className="mb-6">Learn Javascript, HTML, CSS & more</p>
                        <a href="" className="font-medium text-green-500">Know More ＞</a>
                    </div>
                    <div className="border shadow-xl w-full lg:w-[40%]  px-4 py-4 rounded-xl mb-10">
                        <ChartColumnBig />
                        <h2 className="font-semibold text-2xl mt-2 mb-4">Data Science</h2>
                        <p className="mb-6">Learn Javascript, HTML, CSS & more</p>
                        <a href="" className="font-medium text-green-500">Know More ＞</a>
                    </div>
                    <div className="border shadow-xl w-full lg:w-[40%]  px-4 py-4 rounded-xl mb-10">
                        <PencilRuler />
                        <h2 className="font-semibold text-2xl mt-2 mb-4">UI UX Design</h2>
                        <p className="mb-6">Learn Javascript, HTML, CSS & more</p>
                        <a href="" className="font-medium text-green-500">Know More ＞</a>
                    </div>
                    <div className="border shadow-xl w-full lg:w-[40%]  px-4 py-4 rounded-xl mb-10">
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