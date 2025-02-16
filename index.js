


const initialBlobityOptions = {
    licenseKey: "opensource",
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 5,
    focusableElements: '.social-icons',
    font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
    fontSize: 16,
    fontWeight: 500,
    opacity: 0.8,
    color: 'rgb(0, 255, 255)',
    size: 20,
    invert: true,
    dotColor: 'rgb(5, 5, 5)',
    dotSize: 15,
    magnetic: true,
    radius: 20,
    kineticMorphing:true
}  



document.addEventListener("DOMContentLoaded", function () {
    new Blobity(initialBlobityOptions);
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
