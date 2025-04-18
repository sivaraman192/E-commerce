let sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
}

function goToProductPage() {
  window.location.href = "collection1.html";
}

// shop-btn

const containers = document.querySelectorAll('.new-arrival-container');
containers.forEach(container => {
  const button = container.querySelector('.shop-btn');
  container.addEventListener('click', () => {
    button.style.display = 'block';
  });
});


function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = thumbnail.src;

  // Optional: add active border
  const allThumbs = document.querySelectorAll(".thumbnail-column img");
  allThumbs.forEach(img => img.classList.remove("active"));
  thumbnail.classList.add("active");
}

function selectColor(thumbnail) {
  document.getElementById("mainImage").src = thumbnail.src;

  // Highlight selected thumbnail
  const allThumbs = document.querySelectorAll('.color-thumbnails img');
  allThumbs.forEach(img => img.classList.remove('selected'));
  thumbnail.classList.add('selected');
}

function openModal() {
  document.getElementById("ratingModal").style.display = "block";
}

function closeModal() {
  document.getElementById("ratingModal").style.display = "none";
}

function submitReview() {
  const rating = document.getElementById("rating").value;
  const review = document.getElementById("review").value;

  if (review.trim() === "") {
    alert("Please write a review before submitting.");
    return;
  }

  // Create a new review element
  const reviewItem = document.createElement("div");
  reviewItem.className = "review-item";
  reviewItem.innerHTML = `<strong>Rating:</strong> ${"⭐".repeat(rating)}<br><strong>Review:</strong> ${review}`;

  // Add to review list
  document.getElementById("reviewList").appendChild(reviewItem);

  // Clear the form
  document.getElementById("review").value = "";
  document.getElementById("rating").value = "5";

  closeModal();
}



// Sliders
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % dots.length;
  showSlide(currentIndex);
}

setInterval(autoSlide, 4000);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(index);
  });
});



// function loginUser(event) {
//   event.preventDefault();
//   const email = document.getElementById('loginEmail').value;
//   const password = document.getElementById('loginPassword').value;

//   // Simulated login check
//   if (email === "test@example.com" && password === "123456") {
//     alert("Login successful!");
//     // Redirect to index.html (your home page)
//     window.location.href = "index.html";
//   } else {
//     alert("Invalid credentials. Try again.");
//   }
// }


// function registerUser(event) {
//   event.preventDefault();
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const confirmPassword = document.getElementById('confirmPassword').value;

//   if (password !== confirmPassword) {
//     alert("Passwords do not match!");
//     return false;
//   }

//   alert("Registration successful!");
//   window.location.href = "login.html";
// }