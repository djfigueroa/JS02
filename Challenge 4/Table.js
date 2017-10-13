$("#button1").on("click",  function() {
  		let x = document.getElementById ("name").value
  		let y = document.getElementById ("color").value
     	let z = document.getElementById ("food").value

  		$('#2').append(`<tr><td>${x}</td><td>${y}</td><td>${z}</td></tr>`)
});