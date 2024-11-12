function openTab(tabId, element) {
  // Remove active class from all buttons and tabs
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".parent")
    .forEach((tab) => tab.classList.remove("active"));

  // Add active class to the clicked button and the corresponding content tab
  element.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// Select all buttons within the 'tab-list-btn' div
const tabButtons = document.querySelectorAll(".tab-list-btn button");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // Add 'active' class to the clicked button
    button.classList.add("active");
  });
});
