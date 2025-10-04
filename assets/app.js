//function to fetch the meals 

$(document).ready(function(){
  console.log("helcome")  
})
function search(value){
    let query = "https://www.themealdb.com/api/json/v1/1/search.php?s="+value;
    $.get(query, function(data, status){
        data.array.forEach(element => {
           console.log(element.strMeal)
        });
    })
    console.log()
}