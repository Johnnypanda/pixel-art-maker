// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
var table = $('#pixel_canvas');


function makeGrid() {
// Your code goes here!
//remove table in case there was one before
	table.children().remove();
	var height = $('#input_height').val();
	var width = $('#input_width').val();

		for(var i = 0; i < height; i++){
			//create rows
			table.append('<tr></tr>');
			//create cols
				for(var j=0; j <  width; j++){
					//we append width number cols to each row
					table.children().last().append('<td></td>');
				}							
			}
	};
//Submit grid size 
$('#submitGrid').click(function(event){
	event.preventDefault();
	makeGrid();
});

//Change color to a picked color on click
table.on('click', 'td', function(){
	var color = $('input[type="color"]').val();
	$(this).attr('bgcolor', color);

});
//Prevent the context menu
 document.oncontextmenu = function() {return false;};
//Add right click event
  table.on('mousedown', 'td', function(e){ 
    if( e.button == 2 ) { 
      $(this).attr('bgcolor', 'white'); 
    } 
 
  }); 

/*
var mouseIsDown = false;

function registerMouseHandlers() {


    $('td').on('mousemove', function() {
        if (mouseIsDown) {
            let color = $('#colorPicker').val();
            $(this).css('backgroundColor', color);
        }
    });

    $('td').on('mousedown', function() {
        mouseIsDown = true;
    });

    $('td').on('mouseup', function() {
        mouseIsDown = false;
    });

    */