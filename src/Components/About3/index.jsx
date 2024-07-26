import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example2 = () => {
  return (
    <div className="bg-black">
      
      <HorizontalScrollCarousel />
      
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]  bg-black">
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
      className="group relative h-[200px] w-[2000px] overflow-hidden bg-black"
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
        <p className="bg-gradient-to-br from-black to-white/0 p-2 text-6xl font-black uppercase text-gray-400 backdrop-blur-lg">
          {card.title}
        </p>
        <h1 className="text-blue-500 font-semibold text-pretty">{card.title2} </h1>
        <h1 className="text-blue-600 font-semibold text-pretty">{card.title3} </h1>
        <h1 className="text-blue-700 font-semibold text-pretty">{card.title4} </h1>
        <h1 className="text-blue-900 font-semibold text-pretty">{card.title5} </h1>
        <h1 className="text-blue-950 font-semibold text-pretty">{card.title6} </h1>
      </div>
    </div>
  );
};

export default Example2 ;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Front-end developer create the animation websites",
    title2:"Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ? ",
    title3:"Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ? ",
    title4:"Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ? ",
    title4:"Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ? ",
    title6:"Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ?  Interested in collaborating ?   Interested in collaborating ?   Interested in collaborating ? ",
    id: 1,
  },

];