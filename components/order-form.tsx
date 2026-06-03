"use client"

import { useState } from "react"
import { User, Phone, MapPin, Loader2 } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    city: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      city: "",
    }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "يرجى إدخال الاسم الكامل"
      isValid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "يرجى إدخال رقم الجوال"
      isValid = false
    } else if (!/^[0-9+\s-]{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "يرجى إدخال رقم جوال صحيح"
      isValid = false
    }

    if (!formData.city.trim()) {
      newErrors.city = "يرجى إدخال المدينة"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Construct the WhatsApp message
    const message = `السلام عليكم، أرغب في طلب عطر العود الملكي.
الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
المدينة: ${formData.city}`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // WhatsApp URL with placeholder Saudi number
    const whatsappUrl = `https://wa.me/966533435227?text=${encodedMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
  }

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <section id="order-section" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            اطلب الآن
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient-text">
            احجز عطرك اليوم
          </h2>
          <p className="text-muted-foreground">
            املأ البيانات وسنتواصل معك عبر الواتساب لإتمام الطلب
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </div>

        {/* Form card */}
        <div className="relative p-8 md:p-10 rounded-3xl bg-card/60 border border-border/50 backdrop-blur-sm">
          {/* Decorative corners */}
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-xl" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-xl" />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                الاسم الكامل
              </label>
              <div className="relative">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange("name")}
                  placeholder="أدخل اسمك الكامل"
                  className={`w-full pr-12 pl-4 py-4 rounded-xl bg-input border ${
                    errors.name ? "border-destructive" : "border-border/50"
                  } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`}
                />
              </div>
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            {/* Phone field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                رقم الجوال
              </label>
              <div className="relative">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                  className={`w-full pr-12 pl-4 py-4 rounded-xl bg-input border ${
                    errors.phone ? "border-destructive" : "border-border/50"
                  } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-left`}
                />
              </div>
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>

            {/* City field */}
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium text-foreground">
                المدينة
              </label>
              <div className="relative">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange("city")}
                  placeholder="أدخل مدينتك"
                  className={`w-full pr-12 pl-4 py-4 rounded-xl bg-input border ${
                    errors.city ? "border-destructive" : "border-border/50"
                  } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all`}
                />
              </div>
              {errors.city && (
                <p className="text-sm text-destructive">{errors.city}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-gold hover:bg-gold-light text-charcoal font-semibold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <WhatsAppIcon className="w-6 h-6" />
                  <span>تأكيد الطلب عبر الواتساب</span>
                </>
              )}
            </button>
          </form>

          {/* Trust note */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            🔒 بياناتك آمنة ولن يتم مشاركتها مع أي طرف ثالث
          </p>
        </div>
      </div>
    </section>
  )
}
