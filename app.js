const icon = document.querySelector(".icon");
const content = document.querySelector(".content")
const nav = document.querySelector("nav")
const allLi = document.querySelectorAll("li")

for (let i = 1; i <= allLi.length; i++)
{
    allLi[i - 1].style.marginLeft = `${15 * i}px`;
}

let state = false;

icon.addEventListener('click', () => {
    if (!state)
    {
        content.classList.add("show-nav");
        nav.classList.add("nav-appear");
        state = true;
    }
    else {
        content.classList.remove("show-nav");
        nav.classList.remove("nav-appear");
        state = false;
    }
})