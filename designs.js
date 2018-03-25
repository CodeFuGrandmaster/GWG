
var inputHeight;
var inputWidth;
var colorPicked;


function randomColor()
{
  let tempNum;
  let randColor = "#";
  for(let a = 0; a < 6; a++)
  {
    tempNum = Math.floor(Math.random() * 16) + 1;
    
    alert(tempNum);
    
    switch(tempNum)
    {
      case 1:
        randColor += "0";
        break;
      case 2:
        randColor += "1";
        break;
      case 3:
        randColor += "2";
        break;
      case 4:
        randColor += "3";
        break;
      case 5:
        randColor += "4";
        break;
      case 6:
        randColor += "5";
        break;
      case 7:
        randColor += "6";
        break;
      case 8:
        randColor += "7";
        break;
      case 9:
        randColor += "8";
        break;
      case 10:
        randColor += "9";
        break;
      case 11:
        randColor += "a";
        break;
      case 12:
        randColor += "b";
        break;
      case 13:
        randColor += "c";
        break;
      case 14:
        randColor += "d";
        break;
      case 15:
        randColor += "e";
        break;
      case 16:
        randColor += "f";
        break;
      default:
        randcolor += "0";
        break;
    }
  }
  
  alert(randColor);
  
  return randColor;
}

function randomGrid()
{
  let canvas = $("#pixelCanvas");
  var baseGrid;
  
  for(let i = 0; i < 31; i++)
  {
    baseGrid += "<tr>";
    for(let j = 0; j < 31; j++)
    {
      baseGrid += "<td></td>";
    }
    baseGrid +="</tr>";
  }
  canvas.append(baseGrid);
  
  randomColor();
  
  // for(let b = 0; b < canvas.cells.length; b++)
  // {
  //   canvas.cells[b].css("background-color", randomColor);
  // }
}

function makeGrid()
{
  /*
  Clear any existing grid, and then make the new grid.
  The new grid will stay on the page until submit is clicked again.
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

//Applies the currently selected color to table data cell that is clicked on.
function colorize()
{
  $(this).css("background-color", colorPicked);
}

$("document").ready(function() {randomGrid();});

//Ensures that a new color will be selected
$("#colorPicker").change(function() {colorPicked = $("#colorPicker").val();});

//Makes the grid only when submit button is clicked
$("#sizeSubmit").on("click", function( event ){makeGrid(); event.preventDefault();});

//Event listener to color the table data cell
$("table").on("mousedown", "td", colorize);