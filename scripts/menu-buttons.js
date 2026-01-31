const main = document.querySelector(".main"); 
const openAdmin = document.getElementById("open-admin");
const goHome = document.getElementById("go-home");

function loadPage(url) {
fetch(url)
    .then(response => {
      if (!response.ok) throw new Error(`Ошибка загрузки: ${response.status}`);
      return response.text();
    })
    .then(html => {
      main.innerHTML = html;
    })
    .catch(err => console.error(err));
}

const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".mobile-menu");

const openAdminMB = document.getElementById("open-admin-mb");
const goHomeMB = document.getElementById("go-home-mb");

const mobileButtons = [goHomeMB, openAdminMB]
const contents = ["main.html", "administrations.html"]

menuBtn.addEventListener("click", e => {
    e.stopPropagation();
    menu.classList.toggle("active");
});

document.addEventListener("click", e => {
    if (!menu.contains(e.target)) {
        menu.classList.remove("active");
    }
});

menu.addEventListener("click", e => {
  e.stopPropagation();
});


openAdmin.addEventListener("click", () => {
    loadPage("administrations.html");
    menu.classList.remove("active");
});

goHome.addEventListener("click", () => {
    loadPage("main.html");
    menu.classList.remove("active");
});



for (let i = 0; i < mobileButtons.length; ++i){
	mobileButtons[i].addEventListener("click", () => {
		loadPage(contents[i]);
		menu.classList.remove("active");
	});
}