const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


  // Show/hide scroll-to-top button
  const scrollTopBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });

  // Smooth scroll to top
  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  //image gallery blog 
 
  const pageButtons = document.querySelectorAll('.page-btn');
  const pages = document.querySelectorAll('.image-page');
  const nextLink = document.querySelector('.next-link');

  let  = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.style.display = i === index ? 'flex' : 'none'; // match your blog-grid layout (could be "block")
    });

    pageButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    currentPage = index;
  }

  // Pagination buttons
  pageButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      showPage(i);
    });
  });

  
  // Initial load
  showPage(0);

  
  
  // ✅ Add this to handle the "Next" link
  nextLink.addEventListener('click', function (e) {
    e.preventDefault();
    const nextIndex = (currentPage + 1) % pages.length; // Loop back to 0
    showPage(nextIndex);
  });
  
  function goToPage(pageNumber) {
    const button = document.querySelector(`.page-btn[data-page="${pageNumber}"]`);
    if (button) {
      button.click();
    }
  }

  //buttons
  let currentPage = 1;

  function goToPage(pageNumber) {
      currentPage = pageNumber;
      
      // Hide all galleries
      const gallery1 = document.getElementById('gallery1');
      const gallery2 = document.getElementById('gallery2');
      const nextLink = document.querySelector('.next-link');
  
      // Show the appropriate gallery
      if (currentPage === 1) {
          gallery1.style.display = 'grid';  // Show gallery 1
          gallery2.style.display = 'none';  // Hide gallery 2
          nextLink.style.display = 'inline'; // Show "Next" button
      } else {
          gallery1.style.display = 'none';  // Hide gallery 1
          gallery2.style.display = 'grid';  // Show gallery 2
          nextLink.style.display = 'none';  // Hide "Next" button
      }
  
      // Update active page button
      document.querySelectorAll('.page-btn').forEach(button => button.classList.remove('active'));
      document.querySelector(`.page-btn[data-page="${currentPage}"]`).classList.add('active');
  }
  
  // Event listener for page buttons
  document.querySelectorAll('.page-btn').forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault();  // Prevent default link behavior
          const page = parseInt(this.getAttribute('data-page'));
          goToPage(page);
      });
  });
  
  // Event listener for "Next" button
  document.querySelector('.next-link').addEventListener('click', function(event) {
      event.preventDefault();  // Prevent default link behavior
      const nextPage = currentPage + 1;
      goToPage(nextPage);  // Go to the next page
  });
  
  // Initial load
  goToPage(currentPage);
  
  //about page
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const updateCount = () => {
          const target = +el.getAttribute('data-target');
          const count = +el.innerText;
          const increment = Math.ceil(target / 100);

          if (count < target) {
            el.innerText = count + increment;
            setTimeout(updateCount, 30);
          } else {
            el.innerText = target;
          }
        };
        updateCount();
        observer.unobserve(el); // run once
      }
    });
  }, { threshold: 0.7 });

  counters.forEach(counter => observer.observe(counter));

//my story section
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
