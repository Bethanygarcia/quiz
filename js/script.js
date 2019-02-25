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
       var name = $("#name").val();
       
      if (totalScore <= 4){
          return name + " your house is Stark!";
      }
      
     else if (totalScore >4 && totalScore <=  6){
          return name+ " your house is Lannister!";
          
     }
     
     else if(totalScore> 6){
         return name + " your house is Targaryen!";
     }
      
  }
});