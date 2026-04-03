/**
 * LAB-6 | Uygulama-1: İletişim Formu Component'i
 * PDF Referans: Bölüm 6 – Controlled Form (Kontrollü Form)
 *
 * Bu component PDF spesifikasyonunu tam olarak karşılar:
 * - ContactFormData & FormErrors TypeScript interface'leri
 * - useState ile 4 ayrı state yönetimi
 * - validate() fonksiyonu (regex, min-length kontrolleri)
 * - handleChange() ile anlık hata temizleme
 * - handleSubmit() ile simüle API çağrısı
 * - Başarı / Yükleniyor / Hata UI durumları
 */

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ──────────────────────────────────────────
// Form Veri Modeli (PDF: Satır 3-8)
// ──────────────────────────────────────────
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ──────────────────────────────────────────
// Form Hata Modeli (PDF: Satır 11-16)
// ──────────────────────────────────────────
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// ──────────────────────────────────────────
// Başlangıç Değerleri (PDF: Satır 19-24)
// ──────────────────────────────────────────
const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// Konu seçenekleri
const subjectOptions = [
  { value: "genel", label: "Genel" },
  { value: "destek", label: "Teknik Destek" },
  { value: "oneri", label: "Öneri" },
  { value: "isbirligi", label: "İş Birliği" },
];

// ──────────────────────────────────────────
// Doğrulama Fonksiyonu (PDF: Satır 37-72)
// ──────────────────────────────────────────
function validate(data: ContactFormData): FormErrors {
  const newErrors: FormErrors = {};

  if (!data.name.trim()) {
    newErrors.name = "Ad soyad zorunludur.";
  } else if (data.name.trim().length < 2) {
    newErrors.name = "Ad soyad en az 2 karakter olmalıdır.";
  }

  if (!data.email.trim()) {
    newErrors.email = "E-posta zorunludur.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    newErrors.email = "Geçerli bir e-posta adresi giriniz.";
  }

  if (!data.subject.trim()) {
    newErrors.subject = "Konu zorunludur.";
  }

  if (!data.message.trim()) {
    newErrors.message = "Mesaj zorunludur.";
  } else if (data.message.trim().length < 10) {
    newErrors.message = "Mesaj en az 10 karakter olmalıdır.";
  }

  return newErrors;
}

// ──────────────────────────────────────────
// Ana ContactForm Component'i
// ──────────────────────────────────────────
export default function ContactForm() {
  // PDF: Satır 28-35 — 4 state yönetimi
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // ──────────────────────────────────────────
  // Tek Alan Güncelleme (PDF: Satır 74-90)
  // Anlık hata temizleme özelliği dahil
  // ──────────────────────────────────────────
  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Alan değiştiğinde o alana ait hata mesajını temizle
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  }

  // ──────────────────────────────────────────
  // Form Gönderme (PDF: Satır 92-117)
  // e.preventDefault(), validation, simüle API
  // ──────────────────────────────────────────
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Tüm alanları doğrula
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simüle edilmiş API çağrısı (PDF: Satır 106-109)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form verisi:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      // Gerçek projede hata state'i kullan (alert yerine)
      setErrors({ message: "Gönderim başarısız. Lütfen tekrar deneyin." });
    } finally {
      setIsSubmitting(false);
    }
  }

  // ──────────────────────────────────────────
  // Başarı Durumu (PDF: Satır 119-130)
  // ──────────────────────────────────────────
  if (submitSuccess) {
    return (
      <AnimatePresence>
        <motion.div
          className="flex flex-col items-center justify-center gap-6 py-12 px-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
        >
          {/* Animasyonlu Başarı İkonu */}
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-2xl shadow-emerald-500/40"
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
              Mesajınız İletildi! 🎉
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              En kısa sürede size geri dönüş yapacağım.
            </p>
          </motion.div>

          <motion.button
            onClick={() => setSubmitSuccess(false)}
            className="mt-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yeni Mesaj Gönder
          </motion.button>
        </motion.div>
      </AnimatePresence>
    );
  }

  // ──────────────────────────────────────────
  // Form Render (PDF: Satır 119-255)
  // ──────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* ── Ad Soyad ── */}
      <div>
        <label
          htmlFor="cf-name"
          className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300"
        >
          Ad Soyad <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Adınız ve soyadınız"
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          aria-invalid={!!errors.name}
          className={`w-full border rounded-xl px-4 py-3 text-sm transition-all outline-none
            bg-white/50 dark:bg-slate-800/50 text-slate-800 dark:text-white
            placeholder:text-slate-400 dark:placeholder:text-slate-600
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${
              errors.name
                ? "border-red-400 bg-red-50/50 dark:bg-red-900/10"
                : "border-slate-200 dark:border-slate-700"
            }`}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              id="cf-name-error"
              role="alert"
              className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span>⚠</span> {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── E-posta ── */}
      <div>
        <label
          htmlFor="cf-email"
          className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300"
        >
          E-posta <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="ornek@mail.com"
          aria-describedby={errors.email ? "cf-email-error" : undefined}
          aria-invalid={!!errors.email}
          className={`w-full border rounded-xl px-4 py-3 text-sm transition-all outline-none
            bg-white/50 dark:bg-slate-800/50 text-slate-800 dark:text-white
            placeholder:text-slate-400 dark:placeholder:text-slate-600
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${
              errors.email
                ? "border-red-400 bg-red-50/50 dark:bg-red-900/10"
                : "border-slate-200 dark:border-slate-700"
            }`}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              id="cf-email-error"
              role="alert"
              className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span>⚠</span> {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── Konu (Select) ── */}
      <div>
        <label
          htmlFor="cf-subject"
          className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300"
        >
          Konu <span className="text-red-500">*</span>
        </label>
        <select
          id="cf-subject"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          aria-describedby={errors.subject ? "cf-subject-error" : undefined}
          aria-invalid={!!errors.subject}
          className={`w-full border rounded-xl px-4 py-3 text-sm transition-all outline-none
            bg-white/50 dark:bg-slate-800/50 text-slate-800 dark:text-white
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${
              errors.subject
                ? "border-red-400 bg-red-50/50 dark:bg-red-900/10"
                : "border-slate-200 dark:border-slate-700"
            }`}
        >
          <option value="">Konu seçiniz...</option>
          {subjectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <AnimatePresence>
          {errors.subject && (
            <motion.p
              id="cf-subject-error"
              role="alert"
              className="text-red-500 text-xs mt-1.5 font-medium flex items-center gap-1"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <span>⚠</span> {errors.subject}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mesaj ── */}
      <div>
        <label
          htmlFor="cf-message"
          className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300"
        >
          Mesaj <span className="text-red-500">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Mesajınızı buraya yazınız... (en az 10 karakter)"
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          aria-invalid={!!errors.message}
          className={`w-full border rounded-xl px-4 py-3 text-sm transition-all outline-none resize-y
            bg-white/50 dark:bg-slate-800/50 text-slate-800 dark:text-white
            placeholder:text-slate-400 dark:placeholder:text-slate-600
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${
              errors.message
                ? "border-red-400 bg-red-50/50 dark:bg-red-900/10"
                : "border-slate-200 dark:border-slate-700"
            }`}
        />
        {/* Karakter sayacı */}
        <div className="flex items-start justify-between mt-1">
          <AnimatePresence>
            {errors.message && (
              <motion.p
                id="cf-message-error"
                role="alert"
                className="text-red-500 text-xs font-medium flex items-center gap-1"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <span>⚠</span> {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
          <span
            className={`text-xs ml-auto font-mono ${
              formData.message.length < 10
                ? "text-slate-400"
                : "text-emerald-500"
            }`}
          >
            {formData.message.length} / 10+
          </span>
        </div>
      </div>

      {/* ── Gönder Butonu (PDF: Satır 243-252) ── */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all
          flex items-center justify-center gap-2
          ${
            isSubmitting
              ? "bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
          }`}
        whileTap={isSubmitting ? {} : { scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            {/* Spinner */}
            <svg
              className="animate-spin w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Gönderiliyor...
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Mesaj Gönder
          </>
        )}
      </motion.button>

      <p className="text-center text-xs text-slate-400 dark:text-slate-600">
        <span className="text-red-400">*</span> ile işaretli alanlar zorunludur.
      </p>
    </form>
  );
}
