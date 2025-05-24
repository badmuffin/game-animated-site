import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedTitleProps {
  text: string;
  containerClass?: string;
  textClass?: string
  // sectionId?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  containerClass,
  textClass,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse", // onEnter, onLeave, onEnterBack, onLeaveBack
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotate(0deg) rotateY(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup function to revert the context
  }, []);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {text.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className={`animated-word ${textClass}`}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
