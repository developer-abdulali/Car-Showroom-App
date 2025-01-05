import { motion } from "framer-motion";
import { useState } from "react";
import { FaEdge, FaRegCheckCircle } from "react-icons/fa";

const featuresData = [
  {
    imgSrc: "/features/img-1.svg",
    title: "Smart Task Management",
    desc: "Organize and prioritize tasks effortlessly.",
    hightlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority.",
    ],
  },
  {
    imgSrc: "/features/img-2.svg",
    title: "Real-Time Collaboration",
    desc: "Collaborate with your team in real-time.",
    hightlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority.",
    ],
  },
  {
    imgSrc: "/features/img-3.svg",
    title: "Advanced Analytics",
    desc: "Gain insights to boost your productivity.",
    hightlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority.",
    ],
  },
  {
    imgSrc: "/features/img-4.svg",
    title: "Customizable Workspaces",
    desc: "Personalize your workspace for maximum efficiency.",
    hightlights: [
      "Set due dates and reminders.",
      "Track progress and milestones.",
      "Easily sort tasks by priority.",
    ],
  },
];

const Features = () => {
  const [index, setIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useState(() => {
    setImgIndex(index);
  }, [index]);

  return (
    <section className="text-white pt-32 relative px-4">
      <div className="container mx-auto">
        <div className="flex gap-16">
          {/* img */}
          <motion.div
            key={featuresData[index].imgSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2,
            }}
            className="hidden xl:flex justify-center flex-1 w-full h-[480px] sticky top-[calc((50%-240px))]"
          >
            <div className="relative w-full h-full">
              <img
                src={featuresData[imgIndex].imgSrc}
                alt="img"
                className="h-full object-contain"
              />
            </div>
          </motion.div>

          {/* text */}
          <div className="flex flex-1 flex-col gap-24">
            {featuresData?.map((feature, i) => {
              return (
                <motion.div
                  key={i}
                  onViewportEnter={() => setIndex(i)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: "all" }}
                  className="w-full h-auto xl:h-[480px] flex items-center"
                >
                  <div className="w-[80vw] xl:w-auto mx-auto xl:mx-0">
                    <h2 className="h2 mb-4">{feature.title}</h2>
                    <p className="lead mb-8">{feature.desc}</p>
                    {/* highlights */}
                    <div className="flex flex-col gap-5">
                      {feature.hightlights.map((highlight, i) => {
                        return (
                          <div key={i} className="flex items-center gap-4">
                            <FaRegCheckCircle className="text-accent_secondary text-2xl" />
                            <p>{highlight}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
