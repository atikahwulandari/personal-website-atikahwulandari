// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIconPath = document.getElementById('menu-icon-path');

mobileMenuBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.contains('hidden');
  if (isHidden) {
    mobileMenu.classList.remove('hidden');
    // Change icon to X
    menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
  } else {
    mobileMenu.classList.add('hidden');
    // Change icon to Hamburger
    menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  }
});

// Close mobile menu on clicking links
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  });
});

// Overview role typewriter
const overviewRole = document.getElementById('overview-role');
const roleTexts = ['Data Analyst', 'Business Intelligence'];

if (overviewRole) {
  let roleIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;

  function typeRole() {
    const currentRole = roleTexts[roleIndex];
    overviewRole.textContent = currentRole.slice(0, characterIndex);

    if (!isDeleting && characterIndex < currentRole.length) {
      characterIndex += 1;
      setTimeout(typeRole, 90);
      return;
    }

    if (!isDeleting && characterIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, 1400);
      return;
    }

    if (isDeleting && characterIndex > 0) {
      characterIndex -= 1;
      setTimeout(typeRole, 55);
      return;
    }

    isDeleting = false;
    roleIndex = (roleIndex + 1) % roleTexts.length;
    setTimeout(typeRole, 300);
  }

  typeRole();
}


// Carousel Navigation (Organization Section - Photo Slider)
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
const dots = document.querySelectorAll('.carousel-dot');
let activeSlideIndex = 0;

function showSlide(index) {
  // Ensure index is within range
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  
  activeSlideIndex = index;

  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
      slide.classList.add('opacity-100', 'scale-100');
      slide.style.position = 'relative';
      slide.style.zIndex = '10';
    } else {
      slide.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
      slide.classList.remove('opacity-100', 'scale-100');
      slide.style.position = 'absolute';
      slide.style.zIndex = '0';
    }
  });

  // Update dots
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.remove('bg-white/50', 'hover:bg-white/80');
      dot.classList.add('bg-white');
    } else {
      dot.classList.remove('bg-white');
      dot.classList.add('bg-white/50', 'hover:bg-white/80');
    }
  });
}

prevBtn.addEventListener('click', () => showSlide(activeSlideIndex - 1));
nextBtn.addEventListener('click', () => showSlide(activeSlideIndex + 1));

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideIdx = parseInt(dot.getAttribute('data-slide'));
    showSlide(slideIdx);
  });
});


// Project Details Modal Data & Controller
const projectData = {
  property: {
    title: "Property Dashboard",
    image: "/public/images/portfolio/1. Property Dashboard.png",
    description: "An interactive property valuation and trend analysis dashboard designed to analyze market fluctuations, geographical pricing factors, and real estate investment yields.",
    details: "This project combines large-scale property data scraping with interactive business intelligence to transform fragmented real estate listings into actionable market insights. Using Python-powered ETL pipelines and Power BI, the platform analyzes property prices, regional affordability, mortgage scenarios, and location trends.",
    metrics: ["Scraped and processed 2K+ property listings from Pinhome", "Built an interactive Power BI Decision Support System", "Delivered an end-to-end analytics solution from data acquisition to executive dashboarding"],
    tech: ["Power BI", "Python", "NumPy", "Pandas"]
  },
  salary: {
    title: "Salary Dashboard",
    image: "/public/images/portfolio/2. Salary Dashboard.png",
    description: "Collected job market data from JobStreet using web scraping techniques and developed an interactive dashboard to analyze average salaries across industries and occupational categories in Indonesia.",
    details: "Built an end-to-end salary analytics solution by combining Python-based web scraping with Power BI. The dashboard uncovers compensation trends, industry benchmarks, and high-value career opportunities through interactive visual analytics.",
    metrics: ["300+ job professions analyzed", "20+ industries benchmarked", "Automated ETL pipeline using Python"],
    tech: ["Power BI", "Python", "Pandas"]
  },
  material: {
    title: "Material Price Dashboard",
    image: "/public/images/portfolio/3. Material Price Dashboard.png",
    description: "Developed a Business Intelligence dashboard that transforms batch data from the Ministry of Trade's SP2KP system into actionable insights for monitoring essential commodity price trends and market fluctuations.",
    details: "Developed an interactive commodity price intelligence dashboard using Power BI and Excel to monitor national and regional price movements. The solution uncovers price trends, volatility, and geographic disparities, enabling faster, data-driven decisions for market monitoring and economic analysis.",
    metrics: ["Price trend, volatility, and regional analysis", "National and regional commodity price monitoring", "Interactive Power BI dashboard for decision support"],
    tech: ["Power BI", "Excel"]
  },
  weather: {
    title: "Weather Dashboard",
    image: "/public/images/portfolio/4. Weather Dashboard.png",
    description: "Built an interactive weather analytics dashboard that visualizes current weather conditions and forecast data through seamless integration with the Weather API.",
    details: "Developed an interactive weather analytics platform that transforms Weather API data into actionable insights. The dashboard combines weather forecasts, air quality metrics, and environmental indicators to support real-time monitoring through intuitive visual analytics.",
    metrics: ["Multi-city forecast and environmental analysis", "Air quality and climate indicator monitoring", "Interactive analytics with dynamic filtering"],
    tech: ["Power BI", "OpenWeather API"]
  },
  finance: {
    title: "Personal Financial Tracker",
    image: "/public/images/portfolio/5. Financial Tracker Dashboard.png",
    description: "Developed an interactive financial management dashboard that enables users to track income, expenses, savings, and overall financial performance through real-time data input.",
    details: "Built an interactive financial dashboard in Microsoft Excel that delivers comprehensive insights into cash flow, budgeting, spending patterns, and savings performance for effective personal finance management.",
    metrics: ["Auto-Categorization", "Budget vs. actual performance tracking", "Cash flow and savings analysis"],
    tech: ["Excel"]
  },
  college: {
    title: "College Fee Analysis",
    image: "/public/images/portfolio/6. College Fee Classification.png",
    description: "Developed a predictive classification model to support the determination of tuition fee categories for prospective students..",
    details: "Built a machine learning classification model in RapidMiner to predict student UKT categories based on household socioeconomic factors, enabling faster, fairer, and data-driven tuition fee assessment.",
    metrics: ["Student UKT classification using machine learning", "Decision support for tuition fee assessment"],
    tech: ["Rapid Miner", "Machine Learning"]
  }
};

const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const projectDetailsBtns = document.querySelectorAll('.project-details-btn');

function openModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="h-64 rounded-2xl overflow-hidden bg-gray-100 mb-6">
        <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
      </div>
      <div>
        <h3 class="text-3xl font-bold text-black mb-2">${data.title}</h3>
        <p class="text-sm font-semibold text-brand-muted mb-4">${data.description}</p>
      </div>
      <div class="border-t border-gray-100 pt-4">
        <h4 class="text-base font-bold text-black mb-2">Deep Dive</h4>
        <p class="text-sm text-brand-muted leading-relaxed">${data.details}</p>
      </div>
      <div class="border-t border-gray-100 pt-4">
        <h4 class="text-base font-bold text-black mb-2">Key Outcomes & Metrics</h4>
        <ul class="list-disc pl-5 space-y-1.5 text-sm text-brand-muted">
          ${data.metrics.map(metric => `<li>${metric}</li>`).join('')}
        </ul>
      </div>
      <div class="border-t border-gray-100 pt-4">
        <h4 class="text-base font-bold text-black mb-2">Technologies Used</h4>
        <div class="flex flex-wrap gap-2 mt-2">
          ${data.tech.map(t => `<span class="px-2.5 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-brand-secondary">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  // Show Modal
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.querySelector('.transform').classList.remove('scale-95');
  modal.querySelector('.transform').classList.add('scale-100');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeModal() {
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.querySelector('.transform').classList.add('scale-95');
  modal.querySelector('.transform').classList.remove('scale-100');
  document.body.style.overflow = ''; // Unlock background scroll
}

projectDetailsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const projectId = btn.getAttribute('data-project');
    openModal(projectId);
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});


// Contact Form Handler & Toast
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toast-message');

function showToast(message, isError = false) {
  toastMsg.textContent = message;
  
  if (isError) {
    toast.classList.add('bg-red-600');
    toast.classList.remove('bg-black');
  } else {
    toast.classList.add('bg-black');
    toast.classList.remove('bg-red-600');
  }

  toast.classList.remove('translate-y-12', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-12', 'opacity-0', 'pointer-events-none');
  }, 4000);
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const firstName = formData.get('firstName').trim();
  const lastName = formData.get('lastName').trim();
  const email = formData.get('email').trim();
  const message = formData.get('message').trim();

  if (!firstName || !lastName || !email || !message) {
    showToast("Please fill in all required fields.", true);
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalContent = submitButton.innerHTML;
  
  submitButton.disabled = true;
  submitButton.innerHTML = `
    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>Sending...</span>
  `;

  // Submit via FormSubmit AJAX API
  fetch("https://formsubmit.co/ajax/atikahwulandri@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: `${firstName} ${lastName}`,
      email: email,
      message: message,
      _subject: `New Portfolio Message from ${firstName} ${lastName}`
    })
  })
  .then(response => {
    if (response.ok) {
      showToast(`Thank you, ${firstName}! Your message has been sent.`);
      contactForm.reset();
    } else {
      showToast("Oops! Something went wrong, please try again.", true);
    }
  })
  .catch(error => {
    console.error("Error sending email:", error);
    showToast("Connection error. Please try again later.", true);
  })
  .finally(() => {
    submitButton.disabled = false;
    submitButton.innerHTML = originalContent;
  });
});


// Scrollspy & Active Section Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentSectionId = '';
  const scrollPosition = window.scrollY + 100; // Offset for navbar

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
      currentSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-black', 'border-b-2', 'border-black');
    link.classList.add('text-brand-muted');

    if (link.getAttribute('href') === `#${currentSectionId}`) {
      link.classList.remove('text-brand-muted');
      link.classList.add('text-black', 'border-b-2', 'border-black');
    }
  });
});
