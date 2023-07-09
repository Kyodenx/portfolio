import React from 'react'
import mapa from '../images/portifoli.png'
import arrowUpWard from '../images/left-upward-arrow.svg'
import arrowDownWard from '../images/left-downward-arrow.svg'
import profilepic from '../images/pefil.jpg'

const Hero = () => {
    return (
        <div className="bg-Branco dark:bg-CinzaEscuro flex flex-col items-center relative">
            <img className='hidden lg:block absolute -right-96 top-[23%]' src={arrowUpWard} alt="arrowupsvg" />
            <img className='hidden lg:block absolute -left-96 -scale-x-100 top-[18%]' src={arrowDownWard} alt="arrowdownwardsvg" />
            <h1 className="font-extrabold text-5xl py-20 px-5 text-Dourado">Olá, sou Pedro Sodré. Programador</h1>
            <img className='rounded-full border-2 border-Dourado' src={profilepic} alt="fotoperfil" />
            <p className='text-Dourado text-center font-bold py-5 text-3xl'>Sobre mim</p>
            <p className='px-5 text-Dourado text-center lg:px-96'>Sou um programador com experiência em Power Apps, Power Automate, Java e Automate Anywhere. Busco constantemente aprimorar minhas habilidades como futuro engenheiro de software. Tenho flexibilidade e adaptabilidade às mudanças, seguindo os princípios ágeis do Scrum. Estou entusiasmado com o futuro e pronto para contribuir para projetos inovadores.</p>
            <div className=''>
                <img src={mapa} alt="mapamundo" />
            </div>
        </div>
    )
}

export default Hero