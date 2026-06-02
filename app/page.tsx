"use client"

import { Sparkles } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { OrderForm } from "@/components/order-form"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <OrderForm />
        
        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="gold-gradient-text text-lg font-semibold">عطر العود الملكي</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">
              جميع الحقوق محفوظة © 2026
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
