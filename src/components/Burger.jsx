import Brand from "./Brand"
import Carousel from "./Carousel"
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";


const Burger = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
    };

    return (
        <>
            <Brand />
            <Carousel />
            <Carousel2
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
            >
                <div> <Card imagen="https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/8343bcac-d3c6-91dd-ef41-ca408b5817d6.jpeg?a=7a29479e-cffe-cca3-e46e-75e8c1d1db65" precio="$109" nombre="BURGERMANIA 1" /> </div>

                <div> <Card imagen="https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/25ec2f9e-4aa8-565f-64bb-66b4344fa668.jpeg?a=8408da17-ab77-972a-32e0-b48cb29a2b7a" precio="$119" nombre="BURGERMANIA 2" /> </div>

                <div> <Card imagen="https://cdn.tictuk.com/090ea518-0179-bce6-ea53-4b55b81c379e/4b716e24-1150-4fae-e844-3cc497043ec0.jpeg?a=46e4b47a-c6a1-2e4d-2e28-e2ecc007e5a5" precio="$129" nombre="BURGERMANIA 3" /> </div>




            </Carousel2>
        </>
    )
}

export default Burger