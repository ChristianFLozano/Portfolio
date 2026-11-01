interface CareerCardProps{
    key: number;
    title: string;
    position: string;
    time: string;
    company: string;
    description: any[];
    languages: any[]
}

export function CareerCard({key, title, position, time, company, description, languages}: CareerCardProps){
    return (
        <div key={key} className="sm:w-1/2 w-full h-auto bg-gray-950 p-3">
            <h1 className="font-bold text-xl">{title} | {company} </h1>
            <h2 className="font-semibold text-lg">{position}</h2>
            <h3 className="font-semibold text-md">{time}</h3>
            <hr className="text-gray-700"/>
            <br />
            <ul>
                {description.map((desc) => <li>{desc.text}</li>)}
            </ul>
            <div className="flex flex-row gap-2 mt-2 justify-end">
                {languages.map((LanguageIcon, index)=>(
                    <LanguageIcon key={index} size={25}/>
                ))}
            </div>
           
        </div>
    )
}