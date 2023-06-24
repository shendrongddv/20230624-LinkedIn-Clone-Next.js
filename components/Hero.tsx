import Image from "next/image";
import FormLogin from "./ui/FormLogin";

const Hero = () => {
  return (
    <section className="px-6 md:pt-20">
      <div className="container py-16">
        {/* Flex */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-6/12">
            <FormLogin />
          </div>
          {/* ./ Col */}

          {/* Col */}
          <div className="md:w-5/12">
            <Image
              src="/img-1.svg"
              alt="Image"
              width={400}
              height={400}
              className="h-auto w-full"
            />
          </div>
          {/* ./ Col */}
        </div>
        {/* ./ Flex */}
      </div>
    </section>
  );
};

export default Hero;
