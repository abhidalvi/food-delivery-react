import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageSliderConfig } from "./Util";
import './img.css'
import slider1 from '../../../images/slider1.jpg'
import slider2 from '../../../images/slider2.jpg'
import slider3 from '../../../images/slider3.png'
import slider4 from '../../../images/slider4.png'
import slider5 from '../../../images/slider5.png'

const slideData = [
    {
        id: 0,
        textImage: 'New Fashion Apparel',
        src: slider1,
    },
    {
        id: 1,
        textImage: 'In The Wilderness',
        src: slider2,
    },
    {
        id: 2,
        textImage: 'For Your Current Mood',
        src: slider3,
    },
    {
        id: 3,
        textImage: 'Focus On The Writing',
        src: slider4,
    },
    {
        id: 4,
        textImage: 'random',
        src: slider5,
    }
]
const ImgSlider = () => {
    return (
        <article>
            <Slider className="imageSlider mt-3 ml-10" {...imageSliderConfig}>
                {slideData.map((image) => (
                    <div className="slider__container" key={image.id}>
                        {/* <img className="slider__textImage" src={image.textImage} /> */}
                        <div className="slider__imgContainer">
                            <img className="slider__img" src={image.src} alt="404 error" />
                        </div>
                    </div>
                ))}
            </Slider>
        </article>

    );
};

export default ImgSlider;