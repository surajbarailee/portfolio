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


document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circles li");
    const imageSources = [
        "assets/images/docker.svg",
        "assets/images/firebase.svg",
        "assets/images/js.png",
        "assets/images/postgres.png",
        "assets/images/python.png",
        "assets/images/typescript.png",
        "assets/images/vue.svg",
        "assets/images/aws.png",
        "assets/images/django.svg"
    ];

    circles.forEach(circle => {
        const imgElement = circle.querySelector("img");

        // Function to change the image randomly
        function changeImage() {
            console.log("Changing Image")
            const randomIndex = Math.floor(Math.random() * imageSources.length);
            imgElement.src = imageSources[randomIndex];
        }

        // Add event listener for animation end
        // circle.addEventListener("animationend", changeImage);
        circle.addEventListener("animationiteration", changeImage);

        // Optionally, trigger the changeImage function at the start
        changeImage();
    });
});



const logo = document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++) {

    logo[i].style.strokeDasharray = logo[i].getTotalLength();
    logo[i].style.strokeDashoffset = logo[i].getTotalLength();
    logo[i].style.animation = `line-animation 2s ease forwards ${i/7 + 0.5}s`;
}

const logoFill = document.querySelector('#logo');
logoFill.style.animation = `fill-animation 2s ease forwards 2.5s`;
