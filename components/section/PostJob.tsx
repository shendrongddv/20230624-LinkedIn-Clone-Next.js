import Link from "next/link";

const PostJob = () => {
  return (
    <section className="bg-[#F1ECE5] px-6 py-16">
      <div className="container">
        {/* Grid */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex-1">
            <h2 className="h2 text-[#b24020] md:w-11/12">
              Posting pekerjaan Anda agar dilihat jutaan orang
            </h2>
          </div>

          {/* Col */}
          <div className="md:w-max">
            <Link href="/" className="btn btn-primary-outline">
              Buat Posting Pekerjaan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostJob;
