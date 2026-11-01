import { CareerCard } from "./CareerCard"
import { TypescriptOriginal, ReactOriginal, CarbonOriginal, PythonOriginal } from "devicons-react"

const careers = [
    {
        id: 0,
        title: "Software Development",
        position: "Intern",
        time: "February 2026 - Present",
        company: "IBM",
        description: [
            {
                id: 0,
                text: "Developed backend features for the Deep Archive project using Python, updating a Command Line Interface (CLI) with the Click library and creating RESTful endpoints with FastAPI."
            },
            {
                id: 1,
                text: "Implemented and maintained a responsive web GUI using TypeScript and React, applying the IBM Carbon Design System to ensure consistent user experience."
            }
        ],
        languages: [
            TypescriptOriginal, ReactOriginal, PythonOriginal
        ]
    }
]

export function Career(){
    return(
        <section className="flex p-5 flex-row gap-5">
            {careers.map((career)=><CareerCard key={career.id} 
            title={career.title} 
            position={career.position} 
            time={career.time} 
            company={career.company} 
            description={career.description}
            languages={career.languages}
            />)}
        </section>
    )
}