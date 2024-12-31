import React from "react";
import lenguages from "../maps/lenguage";
import Lenguage from "./Lenguage";

export default function AboutMe(){

    return <>
    <section className="w-full h-auto bg-slate-900 p-4 rounded-2xl shadow-2xl shadow-black">
        <h2 className="text-white font-mono text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
            About Me
        </h2>
        <hr className="h-2"/>
        <p className="text-gray-300 font-mono text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-justify"> 
        I am Jhovany, I am a CUCEI informatic engineering student, I am 20 years old and I love learning new things about programming especially about 
        web development (front-end). I started in the computer world with C in college, but over time I've been learning more language and tools such as
        frameworks, libraries like the following:
        </p>
        
        <ul className="flex md:grid md:grid-cols-3 gap-4 flex-col mt-3 ">
            {lenguages.map(lenguage=>{
                return <Lenguage
                    key={lenguage.id}
                    nameis={lenguage.lenguage}
                    image={lenguage.image}
                    description={lenguage.description}
                    frameworks={lenguage.frameworks}
                    libraries={lenguage.libraries}
                />
            })}
        </ul>
            
    </section>
    </>

}