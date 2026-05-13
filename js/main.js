// ===========================
// HAMBURGER MENU TOGGLE
// ===========================

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const hamburgerIcon = document.getElementById('hamburgerIcon');

// Toggle the mobile menu open/closed when hamburger is clicked
hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('open');

  // Swap the icon between bars (☰) and X (✕)
  if (navLinks.classList.contains('open')) {
    hamburgerIcon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
  }
});

// Close the menu when any nav link is clicked
const navItems = navLinks.querySelectorAll('a');
navItems.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
  });
});


// ===========================
// NAVBAR SHADOW ON SCROLL
// ===========================

const header = document.getElementById('header');

// When the user scrolls down, add a shadow to the navbar
window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// ===========================
// MODAL — SERVICES PAGE
// ===========================

// Grab the modal overlay and its inner elements
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalTitle   = document.getElementById('modalTitle');
const modalBody    = document.getElementById('modalBody');
const modalIcon    = document.getElementById('modalIcon');

// Only run this code if the modal exists on the page (services page only)
if (modalOverlay) {

  // Get all "Read More" buttons on the page
  const openButtons = document.querySelectorAll('.open-modal');

  openButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {

      // Read the data attributes from the clicked button
      const title = btn.getAttribute('data-title');
      const body  = btn.getAttribute('data-body');
      const icon  = btn.getAttribute('data-icon');

      // Inject the content into the modal
      modalTitle.textContent = title;
      modalBody.textContent  = body;
      modalIcon.innerHTML    = '<i class="' + icon + '"></i>';

      // Show the modal by adding the 'active' class
      modalOverlay.classList.add('active');

      // Prevent the page from scrolling while modal is open
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal when X button is clicked
  modalClose.addEventListener('click', function () {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  });

  // Close modal when clicking the dark overlay (outside the box)
  modalOverlay.addEventListener('click', function (e) {
    // e.target is what was clicked — only close if it's the overlay itself
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close modal when pressing the Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

}


// ===========================
// CONTACT FORM VALIDATION
// ===========================

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Only run if the contact form exists on the page
if (contactForm) {

  contactForm.addEventListener('submit', function (e) {
    // Stop the form from actually submitting (no backend)
    e.preventDefault();

    // Grab all field values (trimmed to remove accidental spaces)
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Track whether the form is valid
    let isValid = true;

    // --- Validate Name ---
    if (name === '') {
      showError('name', 'nameError', 'Please enter your name.');
      isValid = false;
    } else {
      clearError('name', 'nameError');
    }

    // --- Validate Email ---
    if (email === '') {
      showError('email', 'emailError', 'Please enter your email address.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      // Check email format using a simple regex
      showError('email', 'emailError', 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError('email', 'emailError');
    }

    // --- Validate Subject ---
    if (subject === '') {
      showError('subject', 'subjectError', 'Please enter a subject.');
      isValid = false;
    } else {
      clearError('subject', 'subjectError');
    }

    // --- Validate Message ---
    if (message === '') {
      showError('message', 'messageError', 'Please enter your message.');
      isValid = false;
    } else {
      clearError('message', 'messageError');
    }

    // If all fields are valid, hide the form and show the success message
    if (isValid) {
      contactForm.style.display = 'none';
      formSuccess.style.display = 'flex';
    }
  });

  // Also clear errors in real time as the user types
  const fields = ['name', 'email', 'subject', 'message'];
  fields.forEach(function (fieldId) {
    document.getElementById(fieldId).addEventListener('input', function () {
      clearError(fieldId, fieldId + 'Error');
    });
  });

}

// Helper: show an error message and add red border to the field
function showError(fieldId, errorId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  field.classList.add('error');
  error.textContent = message;
}

// Helper: clear the error message and remove red border
function clearError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  field.classList.remove('error');
  error.textContent = '';
}

// Helper: check if an email address looks valid
// The regex checks for something@something.something
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
