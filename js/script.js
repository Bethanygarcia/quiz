/* global $ */

$(document).ready(function() {
    $("#clicker").click(function() {
        var finalAnswer = "Your house is...";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = questionOne(q1Result) + questionTwo(q2Result) + questionThree(q3Result);
        $("#word").text(answer(totalScore));
        $("#clicker").hide();
    });
        
    function questionOne(q1Result){
        if (q1Result === "North"){
            return 1;
        }
        else if (q1Result === "Dothraki"){
            return 2;
        }
        else if (q1Result === "Boy King"){
            return 3;
        }
    }
    
    function questionTwo(q2Result){
        if (q2Result === "Slay"){
            return 1;
        }
        else if (q2Result === "Befriend"){
            return 2;
        }
    }
    
    function questionThree(q3Result){
        if (q3Result=== "Drogon"){
            return 1;
        }
        else if (q3Result==="Rhaegal"){
            return 2;
        }
        else if (q3Result==="Viserion") {
            return 3;
        }  
        
    }
    

  function answer(totalScore){
   var imgSrc;
        var name = $("#name").val();
    
    
       
      if (totalScore <= 4){
      	imgSrc="https://media.giphy.com/media/ypQyYdjj6wy9a/giphy.gif";
          $("#ending").attr("src",imgSrc);
          return name + " your house is Stark!";
      }
      
     else if (totalScore >4 && totalScore <=  6){
     	imgSrc="https://media.giphy.com/media/qEou3YnK55nXO/giphy.gif";
     	$("#ending").attr("src",imgSrc);
          return name+ " your house is Lannister!";
          
     }
     
     else if(totalScore> 6){
   imgSrc= "https://i.imgur.com/8D1ZZrE.gif?noredirect";
   $("#ending").attr("src",imgSrc);
         return name + " your house is Targaryen!";
     }
      
  }
});