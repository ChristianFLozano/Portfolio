import React from "react";
import { motion } from "motion/react"
import { useState } from "react";
export default function NavBar() {

    const [isClicked, setIsClicked] = useState('');
    return<>
        
        <nav className="bg-gradient-to-t from-black to-slate-950 h-auto p-4 sticky top-0 z-50 w-full">
            <ul className="flex justify-around ">
                <motion.li
                    whileHover={{scale:1.1}}
                    whileTap={{scale:.8}}>
                    <a 
                    className={
                        isClicked === 'about-me' ? 'text-gray-300 decoration-white underline underline-offset-2 font-mono w-max h-max' : 'text-white font-mono w-max h-max '
                    }
                    onClick={()=>setIsClicked('about-me')}
                    href="#about-me">About me</a>
                </motion.li>
                <motion.li
                    whileHover={{scale:1.1}}
                    whileTap={{scale:.8}}>
                    <a 
                    className={isClicked === 'projects' ? 'text-gray-300 decoration-white underline underline-offset-2 font-mono w-max h-max' : 'text-white font-mono w-max h-max'}
                    onClick={()=>setIsClicked('projects')}
                    href="#projects">Projects</a>
                </motion.li>
            </ul>
        </nav>

        </>
}