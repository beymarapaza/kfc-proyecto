import Brand from "./Brand"
import Carousel from "./Carousel"
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";


const Krunch = () => {
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
                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/6b4a38a0-d015-8242-9517-3b0f671519e6.jpeg?a=a08ad14d-3153-3a8f-942b-380e95e8d532" precio="$375" nombre="ESTADIO CHICKEN BOX" /> </div>

                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/1581938a-3c1f-8c75-27e0-c56cc4aa48ba.jpeg?a=bfb1f54c-8e38-f255-df35-0f11777e08f9" precio="$529" nombre="LA GRAN JUGADA PIEZAS" /> </div>

                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/591710cf-e31f-4aef-8082-25cb0d6381c2.jpeg?a=b99c9dac-a4f9-5a6b-f217-d110398ad0d6" precio="$529" nombre="LA GRAN JUGADA KE-TIRAS" /> </div>
                
                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/2a88face-a736-d5a8-4cb8-2696a17029a6.jpeg?a=fda7514f-a5a2-d66c-39af-381a4a4b802b" precio="$425" nombre="ESTADIO KFC" /> </div>

                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/3f600f16-7874-f1e5-2a41-ee114a0d8d70.jpeg?a=ca8fe2dd-43b2-820c-1398-3ed0b3d0a287" precio="$469" nombre="DOBLE NFL LOVERS" /> </div>

                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/31ca8938-19ff-a1ff-a8b8-9b149a65964b.jpeg?a=d54e1611-19a4-d603-88ca-1491c734b94a" precio="$425" nombre="DOBLE AFICIONADO PIEZAS" /> </div>

                <div> <Card imagen="https://cdn.tictuk.com/abb50587-39c2-a4e0-3234-46b323dfb907/82c5a027-c65d-c427-e127-18ac0a3e0312.jpeg?a=58395064-7066-365e-94c3-0f0076d15b70" precio="$425" nombre="DOBLE AFICIONADO KE-TIRAS" /> </div>




            </Carousel2>
        </>
    )
}

export default Krunch