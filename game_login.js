function login(){
  player1_input = document.getElementById("player1_name_input").value;
  player2_input = document.getElementById("player2_name_input").value;
    localStorage.setItem("PLAYER_1",player1_input);
    localStorage.setItem("PLAYER_2",player2_input);
    window.location="game_page.html";
}