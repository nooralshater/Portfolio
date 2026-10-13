/* =====================================================
   Noor Alshater - Portfolio

   Event lifecycle (same idea for every button below):
   1. User action      -> the visitor clicks a button.
   2. Event firing     -> the browser creates a "click" event on that button.
   3. JavaScript callback -> the function we gave to addEventListener runs.
   4. DOM / CSS change -> the function changes the page
                          (attribute, text, class) and CSS shows the result.
   ===================================================== */

// ---------- 1. Translation dictionary (Bounce 02) ----------
// Each key matches a data-i18n attribute in index.html.
const translations = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
    "nav.experience": "Experience", "nav.certificates": "Certificates", "nav.hobbies": "Hobbies", "nav.contact": "Contact",
    "ui.theme": "Theme",

    "hero.eyebrow": "Cybersecurity | Security Operations & Penetration Testing",
    "hero.title": "Noor Eyad Alshater",
    "hero.sub": "Cybersecurity graduate building practical skills in network security, vulnerability scanning and security labs.",
    "hero.btnProjects": "View Projects", "hero.btnCv": "Download CV",

    "about.title": "About Me",
    "about.switchPhoto": "Switch photo",
    "about.p1": "Cybersecurity graduate with practical learning experience through cybersecurity training, university projects and hands-on labs. I am especially interested in security operations, network security and learning how to investigate security events.",
    "about.p2": "I have practiced network scanning, traffic analysis and cybersecurity lab exercises. I also enjoy explaining technical ideas clearly and creating digital content as a side project.",
    "about.eduK": "Education:", "about.eduV": "B.Sc. Cybersecurity, Tafila Technical University (2022 - 2026)",
    "about.gpaK": "GPA:",
    "about.locK": "Location:", "about.locV": "Amman, Jordan, open to relocation",
    "about.langK": "Languages:", "about.langV": "Arabic (native), English (B2)",

    "skills.title": "Skills",
    "skills.soc": "Security Operations", "skills.pentest": "Penetration Testing", "skills.malware": "Malware & Forensics",
    "skills.network": "Network Security", "skills.systems": "Systems & Scripting", "skills.risk": "Risk & Frameworks",

    "projects.title": "Project Showcase",
    "projects.view": "View file",
    "projects.request": "Project details available on request",
    "p0.title": "EduKernel Suite",
    "p0.desc": "Graduation project: co-developed a multi-VM cybersecurity lab (Kali Linux, Windows 7, Windows 10) for penetration testing, malware analysis and digital forensics exercises.",
    "p1.title": "Vulnerability Scanning",
    "p1.desc": "Scanning a lab network and reviewing potential vulnerabilities using Nmap and Nessus.",
    "p2.title": "Network Traffic Analysis",
    "p2.desc": "Using Wireshark to inspect network packets and learn how common protocols communicate.",
    "p3.title": "Web Development Exercises",
    "p3.desc": "Small exercises to practice page structure, styling, responsive layouts and basic DOM events.",
    "p4.title": "HTTP vs MQTT for IoT",
    "p4.desc": "A research paper comparing HTTP and MQTT for IoT in latency, throughput, scalability and reliability.",
    "p5.title": "Linux Server Deployment & Security",
    "p5.desc": "Deployed Matomo on Ubuntu Server with Apache and MariaDB and applied basic security hardening.",
    "p6.title": "Digital Forensics with Autopsy",
    "p6.desc": "Created and verified a forensic disk image with FTK Imager, then used Autopsy to inspect files and metadata.",
    "p7.title": "Cybersecurity Data Analysis",
    "p7.desc": "Explored cybersecurity indexes of countries using Python and Pandas.",
    "p8.title": "Cybersecurity Risk Management",
    "p8.desc": "A risk assessment of storing unencrypted credit-card data and how to reduce the risks.",

    "exp.title": "Experience", "exp.present": "Present",
    "exp.e1.role": "Cisco Networking Instructor",
    "exp.e1.desc": "Deliver the Cisco NetAcad Networking Basics course through structured video lessons and explain technical concepts in a clear, practical way.",
    "exp.e2.role": "Masar Cybersecurity Training",
    "exp.e2.desc": "200 hours of ethical hacking and CTF training: SIEM monitoring with Splunk, vulnerability assessment, penetration testing and security reporting.",
    "exp.e3.role": "Public Relations Officer",
    "exp.e3.desc": "Organized cybersecurity workshops, awareness events and technical sessions, and created digital content for the society.",
    "exp.e4.role": "AI Content Creation",
    "exp.e4.desc": "Created animated story videos using AI tools. Some videos reached over one million views.",

    "cert.title": "Certificates",
    "cert.name": "Masar Cybersecurity Training",
    "cert.desc": "Completed 200 hours of continuous training over 6 weeks in 2025, covering ethical hacking and CTF challenges, issued by the National Cybersecurity Center.",

    "hob.title": "Hobbies",
    "hob.h1": "Capture The Flag", "hob.d1": "Solving CTF challenges to sharpen my offensive and investigative thinking.",
    "hob.h2": "Building Home Labs", "hob.d2": "Running virtual machines to test tools and practice safely.",
    "hob.h3": "Content Creation", "hob.d3": "Creating animated stories and digital content with AI tools.",
    "hob.h4": "Teaching & Events", "hob.d4": "Explaining networking and organizing workshops for my community.",

    "contact.title": "Contact Me",
    "contact.sub": "I am open to internships and junior roles in security operations and penetration testing.",
    "contact.email": "Email:", "contact.phone": "Phone:",
    "form.name": "Name", "form.email": "Email", "form.message": "Message", "form.send": "Send Message",
    "footer.rights": "All rights reserved.",

    "langBtn": "العربية",
    "title": "Noor Alshater | Cybersecurity Portfolio",
    "photo0": "Noor Alshater in a formal black blazer",
    "photo1": "Close-up portrait of Noor Alshater smiling"
  },

  ar: {
    "nav.home": "الرئيسية", "nav.about": "نبذة عني", "nav.skills": "المهارات", "nav.projects": "المشاريع",
    "nav.experience": "الخبرات", "nav.certificates": "الشهادات", "nav.hobbies": "الهوايات", "nav.contact": "تواصل معي",
    "ui.theme": "الثيم",

    "hero.eyebrow": "الأمن السيبراني | عمليات الأمن واختبار الاختراق",
    "hero.title": "نور إياد الشاطر",
    "hero.sub": "خريجة أمن سيبراني، أطوّر مهاراتي العملية في أمن الشبكات وفحص الثغرات ومختبرات الأمن.",
    "hero.btnProjects": "شاهد مشاريعي", "hero.btnCv": "تحميل السيرة الذاتية",

    "about.title": "نبذة عني",
    "about.switchPhoto": "غيّر الصورة",
    "about.p1": "خريجة أمن سيبراني، لدي خبرة عملية تعليمية من خلال التدريب في الأمن السيبراني والمشاريع الجامعية والتطبيقات العملية. أهتم بشكل خاص بعمليات الأمن وأمن الشبكات وتعلّم كيفية التحقيق في الأحداث الأمنية.",
    "about.p2": "تدرّبت على فحص الشبكات وتحليل حركة البيانات وتنفيذ تمارين في مختبرات الأمن السيبراني. وأحب أيضًا شرح الأفكار التقنية بوضوح وصناعة المحتوى الرقمي كمشروع جانبي.",
    "about.eduK": "التعليم:", "about.eduV": "بكالوريوس الأمن السيبراني، جامعة الطفيلة التقنية (2022 - 2026)",
    "about.gpaK": "المعدل:",
    "about.locK": "الموقع:", "about.locV": "عمّان، الأردن، وأقبل الانتقال لمكان آخر",
    "about.langK": "اللغات:", "about.langV": "العربية (لغة أم)، الإنجليزية (B2)",

    "skills.title": "المهارات",
    "skills.soc": "عمليات الأمن", "skills.pentest": "اختبار الاختراق", "skills.malware": "البرمجيات الخبيثة والأدلة الرقمية",
    "skills.network": "أمن الشبكات", "skills.systems": "الأنظمة والبرمجة النصية", "skills.risk": "المخاطر والأُطر",

    "projects.title": "عرض المشاريع",
    "projects.view": "عرض الملف",
    "projects.request": "تفاصيل المشروع متاحة عند الطلب",
    "p0.title": "EduKernel Suite",
    "p0.desc": "مشروع التخرج: المشاركة في تطوير مختبر أمن سيبراني متعدد الأجهزة الافتراضية (Kali Linux وWindows 7 وWindows 10) لتمارين اختبار الاختراق وتحليل البرمجيات الخبيثة والأدلة الرقمية.",
    "p1.title": "فحص الثغرات",
    "p1.desc": "فحص شبكة مختبر ومراجعة الثغرات المحتملة باستخدام Nmap وNessus.",
    "p2.title": "تحليل حركة الشبكة",
    "p2.desc": "استخدام Wireshark لفحص حزم الشبكة والتعرّف على طريقة تواصل البروتوكولات الشائعة.",
    "p3.title": "تمارين تطوير الويب",
    "p3.desc": "تمارين بسيطة للتدرب على بناء الصفحات وتنسيقها والتصميم المتجاوب وأحداث JavaScript الأساسية.",
    "p4.title": "مقارنة HTTP وMQTT لإنترنت الأشياء",
    "p4.desc": "ورقة بحثية تقارن بين HTTP وMQTT لإنترنت الأشياء من حيث زمن الاستجابة ومعدل النقل وقابلية التوسع والموثوقية.",
    "p5.title": "إعداد وتأمين خادم Linux",
    "p5.desc": "تنصيب Matomo على Ubuntu Server باستخدام Apache وMariaDB وتطبيق خطوات أساسية لتعزيز الأمان.",
    "p6.title": "الأدلة الرقمية باستخدام Autopsy",
    "p6.desc": "إنشاء صورة جنائية للقرص والتحقق منها باستخدام FTK Imager، ثم فحص الملفات وبياناتها الوصفية باستخدام Autopsy.",
    "p7.title": "تحليل بيانات الأمن السيبراني",
    "p7.desc": "تحليل مؤشرات الأمن السيبراني للدول باستخدام Python وPandas.",
    "p8.title": "إدارة مخاطر الأمن السيبراني",
    "p8.desc": "تقييم مخاطر تخزين بيانات البطاقات الائتمانية دون تشفير وكيفية تقليل هذه المخاطر.",

    "exp.title": "الخبرات", "exp.present": "الآن",
    "exp.e1.role": "مدرّبة شبكات Cisco",
    "exp.e1.desc": "أقدّم مساق Cisco NetAcad Networking Basics عبر دروس مرئية منظمة وأشرح المفاهيم التقنية بأسلوب واضح وعملي.",
    "exp.e2.role": "تدريب مسار للأمن السيبراني",
    "exp.e2.desc": "200 ساعة تدريب في الاختراق الأخلاقي وCTF: مراقبة SIEM باستخدام Splunk، وتقييم الثغرات، واختبار الاختراق، وكتابة التقارير الأمنية.",
    "exp.e3.role": "مسؤولة العلاقات العامة",
    "exp.e3.desc": "تنظيم ورش عمل وفعاليات توعوية وجلسات تقنية في الأمن السيبراني، وإنشاء محتوى رقمي للجمعية.",
    "exp.e4.role": "صناعة المحتوى بالذكاء الاصطناعي",
    "exp.e4.desc": "أنشأت فيديوهات قصص كرتونية باستخدام أدوات الذكاء الاصطناعي. وصلت بعض الفيديوهات إلى أكثر من مليون مشاهدة.",

    "cert.title": "الشهادات",
    "cert.name": "تدريب مسار للأمن السيبراني",
    "cert.desc": "أتممت 200 ساعة تدريب متواصل على مدى 6 أسابيع في عام 2025، شملت الاختراق الأخلاقي وتحديات CTF، وصادرة عن المركز الوطني للأمن السيبراني.",

    "hob.title": "الهوايات",
    "hob.h1": "تحديات CTF", "hob.d1": "حل تحديات CTF لتقوية تفكيري الهجومي والتحقيقي.",
    "hob.h2": "بناء مختبرات منزلية", "hob.d2": "تشغيل أجهزة افتراضية لتجربة الأدوات والتدرب بأمان.",
    "hob.h3": "صناعة المحتوى", "hob.d3": "صناعة قصص كرتونية ومحتوى رقمي باستخدام أدوات الذكاء الاصطناعي.",
    "hob.h4": "التدريس والفعاليات", "hob.d4": "شرح الشبكات وتنظيم ورش العمل لمجتمعي.",

    "contact.title": "تواصل معي",
    "contact.sub": "أبحث عن فرص تدريب ووظائف مبتدئة في عمليات الأمن واختبار الاختراق.",
    "contact.email": "البريد الإلكتروني:", "contact.phone": "الهاتف:",
    "form.name": "الاسم", "form.email": "البريد الإلكتروني", "form.message": "الرسالة", "form.send": "إرسال الرسالة",
    "footer.rights": "جميع الحقوق محفوظة.",

    "langBtn": "English",
    "title": "نور الشاطر | معرض أعمال الأمن السيبراني",
    "photo0": "نور الشاطر ترتدي بدلة سوداء رسمية",
    "photo1": "صورة قريبة لنور الشاطر وهي تبتسم"
  }
};

let currentLanguage = "en";
let currentPhoto = 0;

// ---------- 2. Theme switcher (Exercise 00) ----------
const themeBtn = document.getElementById("themeBtn");
const themes = ["dark", "light", "green"];
let themeIndex = 0;

themeBtn.addEventListener("click", function () {
  themeIndex = themeIndex + 1;
  if (themeIndex === themes.length) {
    themeIndex = 0;
  }
  // CSS variables for this theme are chosen by the data-theme attribute
  document.body.setAttribute("data-theme", themes[themeIndex]);
});

// ---------- 3. Profile photo switcher (Bounce 01) ----------
const photo = document.getElementById("profilePhoto");
const photoBtn = document.getElementById("photoBtn");
const photoFiles = ["assets/noor-formal.jpg", "assets/noor-closeup.jpg"];

// Updates src and alt (alt text depends on the current language)
function showPhoto() {
  photo.src = photoFiles[currentPhoto];
  photo.alt = translations[currentLanguage]["photo" + currentPhoto];
}

photoBtn.addEventListener("click", function () {
  photo.classList.add("fade");            // fade out (CSS transition)

  setTimeout(function () {
    currentPhoto = currentPhoto + 1;
    if (currentPhoto === photoFiles.length) {
      currentPhoto = 0;
    }
    showPhoto();                          // change src and alt
    photo.classList.remove("fade");       // fade back in
  }, 300);
});

// ---------- 4. Language switcher (Bounce 02) ----------
const langBtn = document.getElementById("langBtn");

langBtn.addEventListener("click", function () {
  if (currentLanguage === "en") {
    currentLanguage = "ar";
  } else {
    currentLanguage = "en";
  }

  // direction and language of the whole page
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  // replace the text of every element that has data-i18n
  const items = document.querySelectorAll("[data-i18n]");
  items.forEach(function (item) {
    const key = item.getAttribute("data-i18n");
    item.textContent = translations[currentLanguage][key];
  });

  langBtn.textContent = translations[currentLanguage].langBtn;
  document.title = translations[currentLanguage].title;
  showPhoto();                            // update the photo alt text
});

// ---------- 5. Mobile menu ----------
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// close the menu after choosing a link
navLinks.addEventListener("click", function () {
  navLinks.classList.remove("open");
});

// ---------- 6. Contact form ----------
// Opens the visitor's email app with the message ready to send.
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();               // stop the page from reloading

  const name = document.getElementById("fName").value;
  const email = document.getElementById("fEmail").value;
  const message = document.getElementById("fMsg").value;

  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");

  window.location.href = "mailto:nooralshate@gmail.com?subject=" + subject + "&body=" + body;
});
