// ====== Side Navbar Toggle ======
let sidenav = document.querySelector(".side-navbar");

function showNavbar() {
  sidenav.style.left = "0";
}

function closeNavbar() {
  sidenav.style.left = "-60%";
}

// ====== Navigation Functions for Product Collections ======
function goToProductPage() {
  window.location.href = "collection1.html";
}

function most() {
  window.location.href = "collection5.html";
}

function most1() {
  window.location.href = "collection3.html";
}

function most2() {
  window.location.href = "collection2.html";
}

function most3() {
  window.location.href = "collection4.html";
}




// // Show details on image click
// function toggleDetails(event, card) {
//   event.stopPropagation();

//   // Hide other cards
//   document.querySelectorAll(".product-card").forEach(c => {
//     if (c !== card) c.classList.remove("active");
//   });

//   // Show this card
//   card.classList.add("active");
// }

// // Hide details when mouse leaves the card
// document.querySelectorAll(".product-card").forEach(card => {
//   card.addEventListener("mouseleave", () => {
//     card.classList.remove("active");
//   });
// });



// ====== Shop Button on Hover ======
const containers = document.querySelectorAll('.new-arrival-container');
containers.forEach(container => {
  const button = container.querySelector('.shop-btn');
  container.addEventListener('click', () => {
    button.style.display = 'block';
  });
  container.addEventListener('mouseleave', () => {
    button.style.display = 'none';
  });
});

// Handle shop button visibility and detail toggling together
// const containers = document.querySelectorAll('.new-arrival-container');

// containers.forEach(container => {
//   const button = container.querySelector('.shop-btn');
//   const card = container.querySelector('.product-card');

//   container.addEventListener('click', (event) => {
//     event.stopPropagation();

//     // Hide other cards
//     document.querySelectorAll(".product-card").forEach(c => {
//       if (c !== card) c.classList.remove("active");
//     });

//     // Show current details and button
//     if (card) card.classList.add("active");
//     if (button) button.style.display = 'block';
//   });

//   container.addEventListener('mouseleave', () => {
//     // Hide details and button on mouse leave
//     if (card) card.classList.remove("active");
//     if (button) button.style.display = 'none';
//   });
// });


const shopcontainers = document.querySelectorAll('.new-arrival-container');

containers.forEach(container => {
  const card = container.querySelector('.product-card');

  container.addEventListener('click', (event) => {
    event.stopPropagation();

    // Hide other cards
    document.querySelectorAll(".product-card").forEach(c => {
      if (c !== card) c.classList.remove("active");
    });

    // Toggle current card
    card.classList.toggle("active");
  });

  container.addEventListener('mouseleave', () => {
    card.classList.remove("active");
  });
});



// ====== Image Gallery: Main Image and Thumbnail Selection ======
function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = thumbnail.src;

  const allThumbs = document.querySelectorAll(".thumbnail-column img");
  allThumbs.forEach(img => img.classList.remove("active"));
  thumbnail.classList.add("active");
}

function selectColor(thumbnail) {
  document.getElementById("mainImage").src = thumbnail.src;

  const allThumbs = document.querySelectorAll('.color-thumbnails img');
  allThumbs.forEach(img => img.classList.remove('selected'));
  thumbnail.classList.add('selected');
}

// ====== Rating & Review Modal ======
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

  const reviewItem = document.createElement("div");
  reviewItem.className = "review-item";
  reviewItem.innerHTML = `<strong>Rating:</strong> ${"⭐".repeat(rating)}<br><strong>Review:</strong> ${review}`;

  document.getElementById("reviewList").appendChild(reviewItem);

  document.getElementById("review").value = "";
  document.getElementById("rating").value = "5";

  closeModal();
}

// ====== Slider/Carousel ======
// ====== Slider/Carousel ======
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

// ====== Search Bar for Product Filter ======
const productContainer = document.getElementById("products");
const search = document.getElementById("search");
const productlist = document.getElementsByClassName("products-box");

search.addEventListener("keyup", function(event) {
  const enteredValue = event.target.value.toUpperCase();

  for (let count = 0; count < productlist.length; count++) {
    const productname = productlist[count].querySelector("p").textContent;

    if (productname.toUpperCase().indexOf(enteredValue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});
