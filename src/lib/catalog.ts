import luxuryCurtains from "@/assets/luxury-curtains.jpg";
import sheerCurtains from "@/assets/sheer-curtains.jpg";
import blackoutCurtains from "@/assets/blackout-curtains.jpg";
import doubleCurtains from "@/assets/double-curtains.jpg";
import velvetCurtains from "@/assets/velvet-curtains.jpg";
import linenCurtains from "@/assets/linen-curtains.jpg";
import modernCurtains from "@/assets/modern-curtains.jpg";
import classicCurtains from "@/assets/classic-curtains.jpg";
import motorizedCurtains from "@/assets/motorized-curtains.jpg";
import customMade from "@/assets/custom-made.jpg";
import romanBlinds from "@/assets/roman-blinds.jpg";
import rollerBlinds from "@/assets/roller-blinds.jpg";
import zebraBlinds from "@/assets/zebra-blinds.jpg";
import woodenBlinds from "@/assets/wooden-blinds.jpg";
import officeCurtains from "@/assets/office-curtains.jpg";
import bedroomCurtains from "@/assets/bedroom-curtains.jpg";
import hotelCurtains from "@/assets/hotel-curtains.jpg";
import majlisCurtains from "@/assets/majlis-curtains.jpg";
import fabricDetail from "@/assets/fabric-detail.jpg";
import installation from "@/assets/installation.jpg";
import heroCurtains from "@/assets/hero-curtains.jpg";

export const IMAGES = {
  hero: heroCurtains,
  luxury: luxuryCurtains,
  sheer: sheerCurtains,
  blackout: blackoutCurtains,
  double: doubleCurtains,
  velvet: velvetCurtains,
  linen: linenCurtains,
  modern: modernCurtains,
  classic: classicCurtains,
  motorized: motorizedCurtains,
  custom: customMade,
  roman: romanBlinds,
  roller: rollerBlinds,
  zebra: zebraBlinds,
  wooden: woodenBlinds,
  office: officeCurtains,
  bedroom: bedroomCurtains,
  hotel: hotelCurtains,
  majlis: majlisCurtains,
  fabric: fabricDetail,
  installation,
};

export type CatalogItem = {
  slug: string;
  img: string;
  ar: { title: string; body: string };
  en: { title: string; body: string };
};

export const CURTAIN_CATEGORIES: CatalogItem[] = [
  {
    slug: "luxury",
    img: IMAGES.luxury,
    ar: { title: "ستائر فاخرة", body: "ستائر مطرزة بخامات مستوردة وتفاصيل ذهبية، مصممة للمجالس والصالات الكبيرة." },
    en: { title: "Luxury Curtains", body: "Statement drapery in imported fabrics with refined gold detailing, made for grand majlises and living rooms." },
  },
  {
    slug: "sheer",
    img: IMAGES.sheer,
    ar: { title: "ستائر شيفون (سِتر)", body: "طبقة شفافة تنشر الضوء بنعومة وتحافظ على الخصوصية طوال النهار." },
    en: { title: "Sheer Curtains", body: "A soft translucent layer that diffuses daylight beautifully while keeping your privacy." },
  },
  {
    slug: "blackout",
    img: IMAGES.blackout,
    ar: { title: "ستائر بلاك أوت", body: "عزل كامل للضوء والحرارة والصوت — الخيار الأمثل لغرف النوم وغرف السينما." },
    en: { title: "Blackout Curtains", body: "Total light, heat and sound control — ideal for bedrooms and media rooms." },
  },
  {
    slug: "double",
    img: IMAGES.double,
    ar: { title: "ستائر مزدوجة", body: "طبقتان من الشيفون والقماش السميك للتحكم الكامل في الإضاءة بلمسة فندقية." },
    en: { title: "Double Curtains", body: "Sheer plus heavyweight layers on one track for full light control with a hotel finish." },
  },
  {
    slug: "velvet",
    img: IMAGES.velvet,
    ar: { title: "ستائر مخمل", body: "مخمل فاخر بثقل وانسدال مثالي يمنح الغرفة دفئًا وعمقًا لونيًا." },
    en: { title: "Velvet Curtains", body: "Premium velvet with a perfect weight and drape that adds warmth and depth to any room." },
  },
  {
    slug: "linen",
    img: IMAGES.linen,
    ar: { title: "ستائر كتّان", body: "كتّان طبيعي بألوان هادئة يناسب التصاميم العصرية البسيطة." },
    en: { title: "Linen Curtains", body: "Natural linen in calm tones — the perfect fit for relaxed, contemporary interiors." },
  },
  {
    slug: "modern",
    img: IMAGES.modern,
    ar: { title: "ستائر مودرن", body: "طيّات مموجة (ripple fold) على سكك مخفية بالسقف لمظهر معماري نظيف." },
    en: { title: "Modern Curtains", body: "Ripple-fold panels on recessed ceiling tracks for a clean architectural look." },
  },
  {
    slug: "classic",
    img: IMAGES.classic,
    ar: { title: "ستائر كلاسيك", body: "كسرات كلاسيكية مع كرانيش وربّاطات مزخرفة تليق بالمجالس التقليدية." },
    en: { title: "Classic Curtains", body: "Pinch pleats with pelmets and decorative tiebacks, tailored for traditional majlises." },
  },
  {
    slug: "motorized",
    img: IMAGES.motorized,
    ar: { title: "ستائر كهربائية", body: "تشغيل بالريموت أو التطبيق أو الأوامر الصوتية مع محركات صامتة." },
    en: { title: "Motorized Curtains", body: "Remote, app and voice control with whisper-quiet smart-home motors." },
  },
  {
    slug: "custom",
    img: IMAGES.custom,
    ar: { title: "تفصيل حسب الطلب", body: "قياس بالموقع وخياطة في مشغلنا بالرياض حسب مقاسك وذوقك بالضبط." },
    en: { title: "Custom Made Curtains", body: "On-site measuring and in-house tailoring in our Riyadh atelier — made exactly to your size and taste." },
  },
];

export const BLIND_CATEGORIES: CatalogItem[] = [
  {
    slug: "roman",
    img: IMAGES.roman,
    ar: { title: "ستائر رومانية", body: "طيّات أفقية أنيقة تجمع بين نعومة القماش وعملية الستائر المعدنية." },
    en: { title: "Roman Blinds", body: "Elegant horizontal folds that combine the softness of fabric with the practicality of a blind." },
  },
  {
    slug: "roller",
    img: IMAGES.roller,
    ar: { title: "ستائر رول", body: "تصميم بسيط وعملي بخامات عازلة للشمس، مثالي للمكاتب والمطابخ." },
    en: { title: "Roller Blinds", body: "Simple and practical with sun-filtering fabrics — perfect for offices and kitchens." },
  },
  {
    slug: "zebra",
    img: IMAGES.zebra,
    ar: { title: "ستائر زيبرا", body: "شرائح شفافة ومعتمة متبادلة تتيح لك ضبط الإضاءة بدقة." },
    en: { title: "Zebra Blinds", body: "Alternating sheer and opaque bands let you dial in exactly the light you want." },
  },
  {
    slug: "wooden",
    img: IMAGES.wooden,
    ar: { title: "ستائر خشبية", body: "شرائح خشب طبيعي تمنح المكتب والمكتبة دفئًا وطابعًا راقيًا." },
    en: { title: "Wooden Blinds", body: "Real timber slats that bring warmth and character to studies and libraries." },
  },
  {
    slug: "motorized-blinds",
    img: IMAGES.motorized,
    ar: { title: "ستائر كهربائية ذكية", body: "أتمتة كاملة للبليندات مع جدولة زمنية وربط بأنظمة المنزل الذكي." },
    en: { title: "Motorized Blinds", body: "Fully automated blinds with scheduling and smart-home integration." },
  },
];

export const COPY = {
  ar: {
    nav: { curtains: "الستائر", blinds: "البليندات" },
    curtains_page: {
      title: "مجموعة الستائر",
      subtitle: "كتالوج ستائرنا المفصّلة — من الشيفون الخفيف إلى المخمل الفاخر والستائر الكهربائية.",
      eyebrow: "كتالوج الستائر",
    },
    blinds_page: {
      title: "البليندات والستائر المعدنية",
      subtitle: "رومانية، رول، زيبرا، خشبية وكهربائية — بقياسات دقيقة وتركيب احترافي.",
      eyebrow: "البليندات",
    },
    collection: {
      eyebrow: "مجموعتنا",
      title: "تشكيلة ستائر تناسب كل غرفة",
      subtitle: "اختر من بين أشهر أنواع الستائر لدينا، وكل نوع يُفصّل بمقاسك.",
      all: "عرض كل الستائر",
    },
    spaces: {
      eyebrow: "أين نعمل",
      title: "ستائر للمنازل والمكاتب والفلل والفنادق",
      items: [
        { title: "غرف النوم", body: "بلاك أوت وطبقات ناعمة لنوم عميق." },
        { title: "المجالس", body: "ستائر فاخرة بطابع سعودي أصيل." },
        { title: "المكاتب", body: "حلول عملية أنيقة تقلّل الوهج." },
        { title: "الفنادق والفلل", body: "مشاريع كبيرة بتنفيذ وجدول زمني دقيق." },
      ],
    },
    why: {
      eyebrow: "لماذا نحن",
      title: "لماذا يختارنا عملاء الرياض",
      items: [
        { title: "قياس مجاني بالموقع", body: "نزورك، نقيس، ونقترح الخامة المناسبة — بدون رسوم." },
        { title: "خامات أصلية", body: "أقمشة مختارة بعناية مع عيّنات ملموسة قبل الطلب." },
        { title: "تركيب احترافي", body: "فريق تركيب ستائر بالرياض مدرّب مع سكك وأنظمة تعليق عالية الجودة." },
        { title: "تشطيب وضبط دقيق", body: "تفصيل ستائر حسب المقاس وضبط للكسرات والانسيابية بعد التركيب." },
      ],
    },
    install: {
      eyebrow: "خدمة التركيب",
      title: "من القياس إلى التركيب في خطوات واضحة",
      steps: [
        { title: "زيارة وقياس", body: "نحدد المقاسات ونناقش الأسلوب والإضاءة." },
        { title: "اختيار الخامة", body: "نعرض عينات الأقمشة والألوان في منزلك." },
        { title: "التفصيل", body: "تفصيل ستائر حسب المقاس وخياطة دقيقة في مشغلنا بالرياض." },
        { title: "التركيب", body: "تركيب نظيف وتشطيب نهائي وتنظيف بعد العمل." },
      ],
    },
    quote: "اطلب عرض سعر",
    quoteWhats: "عرض سعر عبر واتساب",
    explore: "استعرض الستائر",
  },
  en: {
    nav: { curtains: "Curtains", blinds: "Blinds" },
    curtains_page: {
      title: "Curtain Collection",
      subtitle: "Our made-to-measure curtain catalogue — from airy sheers to rich velvet and motorized tracks.",
      eyebrow: "Curtain Catalogue",
    },
    blinds_page: {
      title: "Blinds Collection",
      subtitle: "Roman, roller, zebra, wooden and motorized blinds — precisely measured and professionally installed.",
      eyebrow: "Blinds",
    },
    collection: {
      eyebrow: "Our Collection",
      title: "A curtain style for every room",
      subtitle: "Browse our most requested curtain types — each one tailored to your exact measurements.",
      all: "View all curtains",
    },
    spaces: {
      eyebrow: "Where We Work",
      title: "Curtains for homes, offices, villas and hotels",
      items: [
        { title: "Bedrooms", body: "Blackout and soft layers for deeper sleep." },
        { title: "Majlis", body: "Luxury drapery with authentic Saudi character." },
        { title: "Offices", body: "Practical, elegant solutions that cut glare." },
        { title: "Hotels & Villas", body: "Large projects delivered on a precise schedule." },
      ],
    },
    why: {
      eyebrow: "Why Us",
      title: "Why Riyadh clients choose us",
      items: [
        { title: "Free on-site measuring", body: "We visit, measure and advise on the right fabric — at no cost." },
        { title: "Quality fabrics", body: "Carefully selected fabrics with real samples presented before ordering." },
        { title: "Professional installation", body: "Trained Riyadh fitters using high-quality tracks and hardware." },
        { title: "Made-to-measure finishing", body: "Tailored to your exact window dimensions with neat final dressing." },
      ],
    },
    install: {
      eyebrow: "Installation Service",
      title: "From measuring to installation, step by step",
      steps: [
        { title: "Visit & measure", body: "We take exact measurements and discuss style and light." },
        { title: "Choose fabric", body: "Fabric and colour samples presented in your own space." },
        { title: "Tailoring", body: "Precision made-to-measure sewing in our Riyadh workshop." },
        { title: "Installation", body: "Clean fitting, final dressing and a tidy handover." },
      ],
    },
    quote: "Get a Quote",
    quoteWhats: "Get a Free Quote on WhatsApp",
    explore: "Explore Curtains",
  },
} as const;
