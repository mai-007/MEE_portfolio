'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Circle = ({ size, color, initialPosition }) => {
  const [position, setPosition] = useState(initialPosition);
  const controls = useAnimation();

  useEffect(() => {
    //初期位置をセット
    // controls.start({
    //   x: initialPosition.x - size / 2,
    //   y: initialPosition.y - size / 2,
    // });

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    // マウス追従
    controls.start((prev) => ({
      x: position.x - size*2,
      y: position.y - size*2,
      transition: { duration: 0.2, ease: 'linear' },
    }));

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls, initialPosition, position, size]);

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        position: 'absolute',
        top: initialPosition.y,
        left: initialPosition.x,
        zIndex: '-2'
      }}
      animate={controls}
    />
  );
};

const TrailingCircles = () => {
  const circleSize = 400;
  const colors = ['#FE9562', '#FD6696', '#FFCC63'];
    // 三角形の配置
    const triangles = [
      { x: 500, y: 300 },
      { x: 350, y: 500 },
      { x: 650, y: 500 },
    ];

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      {triangles.map((position, index) => (
        <Circle key={index} size={circleSize} color={colors[index]} initialPosition={position} />
      ))}
    </div>
  );
};

export default TrailingCircles;
