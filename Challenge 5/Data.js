
$(document).ready(function(){
  $('#number').append(`
        <tr>
          <th>myInt</th>
          <td><input type="number" id="myInt"></td>
        </tr>
        
      <tr>
        <th>myString</th>
        <td> The number
          <input type="number" id="myString">
        </td>
      </tr>
      
      <tr>
        <th>myNumString</th>
        <td><input type="number" id="myNumString"></td>
      </tr> 
  `); 

var myInt = $("#myInt")
var myString = $("#myString")
var myNumString = $("#myNumString")
var answer1 = myInt.val() + myString.val()

$("button").click( function() {
  $("#p1").append(answer1);
  console.log(myInt.val())
  console.log(myString.val())
});


$('#answer').append(`

    <tr><th id="color">Addition</th></tr>

    <tr>
        <th>myInt + myString?</th>
        <td></td>
      </tr>
`);

    $('#answer').append(`
        <tr>
          <th>myInt + myNumString?</th>
          <td></td>
        </tr>`);

    $('#answer').append(`       
        <tr>
          <th>myNumString + myInt?</th>
          <td></td>
        </tr>`);

    $('#answer').append(`        
      <tr><th id="color">Fancier addition</th></tr>
    `);

    $('#answer').append(`        
        <tr>
          <th>myInt + myNumString + myString?</th>
          <td></td>
        </tr>`);

    $('#answer').append(`
        <tr>
          <th>myInt + myInt + myString?</th>
          <td></td>
        </tr>`);

    $('#answer').append(`        
        <tr>
          <th>myString + myInt + myInt?</th>
          <td></td>
        </tr>`);

    $('#answer').append(`       
     <tr><th id="color">Subtraction</th></tr>
    `);

    $('#answer').append(`        
        <tr>
          <th>myInt - myString?</th>
          <td></td>
        </tr>`);

    $('#answer').append(`        
        <tr>
          <th>myInt - myNumString?</th>
          <td></td>
        </tr>`);

    $('#answer').append(`        
        <tr>
          <th>myString - myNumString?</th>
          <td></td>
        </tr>`);

    $('#answer').append(`
      <tr><th id="color">Comparisons</th></tr>
    `);

    $('#answer').append(` 
        <tr>
          <th>myInt == myNumString?</th>
          <td></td>
        </tr>`);

    $('#answer').append(`        
        <tr>
          <th>myInt === myNumString?</th>
          <td></td>
        </tr> `);
});
