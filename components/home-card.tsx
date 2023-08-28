import Image from "next/image";

type THomeCard = {
  title: string;
  body: string;
  media: string;
};

const HomeCard = ({ title, body, media }: THomeCard) => {
  return (
    <div className="flex flex-col-reverse gap-6 max-md:px-4 md:flex-row md:items-center md:justify-between md:gap-0">
      {/* Col */}
      <div className="space-y-4 md:w-6/12">
        <h2 className="text-2xl font-light text-accent-foreground md:text-4xl">
          {title}
        </h2>
        <p className="text-muted-foreground md:text-2xl">{body}</p>
      </div>

      {/* Col */}
      <div className="md:w-4/12">
        <Image
          src={`/reviewers/${media}`}
          alt={title}
          width={400}
          height={400}
          className="h-auto w-1/4 md:w-full"
        />
      </div>
    </div>
  );
};

export default HomeCard;
