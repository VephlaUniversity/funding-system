// FAQ Accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Close all other items
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});

// Optional: Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

document
  .querySelectorAll(".hide-desc")
  .forEach((el) => (el.style.display = "none"));

document.querySelectorAll(".more").forEach(function (span) {
  span.addEventListener("click", function () {
    const hideDescSpan = span.previousElementSibling;
    if (hideDescSpan) {
      if (hideDescSpan.style.display === "none") {
        hideDescSpan.style.display = "inline";
        span.innerText = "Hide";
      } else {
        hideDescSpan.style.display = "none";
        span.innerText = "Read More";
      }
    }
  });
});

const hideContent = document.querySelector(".hide-content");
const readMore = document.getElementById("read-more");

readMore.addEventListener("click", () => {
  if (hideContent.style.display === "block") {
    hideContent.style.display = "none";
    readMore.innerText = "Read More";
  } else {
    hideContent.style.display = "block";
    readMore.innerText = "Hide";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      text: "This scholarship has been nothing short of a miracle for me. I’ve dreamt of learning a tech skill, especially UI/UX for so long, but the lack of funding made it feel impossible. Just when I was about to give up, DevTobs came through like a lifeline. You didn’t just fund my learning, you revived my dream. I’m forever grateful. Thank you, DevTobs, for believing in someone like me.",
      name: "Okwuo Judith",
      handle: "@JudithOkwuo",
      avatar: "../assets/images/Judith.png",
      rightImage: "assets/images/1.png",
    },
    {
      text: "Before this scholarship, switching into tech felt like a distant dream. I knew I wanted to pursue a career in Data Analytics, but without the right tools or support, I was stuck. Getting the DevTobs scholarship changed everything; it gave me the chance to finally get a laptop and opened doors to resources, materials, and even more opportunities to grow, learn, and earn. This wasn’t just funding, it was a real breakthrough for me. Thank you, DevTobs. You didn’t just support my journey, you helped me start it.",
      name: "Oluwaseyi Kolawole",
      handle: "@Analytics_KOMA",
      avatar: "../assets/images/Oluwaseyi.png",
      rightImage: "assets/images/2.png",
    },
    {
      text: "This scholarship has been a true blessing in my life. It reignited my hope and gave me the strength to believe in myself again. For the first time in a long while, I’m truly rooting for myself  not just for me, but for DevTobs, who believed in me, and for the people who gave me life. I’m committed to making the most of this opportunity, by God’s grace.",
      name: "Omogiate Praise Uromwen",
      handle: "@OmogiatePraise",
      avatar: "../assets/images/Omogiate.png",
      rightImage: "assets/images/3.png",
    },
    {
      text: "Receiving a laptop from DevTobs felt like someone finally heard me. I had the passion. I was doing everything I could, attending free classes, writing notes by hand, dreaming big. But I kept hitting a wall because I didn’t have the tools to go further. That laptop opened a door I’d been knocking on for years. Now, I’m learning faster, building projects, and believing in myself again. Thank you, DevTobs. You didn’t just change my situation, you changed my spirit.",
      name: " Fatima Sulaiman",
      handle: "@FatimaCodes",
      avatar: "../assets/images/Omogiate.png",
      rightImage: "assets/images/1.png",
    },
    {
      text: "I had been learning on my own for almost a year, bouncing between courses and free resources, but nothing was sticking. I was passionate, but lost. The DevTobs mentorship and transition grant changed that. It gave me structure, a mentor who understood my struggles, and a plan that made sense for me. I followed the roadmap, built real-world projects, and started applying. 1 year and 4 months later, I got hired as a junior data analyst. That one grant didn’t just change my learning, it changed my life. I’ll never stop being grateful.",
      name: "Abdullahi Musa",
      handle: "",
      avatar: "../assets/images/Omogiate.png",
      rightImage: "assets/images/2.png",
    },
    {
      text: "I had completed a full-stack course using borrowed devices and free resources, but I was stuck when it came to paying for my certification and final project hosting. The Advance+ Grant helped me cover those costs  and within 8 months, I landed my first paid role as a junior developer. It wasn’t just money; it was belief in me.",
      name: "Chinaza E., Advance+ Grant Recipient 2023",
      handle: "",
      avatar: "../assets/images/Omogiate.png",
      rightImage: "assets/images/3.png",
    },
    {
      text: "This laptop grant was a turning point in my life. I had been learning tech on my phone for months — watching videos, writing notes, doing everything I could with so little. But it was exhausting and discouraging. Just when I started to lose hope, DevTobs showed up. They didn’t just give me a laptop, they gave me a real chance to grow. That single act of support changed everything. I’ll never forget it. Thank you, DevTobs, for seeing something in me when I felt invisible.",
      name: " Chinedu A.",
      handle: "",
      avatar: "../assets/images/Omogiate.png",
      rightImage: "assets/images/1.png",
    },
    {
      text: "When DevTobs gave me a laptop, they gave me more than a machine; they gave me my future back. I had almost given up on tech because the odds felt too heavy. But getting that support reminded me that someone out there believed in my journey. I wake up every day now with purpose, focus, and the tools to make this dream real. Thank you, DevTobs, for standing in the gap when I needed it most",
      name: "Emmanuel Ikenna",
      handle: "@IkennaBuilds",
      avatar: "../assets/images/Omogiate.png",
      rightImage: "assets/images/3.png",
    },
  ];

  let currentSlide = 0;
  const slidesContainer = document.getElementById("slidesContainer");
  const dotsContainer = document.getElementById("dotsContainer");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let interval;

  // Create HTML for all slides
  function createSlides() {
    testimonials.forEach((testimonial, index) => {
      const slide = document.createElement("div");
      slide.className = "slider-wrapper";
      slide.style.display = index === currentSlide ? "flex" : "none";

      slide.innerHTML = `
              <div class="left-content">
                  <span class="quotes"> <img src="assets/images/quote.png"> </span>
                  <div class="rating">
                      <span class="star">★</span>
                      <span class="star">★</span>
                      <span class="star">★</span>
                      <span class="star">★</span>
                      <span class="star">★</span>
                  </div>
                  <div class="testimonial">
                      ${testimonial.text}
                  </div>
                  <div class="user">
                     <!-- <div class="user-img">
                          <img src="${testimonial.avatar}" alt="${testimonial.name}">
                      </div> -->
                      <div class="user-info">
                          <h3>${testimonial.name}</h3>
                          <p>${testimonial.handle}</p>
                      </div>
                  </div>
              </div>
              <div class="right-content">
                  <div class="right-image">
                      <img src="${testimonial.rightImage}" alt="DevTobs' beneficiaries we are proud to showcase">
                  </div>
              </div>
          `;

      slidesContainer.appendChild(slide);
    });
  }

  // Create dots for navigation
  function createDots() {
    testimonials.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = `dot ${index === currentSlide ? "active" : ""}`;
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  // Go to a specific slide
  function goToSlide(index) {
    const slides = slidesContainer.children;
    const dots = dotsContainer.children;

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }

    // Show the active slide
    slides[index].style.display = "flex";
    dots[index].classList.add("active");
    currentSlide = index;

    // Reset the interval
    clearInterval(interval);
    startInterval();
  }

  // Go to next slide
  function nextSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= testimonials.length) {
      nextIndex = 0;
    }
    goToSlide(nextIndex);
  }

  // Go to previous slide
  function prevSlide() {
    let prevIndex = currentSlide - 1;
    if (prevIndex < 0) {
      prevIndex = testimonials.length - 1;
    }
    goToSlide(prevIndex);
  }

  // Start the auto-sliding interval
  function startInterval() {
    interval = setInterval(nextSlide, 5000);
  }

  // Initialize slider
  createSlides();
  createDots();
  startInterval();

  // Add event listeners to buttons
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
});
