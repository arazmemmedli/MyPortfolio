let toggle = document.querySelector('.header__nav__toggle');
toggle.addEventListener('click', () => {
    event.preventDefault()
    let sidebarMenu = document.querySelector('.site-sidebar-menu');
    sidebarMenu.style.display = "block";
    let menuSlide = document.querySelector('.site-sidebar-menu__content');
    menuSlide.style.transform = "translateX(0%)";
})

let menuItem = document.querySelector('.site-sidebar-menu');
menuItem.addEventListener('click', () => {
    let sidebarMenu = document.querySelector('.site-sidebar-menu');
    sidebarMenu.style.display = "none";
    let menuSlide = document.querySelector('.site-sidebar-menu__content');
    menuSlide.style.transform = "translateX(100%)";
})


const body = document.querySelector('body');
//Portfolio Modal
let modalsref = document.querySelectorAll("#open_modal");
modalsref.forEach(function (ref) {
    ref.onclick = function () {
        event.preventDefault()
        let modal = ref.getAttribute("data-modal");
        document.getElementById(modal).setAttribute("style", "opacity: 1; display: block;");
        body.style.overflowY = "hidden";
    }
});

//Baglanma icon teyin edilsin
let closeref = document.querySelectorAll("#modal_close");
closeref.forEach(function (ref) {
    ref.onclick = function () {
        // Works_modal classli parent tap ve style teyin et 
        let modal = (ref.closest(".works_modal").setAttribute("style", "opacity: 0; visibility: hidden;"));
        body.style.overflowY = "auto";
    }
});

let menuToggles = document.querySelectorAll('.site-sidebar-menu-two__list__item');

function toggleMenuActive(m_active){
    menuToggles.forEach(item => {
        item.classList.remove('active')
    })
    m_active.classList.add('active')    
}

for(let i = 0; i < menuToggles.length; i++){
    menuToggles[i].addEventListener('click', function(){
        toggleMenuActive(menuToggles[i]);
    });
}

// Sticky Header
window.addEventListener("scroll", function () {
    let header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 460);
})


// Gallery Filter
let listItems = document.querySelectorAll('.work__gallery__filter__menu__item');

function toggleActiveClass(f_active){
    listItems.forEach(item => {
        item.classList.remove('f_active')
    })
    f_active.classList.add('f_active')    
}

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        toggleActiveClass(listItems[i]);
    });
}

$('.work__gallery__filter__menu__item').on('click', (e) => {
    const filter = $(e.target).attr('data-filter');
    const items = $('.gallery__filter__content__box').parent();
    for (item of items) {

        if(filter == "all"){
            $(item).removeClass('d-none');
            $(item).parent().removeClass('d-none');
        }
        else if ($(item).attr('data-category') == filter) {
            $(item).removeClass('d-none');
            $(item).parent().removeClass('d-none');
        } else {
            $(item).addClass('d-none');
            $(item).parent().addClass('d-none');
        }
    }
});

// Gallery Filter End

let hireMe = document.getElementById('hireMe');
hireMe.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,5780);
})

let downArrow = document.getElementById('downArrow');
downArrow.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,729);
})

let footerTopArrow = document.getElementById('footerTopArrow');
footerTopArrow.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,0);
})

// Scroll
document.addEventListener("DOMContentLoaded",function(){
    document.documentElement.scrollTo(0,0);
})
 
const home = document.getElementById('home');
const about = document.getElementById('about');
const resume = document.getElementById('resume');
const work = document.getElementById('work');
const testimonials = document.getElementById('testimonials');
const blog = document.getElementById('blog');
const skills = document.getElementById('skills');
const contact = document.getElementById('contact');

home.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,0);
})

about.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,729);
})

resume.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,1269);
})

work.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,1722);
})

testimonials.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,2930);
})

blog.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,3461);
})

skills.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,4581);
})

contact.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,5780);
})

const t_home = document.getElementById('t_home');
const t_about = document.getElementById('t_about');
const t_resume = document.getElementById('t_resume');
const t_work = document.getElementById('t_work');
const t_testimonials = document.getElementById('t_testimonials');
const t_blog = document.getElementById('t_blog');
const t_skills = document.getElementById('t_skills');
const t_contact = document.getElementById('t_contact');

t_home.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,0);
})

t_about.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,729);
})

t_resume.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,1269);
})

t_work.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,1722);
})

t_testimonials.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,2930);
})

t_blog.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,3461);
})

t_skills.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,4581);
})

t_contact.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,5780);
})

// Scroll End

// Preloader
body.onload = function(){
    let preloader = document.querySelector('.preloader');
    preloader.style.display = "none";
} 

// Preloader End

let a_work = document.getElementById('a_work');

a_work.addEventListener('click', () => {
    event.preventDefault()
    document.documentElement.scrollTo(0,1722);
})

