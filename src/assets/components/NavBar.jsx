import React, { useState } from 'react'
import linkedin from '../images/iconmonstr-linkedin-3.svg'
import github from '../images/iconmonstr-github-3.svg'
import whats from '../images/whatsapp-svgrepo-com.svg'
import useTheme from './Theme'
import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'


const NavBar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className='flex justify-center items-center py-5 gap-5 px-5 bg-Branco dark:bg-CinzaEscuro lg:px-20'>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/pedro-paulo-sodr%C3%A9-junior-48599422/'><img className='dark:invert cursor-pointer' src={linkedin} alt="linkedinbadge" /></a>
            <a target='_blank' rel='noreferrer' href='https://github.com/Kyodenx/'><img className='dark:invert cursor-pointer' src={github} alt="githubbadge" /></a>
            <a target='_blank' rel='noreferrer' href='https://web.whatsapp.com/send?phone=5522981175445'><img className='dark:invert cursor-pointer w-6' src={whats} alt="whatsapp" /></a>
            <div className='flex ml-auto gap-2 items-center'>
                <img className='invert dark:invert-0 w-6' src={sun} alt="sunsvg" />
                <div onClick={toggleTheme} className={`bg-CinzaClaro border dark:bg-Branco h-5 w-10 rounded-full ml-auto flex ${darkMode ? 'dark' : ''}`}>
                    <span onClick={toggleDarkMode} className={`border border-CinzaClaro dark:border-CinzaEscuro  w-5 h-5 cursor-pointer rounded-full self-center block transition duration-300 ${theme === 'dark' ? 'translate-x-[18px] bg-CinzaClaro' : 'bg-CinzaEscuro'}`}></span>
                </div>
                <img className='invert dark:invert-0 w-6' src={moon} alt="moonsvg" />
            </div>
        </div>
    )
}

export default NavBar