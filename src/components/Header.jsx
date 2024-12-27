import React from "react";
import personalPhoto from "../assets/personalPhoto.webp";
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "motion/react"

export default function Header() {
    return <>
        <header className="w-full h-auto sm:h-64 bg-gradient-to-t to-55% from-slate-950 to-slate-800 p-5 grid md:grid-cols-[1fr_3fr_.5fr] grid-cols-[.5fr_1fr] gap-3 ">
            <div className="flex justify-center items-center row-span-2 md:row-span-1">
                <motion.img  initial={{ opacity: 0, x: -50}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5}} 
                        whileHover={{scale:1.1, opacity: 0.5}}
                        src={personalPhoto} alt="personal photo" 
                className="w-24 sm:w-44 md:w-56  rounded-full text-white cursor-pointer row-span-2"/>
            </div>
            <div className="flex justify-center flex-col">
                <motion.h1 initial={{opacity:0, y: -50}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:1.5}}
                className="text-white font-mono font-black text-2xl sm:text-5xl">Portfolio</motion.h1> 
                <motion.h2 initial={{ opacity: 0, x: -50}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }} 
                className="text-white font-mono text-xl sm:text-xl">Christian Jhovany Flores Lozano</motion.h2>
            </div>
            <div className="flex justify-first items-end">
                <InstagramIcon className="text-white" sx={{fontSize:{sm:40}}}/>
            </div>
        </header>
    </>
}