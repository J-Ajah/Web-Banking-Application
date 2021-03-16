  let  items = document.querySelector(".searchInput").classList;

 document.querySelector("#search").addEventListener("click", addClassButton)

 function addClassButton(){
  items.add(".searchInputShow");
  alert(items)
} 



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() { 
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
     
    }
  }
