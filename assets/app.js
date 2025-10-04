//function to fetch the meals 
window.galerry = document.getElementById("galerry");
const para = document.getElementById("category");
$(document).ready(function(){
  let query = "https://www.themealdb.com/api/json/v1/1/categories.php";
    $.get(query, function(data, status){
        var json = data.categories;
    for(let i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(obj.strCategory);
    const p = document.createElement("p"); 
    p.id = "category";
    p.innerHTML = obj.strCategory;
   // p.href = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+obj.strCategory;
    galerry.appendChild(p);
}
    }) 
})
const pClick = document.querySelector();
pClick.addEventListener("click", () => {
    alert(this.innerHTML)
})
