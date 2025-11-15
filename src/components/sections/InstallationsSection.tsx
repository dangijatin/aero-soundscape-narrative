
import React, { useState, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import ScrollReveal from '../ScrollReveal';
import ParallaxSection from '../ParallaxSection';
import AudioVisualizer from '../AudioVisualizer';

type Installation = {
  type: string;
  description: string;
  video?: string;
  image?: string;
  audio?: string;
};

const InstallationsSection = () => {
  const installations: Installation[] = [
    {
      type: "Auditoriums",
      description: "High-fidelity sound systems for perfect acoustics in any auditorium size.",
      video: "https://cdn.pixabay.com/video/2020/03/24/33784-401947489_tiny.mp4",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070"
    },
    {
      type: "Cafes & Restaurants",
      description: "Ambiance-enhancing audio solutions for dining and entertainment spaces.",
      video: "https://cdn.pixabay.com/video/2021/08/03/83951-582299001_tiny.mp4",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
    },
    {
      type: "Discotheques",
      description: "Powerful, immersive sound systems designed for optimal performance in club environments.",
      video: "https://cdn.pixabay.com/video/2022/10/25/136697-764177318_tiny.mp4",
      image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=2069"
    },
    {
      type: "Gymnasiums",
      description: "Clear, distributed audio for fitness environments and sporting facilities.",
      video: "https://cdn.pixabay.com/video/2020/05/26/39830-424506872_tiny.mp4",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
    },
    {
      type: "Public Address",
      description: "Reliable announcement systems for hospitals, railway stations, and airports.",
      video: "https://cdn.pixabay.com/video/2023/05/09/160975-825099894_tiny.mp4",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069"
    }
  ];

  const [activeInstallation, setActiveInstallation] = useState(installations[0]);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleAudioToggle = () => {
    if (!activeInstallation.audio) return;
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
        setAudioPlaying(false);
      } else {
        audioRef.current.play();
        setAudioPlaying(true);
      }
    }
  };

  // Pause audio if installation changes
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAudioPlaying(false);
  }, [activeInstallation]);

  return (
    <ParallaxSection 
      id="installations" 
      className="scroll-section py-24 bg-audiolights-900 text-white"
      backgroundImage="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070"
    >
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-audiolights-copper">Installations</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={2}>
          <p className="text-center text-audiolights-200 max-w-3xl mx-auto mb-16 text-lg">
            We specialize in customized audio installations across various environments, ensuring optimal sound quality tailored to each unique space.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-lg h-80 lg:h-[500px] bg-black">
              {/* Audio toggle button */}
              {activeInstallation.audio && (
                <button
                  onClick={handleAudioToggle}
                  className="absolute top-4 right-4 z-20 bg-audiolights-copper text-white rounded-full p-3 shadow-lg hover:bg-audiolights-copper/80 transition"
                  aria-label={audioPlaying ? 'Pause audio' : 'Play audio'}
                >
                  {audioPlaying ? <FaVolumeUp size={22} /> : <FaVolumeMute size={22} />}
                </button>
              )}
              {activeInstallation.video ? (
                <video
                  key={activeInstallation.type}
                  src={activeInstallation.video}
                  poster={activeInstallation.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform scale-105"
                />
              ) : (
                <img
                  src={activeInstallation.image}
                  alt={activeInstallation.type}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out transform scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-audiolights-950/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2">{activeInstallation.type}</h3>
                <p className="text-audiolights-200 mb-4">{activeInstallation.description}</p>
                {activeInstallation.audio && (
                  <audio
                    ref={audioRef}
                    src={activeInstallation.audio}
                    className="mb-4 w-full"
                    controls
                    style={{ display: 'none' }}
                  />
                )}
                <AudioVisualizer className="mt-6" barCount={7} />
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6">Explore Our Installations</h3>
              
              <div className="space-y-4">
                {installations.map((installation, index) => (
                  <ScrollReveal 
                    key={installation.type}
                    delay={(index % 5) + 1 as 1 | 2 | 3 | 4 | 5}
                  >
                    <button
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeInstallation.type === installation.type 
                          ? 'bg-audiolights-copper/20 border-l-4 border-audiolights-copper' 
                          : 'bg-audiolights-800/40 hover:bg-audiolights-800/70'
                      }`}
                      onClick={() => setActiveInstallation(installation)}
                    >
                      <h4 className="font-medium">{installation.type}</h4>
                    </button>
                  </ScrollReveal>
                ))}
              </div>
              
              <ScrollReveal delay={5}>
                <div className="mt-8 p-4 bg-audiolights-800/40 rounded-lg border border-audiolights-700">
                  <h4 className="font-medium text-audiolights-copper mb-2">Bulk Orders</h4>
                  <p className="text-sm text-audiolights-300">
                    We also handle large-scale installations for government & private institutions, providing comprehensive audio solutions for bulk requirements.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default InstallationsSection;
