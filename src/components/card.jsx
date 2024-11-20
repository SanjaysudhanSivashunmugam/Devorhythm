import { Codesandbox } from "lucide-react";
function Card(props) {
    return(
        <div className="px-6 py-6 lg:py-10 w-full lg:w-1/3">
            <div className="flex space-x-6 mb-3">
                <Codesandbox />
                <h2 className="text-lg font-semibold">{props.heading}</h2>
            </div>
            <div className="ms-12">{props.para}</div>
        </div>
    );
}

export default Card;