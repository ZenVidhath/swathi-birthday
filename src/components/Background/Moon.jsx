import useMouseParallax from "../../hooks/useMouseParallax";

const Moon = () => {
  const { x, y } = useMouseParallax(25);

  return (
    <div
      className="fixed top-16 right-16 pointer-events-none -z-10 transition-transform duration-300"
      style={{
        transform: `translate(${x}px, ${y}px)`
      }}
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-white blur-[70px] opacity-20 scale-[2.3] animate-moonGlow" />

      {/* Middle Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-100 blur-3xl opacity-30 scale-150" />

      {/* Moon */}
      <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-white via-gray-100 to-gray-300 shadow-[0_0_80px_rgba(255,255,255,0.45)] animate-moonFloat">
        {/* Moon Craters */}
        <div className="absolute top-10 left-12 w-5 h-5 rounded-full bg-gray-300 opacity-40" />
        <div className="absolute top-24 left-28 w-7 h-7 rounded-full bg-gray-300 opacity-35" />
        <div className="absolute top-20 left-16 w-3 h-3 rounded-full bg-gray-400 opacity-30" />
        <div className="absolute top-32 left-14 w-4 h-4 rounded-full bg-gray-400 opacity-30" />
      </div>
    </div>
  );
};

export default Moon;