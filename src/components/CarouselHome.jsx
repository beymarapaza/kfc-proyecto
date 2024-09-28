import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const CarouselHome = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
    };

    return (
        <div>
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
            >
                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/43ff99d1-d610-5c65-6833-810ba016d748.jpeg?a=46dc232c-d79f-9135-30ee-6bab6d24d372" precio="$129" nombre="WOW COMBO" /> </div>

                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/f8147557-c50c-117e-b061-a21512ea021a.jpeg?a=a02ef9d5-6973-b7ad-33ee-68d1a0f262b8" precio="$35" nombre="GALLETAS CHOCO CHIP" /> </div>

                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/1535e6c7-70a8-a9ee-820e-92365c280a3c.jpeg?a=32c66284-e4b6-6c1a-d75c-2610568ef5ca" precio="$269" nombre="WOW BUCKET" /> </div>
                
                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/4d59f8ef-880f-2d4b-eb44-15ddaaf0ee49.jpeg?a=c7d121d4-7149-061a-d208-e6c0bb7d4403" precio="$325" nombre="MEGA WOW BUCKET" /> </div>


            </Carousel>
        </div>
    );
}

export default CarouselHome;
