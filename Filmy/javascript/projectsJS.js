//Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modalContent = document.getElementById("modalImage");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("imgContent1");
var img2 = document.getElementById("imgContent2");
var img3 = document.getElementById("imgContent3");

var modalImg = document.getElementById("img01");


img1.onclick = function(){
  modalContent.style.display = "block";
  modalImg.src = this.src;
}

img2.onclick = function(){
  modalContent.style.display = "block";
  modalImg.src = this.src;
}

img3.onclick = function(){
  modalContent.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("closeImage")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalContent.style.display = "none";
}



function hoverImage(obj){
  obj.style.opacity = 0.7;
}

function nohoverImage(obj){
  obj.style.opacity = 1;
}


