
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
// show trang hiện tại
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // hiển thị đến slide cuối cùng mà hết thì chuyển sang lại slide đầu tiên lại
  if (n < 1) {slideIndex = slides.length} // dịch sang hình cuối nếu slide đầu bấm mũi tên ̣hoặc chấm bên trái

  for (i = 0; i < slides.length; i++) { // xóa hết hình
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { // cho tất cả 
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; // muốn hiển thị số sau thì xóa hết các số còn lại
  dots[slideIndex-1].className += " active"; // hỗ trợ lệnh for thứ 2, active hỗ trợ dấu chấm đậm hơn
}