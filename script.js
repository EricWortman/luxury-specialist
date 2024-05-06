document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "lux_photos/ferrari_1.jpg",
      "lux_photos/ferrari_2.jpg",
      "lux_photos/ferrari_3.jpg",
      "lux_photos/ferrari_4.jpg",
      "lux_photos/ferrari_5.jpg",
      "lux_photos/ferrari_6.jpg",
      "lux_photos/ferrari_7.jpg",

      // Add more image filenames as needed
    ];
  
    const banner = document.getElementById("banner");
    let currentIndex = 0;
  
    function rotateBanner() {
      banner.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    rotateBanner(); // Initial rotation
  
    setInterval(rotateBanner, 5000); // Rotate every 5 seconds (adjust as needed)
  });
  