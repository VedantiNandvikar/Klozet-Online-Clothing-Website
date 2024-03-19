const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

function toggleDropdown(category) {
  const dropdown = document.getElementById(`${category}Dropdown`);
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

