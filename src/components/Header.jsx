    import React from "react";
    import personalPhoto from "../assets/personalPhoto.webp";
    import InstagramIcon from '@mui/icons-material/Instagram';
    import GitHubIcon from '@mui/icons-material/GitHub';
    import YouTubeIcon from '@mui/icons-material/YouTube';
    import { motion } from "motion/react"

    export default function Header() {
        return <>
            <header className="w-full h-auto sm:h-64 bg-gradient-to-t to-55% from-slate-950 via-slate-900 to-slate-800 p-5 grid lg:grid-cols-[1fr_2fr_.5fr] grid-cols-[.5fr_1fr] grid-rows-[1fr_.2fr] gap-3 ">
                <figure className="flex justify-center items-center row-span-2 lg:row-span-1">
                    <motion.img  initial={{ opacity: 0, x: -50}}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5}} 
                            whileHover={{scale:1.1, opacity: 0.5}}
                            src={personalPhoto} alt="personal photo" 
                    className="w-24 sm:w-44 md:w-56  rounded-full text-white cursor-pointer row-span-2 "/>
                </figure>
                <div className="flex justify-center flex-col">
                    <motion.h1 initial={{opacity:0, y: -50}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:1.5}}
                    className="text-white font-mono font-black text-2xl sm:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl ">Portfolio</motion.h1> 
                    <motion.h2 initial={{ opacity: 0, x: -50}}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }} 
                    className="text-gray-300 font-mono text-xl sm:text-xl">Christian Jhovany Flores Lozano</motion.h2>
                </div>
                <motion.div 
                        initial={{opacity:0, y: -50}}
                        transition={{duration:1.5, delay: 0.3}}
                        animate={{opacity:1, y:0}}                  
                    className="flex lg:justify-end items-end gap-4">
                    <InstagramIcon className="text-white cursor-pointer hover:opacity-40" sx={{fontSize:{sm:45, md:35 ,lg:45, xl:45}}} onClick={()=>{window.open('https://www.instagram.com/eljhovafl','_blank')}} />
                    <GitHubIcon className="text-white cursor-pointer hover:opacity-40"  sx={{fontSize:{sm:45, md:35 ,lg:45, xl:45}}} onClick={()=>{window.open('https://github.com/ChristianFLozano','_blank')}} />
                    <YouTubeIcon className="text-white cursor-pointer hover:opacity-40" sx={{fontSize:{sm:45, md:35 ,lg:45, xl:45}}} onClick={()=>{window.open('https://www.youtube.com/@ElJhovaFL','_blank')}} />
                </motion.div>
            </header>
        </>
    }