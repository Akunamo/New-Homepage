const navigation = document.getElementById('navigation');
const navToggleBtn = document.querySelector('.nav-toggle')




navToggleBtn.addEventListener('click', toggleNavigation)

function toggleNavigation() {
    const toggle = navToggleBtn.getAttribute('aria-expanded') === "false" ? true : false;
    navToggleBtn.setAttribute('aria-expanded', toggle)
    navigation.setAttribute('aria-expanded', toggle)
    console.log(toggle);
}