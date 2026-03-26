import { useEffect, useRef, useMemo } from 'react';

const skills = [
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Tailwind', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },

  // Added new skills
  { name: 'GraphQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Bash', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' },
  { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Ubuntu', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg' },
  { name: 'Vercel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
  { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  { name: 'Nginx', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg' },
  { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
];

const TechGlobe = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const requestRef = useRef<number>(0);
    
    // Maintain absolute internal rotation
    const rotationParams = useRef({ rx: 0, ry: 0, vx: 0.003, vy: 0.003 });
    const isDragging = useRef(false);
    const previousMousePosition = useRef({ x: 0, y: 0 });

    const items = useMemo(() => {
        const N = skills.length;
        const phi = Math.PI * (3 - Math.sqrt(5));
        return skills.map((skill, i) => {
            const y = 1 - (i / (N - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phi * i;
            return {
                ...skill,
                x: Math.cos(theta) * radiusAtY,
                y,
                z: Math.sin(theta) * radiusAtY,
            };
        });
    }, []);

    useEffect(() => {
        let lastTime = performance.now();
        const animate = (time: number) => {
            const delta = Math.min((time - lastTime) / 16, 2);
            lastTime = time;

            if (!isDragging.current) {
                // Apply drag decay
                rotationParams.current.vx *= 0.95;
                rotationParams.current.vy *= 0.95;
                
                // Enforce base rotation speed if not dragged
                const baseSpeed = 0.002;
                if (Math.abs(rotationParams.current.vx) < baseSpeed) rotationParams.current.vx += (baseSpeed - rotationParams.current.vx) * 0.1;
                if (Math.abs(rotationParams.current.vy) < baseSpeed) rotationParams.current.vy += (baseSpeed - rotationParams.current.vy) * 0.1;

                rotationParams.current.rx += rotationParams.current.vx * delta;
                rotationParams.current.ry += rotationParams.current.vy * delta;
            }

            const { rx, ry } = rotationParams.current;

            items.forEach((item, i) => {
                const el = itemsRef.current[i];
                if (!el) return;

                // Rotate X
                let y1 = item.y * Math.cos(rx) - item.z * Math.sin(rx);
                let z1 = item.y * Math.sin(rx) + item.z * Math.cos(rx);
                // Rotate Y
                let x2 = item.x * Math.cos(ry) - z1 * Math.sin(ry);
                let z2 = item.x * Math.sin(ry) + z1 * Math.cos(ry);
                let y2 = y1;

                const scaleBase = 160; // Radius of sphere in pixels
                const perspective = 600;
                const zOffset = 300;
                const zPos = z2 * scaleBase + zOffset;
                
                // Avoid divide by zero
                if (zPos < 10) return;
                
                const scaleFactor = perspective / zPos;
                const xScreen = x2 * scaleBase * scaleFactor;
                const yScreen = y2 * scaleBase * scaleFactor;

                const zIndex = Math.round(z2 * 100);
                const opacity = Math.max(0.2, 0.4 + ((z2 + 1) / 2) * 0.6); // Base opacity prevents disappearing
                
                // Reduce the extreme scaling difference so they look more 'same size'
                const scale = 0.8 + (scaleFactor * 0.5);

                // Use simple transform, opacity, zIndex for high performance 60FPS
                el.style.transform = `translate(-50%, -50%) translate3d(${xScreen}px, ${yScreen}px, 0px) scale(${scale})`;
                el.style.zIndex = zIndex.toString();
                el.style.opacity = opacity.toString();
                
                // Dimming color if it's in the back - replaced blur with brightness for max performance
                // Disabling pointer events if it's in the back so we can click through to the front
                if (z2 < -0.2) {
                    el.style.filter = "brightness(0.4)";
                    el.style.pointerEvents = "none";
                } else {
                    el.style.filter = "none";
                    el.style.pointerEvents = "auto";
                }
            });

            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);
    }, [items]);

    const handlePointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        previousMousePosition.current = { x: e.clientX, y: e.clientY };
        if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
    };
    
    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return;
        const dx = e.clientX - previousMousePosition.current.x;
        const dy = e.clientY - previousMousePosition.current.y;
        previousMousePosition.current = { x: e.clientX, y: e.clientY };
        
        // Reverse direction makes it feel like grabbing the sphere front
        rotationParams.current.vy = dx * 0.005;
        rotationParams.current.vx = dy * -0.005; 
        
        rotationParams.current.ry += rotationParams.current.vy;
        rotationParams.current.rx += rotationParams.current.vx;
    };

    const handlePointerUp = () => {
        isDragging.current = false;
        if (containerRef.current) containerRef.current.style.cursor = 'grab';
    };

    return (
        <div 
            ref={containerRef}
            className="w-full max-w-2xl aspect-[4/3] sm:aspect-square mx-auto relative flex items-center justify-center select-none cursor-grab touch-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            {items.map((item, i) => (
                <div 
                    key={item.name}
                    ref={(el) => { itemsRef.current[i] = el; }}
                    className="absolute top-1/2 left-1/2 flex items-center justify-center will-change-transform rounded-xl w-14 h-14 bg-white/5 border border-white/10 backdrop-blur-sm p-3 shadow-[0_0_15px_rgba(255,255,255,0.05)] group pointer-events-auto cursor-pointer hover:bg-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-colors"
                    title={item.name}
                >
                    <img 
                        src={item.iconUrl} 
                        alt={item.name} 
                        className="w-full h-full object-contain filter saturate-150 drop-shadow-md group-hover:scale-125 transition-transform duration-300 pointer-events-none" 
                        draggable={false}
                    />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-bg/90 text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap pointer-events-none shadow-xl flex items-center gap-1 font-bold z-50">
                        {item.name}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TechGlobe;
