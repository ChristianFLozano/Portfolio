import profilePic from "../assets/profilePic.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
    return <header className="flex gap-3 w-full h-1/4 mt-7 ">
        <img src={profilePic} alt="Profile pic" className="object-cover object-center rounded-full h-40 w-40"/>

        <div className="gap-2 md:gap-3 flex flex-col">
            <h1 className="font-bold text-2xl md:text-5xl" >Christian Jhovany</h1>
            <h2 className="font-semibold text-xl md:text-4xl">Flores Lozano</h2>
            <div className="flex gap-2">
                <button 
                    onClick={()=> window.open("https://github.com/ChristianFLozano", "_blank")}
                    className="hover:cursor-pointer hover:opacity-70"
                >
                    <GitHubIcon sx={{fontSize: { xs: 28, md: 35 }}}/>
                </button>
                
                <button 
                    onClick={()=> window.open("https://www.instagram.com/eljhovafl", "_blank")}
                    className="hover:cursor-pointer hover:opacity-70"
                >
                    <InstagramIcon sx={{fontSize: { xs: 28, md: 35 }}}/>
                </button>
                
                <button 
                    onClick={()=> window.open("https://www.linkedin.com/in/christian-jhovany-flores-lozano/", "_blank")}
                    className="hover:cursor-pointer hover:opacity-70"
                >
                    <LinkedInIcon sx={{fontSize: { xs: 28, md: 35 }}}/>
                </button>

                <button 
                    onClick={()=> window.open("https://www.youtube.com/@ElJhovaFL", "_blank")}
                    className="hover:cursor-pointer hover:opacity-70"
                >
                    <YouTubeIcon sx={{fontSize: { xs: 28, md: 35 }}} />
                </button>
            </div>
        </div>
    </header>
}