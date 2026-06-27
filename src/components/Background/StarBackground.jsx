import { useMemo } from "react";
import useMouseParallax from "../../hooks/useMouseParallax";

const StarBackground = () => {
const { x, y } = useMouseParallax(8);

    const stars = useMemo(() => {

        return Array.from({ length: 120 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 4 + 3,
            opacity: Math.random() * 0.5 + 0.4
        }));

    }, []);

    return (
        <div
  className="fixed inset-0 overflow-hidden -z-10 bg-[#050816] transition-transform duration-500"
  style={{
    transform: `translate(${x}px, ${y}px)`
  }}
>

            {stars.map((star) => (

                <span
                    key={star.id}
                    className="absolute rounded-full bg-white animate-twinkle"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`
                    }}
                />

            ))}

        </div>
    );
};

export default StarBackground;