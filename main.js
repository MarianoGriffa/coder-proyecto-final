const btnToggle = document.querySelector(".btn-toggle");
const listItems = document.querySelector(".list-items");     
  
btnToggle.addEventListener("click", () => {    
//   // console.log(links.classList);  
//   // console.log(links.classList.contains("random"));
//   // console.log(links.classList.contains("links")); 
//  if (item.classList.contains("show-links")) {
//    links.classList.remove("show-links"); 
//   } else { 
//    links.classList.add("show-links"); 
//    } 
listItems.classList.toggle("show-links");                  
});       