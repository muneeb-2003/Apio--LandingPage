import React, { useEffect, useRef } from "react";
import "./Box.css";

const Box = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        // Set canvas dimensions
        canvas.width = 400;
        canvas.height = 200;

        // Animation parameters
        let phase = 0;
        const amplitude = 50;
        const frequency = 0.02;
        const speed = 0.1;

        const drawWave = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);

            for (let i = 0; i < canvas.width; i++) {
                const y = amplitude * Math.sin(frequency * i + phase) + canvas.height / 2;
                ctx.lineTo(i, y);
            }

            ctx.strokeStyle = "#FF6600";
            ctx.lineWidth = 2;
            ctx.stroke();

            phase += speed;
            animationFrameId = requestAnimationFrame(drawWave);
        };

        drawWave();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="box-container">
            <div className="box-content">
                {/* Your content on the left side */}
                <h2>Box Component</h2>
                <p>This is the content on the left side of the box.</p>
            </div>
            <div className="box-animation">
                {/* Sine wave animation canvas on the right side */}
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    );
};

export default Box;
