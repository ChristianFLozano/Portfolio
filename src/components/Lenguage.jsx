import React from "react";
import { motion } from "motion/react"

export default function Lenguage(props){

    return <>
        <motion.div className="h-auto w-auto bg-zinc-950 text-white p-2 grid grid-cols-[.8fr_4fr] shadow-2xl shadow-gray-800 rounded-xl "
            whileHover={{scale:1.04}}
        >
            <img className="w-8/12" src={props.image} alt="cpp icon" />
            <div className="border-gray-400 border-2 p-1 border-dashed rounded-lg text-xl">
                <div className="w-full h-6 bg-white grid grid-cols-[1fr_1fr] sm:grid-cols-[.5fr_1fr] grid-rows-1 font-mono text-black text-[8px] md:text-[10px] text-center items-center">
                    <div>
                        <p>GNU Nano 7.2</p>
                    </div>
                    <div>
                        <p>{props.nameis}</p>
                    </div>
                    
                </div>
                <p className="text-gray-300 font-mono text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-justify">
                    {props.description}
                </p>
                <hr />
                <p className="text-gray-300 font-mono text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-justify">
                    Frameworks: {props.frameworks} <br />
                    Libraries: {props.libraries}
                </p>
                <motion.div 
                whileInView={{opacity:[1, 0, 1]}}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                }}
                className="bg-white w-2 h-4"></motion.div>
            </div>
        </motion.div>
    </>
}
