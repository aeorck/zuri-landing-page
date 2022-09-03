var acct = document.getElementsByClassName("accordion");
var i;
console.log(acct.length)
for (i = 0; i < acct.length; i++) {
  
  acct[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}