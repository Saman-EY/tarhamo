// Select category buttons and product list container
const categoryButtons = document.querySelectorAll(".items-category-design");
const CardListParent = document.querySelector(".CardListParent");

// Original products array
const products = [
  {
    id: 1,
    name: "گوشواره اسپرت",
    price: "100,000 تومان",
    code: "کد GS1",
    category: "c1",
  },
  {
    id: 2,
    name: "گوشواره اسپرت",
    price: "100,000 تومان",
    code: "کد GS2",
    category: "c1",
  },
  {
    id: 3,
    name: "گوشواره اسپرت",
    price: "100,000 تومان",
    code: "کد GS3",
    category: "c1",
  },
  {
    id: 4,
    name: "گوشواره اسپرت",
    price: "100,000 تومان",
    code: "کد GS3",
    category: "c3",
  },
  {
    id: 5,
    name: "گوشواره اسپرت",
    price: "100,000 تومان",
    code: "کد GS3",
    category: "c2",
  },
  {
    id: 6,
    name: "گوشواره اسپرت",
    price: "100,000 تومان",
    code: "کد GS3",
    category: "c3",
  },
  {
    id: 7,
    name: "گوشواره اسپرت",
    price: "100,000 تومان",
    code: "کد GS3",
    category: "c3",
  },
  {
    id: 8,
    name: "گوشواره اسپرت",
    price: "100,000 تومان",
    code: "کد GS3",
    category: "c3",
  },
];

// Function to generate and display product cards
function renderProductCards(filteredProducts) {
  // Clear previous products
  CardListParent.innerHTML = "";

  // Generate new product cards based on filtered list
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card-item-product");
    productCard.innerHTML = `
      <div class="z1 position-relative">
                  <!-- hover div -->
                  <div class="imgHover">
                    مشاهده
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M16.3001 4.07998C16.3001 4.26998 16.2301 4.45998 16.0801 4.60998L9.56008 11.13C9.08008 11.61 9.08008 12.39 9.56008 12.87L16.0801 19.39C16.3701 19.68 16.3701 20.16 16.0801 20.45C15.7901 20.74 15.3101 20.74 15.0201 20.45L8.50008 13.93C7.44008 12.87 7.44008 11.14 8.50008 10.07L15.0201 3.54998C15.3101 3.25998 15.7901 3.25998 16.0801 3.54998C16.2201 3.69998 16.3001 3.88998 16.3001 4.07998Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <img src="assets/img/Rectangle 154.png" alt="" />

                  <!-- heart -->
                  <span class="heart"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="white"
                    >
                      <path
                        d="M13.37 20.81C13.03 20.93 12.47 20.93 12.13 20.81C9.23 19.82 2.75 15.69 2.75 8.68998C2.75 5.59998 5.24 3.09998 8.31 3.09998C10.13 3.09998 11.74 3.97998 12.75 5.33998C13.76 3.97998 15.38 3.09998 17.19 3.09998C20.26 3.09998 22.75 5.59998 22.75 8.68998C22.75 15.69 16.27 19.82 13.37 20.81Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                  ></span>
                </div>

                <div class="z2">
                  <p>${product.name}</p>
                  <p>${product.price}</p>
                </div>

                <div class="z3">
                  <p>${product.code}</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M7.77447 1.08156C7.92415 0.620902 8.57585 0.620907 8.72553 1.08156L9.90735 4.71885C10.1082 5.33688 10.6841 5.75532 11.3339 5.75532H15.1584C15.6428 5.75532 15.8442 6.37513 15.4523 6.65983L12.3582 8.9078C11.8325 9.28976 11.6125 9.96681 11.8133 10.5848L12.9952 14.2221C13.1448 14.6828 12.6176 15.0659 12.2257 14.7812L9.13168 12.5332C8.60595 12.1512 7.89405 12.1512 7.36832 12.5332L4.27426 14.7812C3.8824 15.0659 3.35516 14.6828 3.50484 14.2221L4.68667 10.5848C4.88748 9.96682 4.66749 9.28976 4.14176 8.9078L1.0477 6.65983C0.65584 6.37513 0.85723 5.75532 1.34159 5.75532H5.16606C5.8159 5.75532 6.39183 5.33688 6.59265 4.71885L7.77447 1.08156Z"
                        stroke="#6E93C4"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M7.29894 0.927052C7.5983 0.0057416 8.9017 0.00573945 9.20106 0.92705L10.3829 4.56434C10.5168 4.97636 10.9007 5.25532 11.3339 5.25532H15.1584C16.1271 5.25532 16.5299 6.49494 15.7462 7.06434L12.6521 9.31231C12.3016 9.56695 12.155 10.0183 12.2889 10.4303L13.4707 14.0676C13.77 14.9889 12.7156 15.7551 11.9318 15.1857L8.83779 12.9377C8.4873 12.6831 8.0127 12.6831 7.66222 12.9377L4.56815 15.1857C3.78444 15.7551 2.72996 14.9889 3.02931 14.0676L4.21114 10.4303C4.34501 10.0183 4.19835 9.56695 3.84787 9.31231L0.753806 7.06434C-0.0299077 6.49494 0.372867 5.25532 1.34159 5.25532H5.16606C5.59929 5.25532 5.98324 4.97636 6.11712 4.56434L7.29894 0.927052Z"
                        fill="#6E93C4"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M7.29894 0.927052C7.5983 0.0057416 8.9017 0.00573945 9.20106 0.92705L10.3829 4.56434C10.5168 4.97636 10.9007 5.25532 11.3339 5.25532H15.1584C16.1271 5.25532 16.5299 6.49494 15.7462 7.06434L12.6521 9.31231C12.3016 9.56695 12.155 10.0183 12.2889 10.4303L13.4707 14.0676C13.77 14.9889 12.7156 15.7551 11.9318 15.1857L8.83779 12.9377C8.4873 12.6831 8.0127 12.6831 7.66222 12.9377L4.56815 15.1857C3.78444 15.7551 2.72996 14.9889 3.02931 14.0676L4.21114 10.4303C4.34501 10.0183 4.19835 9.56695 3.84787 9.31231L0.753806 7.06434C-0.0299077 6.49494 0.372867 5.25532 1.34159 5.25532H5.16606C5.59929 5.25532 5.98324 4.97636 6.11712 4.56434L7.29894 0.927052Z"
                        fill="#6E93C4"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M7.29894 0.927052C7.5983 0.0057416 8.9017 0.00573945 9.20106 0.92705L10.3829 4.56434C10.5168 4.97636 10.9007 5.25532 11.3339 5.25532H15.1584C16.1271 5.25532 16.5299 6.49494 15.7462 7.06434L12.6521 9.31231C12.3016 9.56695 12.155 10.0183 12.2889 10.4303L13.4707 14.0676C13.77 14.9889 12.7156 15.7551 11.9318 15.1857L8.83779 12.9377C8.4873 12.6831 8.0127 12.6831 7.66222 12.9377L4.56815 15.1857C3.78444 15.7551 2.72996 14.9889 3.02931 14.0676L4.21114 10.4303C4.34501 10.0183 4.19835 9.56695 3.84787 9.31231L0.753806 7.06434C-0.0299077 6.49494 0.372867 5.25532 1.34159 5.25532H5.16606C5.59929 5.25532 5.98324 4.97636 6.11712 4.56434L7.29894 0.927052Z"
                        fill="#6E93C4"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M7.29894 0.927052C7.5983 0.0057416 8.9017 0.00573945 9.20106 0.92705L10.3829 4.56434C10.5168 4.97636 10.9007 5.25532 11.3339 5.25532H15.1584C16.1271 5.25532 16.5299 6.49494 15.7462 7.06434L12.6521 9.31231C12.3016 9.56695 12.155 10.0183 12.2889 10.4303L13.4707 14.0676C13.77 14.9889 12.7156 15.7551 11.9318 15.1857L8.83779 12.9377C8.4873 12.6831 8.0127 12.6831 7.66222 12.9377L4.56815 15.1857C3.78444 15.7551 2.72996 14.9889 3.02931 14.0676L4.21114 10.4303C4.34501 10.0183 4.19835 9.56695 3.84787 9.31231L0.753806 7.06434C-0.0299077 6.49494 0.372867 5.25532 1.34159 5.25532H5.16606C5.59929 5.25532 5.98324 4.97636 6.11712 4.56434L7.29894 0.927052Z"
                        fill="#6E93C4"
                      />
                    </svg>
                  </div>
                </div>

                <button class="buy-btn">
                  <img
                    src="assets/img/shopping-bag.svg"
                    width="24px"
                    height="24px"
                    alt=""
                  />
                  <p>خرید</p>
                </button>
    `;

    CardListParent.appendChild(productCard);
  });

  const hearts2 = document.querySelectorAll(".heart");

  // Add click event listener to each heart
  hearts2.forEach((heart) => {
    heart.addEventListener("click", () => {
      // Toggle the "active" class on the clicked heart
      heart.classList.toggle("active");
    });
  });
}

// Initial render with all products
renderProductCards(products);

// Event listener for category filtering
categoryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Check if the clicked button is already active
    const isActive = button.classList.contains("active");

    // Remove 'active' class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));

    // If the clicked button was not active, make it active
    if (!isActive) {
      button.classList.add("active");

      // Get selected category from button's data attribute
      const selectedCategory = button.getAttribute("data-category");

      // Filter products based on the selected category
      const filteredProducts = products.filter(
        (product) => product.category === selectedCategory
      );

      // Render filtered products
      renderProductCards(filteredProducts);
    } else {
      // If button was active, clear selection and show all products
      renderProductCards(products);
    }
  });
});
