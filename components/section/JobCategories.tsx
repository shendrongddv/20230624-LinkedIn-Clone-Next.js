// Dummy Data
import { jobCategories } from "@/dummy";
import Link from "next/link";

const JobCategories = () => {
  return (
    <section className="bg-[#F3F2F0] px-6 py-16">
      <div className="container">
        {/* Grid */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Col */}
          <div className="md:w-5/12">
            <h2 className="h2 text-black/90">
              Temukan pekerjaan atau posisi magang yang tepat untuk Anda
            </h2>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            {/* # */}
            <span className="font-medium uppercase text-black/60">
              Saran Pencarian
            </span>

            {/* # */}
            <div className="mt-2 flex flex-wrap gap-2">
              {jobCategories?.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className="btn btn-dark-outline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
