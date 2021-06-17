window.onscroll = function () {
    scrollRotate();

    const ele1  = document.getElementById('headlines');

    if (checkView(ele1)) {
        ele1.style.opacity = '1';
    }
};

function scrollRotate() {
    const image = document.getElementById("tasseRotate");
    image.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
}

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open')
        dropdown.classList.add('close')
    } 
    else {
        dropdown.classList.add('open')
        dropdown.classList.remove('close')
    }
}

function checkView(ele) {
    if (ele) {
    const rect = ele.getBoundingClientRect();
    const scroll = window.scrollY || window.pageYOffset;

    if (rect.top - scroll <= 0) return true;
    }

    return false;
}