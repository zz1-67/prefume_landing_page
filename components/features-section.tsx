"use client"

import { Clock, Leaf, Truck } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "ثبات يدوم 24 ساعة",
    description: "تركيبة فريدة تضمن بقاء العطر طوال اليوم دون الحاجة لإعادة الرش",
  },
  {
    icon: Leaf,
    title: "مكونات طبيعية ونادرة",
    description: "مستخلص من أجود أنواع العود الطبيعي المستورد من أفضل الغابات الآسيوية",
  },
  {
    icon: Truck,
    title: "شحن مجاني وسريع",
    description: "توصيل مجاني لجميع مدن المملكة خلال 2-3 أيام عمل مع ضمان الجودة",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative">
      {/* Section header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
          لماذا عطر العود الملكي؟
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">
          تجربة عطرية استثنائية
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
      </div>

      {/* Features grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:bg-card/80"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon */}
            <div className="relative mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  )
}
