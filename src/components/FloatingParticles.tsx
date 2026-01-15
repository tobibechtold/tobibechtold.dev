import { useEffect, useRef } from "react";

const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full pointer-events-none";
      
      const size = Math.random() * 4 + 2;
      const isAccent = Math.random() > 0.7;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = isAccent 
        ? "hsl(345 82% 58% / 0.4)" 
        : "hsl(0 0% 50% / 0.2)";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.filter = "blur(1px)";
      
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * -20;
      particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
      
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default FloatingParticles;
