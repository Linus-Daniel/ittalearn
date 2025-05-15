"use client"
import { useEffect, useRef } from 'react';

type AnalyticsChartProps = {
  data: number[];
  labels: string[];
  color: string;
};

export const AnalyticsChart = ({ data, labels, color }: AnalyticsChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate dimensions
        const padding = 20;
        const chartWidth = canvas.width - padding * 2;
        const chartHeight = canvas.height - padding * 2;
        const maxValue = Math.max(...data);
        const xStep = chartWidth / (data.length - 1);
        
        // Draw grid lines
        ctx.strokeStyle = '#374151';
        ctx.lineWidth = 1;
        
        // Horizontal lines
        for (let i = 0; i <= 4; i++) {
          const y = padding + chartHeight - (i * chartHeight / 4);
          ctx.beginPath();
          ctx.moveTo(padding, y);
          ctx.lineTo(padding + chartWidth, y);
          ctx.stroke();
          
          // Y-axis labels
          ctx.fillStyle = '#9CA3AF';
          ctx.font = '10px Arial';
          ctx.textAlign = 'right';
          ctx.fillText(Math.round(maxValue * i / 4).toString(), padding - 5, y + 4);
        }
        
        // Draw line
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        
        data.forEach((value, index) => {
          const x = padding + index * xStep;
          const y = padding + chartHeight - (value / maxValue * chartHeight);
          
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        
        ctx.stroke();
        
        // Draw points
        data.forEach((value, index) => {
          const x = padding + index * xStep;
          const y = padding + chartHeight - (value / maxValue * chartHeight);
          
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        });
        
        // X-axis labels
        ctx.fillStyle = '#9CA3AF';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        
        labels.forEach((label, index) => {
          const x = padding + index * xStep;
          ctx.fillText(label, x, canvas.height - 5);
        });
      }
    }
  }, [data, labels, color]);

  return (
    <canvas 
      ref={canvasRef} 
      width={600} 
      height={300}
      className="w-full h-full"
    />
  );
};