import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,



    };
    return (
        <div className="slider-container" style={{ width: '100%', height: '250px', overflow: 'hidden', position: 'relative' }}>
            <Slider {...settings}>
                <div>
                    <img src="https://cdn.tictuk.com/7646423017805410/banner_mobile_384fb5f5-52db-ec8c-070c-ada95bccef0d.jpeg" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'bottom',
                        top: '35%',
                        transform: 'translateY(-35%)',


                    }} />
                </div>
                <div>
                    <img src="https://cdn.tictuk.com/7646423017805410/banner_desktop_f34e2541-9643-01d8-873a-28fc99f0c4e1.jpeg" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'bottom',
                        top: '15%',
                        transform: 'translateY(-15%)',


                    }} />
                </div>
                <div>
                    <img src="https://cdn.tictuk.com/7646423017805410/banner_desktop_b9c30231-17c7-0320-4671-abde57bed0be.jpeg" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'bottom',
                        top: '15%',
                        transform: 'translateY(-15%)',


                    }} />
                </div>
                <div>
                    <img src="https://cdn.tictuk.com/7646423017805410/banner_desktop_971824d0-25c4-d3d2-ff79-79a196da8a2f.jpeg" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'bottom',
                        top: '15%',
                        transform: 'translateY(-15%)',


                    }} />
                </div>
                <div>
                    <img src="https://cdn.tictuk.com/7646423017805410/banner_desktop_947940bc-907a-c26f-6463-e0460d2142a0.jpeg" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'bottom',
                        top: '15%',
                        transform: 'translateY(-15%)',


                    }} />
                </div>

            </Slider>
        </div>
    );

}

export default Carousel