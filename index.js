const options = { 
    color: '#ffffff',
    size: 25,
    invert: false,
    dotColor: '#ffffff',
    dotSize: 10,
    magnetic: false,
    radius: 20,
};
new Blobity(options);



const logo = document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++) {

    logo[i].style.strokeDasharray = logo[i].getTotalLength();
    logo[i].style.strokeDashoffset = logo[i].getTotalLength();
    logo[i].style.animation = `line-animation 2s ease forwards ${i/7 + 0.5}s`;
}

const logoFill = document.querySelector('#logo');
logoFill.style.animation = `fill-animation 2s ease forwards 2.5s`;
