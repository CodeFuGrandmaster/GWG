

/*
    makeGrid() is running on page load (and only on page load?)
    inputHeight, inputWidth, and colorPicked aren't changing when changed in relevant inputs
    can't seem to erase and remake the grid
    colorize() isn't doing anything
*/


var inputHeight;
var inputWidth;
var colorPicked;

function makeGrid()
{
  /*Clear any existing grid, and then make the new grid.
  The new grid will stay on the page until submit is clicked again.
  At least, it's supposed to...
  For whatever reason, it's disappearing (almost) immediately.
  */
  var canvas = $("#pixelCanvas");
  if(canvas.children())
  {
    canvas.children().remove();
  }

  inputHeight = $("#inputHeight").val();
  inputWidth = $("#inputWidth").val();
  colorPicked = $("#colorPicker").val();
  
  //Actually builds the grid and puts it onto the page.
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

$("#colorPicker").change(function() {colorPicked = $("#colorPicker").val();});
$("#sizeSubmit").on("click", function( event ){makeGrid(); event.preventDefault();});
$("table").on("mousedown", "td", colorize);