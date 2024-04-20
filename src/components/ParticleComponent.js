import React from 'react';
import Particles from 'react-particles-js';

const ParticleComponent = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: 'image',
            image: [
              {
                src: 'src/assets/3.jpg',
                width: 100,
                height: 100,
              },
              {
                src: 'src/assets/4.jpg',
                width: 100,
                height: 100,
              },
              // Add more images as needed
            ],
          },
          move: {
            speed: 2,
          },
          opacity: {
            value: 0.5,
          },
        },
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default ParticleComponent;
