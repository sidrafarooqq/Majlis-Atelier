export type Locale = "ar" | "en";

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      contact: "اتصل بنا",
      cta: "تواصل عبر واتساب",
    },
    common: {
      callNow: "اتصل الآن",
      whatsapp: "واتساب",
      learnMore: "اعرف المزيد",
      viewAll: "عرض جميع الأعمال",
      readMore: "اقرأ المزيد",
      bookNow: "احجز الآن",
      since: "منذ 2009",
    },
    hero: {
      eyebrow: "صناعة فاخرة بلمسة سعودية",
      title: "تفصيل ستائر وبليندات فاخرة بالرياض",
      subtitle:
        "ستائر بلاك أوت وشيفون ومخمل وبليندات كهربائية — قياس مجاني بالموقع، خياطة في مشغلنا، وتركيب احترافي مضمون.",
    },
    about: {
      eyebrow: "من نحن",
      title: "حرفة عريقة تلتقي بالتصميم العصري",
      body:
        "منذ أكثر من خمسة عشر عامًا ونحن نُحوّل المنازل والمجالس إلى مساحات فاخرة عبر الستائر المفصّلة والكنب المنجّد يدويًا بأجود الخامات المستوردة. كل قطعة عندنا تُصنع بعناية كأنها لمنزلنا.",
      vision: "رؤيتنا",
      vision_body: "أن نكون الخيار الأول في المملكة لتفصيل وتنجيد الكنب والستائر الفاخرة.",
      mission: "مهمتنا",
      mission_body: "تقديم تجربة تفصيل راقية بخامات أصلية وحرفية عالية وتسليم في الموعد.",
      different: "ما يميّزنا",
      different_body: "خبرة 15+ سنة، استشارة مجانية بالموقع، ضمان على التنجيد، وأسعار شفافة.",
    },
    stats: {
      eyebrow: "أرقام تتحدث عنا",
    },
    services: {
      eyebrow: "أفضل خدماتنا",
      title: "خدمات نقدّمها بشغف الحِرفي",
      curtain_title: "تفصيل الستائر",
      curtain_body:
        "ستائر مفصّلة بمقاسات منزلك من خامات الشيفون والمخمل والكتّان، بأنماط سادة ومطبوعة تناسب كل غرفة.",
      curtain_features: [
        "خامات: شيفون، مخمل، كتّان، بلاك أوت",
        "أنواع: سادة، مطبوعة، طبقات",
        "قياس مجاني في الموقع",
        "تركيب احترافي مع ضمان",
      ],
      sofa_up_title: "تنجيد الكنب",
      sofa_up_body:
        "نُعيد لكنبك رونقه الأول بتنجيد كامل بخامات قماش، مخمل، أو جلد، مع إصلاح الهيكل وحشوات جديدة.",
      sofa_up_features: [
        "خامات: قماش، مخمل، جلد طبيعي",
        "ألوان متعددة حسب الطلب",
        "إصلاح الهيكل والحشوات",
        "ضمان على التنجيد",
      ],
      sofa_make_title: "تفصيل الكنب",
      sofa_make_body:
        "تصاميم مخصصة لكنبك بأشكال كلاسيكية وعصرية وزوايا L و U، تُصنع يدويًا في مشغلنا.",
      sofa_make_features: [
        "أنواع: كلاسيك، مودرن، L، U",
        "تصميم ثلاثي الأبعاد قبل التنفيذ",
        "هياكل خشب زان عالي الجودة",
        "خامات حشو فاخرة ومتينة",
      ],
    },
    cta_banner: {
      title: "هل أعجبتك خدماتنا؟ تواصل معنا اليوم!",
      subtitle: "استشارة مجانية وقياس بالموقع داخل الرياض.",
    },
    portfolio: {
      eyebrow: "معرض أعمالنا",
      title: "مشاريع نفخر بها",
      subtitle: "نماذج من مجالس وستائر وكنب نفّذناها لعملائنا.",
      filters: { all: "الكل", curtains: "ستائر", sofas: "كنب", upholstery: "تنجيد" },
      view: "عرض المشروع",
    },
    testimonials: {
      eyebrow: "آراء العملاء",
      title: "ماذا يقول عملاؤنا",
      items: [
        {
          name: "أبو محمد",
          role: "عميل — الرياض",
          quote: "شغل نظيف وذوق راقي، فصّلوا لي ستائر المجلس وطلعت أحلى من المتوقع.",
        },
        {
          name: "أم خالد",
          role: "عميلة — حي النرجس",
          quote: "نجّدوا الكنب بخامة مخمل فاخرة، الالتزام بالموعد ممتاز والسعر مناسب.",
        },
        {
          name: "فهد العتيبي",
          role: "عميل — حي الياسمين",
          quote: "أفضل تجربة تفصيل كنب، التصميم طلع مطابق تمامًا لما اتفقنا عليه.",
        },
      ],
    },
    faq: {
      eyebrow: "أسئلة شائعة",
      title: "إجابات على أكثر الأسئلة",
      items: [
        { q: "هل تقدّمون خدمة قياس مجاني داخل الرياض؟", a: "نعم، نوفّر زيارة قياس واستشارة مجانية داخل مدينة الرياض." },
        { q: "كم تستغرق مدة تفصيل الستائر؟", a: "عادةً ما بين 5 إلى 10 أيام عمل حسب نوع القماش والكمية." },
        { q: "هل تقدّمون ضمان على التنجيد؟", a: "نعم، نمنح ضمان سنة كاملة على أعمال التنجيد." },
        { q: "ما هي طرق الدفع المتاحة؟", a: "نقبل التحويل البنكي، مدى، وفيزا/ماستر كارد." },
        { q: "هل يمكنني اختيار قماش من عندي؟", a: "بكل تأكيد، يمكنك توفير القماش أو الاختيار من عيناتنا." },
        { q: "هل تشمل الخدمة الفك والتركيب؟", a: "نعم، الفك والتركيب مشمولان في السعر داخل الرياض." },
        { q: "هل تنفّذون مشاريع للفلل والشاليهات؟", a: "نعم، ننفّذ مشاريع سكنية وتجارية بكافة الأحجام." },
      ],
    },
    blog: {
      eyebrow: "من المدونة",
      title: "نصائح وأفكار",
      items: [
        {
          tag: "ستائر",
          date: "10 يونيو 2026",
          title: "كيف تختار قماش الستائر المناسب لكل غرفة؟",
          excerpt: "دليل عملي لاختيار خامة الستائر بناءً على الإضاءة والاستخدام.",
        },
        {
          tag: "كنب",
          date: "2 يونيو 2026",
          title: "متى يحتاج كنبك إلى إعادة تنجيد؟",
          excerpt: "علامات تدل على أن الوقت قد حان لتجديد كنبك.",
        },
        {
          tag: "تصميم",
          date: "25 مايو 2026",
          title: "ألوان 2026 الأكثر طلبًا في المجالس السعودية",
          excerpt: "تعرّف على الألوان الأكثر رواجًا هذا العام.",
        },
      ],
    },
    final_cta: {
      title: "جاهزون لتحويل مجلسك إلى تحفة؟",
      subtitle: "تواصل معنا عبر واتساب الآن واحجز استشارتك المجانية.",
    },
    about_page: {
      title: "من نحن",
      story_title: "حكايتنا",
      story_body:
        "بدأنا منذ عام 2009 في مشغل صغير وسط الرياض، وبفضل ثقة عملائنا تحوّلنا إلى أحد أهم مشاغل تفصيل وتنجيد الكنب والستائر في المملكة. حِرفة آبائنا تلتقي اليوم بتقنيات التصميم الحديثة.",
      values_title: "قيمنا",
      team_title: "فريقنا",
      team: [
        { name: "أحمد الراجحي", role: "مؤسس ومصمم" },
        { name: "سارة الزهراني", role: "مديرة التنفيذ" },
        { name: "محمد العنزي", role: "كبير الحرفيين" },
      ],
      timeline_title: "محطات في رحلتنا",
      timeline: [
        { year: "2009", text: "تأسيس المشغل في الرياض" },
        { year: "2015", text: "افتتاح صالة العرض الأولى" },
        { year: "2020", text: "تجاوزنا 500 مشروع منفّذ" },
        { year: "2024", text: "إطلاق قسم التصميم ثلاثي الأبعاد" },
        { year: "2026", text: "أكثر من 1200 عميل سعيد" },
      ],
    },
    services_page: {
      title: "خدماتنا",
      subtitle: "ثلاث خدمات رئيسية نتقنها منذ 2009",
    },
    portfolio_page: { title: "أعمالنا" },
    contact_page: {
      title: "اتصل بنا",
      subtitle: "نسعد بخدمتك — استشارة مجانية داخل الرياض",
      info_title: "معلومات التواصل",
      form_title: "أرسل رسالة",
      name: "الاسم",
      phone: "رقم الجوال",
      email: "البريد الإلكتروني",
      service: "الخدمة المطلوبة",
      message: "رسالتك",
      submit: "إرسال",
      service_options: ["تفصيل ستائر", "تنجيد كنب", "تفصيل كنب", "استشارة"],
      address: "العنوان",
      email_unavailable: "إرسال البريد الإلكتروني غير مفعّل حاليًا. أرسل استفسارك عبر واتساب الآن.",
      invalid_phone: "يرجى إدخال رقم جوال صحيح.",
      whatsapp_prefill: "إرسال الاستفسار عبر واتساب",
      whatsapp_note: "سيُفتح واتساب برسالة جاهزة لمراجعتها وإرسالها بنفسك.",
    },
    footer: {
      tagline: "حرفة سعودية أصيلة منذ 2009",
      services_col: "خدماتنا",
      links_col: "روابط سريعة",
      contact_col: "تواصل معنا",
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Chat on WhatsApp",
    },
    common: {
      callNow: "Call Now",
      whatsapp: "WhatsApp",
      learnMore: "Learn More",
      viewAll: "View All Work",
      readMore: "Read More",
      bookNow: "Book Now",
      since: "Since 2009",
    },
    hero: {
      eyebrow: "Saudi craft, luxury finish",
      title: "Premium Custom Curtains & Blinds in Riyadh",
      subtitle:
        "Blackout, sheer, velvet and motorized curtains and blinds — free on-site measuring, in-house tailoring and expert installation.",
    },
    about: {
      eyebrow: "About Us",
      title: "Old-world craft meets modern design",
      body:
        "For over fifteen years we have been transforming homes and majlises into luxury spaces with hand-tailored curtains and hand-upholstered sofas using the finest imported materials. Every piece is built as if it were going into our own home.",
      vision: "Our Vision",
      vision_body: "To be the first choice in Saudi Arabia for luxury curtain tailoring and sofa upholstery.",
      mission: "Our Mission",
      mission_body: "Deliver an elevated bespoke experience with original materials, real craft and on-time delivery.",
      different: "What Makes Us Different",
      different_body: "15+ years of expertise, free on-site consultation, upholstery warranty, and transparent pricing.",
    },
    stats: {
      eyebrow: "Numbers That Speak",
    },
    services: {
      eyebrow: "Our Best Services",
      title: "Services we deliver with a craftsman's passion",
      curtain_title: "Curtain Tailoring",
      curtain_body:
        "Curtains tailored to your exact measurements in chiffon, velvet and linen — plain or patterned, perfect for every room.",
      curtain_features: [
        "Fabrics: chiffon, velvet, linen, blackout",
        "Styles: plain, patterned, layered",
        "Free on-site measuring",
        "Professional install with warranty",
      ],
      sofa_up_title: "Sofa Upholstery",
      sofa_up_body:
        "Bring your sofa back to life with full reupholstery in fabric, velvet or genuine leather — frame repair and new foam included.",
      sofa_up_features: [
        "Materials: fabric, velvet, real leather",
        "Wide color palette on request",
        "Frame and foam refurbishment",
        "Upholstery warranty",
      ],
      sofa_make_title: "Custom Sofa Making",
      sofa_make_body:
        "Bespoke sofa designs — classic, modern, L-shape and U-shape — handmade in our Riyadh workshop.",
      sofa_make_features: [
        "Styles: classic, modern, L-shape, U-shape",
        "3D design before production",
        "Premium beech-wood frames",
        "Luxury, long-lasting foam fill",
      ],
    },
    cta_banner: {
      title: "Like what you see? Get in touch today.",
      subtitle: "Free consultation and on-site measuring inside Riyadh.",
    },
    portfolio: {
      eyebrow: "Selected Work",
      title: "Projects we're proud of",
      subtitle: "A glimpse of majlises, curtains and sofas we've crafted for our clients.",
      filters: { all: "All", curtains: "Curtains", sofas: "Sofas", upholstery: "Upholstery" },
      view: "View Project",
    },
    testimonials: {
      eyebrow: "Client Stories",
      title: "What our clients say",
      items: [
        {
          name: "Abu Mohammed",
          role: "Client — Riyadh",
          quote: "Clean work and great taste. The majlis curtains turned out even better than I imagined.",
        },
        {
          name: "Umm Khalid",
          role: "Client — Al Narjis",
          quote: "They reupholstered our sofa in premium velvet, delivered on time and the price was fair.",
        },
        {
          name: "Fahad Al Otaibi",
          role: "Client — Al Yasmin",
          quote: "Best custom sofa experience I've had — the final piece matched the design exactly.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Answers to common questions",
      items: [
        { q: "Do you offer free measuring inside Riyadh?", a: "Yes, free on-site measuring and consultation across Riyadh." },
        { q: "How long does curtain tailoring take?", a: "Usually 5 to 10 working days depending on fabric and quantity." },
        { q: "Do you provide a warranty on upholstery?", a: "Yes, we offer a full one-year warranty on upholstery work." },
        { q: "What payment methods do you accept?", a: "Bank transfer, Mada, and Visa/MasterCard." },
        { q: "Can I bring my own fabric?", a: "Absolutely — bring your own or pick from our sample library." },
        { q: "Is removal and installation included?", a: "Yes, removal and installation are included inside Riyadh." },
        { q: "Do you work on villas and chalets?", a: "Yes, we handle residential and commercial projects of any size." },
      ],
    },
    blog: {
      eyebrow: "From the Journal",
      title: "Tips & ideas",
      items: [
        {
          tag: "Curtains",
          date: "Jun 10, 2026",
          title: "How to choose the right curtain fabric for every room",
          excerpt: "A practical guide to picking fabrics based on light and use.",
        },
        {
          tag: "Sofas",
          date: "Jun 2, 2026",
          title: "When does your sofa actually need reupholstery?",
          excerpt: "The tell-tale signs that it's time to refresh your sofa.",
        },
        {
          tag: "Design",
          date: "May 25, 2026",
          title: "The most-requested 2026 colors for Saudi majlises",
          excerpt: "The colors clients are asking for most this year.",
        },
      ],
    },
    final_cta: {
      title: "Ready to turn your majlis into a masterpiece?",
      subtitle: "Message us on WhatsApp and book your free consultation.",
    },
    about_page: {
      title: "About Us",
      story_title: "Our Story",
      story_body:
        "We started in 2009 in a small Riyadh workshop. Thanks to our clients' trust, we've grown into one of the kingdom's leading ateliers for custom curtains and sofa upholstery. Our fathers' craft meets today's design.",
      values_title: "Our Values",
      team_title: "The Team",
      team: [
        { name: "Ahmed Al-Rajhi", role: "Founder & Designer" },
        { name: "Sarah Al-Zahrani", role: "Production Manager" },
        { name: "Mohammed Al-Anzi", role: "Master Craftsman" },
      ],
      timeline_title: "Milestones",
      timeline: [
        { year: "2009", text: "Workshop founded in Riyadh" },
        { year: "2015", text: "First showroom opens" },
        { year: "2020", text: "500+ completed projects" },
        { year: "2024", text: "3D design studio launched" },
        { year: "2026", text: "1,200+ happy clients" },
      ],
    },
    services_page: {
      title: "Our Services",
      subtitle: "Three signature services we've perfected since 2009",
    },
    portfolio_page: { title: "Portfolio" },
    contact_page: {
      title: "Contact Us",
      subtitle: "We'd love to help — free consultation inside Riyadh",
      info_title: "Contact Information",
      form_title: "Send a message",
      name: "Name",
      phone: "Phone",
      email: "Email",
      service: "Service",
      message: "Message",
      submit: "Send",
      service_options: ["Curtain Tailoring", "Sofa Upholstery", "Custom Sofa", "Consultation"],
      address: "Address",
      email_unavailable: "Email delivery is not set up yet. Send your inquiry on WhatsApp for now.",
      invalid_phone: "Please enter a valid phone number.",
      whatsapp_prefill: "Send inquiry on WhatsApp",
      whatsapp_note: "WhatsApp will open with a draft for you to review and send.",
    },
    footer: {
      tagline: "Authentic Saudi craft since 2009",
      services_col: "Services",
      links_col: "Quick Links",
      contact_col: "Get in touch",
      rights: "All rights reserved",
    },
  },
} as const;

export type Dict = (typeof translations)["ar"];
