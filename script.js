document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "lux_photos/ferrari_16.jpg",
      "lux_photos/ferrari_2.jpg",
      "lux_photos/ferrari_3.jpg",
      "lux_photos/ferrari_4.jpg",
      "lux_photos/ferrari_5.jpg",
      "lux_photos/ferrari_6.jpg",
      "lux_photos/ferrari_7.jpg",
      "lux_photos/ferrari_12.jpg",
      "lux_photos/ferrari_13.jpg",
      "lux_photos/ferrari_14.jpg",

    
    ];
  
    const banner = document.getElementById("banner");
    let currentIndex = 0;
  
    function rotateBanner() {
      banner.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    rotateBanner(); 
  
    setInterval(rotateBanner, 5000); 
  });
  