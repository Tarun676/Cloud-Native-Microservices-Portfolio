import { useEffect, useRef } from 'react';

const MouseTrail = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles: any[] = [];
        const colors = ['#06b6d4', '#ec4899', '#8b5cf6', '#3b82f6'];

        let mouse = { x: width / 2, y: height / 2 };
        let lastMouse = { x: width / 2, y: height / 2 };

        const handleMouseMove = (e: MouseEvent) => {
            lastMouse.x = mouse.x;
            lastMouse.y = mouse.y;
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Spawn particles based on distance moved
            const distance = Math.sqrt(Math.pow(mouse.x - lastMouse.x, 2) + Math.pow(mouse.y - lastMouse.y, 2));
            const count = Math.min(Math.floor(distance / 5), 8); 
            
            for(let i = 0; i < count; i++) {
                const interpX = lastMouse.x + (mouse.x - lastMouse.x) * (i / count);
                const interpY = lastMouse.y + (mouse.y - lastMouse.y) * (i / count);
                
                particles.push({
                    x: interpX + (Math.random() - 0.5) * 15,
                    y: interpY + (Math.random() - 0.5) * 15,
                    radius: Math.random() * 30 + 15,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    life: 1,
                    velocity: { 
                        x: (Math.random() - 0.5) * 1.5, 
                        y: (Math.random() - 0.5) * 1.5 - 0.5 
                    }
                });
            }
            
            // Spawn at least one per frame if moving
            if (count === 0 && distance > 0) {
                 particles.push({
                    x: mouse.x, y: mouse.y,
                    radius: Math.random() * 30 + 15,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    life: 1,
                    velocity: { x: (Math.random() - 0.5) * 1.5, y: (Math.random() - 0.5) * 1.5 - 0.5 }
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.globalCompositeOperation = 'screen';

            for(let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.life -= 0.015; // Slow fade out
                p.x += p.velocity.x;
                p.y += p.velocity.y;
                p.radius += 0.2; // Expand slightly

                if (p.life <= 0) {
                    particles.splice(i, 1);
                    i--;
                    continue;
                }

                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                let rgb = '0,0,0';
                if (p.color === '#06b6d4') rgb = '6,182,212';
                if (p.color === '#ec4899') rgb = '236,72,153';
                if (p.color === '#8b5cf6') rgb = '139,92,246';
                if (p.color === '#3b82f6') rgb = '59,130,246';

                grad.addColorStop(0, `rgba(${rgb}, ${Math.max(0, p.life * 0.4)})`);
                grad.addColorStop(1, `rgba(${rgb}, 0)`);

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            }
            requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed inset-0 z-0 pointer-events-none opacity-80" 
        />
    );
};

export default MouseTrail;
