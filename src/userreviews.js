import './userreviews.css';
const UserReview=()=>{
    var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active1";
}
    return (
        <>
        <div className="slideshow-container1">
            <div className="mySlides1">
                <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
                <p className="author1">- John Keats</p>
            </div>
            <div className="mySlides1">
                <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
                <p className="author1">- Ernest Hemingway</p>
            </div>
            <div className="mySlides1">
                <q>I have not failed. I've just found 10,000 ways that won't work.</q>
                <p className="author1">- Thomas A. Edison</p>
            </div>
            <a className="prev1" onClick={plusSlides(-1)}>❮</a>
            <a className="next1" onClick={plusSlides(1)}>❯</a>
        </div>
        <div className="dot-container1">
            <span className="dot1" onClick={currentSlide(1)}></span> 
            <span className="dot1" onClick={currentSlide(2)}></span> 
            <span className="dot1" onClick={currentSlide(3)}></span> 
        </div>
{/* <script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>
*/}
</>
    )
}
export default UserReview;