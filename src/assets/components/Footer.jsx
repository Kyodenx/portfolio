import React from 'react'
import linkedin from '../images/iconmonstr-linkedin-3.svg'
import github from '../images/iconmonstr-github-3.svg'
import whats from '../images/whatsapp-svgrepo-com.svg'

const Footer = () => {
    return (
        <div className='bg-Branco dark:bg-CinzaEscuro flex justify-center items-center gap-5 py-10'>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/pedro-paulo-sodr%C3%A9-junior-48599422/'><img className='dark:invert cursor-pointer' src={linkedin} alt="linkedinbadge" /></a>
            <a target='_blank' rel='noreferrer' href='https://github.com/Kyodenx/'><img className='dark:invert cursor-pointer' src={github} alt="githubbadge" /></a>
            <a target='_blank' rel='noreferrer' href='https://web.whatsapp.com/send?phone=5522981175445'><img className='dark:invert cursor-pointer w-6' src={whats} alt="whatsapp" /></a>
        </div>
    )
}

export default Footer