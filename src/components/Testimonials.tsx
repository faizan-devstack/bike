import Image from "next/image";

interface TestimonialProps {
  image: string;
  name: string;
  position: string;
  company: string;
  quote: string;
}

export default function Testimonial({ image, name, position, company, quote }: TestimonialProps) {
  return (
    <div className="text-center max-w-lg mx-auto py-16 md:px-0 px-5">
      <Image src={image} alt={name} width={60} height={60} className="rounded-full mx-auto" />
      <h3 className="mt-4 text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-400">{position}, {company}</p>
      <blockquote className="mt-4 text-lg italic font-medium">
        "{quote}"
      </blockquote>
    </div>
  );
}
