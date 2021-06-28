
$(document).ready(function(){
    const root = document.querySelector(":root");
const container = document.querySelector(".contacto-container");

function adjustContainerWidth() {
  console.log("Resize");
  let containerW = container.offsetWidth + 'px';
  console.log(containerW);

  root.style.setProperty("--container-width", containerW);
};

window.resize = function(){
  adjustContainerWidth();
};

window.addEventListener("resize", adjustContainerWidth);
window.onload = function(){
  adjustContainerWidth();
};
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
  });

  