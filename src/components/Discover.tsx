import Image from "next/image";
import { Button } from "./ui/button";

interface Bike {
    name: string;
    description: string;
    image: string;
}

const bikes: Bike[] = [
    {
        name: "StreetRider",
        description: "Embrace the perfect blend of style and performance. Conquer every journey with ease.",
        image: "/images/image-2.png",
    },
    {
        name: "ThunderBolt",
        description: "Unleash the power within. Dominate the streets with unmatched agility and design.",
        image: "/images/image-3.png",
    },
    {
        name: "TrailBlazer",
        description: "Elevate your riding experience. Precision engineering meets unparalleled comfort and control.",
        image: "/images/image-4.png",
    },
];

const Discover = () => {
    return (
        <section className="text-white py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
                <p className="text-sm text-purple-400 pb-2">Main Features</p>
                <h2 className="text-3xl md:text-4xl font-bold">Discover The Perfect Ride</h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                    Explore the key features that make our bikes stand out from the crowd.
                </p>
            </div>

            <div className="space-y-12 md:space-y-16">
                {bikes.map((bike, index) => (
                    <div
                        key={bike.name}
                        className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center md:justify-between gap-8 md:gap-12`}
                    >
                        <div className="flex-1 flex justify-center">
                            <Image
                                src={bike.image}
                                alt={bike.name}
                                width={500}
                                height={500}
                                className="drop-shadow-2xl w-full max-w-md md:max-w-lg"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-semibold">{bike.name}</h3>
                            <p className="text-gray-300 mt-2 text-sm md:text-base max-w-2xl mx-auto md:mx-0">
                                {bike.description}
                            </p>
                            <Button variant='custom' className="mt-4">
                                Buy Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Discover;