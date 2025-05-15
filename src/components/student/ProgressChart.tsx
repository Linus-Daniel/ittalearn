"use client"
import { useEffect, useRef } from 'react';

type ProgressChartProps = {
  value: number;
  size?: number;
  strokeWidth?: number;
};

export const ProgressChart = ({ 
  value, 
  size = 160, 
  strokeWidth = 10 
}: ProgressChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, size, size);
        
        // Draw background circle
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#374151'; // gray-700
        ctx.lineWidth = strokeWidth;
        ctx.stroke();
        
        // Draw progress circle
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, radius, -Math.PI / 2, (2 * Math.PI * value / 100) - (Math.PI / 2));
        ctx.strokeStyle = '#8b5cf6'; // purple-500
        ctx.lineWidth = strokeWidth;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }
  }, [value, size, strokeWidth, radius]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="transform -rotate-90"
    />
  );
};