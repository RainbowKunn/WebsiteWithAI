const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    // Mevcut section'ı gizle
    document.querySelector('.section.active').style.display = 'none';
    // Diğer section'ı göster
    document.querySelector('.section.next').style.display = 'flex';
    // Mevcut section'ı next sınıfını kaldır, active sınıfını ekle
    document.querySelector('.section.active').classList.remove('active');
    document.querySelector('.section.next').classList.add('active');
  });
});
