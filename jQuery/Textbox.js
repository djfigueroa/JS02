src="jquery-3.2.1.min.js"


$("button").on("click",  function() {
  let x = document.getElementById ("question-1")
  console.log(x)
  $("p").text(x.value)
}); 