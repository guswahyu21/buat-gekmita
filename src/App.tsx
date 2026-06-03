import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PartyPopper, Pause, Play, Sparkles, Send, Gift, Star, Mail, Cake, Music, ChevronLeft, ChevronRight } from 'lucide-react';

// --- CONFIGURATION ---
const CONFIG = {
  name: "Gek Mita Tolong dibuka ya :)",
  nickname: "Cantik",
  // 4 Photos for the Album
  photos: [
    "https://i.ibb.co.com/yByns9gj/IMG-20260603-215319.jpg",
    "https://i.ibb.co.com/WNvwmVbR/IMG-20260603-215702.jpg",
    "https://i.ibb.co.com/8nn5mz8w/Screenshot-2026-06-03-21-56-41-37-1c337646f29875672b5a61192b9010f9.jpg",
    "https://i.ibb.co.com/6JJ0MqWn/IMG-20260603-215353.jpg",
  ],
  musicUrl: "https://mp3tourl.com/audio/1780498609781-29dcabed-e52d-498a-adeb-5d5aae2111e6.mp3",
  whatsappNumber: "6287779593093",
};

const ALBUM_PAGES = [
  { text: "Dari pertama wigus liat. senyuman gek mengandung kadar gula 99999999999999999999999999MG, selain manis, cantiknya bersinar juga, sama seperti foto ini hahahaha, tekan next yaa :v" },
  { text: "wihhh kelihatan sedikit galak yaa, tapi gapapa masih ketutupan sama cantiknya huhuu." },
  { text: "walaupun telat tapi gus ucapin selamat ya gek atas jayanthi 1 Wimbakara Mawirama (Sekar Agung) Kab Gianyar. Semangat Terus Gek😇🙏" },
  { text: "Perkenalkan saya Ida Ayu Sri Yasmita Putri Nim 2515623014, whahaha pasti ini foto pas ospek sih, semangat kuliahnya ya gek, semoga dilancarkan, jangan pernah capek justru jadi mahasiswa harus tahan banting okee💪, tekan lanjut ya gekk." }
];

const STORY_MESSAGES = [
  `Hai ${CONFIG.nickname}...`,
  "Maaf menunggu terlalu lama buat ini ya, Pinggang gus masih sakit soalnya😭",
  "Maaf ini hanya sekedar hasil ketikan, namun gus ketiknya full pakai hati.",
  "Maaf ini sebenernya udah lewat.",
  "Namun Seperti kata pepatah TIDAK ADA KATA TERLAMBAT BUAT ORANG CANTIK...",
  "Sekarang wigus mau nunjukin sedikit seuatu."
];

const CELEBRATION_MESSAGES = [
  "Happy Birthday gekk!",
  "Selamat ulang tahun ya gek🥳🥳🤩, Semoga gek sehat selalu, makin bahagia, dan semua yang gek harapin bisa terwujud🙏.",
  "Semoga hari-hari gek ke depannya selalu dipenuhi hal-hal baik.",
  "Semangat kuliahnya gek :D .",
  "Enjoy your special day, have a blast! ✨"
];

// ---------------------

const StarryBackground = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 1 + Math.random() * 4,
      size: Math.random() * 3 + 1,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bg-white rounded-full bg-blend-screen"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`
          }}
        />
      ))}
    </div>
  );
};

const SlideshowBackground = ({ photos }: { photos: string[] }) => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20 mix-blend-screen">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={`fast-bg-${bgIndex}`}
          src={photos[bgIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          alt=""
        />
      </AnimatePresence>
    </div>
  );
};

const Balloon: React.FC<{ color: string, delay: number }> = ({ color, delay }) => (
  <motion.div
    initial={{ y: "110vh", x: `${Math.random() * 80 + 10}vw` }}
    animate={{ y: "-20vh", x: `${Math.random() * 80 + 10}vw` }}
    transition={{ duration: 15 + Math.random() * 10, delay, repeat: Infinity, ease: "linear" }}
    className="absolute z-0 opacity-80"
  >
    <div className={`w-10 h-14 md:w-16 md:h-20 rounded-[50%] ${color} shadow-lg relative flex justify-center items-end`}>
      <div className={`w-2 h-2 ${color} rotate-45 transform translate-y-1`}></div>
      <div className="absolute top-[102%] w-0.5 h-16 bg-white/30"></div>
    </div>
  </motion.div>
);

const BirthdayDecorations = () => {
  const balloonColors = ['bg-rose-400', 'bg-pink-400', 'bg-amber-400', 'bg-red-400', 'bg-fuchsia-400'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <Balloon key={`balloon-${i}`} color={balloonColors[i % balloonColors.length]} delay={Math.random() * 8} />
      ))}
    </div>
  );
};

export default function App() {
  const [appState, setAppState] = useState<'COVER' | 'STORY' | 'ALBUM' | 'BOOK' | 'CELEBRATION'>('COVER');
  const [storyIndex, setStoryIndex] = useState(0);
  const [bookIndex, setBookIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    setAppState('STORY');
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Audio autoplay prevented", err);
          setIsPlaying(false);
        });
    }
  };

  const handleNextStory = () => {
    if (storyIndex < STORY_MESSAGES.length - 1) {
      setStoryIndex(prev => prev + 1);
    } else {
      setAppState('ALBUM');
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const sendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    const text = encodeURIComponent(replyText);
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-[100dvh] bg-black text-white font-sans relative flex items-center justify-center p-4 overflow-hidden">
      <StarryBackground />
      {appState === 'CELEBRATION' && <SlideshowBackground photos={CONFIG.photos} />}
      {appState === 'CELEBRATION' && <BirthdayDecorations />}
      <audio ref={audioRef} src={CONFIG.musicUrl} loop preload="auto" />

      {/* Floating Music Toggle (Always available when opened) */}
      {appState !== 'COVER' && (
        <div className="fixed top-6 right-6 z-50">
          <button 
            onClick={toggleMusic}
            className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white rounded-full shadow-lg transition-all flex items-center gap-2"
          >
            {isPlaying ? <Music size={18} className="animate-pulse" /> : <Pause size={18} />}
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {appState === 'COVER' && (
          <motion.div
            key="cover"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(15px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="z-10 relative p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] rounded-[3rem] flex flex-col items-center text-center max-w-sm w-full mx-auto"
          >
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-28 h-28 bg-white/10 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl mb-6"
            >
              <Gift className="text-white w-12 h-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </motion.div>
            
            <div className="space-y-3 relative z-10">
              <h1 className="font-serif text-3xl md:text-4xl font-light tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase">
                Surprise
              </h1>
              <p className="text-white/70 font-light text-lg">
                Wigus ada sedikit hadiah buat {CONFIG.name}...
              </p>
            </div>

            <button 
              onClick={handleOpen}
              className="mt-10 px-10 py-4 bg-white text-black rounded-full font-semibold text-lg tracking-wide hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] active:scale-95 transition-all duration-300 flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              <span>Buka Sekarang</span>
            </button>
          </motion.div>
        )}

        {appState === 'STORY' && (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            onClick={handleNextStory}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center cursor-pointer p-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={storyIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 text-center max-w-2xl px-4 pointer-events-none"
              >
                <h2 className="font-serif text-2xl md:text-4xl text-white font-light leading-loose drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  {STORY_MESSAGES[storyIndex]}
                </h2>
              </motion.div>
            </AnimatePresence>

            <motion.div
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 1.5, duration: 1 }}
               className="absolute bottom-12 text-white/50 text-xs tracking-[0.3em] uppercase animate-pulse flex items-center gap-2 pointer-events-none"
            >
               Tap layar untuk lanjut
            </motion.div>
          </motion.div>
        )}

        {appState === 'ALBUM' && (
          <motion.div
             key="album"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.9 }}
             transition={{ duration: 0.8 }}
             className="z-10 w-full max-w-2xl mx-auto flex flex-col items-center"
          >
             <div className="text-center mb-10">
               <h2 className="font-serif text-3xl font-light text-white tracking-widest mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">All About You</h2>
               <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                 className="text-white/60 text-sm tracking-widest font-medium uppercase"
               >
                 ( Tap fotonya ya )
               </motion.p>
             </div>
             <div className="grid grid-cols-2 gap-4 w-full">
               {CONFIG.photos.map((photo, i) => (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    className="relative group cursor-pointer aspect-square rounded-xl overflow-hidden border border-white/20 shadow-2xl"
                    onClick={() => {
                       setBookIndex(i);
                       setAppState('BOOK');
                    }}
                 >
                    <img src={photo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Album ${i+1}`} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="text-white text-sm tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">Buka</span>
                    </div>
                 </motion.div>
               ))}
             </div>
          </motion.div>
        )}

        {appState === 'BOOK' && (
          <motion.div
            key="book"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="z-40 w-full max-w-5xl mx-auto p-4 md:p-8 flex items-center justify-center"
          >
            <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 md:p-12 flex flex-col md:flex-row w-full shadow-[0_0_50px_rgba(255,255,255,0.05)] relative overflow-hidden">
               {/* Left: Phoyo */}
               <div className="w-full md:w-1/2 rounded-2xl overflow-hidden mb-6 md:mb-0 md:mr-10 shrink-0 h-[40vh] md:h-[60vh]">
                  <AnimatePresence mode="popLayout">
                    <motion.img 
                      key={`book-img-${bookIndex}`}
                      src={CONFIG.photos[bookIndex]} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover shadow-inner" 
                    />
                  </AnimatePresence>
               </div>
               
               {/* Right: Text & Controls */}
               <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="flex-1 flex items-center justify-center min-h-[20vh]">
                    <AnimatePresence mode="wait">
                      <motion.p 
                        key={`book-txt-${bookIndex}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-white text-xl md:text-3xl font-serif font-light leading-relaxed italic text-center md:text-left drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                      >
                        "{ALBUM_PAGES[bookIndex].text}"
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  
                  <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/10">
                    <button 
                      onClick={() => setBookIndex(prev => Math.max(0, prev - 1))} 
                      disabled={bookIndex === 0}
                      className="p-3 text-white/50 hover:text-white disabled:opacity-0 transition-colors flex items-center gap-2 font-medium tracking-wider text-sm uppercase"
                    >
                       <ChevronLeft size={20} /> Prev
                    </button>
                    
                    <div className="text-white/30 text-sm tracking-widest">
                       {bookIndex + 1} / {CONFIG.photos.length}
                    </div>

                    <button 
                      onClick={() => {
                        if (bookIndex < CONFIG.photos.length - 1) {
                          setBookIndex(prev => prev + 1);
                        } else {
                          setAppState('CELEBRATION');
                        }
                      }} 
                      className="p-3 text-white hover:text-white/70 transition-colors flex items-center gap-2 font-medium tracking-wider text-sm uppercase"
                    >
                       {bookIndex === CONFIG.photos.length - 1 ? "Lanjut" : "Next"} <ChevronRight size={20} />
                    </button>
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {appState === 'CELEBRATION' && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="z-10 w-full max-w-lg mx-auto bg-white/10 backdrop-blur-2xl rounded-[3rem] p-8 shadow-[0_0_60px_rgba(255,255,255,0.05)] border border-white/20 relative"
          >
            <div className="absolute -top-6 -right-6 animate-bounce text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              <PartyPopper size={40} />
            </div>
            
            <div className="text-center mb-8 relative z-10">
                <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6">
                  <Star size={16} fill="white" className="text-white" />
                  <span className="text-sm font-light tracking-[0.2em] uppercase text-white">Happy Birthday</span>
                  <Star size={16} fill="white" className="text-white" />
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl text-white font-light tracking-wide mb-6 relative inline-block">
                  <motion.div animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-12 -top-6 text-3xl hidden sm:block drop-shadow-[0_0_10px_rgba(255,100,100,0.8)]">🎈</motion.div>
                  Hai, {CONFIG.nickname}! 🎂
                  <motion.div animate={{ y: [8, -8, 8], rotate: [5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-12 -top-6 text-3xl hidden sm:block drop-shadow-[0_0_10px_rgba(100,100,255,0.8)]">🎈</motion.div>
                </h2>

                <div className="space-y-4">
                  {CELEBRATION_MESSAGES.slice(1).map((msg, idx) => (
                    <motion.p 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + (idx * 0.2) }}
                      className="text-white/80 font-light text-base md:text-lg leading-relaxed"
                    >
                      {msg}
                    </motion.p>
                  ))}
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-8 opacity-40">
               <div className="h-px bg-white flex-1"></div>
               <Cake size={20} className="text-white" />
               <div className="h-px bg-white flex-1"></div>
            </div>

            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              onSubmit={sendWhatsapp} 
              className="bg-black/20 p-6 border border-white/10 rounded-2xl"
            >
              <div className="space-y-4">
                <label htmlFor="reply" className="text-sm font-medium tracking-wide text-white/90 flex items-center gap-2">
                  <Send size={16} /> <span>Mau chat wigus? chat lewat disini aja</span>
                </label>
                <textarea
                  id="reply"
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Ceritain perasaan kamu hari ini dong..."
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 focus:border-white focus:ring-1 focus:ring-white rounded-xl outline-none resize-none transition-all placeholder:text-white/30 text-white shadow-inner"
                />
              </div>
              <button
                type="submit"
                disabled={!replyText.trim()}
                className="mt-4 w-full py-4 bg-white hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-black rounded-xl font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.4)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <span>Kirim via WhatsApp</span>
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
