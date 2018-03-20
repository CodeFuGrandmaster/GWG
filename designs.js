

/*
    makeGrid() is running on page load (and only on page load?)
    inputHeight, inputWidth, and colorPicked aren't changing when changed in relevant inputs
    can't seem to erase and remake the grid
    colorize() isn't doing anything
*/


var inputHeight;
var inputWidth;
var colorPicked;

//make sure the values are initially gotten
inputHeight = $("#inputHeight").val();
inputWidth = $("#inputWidth").val();
colorPicked = $("#colorPicker").val();

//Pretty sure I don't need this in two places
// $("#inputHeight").change(function() {inputHeight = $("#inputHeight").val();});
// $("#inputWidth").change(function() {inputWidth = $("#inputWidth").val(); alert(inputWidth);});
// $("#colorPicker").change(function() {colorPicked = $("#colorPicker").val();});


function makeGrid()
{
  //Clear any existing grid, at least, it's supposed to...
  var canvas = $("#pixelCanvas");
  canvas.children().remove();
  
  //Redundant right?
  // inputHeight = $("#inputHeight").val();
  // inputWidth = $("#inputWidth").val();
  // colorPicked = $("#colorPicker").val();
  
  //Why won't they change?
  $("#inputHeight").change(function() {inputHeight = $("#inputHeight").val();});
  $("#inputWidth").change(function() {inputWidth = $("#inputWidth").val();});
  $("#colorPicker").change(function() {colorPicked = $("#colorPicker").val();});

  //Why damn it?
  alert(inputHeight);
  alert(inputWidth);
  
  //It makes the grid fine on page load so yay...?
  var newGrid;
  for(let i = 0; i < inputHeight; i++)
  {
    newGrid += "<tr>";
    for(let j = 0; j < inputWidth; j++)
    {
      newGrid += "<td></td>";
    }
    newGrid +="</tr>";
  }
  canvas.append(newGrid);
}


//Supposed to color each table data cell that's clicked on
function colorize()
{
  $(this).css("background-color", colorPicked);
}

//Why aren't these two lines working to have makeGrid and colorize run?
$("#sizeSubmit").on("click", makeGrid());
$("td").on("click", colorize());