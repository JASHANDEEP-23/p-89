player_1=localStorage.getItem("PLAYER_1");
player_2=localStorage.getItem("PLAYER_2");
document.getElementById("player1_name").innerHTML=player_1;
document.getElementById("player2_name").innerHTML=player_2;
document.getElementById("player_question").innerHTML="question turn = " +player_1;
document.getElementById("player_answer").innerHTML="answer turn = "+ player_2;
player1_score = 0;
 player2_score = 0;
 document.getElementById("player1_score").innerHTML = player1_score;
 document.getElementById("player2_score").innerHTML = player2_score;
 function send(){
    get_word = document.getElementById("word").value;
     word = get_word.toLowerCase();
      console.log("word in lowerCase = " + word);
      // we will create three variables to pick up three characters
      first_char = word.charAt(1);
      console.log(" first letter picked - " + first_char);
      middle_position = Math.floor(word.length / 2);
      second_char = word.charAt(middle_position);
      console.log(" second letter picked - " + second_char);
      last_position = word.length - 1;
      third_char = word.charAt(last_position);
      console.log(" third letter picked - " + third_char);

//we will create three new variables to replace the three characters that we picked up above

remove_1 = word.replace(first_char, "_"); 
console.log(remove_1);
remove_2 = remove_1.replace(second_char, "_");
 console.log(remove_2);
 remove_3 = remove_2.replace(third_char, "_");
  console.log(remove_3);
 }