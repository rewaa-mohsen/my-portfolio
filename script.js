/**
 * REWAA MOHSEN — PERSONAL PORTFOLIO INTERACTIVE LOGIC
 * Features:
 * 1. Dark/Light Mode Theme Toggle (LocalStorage persistence)
 * 2. Complete Bilingual Support (English / Arabic RTL)
 * 3. Mobile Navigation Drawer & Backdrop
 * 4. Interactive Hero Code Terminal Simulator
 * 5. Dynamic Technical Skills Category Filter (3 clean cards)
 * 6. Interactive Modals (Curriculum Vitae Viewer & Project Details)
 * 7. One-Click Clipboard Copying
 * 8. Contact Form Client-Side Validation & Toast Notifications
 * 9. Active Link Scroll-Spy & Smooth Back-to-Top
 */

(function () {
  'use strict';

  // ==========================================================================
  // BILINGUAL TRANSLATION DICTIONARY (ENGLISH / ARABIC)
  // ==========================================================================
  const translations = {
    en: {
      // Ticker & Brand
      tickerStatus: "Open to Software & Full-Stack Opportunities",
      tickerUni: "Lotus University '28",
      tickerDepi: "DEPI Full-Stack .NET Trainee",
      brandName: "Rewaa Mohsen",
      brandRole: "Software Developer",
      langSwitchLabel: "العربية",

      // Navigation Links
      navHome: "Home",
      navAbout: "About",
      navSkills: "Skills",
      navExperience: "Experience",
      navProjects: "Projects",
      navContact: "Contact",

      // Hero Section
      heroStatus: "Computer Science Student & Trainee",
      heroGreeting: "Hello, I'm",
      heroName: "Rewaa Mohsen",
      heroSubtitle: "Computer Science Student • Aspiring Software Developer",
      heroIntro: "Computer Science student seeking to develop practical experience in software and full-stack development. Building .NET full-stack solutions and modern web applications.",
      tagEdu: "Lotus University '28",
      tagDepi: "DEPI .NET Trainee",
      tagStack: "C# • C++ • SQL • Web",
      heroBtnContact: "Contact Me",
      heroBtnCv: "Download CV",
      terminalStatus: "Build Succeeded • 0 Errors",
      terminalRun: "Run Code",
      terminalOutMsg: "Ready for high-impact software projects!",

      // About & Education Section
      aboutBadge: "About Me",
      aboutTitle: "Education & Academic Background",
      aboutSubtitle: "Solid computer science foundations combined with ongoing hands-on full-stack development training.",
      eduPill: "Degree Program",
      eduDegree: "Bachelor of Computer Science",
      eduUni: "Lotus University",
      eduDesc: "Pursuing rigorous academic studies covering modern computing fundamentals, algorithmic thinking, software engineering design principles, and scalable system architectures.",
      eduGradLabel: "Expected Graduation:",
      eduMilestoneProgress: "In Progress (Expected 2028)",

      // Technical Skills Section (3 Streamlined Cards)
      skillsBadge: "Core Competencies",
      skillsTitle: "Technical Skills & Expertise",
      skillsSubtitle: "Streamlined core competencies across modern programming languages, full-stack web technologies, computer science principles, and databases.",
      filterAll: "All Skills",
      filterProg: "Programming",
      filterWeb: "Web Development",
      filterCsDb: "CS & Database",

      // Skill Card 1: Programming
      skillCatProg: "Programming",
      skillCatProgDesc: "Core languages used for algorithm development, object-oriented systems, and full-stack software.",
      skillBadgeCount1: "2 Languages",
      levelDotnet: ".NET Core",
      levelCore: "Core",

      // Skill Card 2: Web Development
      skillCatWeb: "Web Development",
      skillCatWebDesc: "Modern frontend markup, responsive styling, and full-stack .NET web engineering.",
      skillBadgeCount2: "3 Technologies",
      levelSemantic: "Semantic",
      levelResponsive: "Responsive & Grid",
      levelFullstack: "ASP.NET Core",

      // Skill Card 3: Computer Science & Database
      skillCatCsDb: "Computer Science & Database",
      skillCatCsDbDesc: "Fundamental algorithmic problem-solving, clean object-oriented architecture, and relational database systems.",
      skillBadgeCount3: "3 Pillars",
      levelAlgorithms: "Logic",
      levelOop: "Architecture",
      levelRelational: "Relational DB",

      // Experience Section
      expBadge: "Professional Journey",
      expTitle: "Training & Practical Experience",
      expSubtitle: "Intensive hands-on technical training sponsored by national technology leadership initiatives.",
      expStatusOngoing: "Ongoing",
      expPeriod: "2024 - Present",
      expRole: "Full-Stack .NET Development Trainee",
      expCompany: "Digital Egypt Pioneers Initiative (DEPI)",
      expDesc: "Building practical knowledge in full-stack development through structured training and hands-on assignments. Developing production-ready .NET backends, relational databases, and dynamic web interfaces.",
      expH1: "C# Programming & Object-Oriented Architecture for enterprise software.",
      expH2: "Hands-on experience with ASP.NET Core, MVC patterns, and RESTful API structures.",
      expH3: "Relational database design, query optimization, and SQL Server integration.",
      expH4: "Full-stack web fundamentals linking responsive frontend UI with backend services.",

      // Projects Section
      projBadge: "Portfolio Work",
      projTitle: "Featured Projects",
      projSubtitle: "Demonstrating practical web architecture, organized content modeling, and interactive user experiences.",
      projType: "Academic Web Project",
      projName: "World Food Journey",
      projDetail1: "Developed an academic web project focused on discovering food and cuisines from different countries.",
      projDetail2: "Structured food, drinks, and dessert content into an organized, intuitive browsing experience.",
      projDetail3: "Applied fundamental web development concepts to build an interactive project interface.",
      projBtnView: "Explore Project Details",

      // Contact Section
      contactBadge: "Get In Touch",
      contactTitle: "Let's Connect & Build Together",
      contactSubtitle: "Whether you have an internship opportunity, project collaboration, or just want to connect, feel free to reach out!",
      contactEmailLabel: "Email Address",
      contactPhoneLabel: "Phone Number",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send Message",
      phName: "John Doe",
      phEmail: "name@example.com",
      phSubject: "Project Inquiry / Job Opportunity",
      phMessage: "Hello Rewaa, I would like to discuss...",

      // Footer
      footerTagline: "Computer Science Student & Full-Stack .NET Trainee crafting high-performance, modern digital products.",
      footerNavTitle: "Quick Links",
      footerConnectTitle: "Connect",
      footerRights: "All rights reserved. Built with Vanilla HTML, CSS & JavaScript.",
      backToTop: "Back to Top",

      // Modals
      cvModalHeading: "Rewaa Mohsen — Professional CV",
      cvPersonSub: "Computer Science Student | Aspiring Software Developer",
      cvSummaryTitle: "Professional Summary",
      cvSummaryText: "Computer Science student seeking to develop practical experience in software and full-stack development. Building .NET full-stack solutions and modern web applications with a focus on clean object-oriented architecture and user-friendly interfaces.",
      cvEduTitle: "Education",
      cvEduDegree: "Bachelor of Computer Science",
      cvEduExp: "Expected Graduation: 2028",
      cvEduUni: "Lotus University",
      cvEduFocus: "Focus: Full-Stack .NET & Software Engineering",
      cvExpTitle: "Training & Experience",
      cvExpRole: "Full-Stack .NET Development Trainee",
      cvExpStatus: "Ongoing (2024 - Present)",
      cvExpOrg: "Digital Egypt Pioneers Initiative (DEPI)",
      cvExpDesc: "Building practical knowledge in full-stack development through structured training and hands-on assignments. Mastering C#, ASP.NET Core, relational databases (SQL), and modern web interfaces.",
      cvProjTitle: "Academic Projects",
      cvProjName: "World Food Journey",
      cvProjB1: "Developed an academic web project focused on discovering food and cuisines from different countries.",
      cvProjB2: "Structured food, drinks, and dessert content into an organized browsing experience.",
      cvProjB3: "Applied fundamental web development concepts (HTML, CSS, JavaScript) to build an interactive project interface.",
      cvSkillsTitle: "Technical Skills",
      cvBtnPrint: "Print / Save as PDF",
      cvBtnDownload: "Download Resume File",

      projModalPill: "Academic Web Project",
      projModalHeading: "World Food Journey — Project Showcase",
      projModalIntro: "World Food Journey is an academic web application created to demonstrate core web engineering, clean layout design, and intuitive categorization of international cuisines.",
      projF1Title: "Multi-Country Discovery",
      projF1Desc: "Allows users to explore culinary traditions across continents with curated descriptions, cultural heritage, and authentic recipes.",
      projF2Title: "Structured Categories",
      projF2Desc: "Categorized cleanly into main dishes, traditional drinks, and sweet desserts for an effortless navigation flow.",
      projF3Title: "Lightweight & Responsive",
      projF3Desc: "Constructed using semantic HTML5, fluid CSS3 media queries, and responsive interactive elements without heavy dependencies.",
      projTechTitle: "Technology Highlights",
      projModalClose: "Close Details",

      // Toast Messages
      toastEmailCopiedTitle: "Email Copied!",
      toastEmailCopiedDesc: "RewaaMohsen9@gmail.com copied to clipboard.",
      toastFormSuccessTitle: "Message Received!",
      toastFormSuccessDesc: "Thank you for reaching out. Rewaa will respond shortly.",
      toastErrorTitle: "Form Error",
      toastErrorDesc: "Please fill in the required fields correctly."
    },

    ar: {
      // Ticker & Brand
      tickerStatus: "متاحة لفرص تطوير البرمجيات وتطبيقات الويب المتكاملة",
      tickerUni: "جامعة اللوتس '28",
      tickerDepi: "متدربة تطوير .NET متكامل - مبادرة DEPI",
      brandName: "رواء محسن",
      brandRole: "مطورة برمجيات",
      langSwitchLabel: "English",

      // Navigation Links
      navHome: "الرئيسية",
      navAbout: "عنّي",
      navSkills: "المهارات",
      navExperience: "الخبرة والتدريب",
      navProjects: "المشاريع",
      navContact: "تواصل معي",

      // Hero Section
      heroStatus: "طالبة علوم حاسب ومتدربة تطوير برمجيات",
      heroGreeting: "أهلاً، أنا",
      heroName: "رواء محسن",
      heroSubtitle: "طالبة علوم حاسب • مطورة برمجيات واعدة",
      heroIntro: "طالبة علوم حاسب تسعى لاكتساب وتطوير خبرة عملية في هندسة البرمجيات وتطوير تطبيقات الويب المتكاملة (Full-Stack). بناء وتطوير حلول .NET وتطبيقات ويب حديثة وموثوقة.",
      tagEdu: "جامعة اللوتس '28",
      tagDepi: "متدربة مسار .NET مبادرة DEPI",
      tagStack: "C# • C++ • SQL • Web",
      heroBtnContact: "تواصَل معي",
      heroBtnCv: "تحميل السيرة الذاتية",
      terminalStatus: "تم البناء بنجاح • 0 أخطاء",
      terminalRun: "تشغيل الكود",
      terminalOutMsg: "مستعدة لبناء مشاريع برمجية عالية الأثر والقيمة!",

      // About & Education Section
      aboutBadge: "نبذة عنّي",
      aboutTitle: "التعليم والخلفية الأكاديمية",
      aboutSubtitle: "أسس أكاديمية متينة في علوم الحاسب مدعومة بتدريب عملي ومكثف في تطوير الويب المتكامل.",
      eduPill: "البرنامج الأكاديمي",
      eduDegree: "بكالوريوس علوم الحاسب",
      eduUni: "جامعة اللوتس",
      eduDesc: "دراسة أكاديمية متخصصة تغطي أساسيات الحوسبة الحديثة، التفكير الخوارزمي، مبادئ هندسة البرمجيات وتصميم الأنظمة القابلة للتوسع.",
      eduGradLabel: "سنة التخرج المتوقعة:",
      eduMilestoneProgress: "قيد الدراسة (التخرج المتوقع 2028)",

      // Technical Skills Section (3 Streamlined Cards)
      skillsBadge: "الكفاءات والقدرات",
      skillsTitle: "المهارات والخبرات التقنية",
      skillsSubtitle: "كفاءات أساسية مركّزة في لغات البرمجة الحديثة، تقنيات الويب المتكامل، مفاهيم علوم الحاسب وقواعد البيانات.",
      filterAll: "جميع المهارات",
      filterProg: "البرمجة",
      filterWeb: "تطوير الويب",
      filterCsDb: "علوم الحاسب وقواعد البيانات",

      // Skill Card 1: Programming
      skillCatProg: "البرمجة",
      skillCatProgDesc: "لغات أساسية لتطوير الخوارزميات، الأنظمة البرمجية كائنية التوجه وتطبيقات الويب.",
      skillBadgeCount1: "لغتان",
      levelDotnet: "بيئة .NET",
      levelCore: "أساسي",

      // Skill Card 2: Web Development
      skillCatWeb: "تطوير الويب",
      skillCatWebDesc: "هيكلة وتصميم واجهات ويب حديثة ومتجاوبة، وتطوير تطبيقات ويب متكاملة باستخدام .NET.",
      skillBadgeCount2: "3 تقنيات",
      levelSemantic: "دلالي قياسي",
      levelResponsive: "مرن ومتجاوب",
      levelFullstack: "ASP.NET Core",

      // Skill Card 3: Computer Science & Database
      skillCatCsDb: "علوم الحاسب وقواعد البيانات",
      skillCatCsDbDesc: "حل المشكلات الخوارزمية، البنية البرمجية كائنية التوجه، وأنظمة قواعد البيانات العلائقية.",
      skillBadgeCount3: "3 ركائز",
      levelAlgorithms: "منطق",
      levelOop: "بنية",
      levelRelational: "قواعد علائقية",

      // Experience Section
      expBadge: "المسار المهني والتدريب",
      expTitle: "التدريب والخبرة العملية",
      expSubtitle: "تدريب تقني تطبيقي مكثف برعاية المبادرات الوطنية الرائدة لبناء الكوادر التكنولوجية.",
      expStatusOngoing: "مستمر حالياً",
      expPeriod: "2024 - حتى الآن",
      expRole: "متدربة تطوير .NET متكامل (Full-Stack)",
      expCompany: "مبادرة رواد مصر الرقمية (DEPI)",
      expDesc: "بناء وتطوير مهارات عملية متقدمة في تطوير التطبيقات المتكاملة من خلال تدريب منهجي مكثف. تطوير خلفيات .NET جاهزة للإنتاج، قواعد بيانات علائقية وواجهات ويب ديناميكية.",
      expH1: "برمجة C# وبنية الأنظمة كائنية التوجه لبرمجيات المؤسسات.",
      expH2: "خبرة عملية في ASP.NET Core وأنماط MVC وهياكل RESTful API.",
      expH3: "تصميم قواعد البيانات العلائقية وتحسين الاستعلامات وتكامل SQL Server.",
      expH4: "أساسيات الويب المتكامل لربط واجهات المستخدم الأمامية المتجاوبة بالخدمات الخلفية.",

      // Projects Section
      projBadge: "أعمال المحفظة",
      projTitle: "المشاريع المميزة",
      projSubtitle: "إثبات مهارات بنية الويب العملية، نمذجة المحتوى المنظم، وتجارب المستخدم التفاعلية.",
      projType: "مشروع ويب أكاديمي",
      projName: "رحلة أطعمة العالم",
      projDetail1: "تطوير مشروع ويب أكاديمي يهدف إلى استكشاف الأطعمة والمطابخ التقليدية من مختلف دول العالم.",
      projDetail2: "تنظيم وتصنيف محتوى المأكولات والمشروبات والحلويات في تجربة تصفح منظمة وسهلة الاستخدام.",
      projDetail3: "تطبيق مفاهيم تطوير الويب الأساسية لبناء واجهة تفاعلية وعصرية للمشروع.",
      projBtnView: "استكشاف تفاصيل المشروع",

      // Contact Section
      contactBadge: "تواصل معي",
      contactTitle: "لنبدأ محادثة ونتعاون معاً",
      contactSubtitle: "سواء كانت لديك فرصة تدريبية أو مشروع تعاوني، يسعدني دائماً تواصلك!",
      contactEmailLabel: "البريد الإلكتروني",
      contactPhoneLabel: "رقم الهاتف",
      formName: "اسمك الكريم",
      formEmail: "بريدك الإلكتروني",
      formSubject: "موضوع الرسالة",
      formMessage: "نص الرسالة",
      formSubmit: "إرسال الرسالة",
      phName: "مثال: أحمد محمود",
      phEmail: "name@example.com",
      phSubject: "استفسار عن مشروع / فرصة عمل أو تدريب",
      phMessage: "مرحباً رواء، أود التحدث بخصوص...",

      // Footer
      footerTagline: "طالبة علوم حاسب ومتدربة تطوير .NET متكامل تعمل على بناء حلول برمجية رقمية حديثة.",
      footerNavTitle: "روابط سريعة",
      footerConnectTitle: "تواصل معي",
      footerRights: "جميع الحقوق محفوظة. مطور باستخدام Vanilla HTML و CSS و JavaScript فقط.",
      backToTop: "العودة للأعلى",

      // Modals
      cvModalHeading: "رواء محسن — السيرة الذاتية المهنية",
      cvPersonSub: "طالبة علوم حاسب | مطورة برمجيات واعدة",
      cvSummaryTitle: "الملخص المهني",
      cvSummaryText: "طالبة علوم حاسب تسعى لاكتساب خبرة عملية في تطوير البرمجيات وتطبيقات الويب المتكاملة. بناء حلول .NET وتطبيقات ويب حديثة مع التركيز على البنية البرمجية النظيفة كائنية التوجه والواجهات سهلة الاستخدام.",
      cvEduTitle: "التعليم",
      cvEduDegree: "بكالوريوس علوم الحاسب",
      cvEduExp: "سنة التخرج المتوقعة: 2028",
      cvEduUni: "جامعة اللوتس",
      cvEduFocus: "التركيز: تطوير .NET المتكامل وهندسة البرمجيات",
      cvExpTitle: "التدريب والخبرة",
      cvExpRole: "متدربة تطوير .NET متكامل (Full-Stack)",
      cvExpStatus: "مستمر (2024 - حتى الآن)",
      cvExpOrg: "مبادرة رواد مصر الرقمية (DEPI)",
      cvExpDesc: "بناء وتطوير مهارات عملية متقدمة في تطوير التطبيقات المتكاملة من خلال تدريب منهجي مكثف. إتقان لغة C# وإطار عمل ASP.NET Core وقواعد بيانات SQL والواجهات الحديثة.",
      cvProjTitle: "المشاريع الأكاديمية",
      cvProjName: "رحلة أطعمة العالم (World Food Journey)",
      cvProjB1: "تطوير مشروع ويب أكاديمي لاكتشاف المأكولات والمطابخ المتنوعة من دول مختلفة.",
      cvProjB2: "هيكلة وتصنيف المأكولات والمشروبات والحلويات في واجهة تصفح مريحة ومنظمة.",
      cvProjB3: "تطبيق مفاهيم تطوير الويب (HTML, CSS, JavaScript) لإنشاء واجهة مشروع تفاعلية.",
      cvSkillsTitle: "المهارات التقنية",
      cvBtnPrint: "طباعة / حفظ كملف PDF",
      cvBtnDownload: "تحميل ملف السيرة الذاتية",

      projModalPill: "مشروع ويب أكاديمي",
      projModalHeading: "رحلة أطعمة العالم — استعراض المشروع",
      projModalIntro: "مشروع World Food Journey هو تطبيق ويب أكاديمي صُمم لتطبيق مفاهيم هندسة الويب وتنسيق المحتوى الثري للمطابخ العالمية بأسلوب أنيق.",
      projF1Title: "استكشاف متعدد الدول",
      projF1Desc: "يتيح للمستخدمين استكشاف العادات الغذائية عبر القارات مع وصف دقيق وتراث وثقافة كل طبق.",
      projF2Title: "تصنيفات واضحة ومنظمة",
      projF2Desc: "مقسم بعناية إلى أطباق رئيسية، مشروبات تقليدية وحلويات لتسهيل التصفح السريع.",
      projF3Title: "خفيف وسريع التجاوب",
      projF3Desc: "مبني بلغة HTML5 دلالية وتنسيقات CSS3 متجاوبة دون الاعتماد على مكتبات خارجية ثقيلة.",
      projTechTitle: "أبرز التقنيات المستخدمة",
      projModalClose: "إغلاق التفاصيل",

      // Toast Messages
      toastEmailCopiedTitle: "تم نسخ البريد!",
      toastEmailCopiedDesc: "تم نسخ RewaaMohsen9@gmail.com إلى الحافظة.",
      toastFormSuccessTitle: "تم استلام رسالتك!",
      toastFormSuccessDesc: "شكراً لتواصلك، ستقوم رواء بالرد في أقرب وقت.",
      toastErrorTitle: "خطأ في النموذج",
      toastErrorDesc: "يرجى ملء الحقول المطلوبة بشكل صحيح."
    }
  };

  // State Management
  let currentLang = localStorage.getItem('rewaa_lang') || 'en';
  let currentTheme = localStorage.getItem('rewaa_theme') || 'dark';

  // DOM Elements Selection
  const htmlRoot = document.documentElement;
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langDisplay = document.getElementById('langDisplay');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

  // Terminal Demo Elements
  const terminalRunBtn = document.getElementById('terminalRunBtn');
  const terminalOutput = document.getElementById('terminalOutput');

  // Skills Filter Elements
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  // Modals Elements
  const cvModal = document.getElementById('cvModal');
  const heroCvBtn = document.getElementById('heroCvBtn');
  const drawerCvBtn = document.getElementById('drawerCvBtn');
  const closeCvModalBtn = document.getElementById('closeCvModalBtn');
  const printCvBtn = document.getElementById('printCvBtn');
  const downloadCvTxtBtn = document.getElementById('downloadCvTxtBtn');

  const projectModal = document.getElementById('projectModal');
  const projModalTriggerBtn = document.getElementById('projModalTriggerBtn');
  const closeProjModalBtn = document.getElementById('closeProjModalBtn');
  const closeProjModalActionBtn = document.getElementById('closeProjModalActionBtn');

  // Toast Element
  const toastNotification = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastDesc = document.getElementById('toastDesc');
  let toastTimer = null;

  // Contact Form & Copy Buttons
  const contactForm = document.getElementById('contactForm');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const currentYearSpan = document.getElementById('currentYear');

  // ==========================================================================
  // 1. THEME TOGGLE SYSTEM (DARK / LIGHT)
  // ==========================================================================
  function applyTheme(theme) {
    currentTheme = theme;
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('rewaa_theme', theme);

    // Update meta theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0B071A' : '#F8F7FD');
    }
  }

  function toggleTheme() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  // ==========================================================================
  // 2. BILINGUAL TRANSLATION SYSTEM (EN / AR RTL)
  // ==========================================================================
  function applyLanguage(lang) {
    currentLang = lang;
    const isRtl = lang === 'ar';

    // Set HTML root attributes
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    localStorage.setItem('rewaa_lang', lang);

    // Update Language Toggle Button Label
    if (langDisplay) {
      langDisplay.textContent = translations[lang].langSwitchLabel;
    }

    // Translate all standard text elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Translate input placeholders
    const i18nPlaceholders = document.querySelectorAll('[data-i18n-ph]');
    i18nPlaceholders.forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update document title
    if (lang === 'ar') {
      document.title = "رواء محسن | طالبة علوم حاسب ومطورة برمجيات";
    } else {
      document.title = "Rewaa Mohsen | Computer Science Student & Aspiring Software Developer";
    }
  }

  function toggleLanguage() {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(nextLang);
  }

  // ==========================================================================
  // 3. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  function showToast(titleKey, descKey, isCustom = false, customTitle = '', customDesc = '') {
    if (toastTimer) clearTimeout(toastTimer);

    const title = isCustom ? customTitle : (translations[currentLang][titleKey] || titleKey);
    const desc = isCustom ? customDesc : (translations[currentLang][descKey] || descKey);

    if (toastTitle) toastTitle.textContent = title;
    if (toastDesc) toastDesc.textContent = desc;

    if (toastNotification) {
      toastNotification.classList.add('show');
      toastTimer = setTimeout(() => {
        toastNotification.classList.remove('show');
      }, 4200);
    }
  }

  // ==========================================================================
  // 4. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  function openMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.add('active');
    if (mobileBackdrop) mobileBackdrop.classList.add('active');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.add('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (mobileDrawer) mobileDrawer.classList.remove('active');
    if (mobileBackdrop) mobileBackdrop.classList.remove('active');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  // ==========================================================================
  // 5. INTERACTIVE HERO CODE TERMINAL SIMULATOR
  // ==========================================================================
  function initTerminalDemo() {
    if (!terminalRunBtn || !terminalOutput) return;

    terminalRunBtn.addEventListener('click', function () {
      const origText = terminalRunBtn.innerHTML;
      terminalRunBtn.disabled = true;
      terminalRunBtn.innerHTML = `<span>Compiling...</span>`;

      setTimeout(() => {
        terminalOutput.classList.add('show');
        terminalRunBtn.disabled = false;
        terminalRunBtn.innerHTML = origText;
      }, 700);
    });
  }

  // ==========================================================================
  // 6. TECHNICAL SKILLS CATEGORY FILTER
  // ==========================================================================
  function initSkillsFilter() {
    if (!filterBtns || !skillCards) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        skillCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');

          if (filterValue === 'all' || cardCategory === filterValue) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // ==========================================================================
  // 7. MODALS CONTROLLER (CV & PROJECT SHOWCASE)
  // ==========================================================================
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initModals() {
    // Open CV Modal
    if (heroCvBtn) heroCvBtn.addEventListener('click', () => openModal(cvModal));
    if (drawerCvBtn) {
      drawerCvBtn.addEventListener('click', () => {
        closeMobileDrawer();
        openModal(cvModal);
      });
    }
    if (closeCvModalBtn) closeCvModalBtn.addEventListener('click', () => closeModal(cvModal));

    // Print CV Action
    if (printCvBtn) {
      printCvBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Download CV as Text file action
    if (downloadCvTxtBtn) {
      downloadCvTxtBtn.addEventListener('click', () => {
        const cvTextContent = `=====================================================
REWAA MOHSEN - CURRICULUM VITAE
Computer Science Student | Aspiring Software Developer
=====================================================

CONTACT INFORMATION:
- Email: RewaaMohsen9@gmail.com
- Phone: 01287895339
- LinkedIn: https://www.linkedin.com/in/rewaa-mohsen
- Location: Egypt

PROFESSIONAL SUMMARY:
Computer Science student seeking to develop practical experience in software and full-stack development. Building .NET full-stack solutions and modern web applications with a focus on clean object-oriented architecture and user-friendly interfaces.

EDUCATION:
- Degree: Bachelor of Computer Science
- Institution: Lotus University
- Expected Graduation: 2028
- Focus: Full-Stack .NET & Software Engineering

TRAINING & EXPERIENCE:
- Track: Full-Stack .NET Development Trainee
- Organization: Digital Egypt Pioneers Initiative (DEPI)
- Status: Ongoing (2024 - Present)
- Highlights:
  * C# Programming & Object-Oriented Software Architecture
  * ASP.NET Core & RESTful Web APIs
  * Relational Database Design & SQL Server Integration
  * Full-Stack Web Development Fundamentals

ACADEMIC PROJECTS:
- Project: World Food Journey
  * Developed an academic web project focused on discovering food and cuisines from different countries.
  * Structured food, drinks, and dessert content into an organized browsing experience.
  * Applied fundamental web development concepts (HTML, CSS, JavaScript) to build an interactive project interface.

TECHNICAL SKILLS:
- Programming: C#, C++
- Web Development: HTML, CSS, Full-Stack .NET (ASP.NET Core)
- Computer Science: Data Structures & Algorithms, OOP
- Database: SQL
=====================================================`;

        const blob = new Blob([cvTextContent], { type: 'text/plain;charset=utf-8' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'Rewaa_Mohsen_CV.txt';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadLink.href);

        showToast('cvBtnDownload', 'cvBtnDownload', true, 'File Downloaded', 'Rewaa_Mohsen_CV.txt has been downloaded successfully.');
      });
    }

    // Open Project Modal
    if (projModalTriggerBtn) {
      projModalTriggerBtn.addEventListener('click', () => openModal(projectModal));
    }
    if (closeProjModalBtn) closeProjModalBtn.addEventListener('click', () => closeModal(projectModal));
    if (closeProjModalActionBtn) closeProjModalActionBtn.addEventListener('click', () => closeModal(projectModal));

    // Backdrop Click Handling
    window.addEventListener('click', function (e) {
      if (e.target === cvModal) closeModal(cvModal);
      if (e.target === projectModal) closeModal(projectModal);
    });

    // Escape Key Handling
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal(cvModal);
        closeModal(projectModal);
        closeMobileDrawer();
      }
    });
  }

  // ==========================================================================
  // 8. CLIPBOARD COPY UTILITY
  // ==========================================================================
  function initClipboard() {
    if (!copyEmailBtn) return;

    copyEmailBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const emailText = 'RewaaMohsen9@gmail.com';
      navigator.clipboard.writeText(emailText).then(() => {
        showToast('toastEmailCopiedTitle', 'toastEmailCopiedDesc');
      }).catch(() => {
        // Fallback for older environments
        const tempInput = document.createElement('input');
        tempInput.value = emailText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('toastEmailCopiedTitle', 'toastEmailCopiedDesc');
      });
    });
  }

  // ==========================================================================
  // 9. CONTACT FORM CLIENT-SIDE VALIDATION
  // ==========================================================================
  function initContactForm() {
    if (!contactForm) return;

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      // Clear errors
      nameError.textContent = '';
      emailError.textContent = '';
      subjectError.textContent = '';
      messageError.textContent = '';

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const subjectVal = subjectInput.value.trim();
      const messageVal = messageInput.value.trim();

      // Name validation
      if (!nameVal || nameVal.length < 2) {
        nameError.textContent = currentLang === 'ar' ? 'يرجى إدخال اسمك الكريم (حرفين على الأقل)' : 'Please enter your name (at least 2 characters).';
        isValid = false;
      }

      // Email validation
      if (!emailVal || !validateEmail(emailVal)) {
        emailError.textContent = currentLang === 'ar' ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please enter a valid email address.';
        isValid = false;
      }

      // Subject validation
      if (!subjectVal || subjectVal.length < 3) {
        subjectError.textContent = currentLang === 'ar' ? 'يرجى كتابة موضوع الرسالة' : 'Please enter a subject (at least 3 characters).';
        isValid = false;
      }

      // Message validation
      if (!messageVal || messageVal.length < 10) {
        messageError.textContent = currentLang === 'ar' ? 'يرجى كتابة رسالة توضيحية (10 أحرف على الأقل)' : 'Please write your message (at least 10 characters).';
        isValid = false;
      }

      if (isValid) {
        // Success Toast
        showToast('toastFormSuccessTitle', 'toastFormSuccessDesc');
        contactForm.reset();
      } else {
        showToast('toastErrorTitle', 'toastErrorDesc');
      }
    });
  }

  // ==========================================================================
  // 10. SCROLL SPY, STICKY NAVBAR & BACK TO TOP
  // ==========================================================================
  function initScrollFeatures() {
    // Current Year Update
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }

    // Sticky Navbar on Scroll
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Active Section Scroll Spy
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach(link => {
            link.classList.add('active');
          });
        } else {
          document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach(link => {
            link.classList.remove('active');
          });
        }
      });
    });

    // Back to Top Button
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Smooth Drawer Link Clicks
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        closeMobileDrawer();
      });
    });
  }

  // ==========================================================================
  // 11. EVENT LISTENERS INITIALIZATION
  // ==========================================================================
  function initEventListeners() {
    // Theme Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Language Toggle
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', toggleLanguage);
    }

    // Mobile Drawer Triggers
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function () {
        if (mobileDrawer.classList.contains('active')) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      });
    }

    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', closeMobileDrawer);
    }

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeMobileDrawer);
    }
  }

  // ==========================================================================
  // INITIALIZE EVERYTHING ON DOM READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Restore Theme
    applyTheme(currentTheme);

    // 2. Restore Language
    applyLanguage(currentLang);

    // 3. Setup Components
    initEventListeners();
    initTerminalDemo();
    initSkillsFilter();
    initModals();
    initClipboard();
    initContactForm();
    initScrollFeatures();
  });

})();
