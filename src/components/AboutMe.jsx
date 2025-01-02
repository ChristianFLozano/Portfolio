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
        I am Jhovany a CUCEI informatic engineering student, I am 20 years old and I love learning new things about programming especially about 
        web development (front-end). I started in the computer world with C in college, but over time I've been learning more language and tools such as
        frameworks, libraries like the following:
        </p>
        
        <ul className="flex md:grid lg:grid-cols-3 gap-4 flex-col mt-3 mb-3">
            {lenguages.map(lenguage=>{
                return <Lenguage
                    key={lenguage.id}
                    nameis={lenguage.name}
                    image={lenguage.image}
                    description={lenguage.description}
                    frameworks={lenguage.frameworks}
                    libraries={lenguage.libraries}
                />
            })}
        </ul>
        <p className="text-gray-300 font-mono text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-justify">
            Like person, I consider myself a good individual because I enjoy helping others whenever I can. 
            I value empathy, teamwork, and responsibility, which drive me in both my personal and professional life. 
            Outside of programming. I enjoy:
        </p>
        <ul className="text-gray-300 font-mono text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-justify mt-4 mb-4">
            <li>
            ⚽ Playing and watching soccer, specially I am fan of CD Guadalajara.
            </li>
            <li>
            🌎 Searching topics about the past of the world like dinosaurs also biomes and things about space.
            </li>
            <li>
            🎵 Listening music everyday in special regional mexican.
            </li>
            <li>
            🎮 Playin videogames such as Minecraft, Forntite and anothers with my friends.
            </li>
        </ul>
        <p className="text-gray-300 font-mono text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-justify">
            My goal is to grow both as a developer and as a person, always striving to make a positive impact on the world.
        </p>
        <h3 className="text-gray-300 font-mono text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl mt-4"> 
            "I BELIEVE THAT ALL IS POSSIBLE"
        </h3>

    </section>
    </>

}