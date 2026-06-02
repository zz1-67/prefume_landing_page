"use client"

import { Sparkles, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToOrder = () => {
    const orderSection = document.getElementById("order-section")
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gold particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float-delayed opacity-40" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-float-slow opacity-50" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full animate-float opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float-delayed opacity-50" />
        
        {/* Decorative lines */}
        <div className="absolute top-40 left-0 right-0 gold-line opacity-20" />
        <div className="absolute bottom-40 left-0 right-0 gold-line opacity-20" />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Brand logo/icon */}
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-primary/30 bg-card/50 backdrop-blur-sm animate-pulse-gold">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Brand name */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-sm tracking-[0.3em] text-primary/80 uppercase">Royal Oud</span>
        </div>

        {/* Main headline */}
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up text-balance"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="gold-gradient-text">عطر العود الملكي</span>
        </h1>

        {/* Decorative line */}
        <div 
          className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        />

        {/* Tagline */}
        <p 
          className="text-xl md:text-2xl text-cream-muted mb-4 animate-fade-in-up font-light"
          style={{ animationDelay: "0.4s" }}
        >
          اكتشف فخامة العود الأصيل
        </p>

        {/* Description */}
        <p 
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          عطر استثنائي يجمع بين أرقى أنواع العود الطبيعي والمكونات النادرة،
          صُنع بعناية فائقة ليمنحك تجربة عطرية لا تُنسى تدوم طوال اليوم
        </p>

        {/* Perfume Image */}
        <div 
          className="animate-fade-in-up mb-12"
          style={{ animationDelay: "0.55s" }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prefume_imafe-cHixxfbAIPaB5EZ2iz33xrbD9Oitkv.png"
            alt="عطر العود الملكي"
            width={400}
            height={400}
            className="max-h-[380px] w-auto mx-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.25)]"
            priority
          />
        </div>

        {/* CTA Button */}
        <div 
          className="animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={scrollToOrder}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 cursor-pointer animate-pulse-gold hover:animate-none"
          >
            <span>اطلب الآن</span>
            <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
            
            {/* Button shine effect */}
            <div className="absolute inset-0 rounded-full animate-shimmer opacity-30" />
          </button>
        </div>

        {/* Trust badges */}
        <div 
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>شحن مجاني</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>ضمان الجودة</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>منتج أصلي 100%</span>
          </div>
        </div>

        {/* Scroll indicator - Arabic text with chevron */}
        <div 
          className="mt-12 flex flex-col items-center gap-2 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="text-sm text-primary font-medium tracking-wide">اسحب للأسفل</span>
          <div className="animate-bounce">
            <ChevronDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
