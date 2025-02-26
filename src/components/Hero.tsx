import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section 
      className="relative flex flex-col items-center text-center sm:h-[700px] h-[600px] py-16"
      style={{
        background: 'radial-gradient(circle at center, rgba(128, 128, 128, 0.5) 0%, #14121f 40%)',
      }}
    >
      <div className="max-w-2xl px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Ride with passion <br /> Ride with us
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Experience the thrill of the open road with our premium selection of
          bikes.
        </p>
        <Button variant='custom'>
            Buy Now
        </Button>
      </div>

      <div className="absolute -bottom-0 flex justify-center w-full">
        <Image
          src="/images/Bitmap.png"
          alt="Motorcycle"
          width={700}
          height={700}
          className="drop-shadow-2xl w-full max-w-[700px]"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '700px',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;