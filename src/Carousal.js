import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './leftarrow.png';
import img2 from './rightarrow.png';
import React, { useRef } from "react";
import Slider from "react-slick";
import './index'
const Carousal = () => {
    const slides = useRef();
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>

            {/* <button type="button" className="btnprev" onClick={() => { slides.current.slickPrev() }} > <img src={img1} alt={"logo"} style={{ width: 20, height: 20 }} /></button> */}
            <Slider  {...settings} ref={slides}>
                <div>
                    <img src="https://picsum.photos/150/150" />
                </div>
                <div >
                    <img src="https://picsum.photos/150/150" />
                </div>
                <div>
                    <img src="https://picsum.photos/150/150" />
                </div>
                <div >
                    <img src="https://picsum.photos/150/150" />
                </div>
                <div >
                    <img src="https://picsum.photos/150/150" />
                </div>
                <div >
                    <img src="https://picsum.photos/150/150" />
                </div>

            </Slider>
            {/* <button type="button" className="btnnext" onClick={() => { slides.current.slickNext() }} ><img src={img2} alt={"logo"} style={{ width: 20, height: 20 }} /></button> */}


        </>
    );
}

export default Carousal;