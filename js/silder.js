//slider
let slider = document.getElementById('slider');
let active = document.getElementById('active');
let point1 = document.getElementById('point1');
let point2 = document.getElementById('point2');
let point3 = document.getElementById('point3');
let point4 = document.getElementById('point4');

//first slide
point1.onclick = function () {
    slider.style.transform = 'translateX(0)';
    active.style.top = '0px';
    slider.style.background = 'url("../style/assets/img1.jpg")';
};

//second slide
point2.onclick = function () {
    slider.style.transform = 'translateX(-25%)';
    active.style.top = '70px';
    slider.style.background = 'url("../style/assets/img1.jpg")';
};

//third slide
point3.onclick = function () {
    slider.style.transform = 'translateX(-50%)';
    active.style.top = '140px';
    slider.style.background = 'url("../style/assets/img1.jpg")';
};

//fourth slide
point4.onclick = function () {
    slider.style.transform = 'translateX(-75%)';
    active.style.top = '210px';
    slider.style.background = 'url("../style/assets/img1.jpg")';
};

let chr = -1;
let txt = 'Travel is amazing...'
let l = txt.length
let p = "_"
function changetext() {
    chr++;
    t = document.all["text"].innerHTML
    tt = t.substring(0, t.length - p.length)
    if (txt.charAt(chr) != "<") {
        document.all["text"].innerHTML = tt + txt.charAt(chr) + p
    }
    else {
        document.all["text"].innerHTML = tt + txt.substring(chr, chr + 4) + p
        chr = chr + 3
    }
    setTimeout("changetext()", 250)
}

function str(num) {
    let s = ""
    for (i = 0; i < num; i++) { s = s + " " }
    return s
}
