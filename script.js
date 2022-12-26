document.addEventListener('scroll', function() {
    var currentPosition = window.scrollY;
    var page1 = document.querySelector('.page1').offsetTop;
    var page2 = document.querySelector('.page2').offsetTop;
    var page3 = document.querySelector('.page3').offsetTop;
    var page4 = document.querySelector('.page4').offsetTop;
  
    if (currentPosition >= page1 && currentPosition < page2) {
      // Sayfa 1'deyseniz buraya girmek için
    } else if (currentPosition >= page2 && currentPosition < page3) {
      // Sayfa 2'deyseniz buraya girmek için
    } else if (currentPosition >= page3 && currentPosition < page4) {
      // Sayfa 3'deyseniz buraya girmek için
    } else if (currentPosition >= page4) {
      // Sayfa 4'deyseniz buraya girmek için
    }
  });

  function showPage(pageId) {
    // Tüm sayfaları gizleyin
    document.querySelectorAll(".page").forEach(function(page) {
      page.style.display = "none";
    });
  
    // Belirtilen sayfayı gösterin
    document.getElementById(pageId).style.display = "block";
  }
  
  // Sayfalar arası geçişleri yapın
  document.getElementById("link-page1").addEventListener("click", function() {
    showPage("page1");
  });
  document.getElementById("link-page2").addEventListener("click", function() {
    showPage("page2");
  });
  document.getElementById("link-page3").addEventListener("click", function() {
    showPage("page3");
  });
  document.getElementById("link-page4").addEventListener("click", function() {
    showPage("page4");
  });
  
  function scrollToSection(sectionId) {
    // Section'ın yüksekliğini bulun
    var section = document.getElementById(sectionId);
    var sectionTop = section.offsetTop;
  
    // Section'a doğru scroll atın
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });
  }



// Patlama efektini oluşturun
document.getElementById("scroll-button").style.backgroundImage = "none";
document.getElementById("scroll-button").style.backgroundColor = "red";
document.getElementById("scroll-button").style.borderRadius = "50%";

// 1 saniye sonra, butonun orjinal haliyle geri dönüşün
setTimeout(function() {
  document.getElementById("scroll-button").style.backgroundImage = "url(rocket.png)";
  document.getElementById("scroll-button").style.backgroundColor = "transparent";
  document.getElementById("scroll-button").style.borderRadius = "0";
}, 1000);

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

// Page 1 için animasyon
page1.style.animation = "fadeIn 1s ease-in-out forwards";

// Page 2 için animasyon
page2.style.animation = "fadeIn 1s ease-in-out forwards";

// Page 3 için animasyon
page3.style.animation = "fadeIn 1s ease-in-out forwards";

// Page 4 için animasyon
page4.style.animation = "fadeIn 1s ease-in-out forwards";
  