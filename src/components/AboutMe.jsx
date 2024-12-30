import React from "react";
import python from "../assets/icons8-python.svg";
export default function AboutMe(){

    return <>
    <section className="w-full h-96 bg-slate-800 p-4 rounded-2xl shadow-2xl shadow-black">
        <h2 className="text-white font-mono text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
            About Me
        </h2>
        <hr className="h-2"/>
        <p className="text-gray-300 flex gap-1 font-mono text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-justify"> 
            I'm Jhovany CUCEI computer engineering student, I'm 20 years old and I love learn new things about programming in special about web development, between my 
            strongest 
        </p>
    </section>
    </>

}