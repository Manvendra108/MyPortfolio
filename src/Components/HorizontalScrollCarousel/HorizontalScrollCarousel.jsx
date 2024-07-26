import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-black">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-blue-500 border-b-2 border-t-2 border-white hover:text-green-400 hover:p-1 ">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-blue-500 border-b-2 border-t-2 border-white  hover:text-green-400 hover:p-1 ">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[550px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-5 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
          <button className=" font-medium text-xl bg-green-500 border-2 border-white rounded-md p-1 m-3 w-20">  <a href="https://crypto-dashboard-avi.netlify.app/">Visit</a> </button>
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "./crypto-web.png",
    title: "Crypto Tracker",
    id: 1,
  },
  {
    url: "./Nft-web.png",
    title: "NFT Website",
    id: 2,
  },
  {
    url: "./Job-web.png",
    title: "Job Website",
    id: 3,
  },
  {
    url: "./Todo.png",
    title: "ToDo List",
    id: 4,
  },
];