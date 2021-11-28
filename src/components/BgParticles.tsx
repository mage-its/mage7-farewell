import Particles from 'react-tsparticles';

const BgParticles = () => {
  return (
    <div className='top-0 left-0 absolute w-full'>
      <Particles
        options={{
          background: {
            color: {
              'value': '#111'
            },
            position: '50% 50%',
            repeat: 'no-repeat',
            size: '20%'
          },
          fullScreen: {
            'zIndex': -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'repulse',
              },
              // onHover: {
              //   enable: true,
              //   mode: 'bubble',
              // },
              onHover: {
                enable: true,
                mode: 'grab',
                parallax: {
                  enable: true,
                  force: 15,
                  smooth: 10,
                },
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
              },
              repulse: {
                distance: 300,
              },
            }
          },
          particles: {
            color: {
              value: ['#ece8e1', '#ff4655']
            },
            links: {
              color: 'transparent',
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 600
                }
              },
              enable: true,
              outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
                default: 'out',
              },
              random: true,
              speed: 1
            },
            number: {
              density: {
                enable: true,
              },
              value: 69,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
              }
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: {
                min: 1,
                max: 3
              },
              animation: {
                speed: 4,
                minimumValue: 0.3
              }
            }
          }
        }
      }
      />
    </div>
  );
};

export default BgParticles;
