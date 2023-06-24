import Link from "next/link";

const JoinUs = () => {
  return (
    <section className="my-gradient-1 min-h-[80vh] px-6 py-16 md:min-h-[95vh]">
      <div className="container">
        <h2 className="h2 pb-10 text-black/90">
          Bergabung bersama kolega, teman kuliah, dan teman Anda di LinkedIn.
        </h2>
        <Link href="/" className="btn btn-primary">
          Mulai
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
