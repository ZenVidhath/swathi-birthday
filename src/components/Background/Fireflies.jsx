import { useMemo } from "react";

const Fireflies = () => {

    const particles = useMemo(() => {

        return Array.from({ length: 35 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 12 + 10,
            delay: Math.random() * 8
        }));

    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

            {particles.map((particle) => (

                <span
                    key={particle.id}
                    className="absolute bottom-[-20px] rounded-full bg-yellow-100 animate-firefly"
                    style={{
                        left: `${particle.left}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                        boxShadow: "0 0 12px rgba(255,255,180,.9)"
                    }}
                />

            ))}

        </div>
    );
};

export default Fireflies;