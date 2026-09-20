export const BUSINESS = {
  name: "Barber Shop Elegant Touch",
  phoneDisplay: "+974 5209 9978",
  phoneHref: "tel:+97452099978",
  whatsapp: "https://wa.me/97452099978",
  whatsappService: (service) =>
    `https://wa.me/97452099978?text=${encodeURIComponent(
      `Hello Elegant Touch, I'd like to ask about your ${service} service.`
    )}`,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Barber+Shop+Elegant+Touch+Tornado+Tower+Doha+Qatar",
  address: "G Floor, Tornado Tower, Majlis Al Taawon St, Doha, Qatar",
  rating: "4.9",
  reviewCount: 244,
};
