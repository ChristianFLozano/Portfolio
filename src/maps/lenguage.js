import icon_cpp from '../assets/cpp_icon.svg';
import icon_python from '../assets/icons8-python.svg';
import icon_js from '../assets/js_icon.svg';
import icon_postgresql from '../assets/postgresql.svg';

const languages = [
    {
        id: 1,
        name: 'C++',
        image: icon_cpp,
        frameworks: 'N/A',
        libraries: 'N/A',
        description: 'C++ is one of my favorite languages because with it I developed a strong foundation in logical programming and dynamic memory management.'
    },
    {
        id: 2,
        name:'Python',
        image: icon_python,
        frameworks: 'N/A',
        libraries: 'Tkinter, PyQt (PySide2)',
        description: "Python is the language I'm currently learning, and I consider it one of the easiest languages to learn, making it great for beginners."
    },
    {
        id: 3,
        name:'JavaScript',
        image: icon_js,
        frameworks: 'Express.js, React native',
        libraries: 'React.js, React Router, Motion, Alert.js, Chart.js, JsPDF, Supabase, JWT.',
        description: 'JavaScript is the language I use for web development, and it is the one I use the most at the moment for building interactive and dynamic applications.'
    },
    {
        id: 4,
        name:'PostgreSQL',
        image: icon_postgresql,
        frameworks: 'N/A',
        libraries: 'N/A',
        description: 'PostgreSQL is the relational database management system I have used in my school projects, as well as in tools like Supabase that use it.'
    }
];

export default languages;
