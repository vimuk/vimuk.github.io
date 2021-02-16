
 var modal_1 = document.getElementById("my_modal_1");
var btn_1 = document.getElementById("btn_modal_window_1");
var span_1 = document.getElementsByClassName("close")[0];
btn_1.onclick = function() {
  modal_1.style.display = "block";
};
modal_1.onclick = function() {
  modal_1.style.display = "none";
};
// клик біля модального вікна
window.onclick = function(event) {
  if (event.target == modal_1) {
    this.modal_1.style.display = "none";
  }
};



var modal_ = document.getElementById("my_modal_");
var btn_ = document.getElementById("btn_modal_window_");
var span_ = document.getElementsByClassName("close")[0];
btn_.onclick = function() {
  modal_.style.display = "block";
};
modal_.onclick = function() {
  modal_.style.display = "none";
};
// клик біля модального вікна
window.onclick = function(event) {
  if (event.target == modal_) {
    this.modal_.style.display = "none";
  }
};      

// document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;


function autoSlider (){
	timer = setTimeout(function (){
		var polosa = document.getElementById('polosa');
		left = left - 280;
		if (left < -5320) {
			left = 0;
			clearTimeout(timer);
		}
		polosa.style.left = left +'px';
		autoSlider ();
	}, 1800);
}
   
 var modal_2 = document.getElementById("my_m");
 var btn_2 = document.getElementById("btn_m");
 var span_2 = document.getElementsByClassName("close")[0];
 btn_2.onclick = function() {
   modal_2.style.display = "block";
 };
 modal_2.onclick = function() {
   modal_2.style.display = "none";
 };
 // клик біля модального вікна
 window.onclick = function(event) {
   if (event.target == modal_2) {
     this.modal_2.style.display = "none";
   }
 };
 



    
 var modal_3 = document.getElementById("my_m3");
 var btn_3 = document.getElementById("btn_m3");
 var span_3 = document.getElementsByClassName("close")[0];
 btn_3.onclick = function() {
   modal_3.style.display = "block";
 };
 modal_3.onclick = function() {
   modal_3.style.display = "none";
 };
 // клик біля модального вікна
 window.onclick = function(event) {
   if (event.target == modal_3) {
     this.modal_3.style.display = "none";
   }
 };