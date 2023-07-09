
import React, { useState, useRef, useEffect } from 'react';
import arrowFoward from '../images/arrow_forward_ios_FILL0_wght400_GRAD200_opsz48.svg';
import arrowBackward from '../images/arrow_back_ios_FILL0_wght400_GRAD200_opsz48.svg';
import dst from '../certificados/Certificado_do_Curso_DST_-_PEDRO_PAULO_SODRE_JUNIOR_page-0001.jpg'
import windowsServer from '../certificados/Certificate_windows_server_2012_page-0001.jpg'
import itil from '../certificados/Itil_page-0001.jpg'
import rpa from '../certificados/RPA.jpg'
import uc from '../certificados/UC-e31a60c7-0787-4e4e-8b42-071073ea7cc4.png'
import conhecendo from '../certificados/conhecendo_os_servicos_page-0001.jpg'



const Certificados = () => {
    const certificateImages = [dst, windowsServer, itil, rpa, uc, conhecendo];
    const totalSlides = certificateImages.length;

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideContainerRef = useRef(null);

    const handlePrevSlide = () => {
        const container = slideContainerRef.current;
        const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
        const scrollAmount = container.offsetWidth * newSlide;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };

    const handleNextSlide = () => {
        const container = slideContainerRef.current;
        const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
        const scrollAmount = container.offsetWidth * newSlide;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };

    useEffect(() => {
        const container = slideContainerRef.current;
        const scrollAmount = container.offsetWidth * currentSlide;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, [currentSlide]);

    return (
        <div className='flex flex-col justify-center items-center bg-Branco dark:bg-CinzaEscuro scr'>
            <section className='relative'>
                <p className='text-Dourado py-10 text-3xl font-extrabold text-center'>Certificados</p>
                <div className="flex snap-x snap-mandatory overflow-x-hidden px-5 gap-10 max-w-6xl" ref={slideContainerRef}>
                    {certificateImages.map((image, index) => (
                        <img className='rounded-lg' key={index} src={image} alt="Certificate" />
                    ))}
                </div>

                <div className='flex gap-10 justify-center py-20'>
                    <img className='cursor-pointer absolute left-5 top-[40%]' src={arrowBackward} alt='iconarrow' onClick={handlePrevSlide} />
                    <img className='cursor-pointer absolute right-5 top-[40%]' src={arrowFoward} alt='iconarrow' onClick={handleNextSlide} />
                </div>

                {/* <div className="w-2 h-2 flex justify-center items-center absolute bottom-0 bg-Dourado rounded-full">
                    {certificateImages.map((_, index) => (
                        <span
                            key={index}
                            className={`slide-indicator-dot bg-Dourado ${index === currentSlide ? 'current' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div> */}
            </section>
        </div>
    );
};

export default Certificados