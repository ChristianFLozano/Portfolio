import { Age } from "../utils/Age"

export function AboutMe(){
    return(
        <section className="p-5 text-justify">
            <p>
                Hi! I am Jhovany {Age()} years old from México. Currently pursuing an informatic engineering major.
                <br />
                Since I was a kid I've been amazed by tech world, exploring new alternatives and ways to keep learning have made me keep the spirit to go forward. 
                I consider myself as some who can always see the good and appreciate any feedback and insights 
            </p>
        </section>
    )
}