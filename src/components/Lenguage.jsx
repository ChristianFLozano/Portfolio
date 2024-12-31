import React from "react";
import { motion } from "motion/react"

export default function Lenguage(props){

    return <>
        <motion.div className="h-auto w-auto bg-zinc-950 text-white p-2 grid grid-cols-[.8fr_4fr] rounded-xl "
            whileHover={{scale:1.04}}
        >
            <img className="w-8/12" src={props.image} alt="cpp icon" />
            <div className="border-gray-400 border-2 p-1 border-dashed rounded-lg text-xl">
                <p className="text-gray-300 font-mono text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-justify">
                    {props.description}
                </p>
                <hr />
                <p className="text-gray-300 font-mono text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-justify">
                    Frameworks: {props.frameworks} <br />
                    Libraries: {props.libraries}
                </p>
            </div>
        </motion.div>
    </>
}