// Portfolio JavaScript - Multilingual Support
const translations = {
    en: {
        logo: "Hossam Elden",
        nav_about: "About",
        nav_projects: "SEO Projects",
        nav_websites: "Websites",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hero_subtitle: "SEO Specialist",
        hero_title: "SEO Specialist Helping Businesses Grow Organically",
        hero_desc: "Helping businesses grow qualified traffic and generate leads through data-driven SEO strategies",
        hero_cta: "View My Work",
        about_label: "About Me",
        about_title: "Professional Excellence in SEO & Development",
        about_p1: "I am an <span class=\"highlight\">SEO Specialist</span> with 2+ years of hands-on experience working across a mix of agency, freelance, and in-house projects. I help businesses build a strong organic presence through strategic SEO planning, technical optimization, and search-focused execution.",
        about_p2: "My core expertise includes SEO strategy and planning, technical SEO audits, on-page and content optimization, in-depth keyword research (both commercial and informational), and off-page SEO. I have worked on news platforms, e-commerce stores, and service-based websites, focusing on improving keyword rankings, enhancing site architecture, <span class=\"highlight\">and increasing the quality of organic traffic.</span>",
        about_p3: "Alongside SEO, I design and build WordPress websites from the ground up, ensuring they are technically sound, performance-optimized, and fully aligned with search engine best practices. My work is driven by data and supported by tools such as SEMrush, Google Search Console, Google Analytics, and Screaming Frog, allowing me to deliver scalable solutions and measurable, long-term results.",
        seo_label: "SEO Portfolio",
        seo_title: "Strategic SEO Implementations",
        seo_desc: "Comprehensive SEO campaigns delivering measurable improvements in organic visibility, traffic quality, and search performance.",
        project1_title: "Local Pharmacy SEO Growth in Saudi Arabia",
        project_overview: "Project Overview",
        project1_overview_desc: "SEO optimization for a local pharmacy website in Saudi Arabia, focused on improving search visibility, product discoverability, and organic performance within a highly competitive local market.",
        project_challenges: "SEO Challenges Identified",
        project1_challenge1: "Inconsistent optimization across key pages and products",
        project1_challenge2: "Limited alignment between product content and search intent",
        project1_challenge3: "Weak organic visibility in local search results",
        project_strategy: "SEO Strategy & Implementation",
        project1_strategy1: "SEO Foundation: Established a consistent, intent-aligned foundation across all pages.",
        project1_strategy2: "Product Optimization: Enhanced pharmaceutical visibility through better structure and internal linking.",
        project1_strategy3: "Search-Friendly Content: Optimized product-level content to match local medical search intent.",
        project1_result1: "Higher CTR in Local SERPs",
        project1_result2: "Improved Product Visibility",
        learn_more: "Learn More",
        project2_title: "Scaling EU E-commerce via International SEO",
        project2_overview_desc: "SEO optimization for a Germany-based e-commerce store targeting Germany, the UK, and France, aimed at improving organic visibility and sales performance across competitive markets.",
        project2_challenge1: "High volume of 404 pages and broken links",
        project2_challenge2: "Weak crawlability and site structure",
        project2_challenge3: "Poor product keyword targeting and content visibility",
        project2_strategy1: "Full technical SEO audit and issue resolution",
        project2_strategy2: "Product-focused keyword research and content optimization",
        project2_strategy3: "Targeted backlink efforts to support key pages",
        project2_strategy4: "Site architecture improvements and continuous performance monitoring",
        project2_result1: "+987% Organic Growth",
        project2_result2: "Stronger Rankings",
        project2_result3: "High-Intent Traffic",
        project3_title: "SEO Foundation & Growth for a New Art News Platform",
        project3_overview_desc: "SEO setup and growth strategy for a newly launched art-focused news website in Turkey, designed to establish strong organic visibility and long-term scalability from day one.",
        project3_challenge1: "Brand-new domain with no search history or authority",
        project3_challenge2: "Lack of SEO-ready site structure and content framework",
        project3_challenge3: "Need for fast indexing and early visibility in Google News style environments",
        project3_strategy1: "Built a solid SEO foundation from scratch (technical setup, architecture, indexing)",
        project3_strategy2: "Defined content and category structure aligned with search intent",
        project3_strategy3: "On-page optimization to support crawlability and fast content discovery",
        project3_strategy4: "Keyword research focused on art news, events, and informational queries",
        project3_result1: "Optimized for News SEO",
        project3_result2: "Clean Crawl & Indexation",
        project3_result3: "Content Discoverability Improved",
        project3_result4: "Early Search Traction",
        dev_label: "Development Portfolio",
        dev_title: "WordPress eCommerce Solutions",
        dev_desc: "Full-scale WordPress development projects delivering exceptional user experience, conversion optimization, and SEO-ready architecture.",
        dev_project1_title: "eCommerce Platform for a French Company",
        dev_project1_desc: "End-to-end WordPress & WooCommerce design and development for a France-based eCommerce store targeting multiple European markets.\n\nThe project covered full UI/UX design, custom theme development, and performance optimization, alongside an SEO-ready architecture to support product discoverability, multilingual expansion, and scalable cross-border growth.\n\nBuilt with a mobile-first approach, streamlined checkout flow, and advanced product structure to maximize conversions while maintaining fast load times and clean site architecture.",
        tag_woocommerce: "WooCommerce",
        tag_mobile_opt: "Mobile Optimized",
        tag_seo_opt: "SEO Optimized",
        dev_project2_title: "Plastic Factory (Saudi Arabia)",
        dev_project2_desc: "End-to-end WordPress website design and development for a plastic manufacturing company in Saudi Arabia, built from scratch to serve B2B, wholesale, and corporate clients.\n\nThe project covered full website architecture, UI/UX design, and performance optimization, alongside an SEO-ready structure to support product visibility, lead generation, and scalable organic growth within the industrial sector.",
        tag_wp_dev: "Custom WordPress Development",
        tag_b2b_ux: "B2B-Focused UX & Structure",
        tag_seo_arch: "SEO-Ready Architecture",
        tag_perf: "Fast Loading Performance",
        skills_label: "Core Competencies",
        skills_title: "Skills & Expertise",
        seo_expertise: "SEO Expertise",
        skill_seo1: "Technical SEO & Site Structure",
        skill_seo2: "On-Page SEO & Content Optimization",
        skill_seo3: "Keyword Research & Search Intent",
        skill_seo4: "Core Web Vitals Optimization",
        skill_seo5: "Schema Markup & Structured Data",
        skill_seo6: "Link Building & Authority Growth",
        skill_seo7: "Local SEO & Google Business Profile",
        wp_dev: "WordPress Development",
        skill_wp1: "Custom WordPress Websites",
        skill_wp2: "WooCommerce Development",
        skill_wp3: "SEO-Friendly Architecture",
        skill_wp4: "Performance & Speed Optimization",
        skill_wp5: "Responsive & Mobile-First Design",
        skill_wp6: "Secure & Scalable Builds",
        skill_wp7: "Payment Gateway Integration",
        contact_label: "Contact",
        contact_title: "Get In Touch",
        contact_desc: "Let's discuss how I can help elevate your digital presence through strategic SEO and high-performance web development.",
        email: "Email",
        phone: "Phone",
        location: "Location",
        location_val: "CAIRO/MAADI",
        form_name: "Your Name",
        form_name_placeholder: "John Doe",
        form_email: "Your Email",
        form_email_placeholder: "john@example.com",
        form_message: "Your Message",
        form_message_placeholder: "Tell me about your project...",
        form_submit: "SEND MESSAGE",
        footer_text: "&copy; 2026 SEO Specialist & WordPress Developer. Crafted with precision and purpose."
    },
    ar: {
        logo: "حسام الدين",
        nav_about: "عني",
        nav_projects: "مشاريع SEO",
        nav_websites: "المواقع",
        nav_skills: "المهارات",
        nav_contact: "اتصل بي",
        hero_subtitle: "خبير سيو (SEO)",
        hero_title: "خبير سيو يساعد الشركات على النمو بشكل طبيعي",
        hero_desc: "مساعدة الشركات على زيادة الزيارات المؤهلة وتحقيق المبيعات من خلال استراتيجيات سيو مبنية على البيانات",
        hero_cta: "مشاهدة أعمالي",
        about_label: "من أنا",
        about_title: "تميز مهني في تحسين محركات البحث والتطوير",
        about_p1: "أنا <span class=\"highlight\">أخصائي سيو (SEO)</span> بخبرة تزيد عن سنتين في العمل على مجموعة متنوعة من المشاريع في الوكالات، العمل الحر، والمشاريع الداخلية. أساعد الشركات على بناء حضور قوي عبر محركات البحث من خلال التخطيط الاستراتيجي، والتحسين التقني، والتنفيذ الذي يركز على نتائج البحث.",
        about_p2: "تشمل خبرتي الأساسية استراتيجيات السيو والتخطيط، تدقيق السيو التقني، تحسين الصفحات والمحتوى، البحث المتعمق عن الكلمات المفتاحية (التجارية والمعلوماتية)، والسيو الخارجي. عملت على منصات إخبارية، متاجر إلكترونية، ومواقع خدمات، مع التركيز على تحسين ترتيب الكلمات، وتعزيز هيكلة الموقع، <span class=\"highlight\">وزيادة جودة الزيارات المجانية.</span>",
        about_p3: "إلى جانب السيو، أقوم بتصميم وبناء مواقع ووردبريس من الصفر، مع التأكد من أنها سليمة تقنياً، ومحسنة للأداء، ومتوافقة تماماً مع أفضل ممارسات محركات البحث. عملي مدفوع بالبيانات ومدعوم بأدوات مثل SEMrush و Google Search Console و Google Analytics و Screaming Frog، مما يتيح لي تقديم حلول قابلة للتوسع ونتائج ملموسة وطويلة الأمد.",
        seo_label: "معرض أعمال السيو",
        seo_title: "تنفيذ استراتيجيات سيو ناجحة",
        seo_desc: "حملات سيو شاملة تحقق تحسينات ملموسة في الظهور، جودة الزيارات، وأداء البحث.",
        project1_title: "نمو السيو لصيدلية محلية في السعودية",
        project_overview: "نظرة عامة على المشروع",
        project1_overview_desc: "تحسين محركات البحث لموقع صيدلية محلية في المملكة العربية السعودية، مع التركيز على تحسين الظهور في البحث، واكتشاف المنتجات، والأداء العضوي في سوق محلي تنافسي للغاية.",
        project_challenges: "تحديات السيو المحددة",
        project1_challenge1: "تحسين غير متناسق عبر الصفحات والمنتجات الأساسية",
        project1_challenge2: "توافق محدود بين محتوى المنتج ونية البحث",
        project1_challenge3: "ظهور عضوي ضعيف في نتائج البحث المحلية",
        project_strategy: "استراتيجية السيو والتنفيذ",
        project1_strategy1: "أساس السيو: وضع أساس متسق ومتوافق مع نية البحث عبر جميع الصفحات.",
        project1_strategy2: "تحسين المنتجات: تعزيز ظهور الأدوية من خلال هيكلة أفضل وربط داخلي.",
        project1_strategy3: "محتوى صديق للبحث: تحسين محتوى المنتجات ليتوافق مع نية البحث الطبي المحلي.",
        project1_result1: "نسبة نقر أعلى في نتائج البحث المحلية",
        project1_result2: "تحسين ظهور المنتجات",
        learn_more: "اقرأ المزيد",
        project2_title: "توسيع التجارة الإلكترونية في الاتحاد الأوروبي عبر السيو الدولي",
        project2_overview_desc: "تحسين السيو لمتجر إلكتروني مقره ألمانيا يستهدف ألمانيا والمملكة المتحدة وفرنسا، بهدف تحسين الظهور العضوي وأداء المبيعات عبر الأسواق التنافسية.",
        project2_challenge1: "حجم كبير من صفحات 404 والروابط المعطلة",
        project2_challenge2: "ضعف في الزحف وهيكلة الموقع",
        project2_challenge3: "استهداف سيء للكلمات المفتاحية للمنتجات وظهور المحتوى",
        project2_strategy1: "تدقيق سيو تقني كامل وحل المشكلات",
        project2_strategy2: "بحث عن الكلمات المفتاحية يركز على المنتج وتحسين المحتوى",
        project2_strategy3: "جهود مستهدفة لبناء الروابط الخلفية لدعم الصفحات الرئيسية",
        project2_strategy4: "تحسين هيكلة الموقع ومراقبة الأداء المستمرة",
        project2_result1: "+987% نمو عضوي",
        project2_result2: "تصنيفات أقوى",
        project2_result3: "زيارات عالية النية",
        project3_title: "تأسيس ونمو السيو لمنصة أخبار فنية جديدة",
        project3_overview_desc: "إعداد السيو واستراتيجية النمو لموقع إخباري فني تم إطلاقه حديثاً في تركيا، مصمم لبناء ظهور قوي وقابلية للتوسع منذ اليوم الأول.",
        project3_challenge1: "نطاق جديد بدون تاريخ بحث أو سلطة",
        project3_challenge2: "نقص في هيكلة الموقع الجاهزة للسيو وإطار المحتوى",
        project3_challenge3: "حاجة لأرشفة سريعة وظهور مبكر في بيئات أخبار جوجل",
        project3_strategy1: "بناء أساس سيو صلب من الصفر (الإعداد التقني، الهيكلة، الأرشفة)",
        project3_strategy2: "تحديد هيكلة المحتوى والأقسام بما يتوافق مع نية البحث",
        project3_strategy3: "تحسين الصفحات لدعم الزحف واكتشاف المحتوى السريع",
        project3_strategy4: "بحث كلمات مفتاحية يركز على أخبار الفن والفعاليات والاستفسارات المعلوماتية",
        project3_result1: "محسن لسيو الأخبار",
        project3_result2: "زحف وأرشفة نظيفة",
        project3_result3: "تحسين اكتشاف المحتوى",
        project3_result4: "نتائج بحث مبكرة",
        dev_label: "معرض أعمال التطوير",
        dev_title: "حلول التجارة الإلكترونية عبر ووردبريس",
        dev_desc: "مشاريع تطوير ووردبريس كاملة تقدم تجربة مستخدم استثنائية، وتحسين التحويل، وهيكلة جاهزة للسيو.",
        dev_project1_title: "منصة تجارة إلكترونية لشركة فرنسية",
        dev_project1_desc: "تصميم وتطوير متجر إلكتروني متكامل باستخدام ووردبريس وووكومرس لشركة مقرها فرنسا تستهدف عدة أسواق أوروبية.\n\nشمل المشروع تصميم واجهة المستخدم بالكامل، وتطوير قالب مخصص، وتحسين الأداء، بالإضافة إلى هيكلة جاهزة للسيو لدعم ظهور المنتجات، والتوسع متعدد اللغات، والنمو العابر للحدود.\n\nبني بنهج يركز على الهاتف المحمول، وعملية دفع مبسطة، وهيكلة متقدمة للمنتجات لزيادة التحويلات مع الحفاظ على سرعة التحميل وهيكلة نظيفة للموقع.",
        tag_woocommerce: "ووكومرس",
        tag_mobile_opt: "محسن للجوال",
        tag_seo_opt: "محسن للسيو",
        dev_project2_title: "مصنع بلاستيك (المملكة العربية السعودية)",
        dev_project2_desc: "تصميم وتطوير موقع ووردبريس متكامل لمصنع بلاستيك في السعودية، بني من الصفر لخدمة عملاء B2B والجملة والشركات.\n\nشمل المشروع هيكلة الموقع بالكامل، وتصميم واجهة المستخدم، وتحسين الأداء، بالإضافة إلى هيكلة جاهزة للسيو لدعم ظهور المنتجات، وجذب العملاء المحتملين، والنمو العضوي القابل للتوسع في القطاع الصناعي.",
        tag_wp_dev: "تطوير ووردبريس مخصص",
        tag_b2b_ux: "تجربة مستخدم وهيكلة تركز على B2B",
        tag_seo_arch: "هيكلة جاهزة للسيو",
        tag_perf: "أداء تحميل سريع",
        skills_label: "الكفاءات الأساسية",
        skills_title: "المهارات والخبرات",
        seo_expertise: "خبرة السيو (SEO)",
        skill_seo1: "السيو التقني وهيكلة المواقع",
        skill_seo2: "سيو الصفحات وتحسين المحتوى",
        skill_seo3: "بحث الكلمات المفتاحية ونية البحث",
        skill_seo4: "تحسين مؤشرات الويب الحيوية",
        skill_seo5: "بيانات سكيما والبيانات المنظمة",
        skill_seo6: "بناء الروابط ونمو السلطة",
        skill_seo7: "السيو المحلي وحساب جوجل للأعمال",
        wp_dev: "تطوير ووردبريس",
        skill_wp1: "مواقع ووردبريس مخصصة",
        skill_wp2: "تطوير متاجر ووكومرس",
        skill_wp3: "هيكلة صديقة لمحركات البحث",
        skill_wp4: "تحسين الأداء والسرعة",
        skill_wp5: "تصميم متجاوب ويركز على الجوال",
        skill_wp6: "بناء آمن وقابل للتوسع",
        skill_wp7: "دمج بوابات الدفع",
        contact_label: "اتصال",
        contact_title: "تواصل معي",
        contact_desc: "دعنا نناقش كيف يمكنني مساعدتك في تعزيز حضورك الرقمي من خلال السيو الاستراتيجي وتطوير الويب عالي الأداء.",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "الموقع",
        location_val: "القاهرة / المعادي",
        form_name: "اسمك",
        form_name_placeholder: "جون دو",
        form_email: "بريدك الإلكتروني",
        form_email_placeholder: "john@example.com",
        form_message: "رسالتك",
        form_message_placeholder: "أخبرني عن مشروعك...",
        form_submit: "إرسال الرسالة",
        footer_text: "&copy; 2026 خبير سيو ومطور ووردبريس. صنع بدقة وإتقان."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const htmlTag = document.getElementById('html-tag');
    
    let currentLang = localStorage.getItem('preferredLang') || 'en';
    
    const updateContent = (lang) => {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Update all placeholders with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Update direction and lang attribute
        htmlTag.setAttribute('lang', lang);
        htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update button text
        langBtn.textContent = lang === 'en' ? 'AR' : 'EN';
        
        // Save preference
        localStorage.setItem('preferredLang', lang);
    };

    // Initial load
    updateContent(currentLang);

    // Toggle language
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        updateContent(currentLang);
    });

    console.log('Portfolio Loaded with Multilingual Support');
});
