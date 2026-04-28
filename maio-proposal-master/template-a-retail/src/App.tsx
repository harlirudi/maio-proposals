/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, MapPin, ChevronRight, Activity, 
  Video, Store, CheckCircle2, Play, Users, BarChart,
  MessageSquare, Navigation
} from 'lucide-react';
import { SiTiktok, SiGooglemaps } from 'react-icons/si';

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
};

export default function App() {
  const [budget, setBudget] = useState(15000000);
  
  const coreBudget = budget * 0.8;
  const pulseBudget = budget * 0.2;
  
  let tier = 1;
  if (budget === 30000000) tier = 2;
  if (budget === 45000000) tier = 3;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/6281234567890?text=Halo tim maio, saya tertarik mendiskusikan strategi digital dengan budget ${formatCurrency(budget)}.`);
  };

  return (
    <div className="min-h-screen bg-sandstone text-moss overflow-x-hidden selection:bg-mint selection:text-moss">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-sandstone/80 border-b border-moss/10">
        <div className="font-display font-bold text-2xl tracking-tighter">
          ma<span className="text-mint mix-blend-difference">io</span>
        </div>
        <div className="text-sm font-medium opacity-70">
          Client: Toko Sepatu Lari
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-moss/5 border border-moss/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Digital Proposal</span>
            </div>
            
            <h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.1] tracking-tight">
              Dari <span className="italic text-moss/60">'Scroll'</span> di TikTok ke <span className="text-transparent bg-clip-text bg-gradient-to-r from-moss to-moss/70 relative">
                'Lari'
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-mint" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </svg>
              </span> ke Toko Anda.
            </h1>
            
            <p className="text-lg lg:text-xl opacity-80 leading-relaxed max-w-xl">
              Blueprint strategi digital untuk mengubah audiens kasual di media sosial menjadi pelanggan setia di toko fisik. Kami menggabungkan kekuatan engagement TikTok dengan visibilitas hyperlocal Google Maps.
            </p>
          </motion.div>

          <motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative"
>
  <div className="aspect-[4/5] bg-moss/10 rounded-none overflow-hidden relative group pixel-border">
    {/* GANTI SRC INI DENGAN DIRECT LINK GAMBAR PELARI ANDA YANG BERHASIL TADI */}
    <img 
      src="/Runner-maio-herosection-clean.webp" 
      alt="Urban runner in city" 
      referrerPolicy="no-referrer"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-moss/90 via-moss/40 to-moss/10 mix-blend-multiply" />
    
    {/* Floating Pixel Art & Energy Trails overlays */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 8-Bit Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'repeating-linear-gradient(transparent, transparent 2px, #A7F3D0 2px, #A7F3D0 4px)' }}></div>
      
      {/* Energy Trail 1 - Responsif */}
      <motion.div 
        className="absolute w-32 sm:w-64 h-1 sm:h-2 bg-mint shadow-[0_0_15px_var(--color-mint)] opacity-80 -rotate-45"
        style={{ top: '30%', left: '10%' }}
        animate={{ x: [-100, 300], y: [-100, -300], opacity: [0, 0.8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Energy Trail 2 - Responsif */}
      <motion.div 
        className="absolute w-20 sm:w-40 h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-mint to-transparent opacity-40 blur-[1px] rotate-[-30deg]"
        style={{ top: '60%', right: '0%' }}
        animate={{ x: [0, -120], y: [0, -80], opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
      />

      {/* Floating 8-bit data points - Responsif */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`pixel-${i}`}
          className={`absolute w-2 h-2 sm:w-4 sm:h-4 ${i % 2 === 0 ? 'bg-mint' : 'bg-moss border border-mint/50'} backdrop-blur-sm shadow-[0_0_10px_rgba(167,243,208,0.5)] flex items-center justify-center`}
          style={{
            top: `${15 + (i * 10)}%`,
            left: `${10 + (i * 12) + (i % 2 === 0 ? 15 : -5)}%`,
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
          }}
          animate={{ y: [-15, 15, -15], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Floating Map Pin Icon - Responsif */}
      <motion.div
        className="absolute top-[25%] right-[10%] z-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiGooglemaps className="w-8 h-8 sm:w-16 sm:h-16 text-[#EA4335]" style={{ filter: 'drop-shadow(0px 0px 8px rgba(167,243,208,0.8))', imageRendering: 'pixelated' }} />
      </motion.div>

      {/* Floating TikTok Icon - Responsif */}
      <motion.div
        className="absolute top-[45%] left-[5%] z-20"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <SiTiktok className="w-8 h-8 sm:w-16 sm:h-16 text-white" style={{ filter: 'drop-shadow(0px 0px 8px rgba(167,243,208,0.8))', imageRendering: 'pixelated' }} />
      </motion.div>
    </div>

    {/* Floating metrics overlay - Responsif Lebar, Padding, dan Font */}
    <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
      <div className="backdrop-blur-md bg-sandstone/90 p-3 sm:p-4 rounded-xl border border-white/20 shadow-xl flex items-center justify-between">
        <div>
          <p className="text-[8px] sm:text-[10px] font-pixel opacity-90 uppercase tracking-widest mb-1 sm:mb-2 text-moss/80">Foot Traffic</p>
          <p className="font-pixel text-base sm:text-xl font-bold bg-moss text-mint px-2 py-1 shadow-[2px_2px_0_var(--color-mint)] sm:shadow-[4px_4px_0_var(--color-mint)] inline-block">+184%</p>
        </div>
        <Activity className="w-6 h-6 sm:w-10 sm:h-10 text-moss" />
      </div>
    </div>
  </div>
  
  {/* 8-bit decoration Kanan Atas - Responsif */}
  <div className="absolute -top-3 -right-3 sm:-top-8 sm:-right-8 grid grid-cols-4 gap-1 sm:gap-2 opacity-80 z-[-1] sm:z-10">
    {[...Array(16)].map((_, i) => (
      <div key={i} className={`w-3 h-3 sm:w-6 sm:h-6 ${[1,3,4,6,9,11,14].includes(i) ? 'bg-mint' : [0,5,10].includes(i) ? 'bg-moss' : 'bg-transparent'} shadow-[0_0_4px_rgba(167,243,208,0.5)]`} />
    ))}
  </div>
</motion.div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-24 bg-moss text-sandstone relative overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#F2EEE5 1px, transparent 1px), linear-gradient(90deg, #F2EEE5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl lg:text-5xl font-bold">Dua Pilar Dominasi</h2>
            <p className="text-sandstone/70 max-w-2xl mx-auto text-lg">Pendekatan hybrid yang menyerang dari dua sisi: kesadaran merek (awareness) dan niat pencarian (intent).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
            {/* TikTok Strategy */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-moss border border-mint p-8 lg:p-12 space-y-6 pixel-card shadow-[10px_10px_0_rgba(167,243,208,0.8)] relative"
            >
              <div className="absolute top-0 right-0 p-4 font-pixel text-mint opacity-20 text-4xl">01</div>
              <div className="w-16 h-16 bg-mint flex items-center justify-center text-moss pixel-border">
              <div className="w-8 h-8">
                <SiTiktok size="100%" />
              </div>
              </div>
              <h3 className="font-display text-2xl font-bold">1: Dominasi TikTok</h3>
              <p className="text-sandstone/70 leading-relaxed">
                Membangun brand awareness dan komunitas pelari kasual melalui konten video pendek yang otentik, edukatif, dan menghibur.
              </p>
              
              <ul className="space-y-4 pt-4 border-t border-sandstone/10">
                <li className="flex items-start space-x-3">
                  <Play className="w-5 h-5 text-mint shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Pendekatan Konten</span>
                    <span className="text-sm text-sandstone/60">Video 'How-To' (cara ikat sepatu), 'Review', dan 'Challenge' (lari pagi bersama).</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-mint shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Contoh Hook Kuat</span>
                    <span className="text-sm text-sandstone/60">"3 Tanda Kamu Pakai Sepatu Lari yang Salah", "Rahasia lari 5K tanpa cedera".</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-mint shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Targeting Akurat</span>
                    <span className="text-sm text-sandstone/60">Audiens berminat pada lari & kebugaran, menggunakan Spark Ads untuk amplifikasi.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Maps Strategy */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-moss border border-mint p-8 lg:p-12 space-y-6 pixel-card shadow-[10px_10px_0_rgba(167,243,208,0.8)] relative"
            >
              <div className="absolute top-0 right-0 p-4 font-pixel text-mint opacity-20 text-4xl">02</div>
              <div className="w-16 h-16 bg-mint flex items-center justify-center text-moss pixel-border">
              <div className="w-8 h-8">
                <SiGooglemaps size="100%" />
              </div>
              </div>
              <h3 className="font-display text-2xl font-bold">2: Raja di Google Maps</h3>
              <p className="text-sandstone/70 leading-relaxed">
                Mengoptimalkan Google Business Profile (GBP) untuk menjadi "digital storefront" yang tak terkalahkan di pencarian lokal.
              </p>
              
              <ul className="space-y-4 pt-4 border-t border-sandstone/10">
                <li className="flex items-start space-x-3">
                  <Store className="w-5 h-5 text-mint shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Optimasi Penuh</span>
                    <span className="text-sm text-sandstone/60">Memastikan informasi jam buka, katalog produk, dan Q&A selalu mutakhir.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-mint shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Manajemen Review</span>
                    <span className="text-sm text-sandstone/60">Strategi proaktif memanen Bintang 5 & merespon profesional.</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Navigation className="w-5 h-5 text-mint shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Traffic Driver</span>
                    <span className="text-sm text-sandstone/60">Fitur 'Posts' gmaps untuk info stok baru & promo dorong kunjungan.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Configurator */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl lg:text-5xl font-bold">The Configurator</h2>
            <p className="text-moss/60 text-lg">Sesuaikan alokasi investasi bulanan dengan kecepatan pertumbuhan yang Anda inginkan.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
  {/* Visualizer & Avatar */}
  <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
      {/* Dynamic Aura Background */}
      <motion.div 
        className="absolute inset-0 bg-mint/20 rounded-full blur-3xl z-[-1]"
        animate={{ 
          scale: tier === 1 ? 1 : tier === 2 ? 1.5 : 2,
          opacity: tier === 1 ? 0.3 : tier === 2 ? 0.6 : 1 
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        animate={
          tier === 1 ? { y: [0, -10, 0] } :
          tier === 2 ? { y: [0, -15, 0], scale: 1.05 } :
          { scale: 1.1, filter: "drop-shadow(0 0 25px #A7F3D0)" }
        }
        transition={{ duration: tier === 1 ? 2 : tier === 2 ? 1.2 : 0.8, repeat: Infinity }}
        className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
      >
        {/* LOGIKA SWAPPING 3 GAMBAR GURITA */}
        <img 
          src={
            tier === 1 ? "/Maio_mascot1_run_clean.png" : 
            tier === 2 ? "/Maio_mascot2_run_clean.png" : 
            "/Maio_mascot3_run_clean.png"
          } 
          alt="Maio Digital Operator Mascot" 
          className="w-full h-full object-contain drop-shadow-xl" 
        />
      </motion.div>
    </div>
    <div className="text-center">
      <span className="font-pixel font-bold text-[12px] md:text-[14px] uppercase tracking-widest text-moss/90 leading-loose">
        Si Operator Digital
      </span>
      <p className="text-xs md:text-sm text-moss/60 mt-1 px-4">
        {tier === 1 && "Fase Pemanasan & Berjalan"}
        {tier === 2 && "Berlari Stabil Mengejar Momentum"}
        {tier === 3 && "Sprinting Maksimal dengan AI Aura"}
      </p>
    </div>
  </div>

  {/* Controls & Data */}
  <div className="lg:col-span-7 bg-white p-6 md:p-8 lg:p-10 pixel-border border border-moss/10 shadow-lg">
    <div className="space-y-8 md:space-y-10">
      
      {/* Budget Slider */}
      <div className="space-y-6">
        {/* MOBILE RESPONSIVE FIX: Flex-col on mobile, flex-row on desktop */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-moss/70 font-pixel">Total Investasi</label>
          <span className="font-pixel text-[16px] sm:text-[18px] text-moss bg-mint px-4 py-2 pixel-border w-full sm:w-auto text-center shadow-[4px_4px_0_var(--color-mint)]">
            {formatCurrency(budget)}
          </span>
        </div>
        
        <div className="relative pt-4 pb-2">
          <input 
            type="range" 
            min="15000000" 
            max="45000000" 
            step="15000000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-3 md:h-4 bg-moss/10 rounded-lg appearance-none cursor-pointer accent-mint relative z-10"
          />
          <div className="flex justify-between text-[10px] sm:text-xs font-bold text-moss/50 mt-3 px-1">
            <span>Rp 15 Jt</span>
            <span>Rp 30 Jt</span>
            <span>Rp 45 Jt</span>
          </div>
        </div>
      </div>

      {/* 80/20 Allocation Split */}
      <div className="space-y-4 pt-6 border-t border-moss/10">
        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-moss/70">Value-Based Logic</h4>
        
        <div className="flex h-3 md:h-4 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            className="bg-moss"
            initial={{ width: '80%' }}
            animate={{ width: '80%' }}
          />
          <motion.div 
            className="bg-mint"
            initial={{ width: '20%' }}
            animate={{ width: '20%' }}
          />
        </div>

        {/* MOBILE RESPONSIVE FIX: Menumpuk ke bawah di layar kecil */}
        <div className="flex flex-col sm:flex-row justify-between text-sm gap-6 sm:gap-0 mt-4">
          <div className="flex flex-col">
            <span className="font-bold flex items-center gap-2 font-pixel text-[10px] md:text-[12px]">
              <div className="w-3 h-3 bg-moss rounded-sm" />
              80% CORE
            </span>
            <span className="text-[10px] text-moss/60 ml-5 font-bold uppercase tracking-wider mt-1">AI Engine, Strategi, Produksi Kreatif</span>
            <span className="font-pixel text-[10px] md:text-[12px] ml-5 mt-1 text-moss/80">{formatCurrency(coreBudget)}</span>
          </div>
          <div className="flex flex-col sm:items-end sm:text-right">
            <span className="font-bold flex items-center sm:justify-end gap-2 font-pixel text-[10px] md:text-[12px]">
              <div className="w-3 h-3 bg-mint rounded-sm shadow-[0_0_5px_var(--color-mint)] hidden sm:block" />
              20% PULSE
              <div className="w-3 h-3 bg-mint rounded-sm shadow-[0_0_5px_var(--color-mint)] sm:hidden block" />
            </span>
            <span className="text-[10px] text-moss/60 sm:mr-5 font-bold uppercase tracking-wider mt-1">Distribusi Iklan (Paid Media)</span>
            <span className="font-pixel text-[10px] md:text-[12px] sm:mr-5 mt-1 text-moss/80">{formatCurrency(pulseBudget)}</span>
          </div>
        </div>
      </div>

      {/* Dynamic Deliverables Specs */}
      <div className="pt-6 border-t border-moss/10">
        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-moss/70 mb-4">Specs Framework</h4>
        <ul className="space-y-3 text-xs sm:text-sm">
          <AnimatePresence mode="popLayout">
            <motion.li 
              key={`tiktok-${tier}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-mint shrink-0" />
              <span className="font-medium">
                {tier === 1 && "4 Video TikTok per bulan (Highlight Produk)"}
                {tier === 2 && "10 Video TikTok per bulan (Review & Edukasi)"}
                {tier === 3 && "Daily Content TikTok (Massive Reach & Trend-Jacking)"}
              </span>
            </motion.li>
            <motion.li 
              key={`gmaps-${tier}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-3"
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-mint shrink-0" />
              <span className="font-medium">
                {tier === 1 && "Optimasi Basic G-Maps (Jam Buka & Foto)"}
                {tier === 2 && "AI Review Management & Weekly G-Maps Posts"}
                {tier === 3 && "Real-time Review Dashboard + Virtual Tour G-Maps"}
              </span>
            </motion.li>
          </AnimatePresence>
        </ul>
      </div>

    </div>
  </div>
</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-moss py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-sandstone">Siap Melangkah Lebih Cepat?</h2>
          <p className="text-sandstone/70 text-lg">Jangan biarkan kompetitor mengambil alih garis finish. Mari bahas strategi yang paling sesuai dengan posisi bisnis Anda saat ini.</p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="mt-8 bg-mint text-moss font-bold text-lg px-8 py-4 rounded-full flex items-center justify-center space-x-3 mx-auto shadow-[0_0_20px_rgba(167,243,208,0.4)]"
          >
            <span>Jadwalkan Diskusi Strategi</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

    </div>
  );
}
