import Card from "./card";


function Features(){
    return(
        <div className="container mx-auto pt-8 lg:px-24 min-h-[700px] bg-[#f8f8f8] text-black" id="fea">
            <div className="text-center">
                <span className="uppercase lg:text-2xl text-xl">Features</span>
                <h2 className="text-xl  lg:text-6xl mt-6 tracking-wide px-5">Discover and learn cutting-edge technologies online from the comfort of your home</h2>
            </div>
            <div className="flex flex-wrap mt-6 lg:mt-14 justify-center lg:justify-between px-0">
            <Card i="1"  heading="Personalized Learning Paths" para="Provide tailored course recommendations and content based on the user’s learning style, pace, and goals, ensuring a customized educational journey."/>
            <Card i="2"  heading="Gamification" para="Incorporate elements like badges, leaderboards, and rewards to boost engagement and motivation among learners while making learning fun and interactive."/>
            <Card i="3"  heading="Live Classes and Webinars" para="Offer real-time interaction with educators through live sessions, enabling students to ask questions, engage in discussions, and clarify doubts instantly."/>
            <Card i="4"  heading="Interactive Assessments" para="Include quizzes, assignments, and simulations with instant feedback to reinforce learning and track progress effectively."/>
            <Card i="5"  heading="AI-Powered Analytics" para="Use AI to analyze student performance, identify strengths and weaknesses, and provide actionable insights to improve learning outcomes."/>
            <Card i="6"  heading="Multi-Language Support" para="Enable users to access courses in their preferred language, breaking barriers for non-native speakers and fostering inclusivity."/>
            </div>
            
           
        </div>
    );
}

export default Features;