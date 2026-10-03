import "@fontsource/teko/500.css";
import "@fontsource/teko/600.css";
import type { Site } from "./lib";

export const SITE: Site = {
  name: "Rao Restaurant",
  sub: { en: "Sweets, chaat & meals · near Sohna", hi: "मिठाई, चाट और खाना · सोहना के पास" },
  banner: { en: "Breakfast, lunch and dinner, 7am to 9pm", hi: "नाश्ता, लंच और डिनर, सुबह 7 से रात 9 बजे तक" },
  phone: "919991785470",
  phoneDisplay: "+91 99917 85470",
  lat: 28.2230351,
  lon: 77.147731,
  hours: [[7, 21], [7, 21], [7, 21], [7, 21], [7, 21], [7, 21], [7, 21]],
  theme: {
    dark: true,
    bg: "#140f08",
    bg2: "#1f170c",
    panel: "#271d10",
    ink: "#fbf3e2",
    ink2: "#d6c8ac",
    ink3: "#988a6e",
    line: "#3a2c17",
    accent: "#e8b420",
    onAccent: "#2a1d00",
    display: "Teko",
    weight: 600,
    upper: true,
  },
  scene: "samosa",
  align: "left",
  hero: {
    title: [
      { en: "Samosa, chai,", hi: "समोसा, चाय," },
      { en: "made fresh every morning.", hi: "हर सुबह ताज़ा।" },
    ],
    proof: {
      en: "4.1 on Google from 334 reviews. Sweets made with pure cow and buffalo milk, hot chaat and full meals from 7am.",
      hi: "गूगल पर 334 रिव्यू से 4.1। शुद्ध गाय-भैंस के दूध की मिठाई, गरम चाट और पूरा खाना, सुबह 7 बजे से।",
    },
    fallback: "/img/p4.jpg",
  },
  marquee: ["Samosa", "Chai", "Namkeen", "Papdi Chaat", "Kachori", "Mathri", "Laddoo", "Mithai"],
  dishes: {
    title: { en: "Fresh off the kadhai", hi: "कड़ाही से सीधे" },
    body: { en: "What visitors wrote on Google, unedited.", hi: "गूगल पर लोगों ने जो लिखा, बिना बदलाव के।" },
    layout: "list",
    items: [
      { name: { en: "Samosa, chai & namkeen", hi: "समोसा, चाय और नमकीन" }, quote: "I tried their samosa and tea, and also picked up some namkeen. Everything tasted really good and was fresh. A nice spot for a quick and satisfying snack break!", img: "/img/p8.jpg" },
      { name: { en: "Fresh snacks", hi: "ताज़ा नाश्ता" }, quote: "Good to see a decent place in a rural area like this. Tasty and fresh stuff!", img: "/img/p14.jpg" },
      { name: { en: "Breakfast to dinner", hi: "नाश्ते से डिनर तक" }, quote: "Nice place..Can have breakfast,lunch and dinner.", img: "/img/p12.jpg" },
    ],
  },
  gallery: {
    title: { en: "Counter, kitchen, chaat", hi: "काउंटर, रसोई, चाट" },
    layout: "mosaic",
    photos: [
      { src: "/img/p4.jpg", alt: "Sweets counter", wide: true },
      { src: "/img/p7.jpg", alt: "Chaat plate" },
      { src: "/img/p8.jpg", alt: "Kachori and mathri" },
      { src: "/img/p12.jpg", alt: "The kitchen" },
      { src: "/img/p9.jpg", alt: "Tray of sweets" },
      { src: "/img/p3.jpg", alt: "Menu board", wide: true },
      { src: "/img/p2.jpg", alt: "Rao Restaurant exterior" },
      { src: "/img/p6.jpg", alt: "Menu board" },
    ],
  },
  feature: {
    kind: "counter",
    title: { en: "Pick up something sweet", hi: "कुछ मीठा ले जाइए" },
    body: { en: "The sweets counter, as customers describe it.", hi: "मिठाई का काउंटर, ग्राहकों के शब्दों में।" },
    img: "/img/p4.jpg",
    items: [
      { label: { en: "Pure milk sweets", hi: "शुद्ध दूध की मिठाई" }, quote: "Best quality food and sweets of pure cow and buffalo milk" },
      { label: { en: "No adulteration", hi: "बिना मिलावट" }, quote: "Original taste not milavat" },
      { label: { en: "Quick service", hi: "तेज़ सर्विस" }, quote: "Best quality all item Good service & fast service" },
    ],
  },
  reviews: {
    title: { en: "A family place, run by Mr. Rao", hi: "फ़ैमिली की जगह, राव साहब की" },
    rating: 4.1,
    dist: [202, 52, 34, 19, 27],
    quotes: [
      { quote: "Very good place for all type of generations. Mr. Rao also a good person.", stars: 5 },
      { quote: "I just says WOW Maja aa gaiya.", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Stop by on your way", hi: "रास्ते में रुकिए" },
    img: "/img/p1.jpg",
    alt: "Rao Restaurant storefront",
    address: { en: "Plus code 64FX+639, Sohna Rural, Gurugram", hi: "प्लस कोड 64FX+639, सोहना ग्रामीण, गुरुग्राम" },
  },
  waHello: {
    en: "Hi Rao Restaurant, I'd like to order sweets. Items: , quantity: , pickup date: ",
    hi: "नमस्ते राव रेस्टोरेंट, मुझे मिठाई का ऑर्डर देना है। आइटम: , मात्रा: , पिकअप की तारीख़: ",
  },
  order: ["dishes", "gallery", "feature", "reviews", "visit"],
};
