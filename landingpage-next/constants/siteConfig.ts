// Konfigurasi Kontak & Informasi Perusahaan
// Anda cukup mengubah nomor WhatsApp dan kontak di file ini untuk mengubahnya di seluruh halaman website.

export const SITE_CONFIG = {
  // Nomor WhatsApp utama (gunakan format internasional tanpa tanda + atau spasi, contoh: 6281234567890)
  whatsappNumber: "6285809825540",

  // Format tampilan nomor untuk dibaca manusia di Footer / Teks
  whatsappDisplay: "+62 858-0982-5540",

  // Pesan default saat user mengklik WhatsApp
  whatsappDefaultMessage: "Halo Tim CPC, saya ingin konsultasi mengenai Sistem Manajemen Konstruksi Perumahan.",

  // Email resmi perusahaan
  companyEmail: "info@cpc-system.id",

  // Alamat kantor resmi
  companyAddress: "Gedung Graha Konstruksi Lt. 8, Jl. TB Simatupang, Jakarta Selatan",

  // Nama Brand
  brandName: "CPC Systems",
  brandTagline: "Sistem Manajemen Konstruksi Perumahan",
};

// Helper function untuk membuat link WhatsApp otomatis
export function getWhatsAppLink(customMessage?: string) {
  const message = customMessage || SITE_CONFIG.whatsappDefaultMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
