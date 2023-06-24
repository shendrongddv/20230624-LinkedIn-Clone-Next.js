import Image from "next/image";
import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <section className="bg-white px-6 py-16">
      <div className="container">
        {/* Flex */}
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          {/* Col */}
          <div className="space-y-4 md:w-5/12">
            <Image
              src="/img-3.svg"
              alt="Connect with people who can help"
              width={400}
              height={400}
              className="w-4/5"
            />
            <h2 className="h2 text-black/90">
              Connect with people who can help
            </h2>
            <div className="pt-6">
              <Link href="/" className="btn btn-dark-outline">
                Find people you know
              </Link>
            </div>
          </div>
          {/* Col */}
          <div className="space-y-4 md:w-5/12">
            <Image
              src="/img-4.svg"
              alt="Connect with people who can help"
              width={400}
              height={400}
              className="w-4/5"
            />
            <h2 className="h2 text-black/90">
              Learn the skills you need to succeed
            </h2>
            <div className="pt-6">
              <select className="form-select h-11 w-full rounded-lg px-5 py-2 md:w-2/3">
                <option value="" disabled selected>
                  Choose a topic to learn about
                </option>
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
