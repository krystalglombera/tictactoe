//models
var board = ["X", "", "", "", "", "", "", "", ""]
var turn = "X"

//selectors
var squares = document.querySelectorAll('.square')

//set up click listeners for my squares
for(var i = 0; i < 9; i++){
  squares[i].addEventListener('click', function(e) {
//loop through squares again and check which node was clicked
    for(var j=0; j<9; j++) {
      if (squares[j] === e.target && board[j] === "") {
        board[j] = turn
        drawboard()
        switchTurn()
      }
    }
  })
}

//drawing model to the screen
function drawboard () {
  for(var i = 0; i < 9; i++){
    squares[i].innerHTML = board[i]
  }
}

//switching turns
function switchTurn() {
  if (turn === "X")
    turn = "O"
  else
    turn = "X"
  }
