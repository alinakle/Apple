window.onscroll = function () {
    scrollRotate();

    const ele1  = document.getElementById('headlines');

    if (checkView(ele1)) {
        ele1.style.opacity = '1';
    }

    const ele2 = document.getElementById('thirdSectionTextInner');

    if (checkView(ele2)) {
        ele2.style.opacity = '1';
    }

    const ele3 = document.getElementById('fifthFirst');

    if (checkView(ele3)) {
        ele3.style.opacity = '1';
    }

    const ele4 = document.getElementById('fifthSecond');

    if (checkView(ele4)) {
        ele4.style.opacity = '1';
    };

    const ele5 = document.getElementById('sixthSecText');

    if (checkView(ele5)) {
        ele5.style.opacity = '1';
    };
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