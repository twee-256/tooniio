// Tab Functionality
// CHANGE ALL GETELEMENTBY... TO QUERY
document.getElementById("defaultTab").click();

function openTab(tabEvent, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const navTabs = document.getElementsByClassName("navTab");
    for (let i = 0; i < navTabs.length; i++) {
        navTabs[i].classList.remove("active");
    }

    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add("active");
    }

    tabEvent.currentTarget.classList.add("active");
}

// Theme toggle
const light = document.querySelector('#light');
const dark = document.querySelector('#dark');
const logoLight = document.querySelector('.logo-light');
const logoDark = document.querySelector('.logo-dark');
const themeToggle = document.querySelector('.theme-toggle');

light.addEventListener('click', () => {
    dark.classList.remove('hidden');
    logoDark.classList.remove('hidden');
    light.classList.add('hidden');
    logoLight.classList.add('hidden');

    let page = document.body;
    page.classList.add("dark-mode");

})

dark.addEventListener('click', () => {
    light.classList.remove('hidden');
    logoLight.classList.remove('hidden');
    dark.classList.add('hidden');
    logoDark.classList.add('hidden');


    let page = document.body;
    page.classList.remove("dark-mode");
})

// Card Flip
let cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    card.addEventListener('click', () => {
        card.classList.toggle('card-flipped');
        console.log("Card clicked!");
    });
}

// Cursor hover
// document.querySelectorAll('.contentFront').forEach(card => {
//     const tooltip = card.querySelector('.tooltipText');

//     card.addEventListener('mousemove', (event) => {
//         tooltip.style.display = 'block';
//         const rect = card.getBoundingClientRect();
//         tooltip.style.left = `${event.clientX - rect.left + 15}px`;
//         tooltip.style.top = `${event.clientY - rect.top + 15}px`;
//     });

//     card.addEventListener('mouseleave', () => {
//         tooltip.style.display = 'none';
//     });
// });
