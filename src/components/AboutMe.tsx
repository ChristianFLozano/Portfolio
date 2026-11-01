import { Age } from "../utils/Age"

export function AboutMe(){
    return(
        <section className="p-5 text-justify">
            <p>
                Hi! I am Jhovany {Age()} years old from México. I'm currently pursuing a degree in informatic engineering.
                <br />
                Ever since I was a kid, I've been fascinated by the world of technology. Exploring new possibilities, discovering alternatives of doing,
                and continuosly learning have always motivated me to keep moving forward. 
                I consider myself someone who can always see the positive side of things and genuinely appreciates feedback, different perspectives, and insights that help me grow
            </p>
        </section>
    )
}