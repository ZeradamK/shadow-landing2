/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
 
  {
    name: "Kevin-lu",
    username: "@kevin-lu",
    body: "Shadow's integration is next-level. Everything just works.",
    img: "/users/Kevin-lu.jpg",
  },
  {
    name: "Justin",
    username: "@justin",
    body: "The all-in-one workflow is a game changer!",
    img: "/users/Justin.jpg",
  },
  {
    name: "mike",
    username: "@mike",
    body: "Shadow makes building and deploying so much faster.",
    img: "/users/mike.png",
  },
  {
    name: "sam",
    username: "@sam",
    body: "I love the agentic integrations and cloud support!",
    img: "/users/sam.png",
  },
  {
    name: "Pan",
    username: "@pan",
    body: "Design to code, all in one place. Incredible!",
    img: "/users/Pan.jpg",
  },
  {
    name: "Zeradam",
    username: "@zeradam",
    body: "I am glad i built shadow, we are working hard to actually make it industry scale.",
    img: "/users/Zeradam.jpg",
  },
  {
    name: "gary-tan",
    username: "@gary-tan",
    body: "This is the punk rock of software!",
    img: "/users/gary-tan.jpg",
  },
  {
    name: "Ethne",
    username: "@ethne",
    body: "Shadow's seamless workflow lets me focus on creativity, not configuration.",
    img: "/users/Ethne.jpg",
  },
  {
    name: "Dev Jain",
    username: "@dev-jain",
    body: "The integration of design and code in Shadow is a dream for any developer.",
    img: "/users/Dev-Jain.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[rgba(0,0,0,0.2)] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[rgba(0,0,0,0.2)] to-transparent"></div>
    </div>
  );
} 