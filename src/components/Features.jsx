import Card from "./card";


function Features(){
    return(
        <div className="container mx-auto px-10 sm:mt-8 lg:mt-14 lg:px-24 min-h-[700px]">
            <div className="text-center">
                <span className="uppercase lg:text-2xl text-xl">Features</span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 lg:mt-14 tracking-wide">Discover and learn cutting-edge technologies online from the comfort of your home</h2>
            </div>
            <div className="flex flex-wrap mt-6 lg:mt-14 justify-between ">
            <Card  heading="Learn in-demand Skills" para=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ab aliquid. Possimus quaerat rerum ut distinctio?"/>
            <Card  heading="Learn in-demand Skills" para=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ab aliquid. Possimus quaerat rerum ut distinctio?"/>
            <Card  heading="Learn in-demand Skills" para=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ab aliquid. Possimus quaerat rerum ut distinctio?"/>
            <Card  heading="Learn in-demand Skills" para=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ab aliquid. Possimus quaerat rerum ut distinctio?"/>
            <Card  heading="Learn in-demand Skills" para=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ab aliquid. Possimus quaerat rerum ut distinctio?"/>
            <Card  heading="Learn in-demand Skills" para=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, ab aliquid. Possimus quaerat rerum ut distinctio?"/>
            </div>
            
           
        </div>
    );
}

export default Features;