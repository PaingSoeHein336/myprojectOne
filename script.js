let slider = document.querySelector(".headerImg");
const aTag = document.querySelector("a");

const changPhoto = () => {
    let i = 0;
    if (i > 0) {
        slider.src = "Image/flower.jpg";
        i = 0
    } else {
        slider.src = "Image/header.jpg";
        i =+ 1;
    }
   
};

// setInterval(changPhoto, 2000);