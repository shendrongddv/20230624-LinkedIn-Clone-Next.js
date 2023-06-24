// Components
import Hero from "@/components/Hero";
import Features from "@/components/section/Features";
import ForWho from "@/components/section/ForWho";
import JobCategories from "@/components/section/JobCategories";
import JoinUs from "@/components/section/JoinUs";
import PostJob from "@/components/section/PostJob";
import Reviews from "@/components/section/Reviews";

const page = () => {
  return (
    <main>
      <Hero />
      <JobCategories />
      <PostJob />
      <Reviews />
      <Features />
      <ForWho />
      <JoinUs />
    </main>
  );
};

export default page;
