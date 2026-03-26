import { useCallback } from 'react';

// Single global context to prevent creating hundreds
let audioCtx: AudioContext | null = null;
const getContext = () => {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioCtx;
};

export const useSound = () => {
    const playClick = useCallback(() => {
        try {
            const ctx = getContext();
            if (ctx.state === 'suspended') ctx.resume();
            
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
            
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } catch (e) {
            // Ignore if audio isn't supported or allowed yet
        }
    }, []);

    const playSwoosh = useCallback(() => {
        try {
            const ctx = getContext();
            if (ctx.state === 'suspended') ctx.resume();
            
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(150, ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(50, ctx.currentTime + 0.2);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(2000, ctx.currentTime);
            filter.frequency.linearRampToValueAtTime(500, ctx.currentTime + 0.2);
            
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
            
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
        } catch (e) {
            // Ignore
        }
    }, []);

    return { playClick, playSwoosh };
};
