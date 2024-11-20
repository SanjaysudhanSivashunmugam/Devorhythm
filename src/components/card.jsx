import { GraduationCap, Gamepad2, Radio, FlaskConical, BrainCircuit, Languages } from "lucide-react";
function Card(props) {

    return (
        <div className="px-0 lg:px-6 py-6 lg:py-10 w-full lg:w-1/3">
            <div className="flex space-x-6 mb-3">
                {
                    props.i === "1" ? (
                        <GraduationCap />
                    ) : props.i === "2" ? (
                        <Gamepad2 />
                    ) : props.i === "3" ? (
                        <Radio />
                    ) : props.i === "4" ? (
                        <FlaskConical />
                    ) : props.i === "5" ? (
                        <BrainCircuit />
                    ) : (
                        <Languages />
                    )
                }
                <h2 className="text-lg font-semibold">{props.heading}</h2>
            </div>
            <div className="ms-12">{props.para}</div>
        </div>
    );
}

export default Card;