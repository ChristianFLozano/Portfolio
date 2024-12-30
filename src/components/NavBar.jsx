import React from "react";
import { motion } from "motion/react"
import { useState } from "react";
export default function NavBar() {

    const [isClicked, setIsClicked] = useState('');

    const scrollFunction = (e, target) => {
        e.preventDefault();
        console.log(target);
        setIsClicked(target);

        const element = document.getElementById(target);
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }else {
            console.error(`No se encontró el elemento con id: ${target}`);
        }
    }

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
                    onClick={(e)=>scrollFunction(e, 'about-me')}
                    href="#about-me">About me</a>
                </motion.li>
                <motion.li
                    whileHover={{scale:1.1}}
                    whileTap={{scale:.8}}>
                    <a
                    className={isClicked === 'projects' ? 'text-gray-300 decoration-white underline underline-offset-2 font-mono w-max h-max' : 'text-white font-mono w-max h-max'}
                    onClick={(e)=>scrollFunction(e, 'projects')}
                    href="#projects">Projects</a>
                </motion.li>
            </ul>
        </nav>

        </>
}