    <script>

    
// -Click on crystals to Add Points to Your Score 

// -When your score = Random Number 						-
// 	-Win Count increases  
// 	-Alert You Won! 
// 	-Your Score Resets —> 0
// 	-Random Number Resets 
// 	-New Random Number 
// 	-Score Resets to 0 
// 	-Crystals have new Number Value
// 	-WinCount Stays @1

// If else 

// Number goes above Random Number 
// 	-LossCount Increases 

        // var crystalNumOptions = (1..12);
        // var matchNumOptions = (19..120);
        
        // Declare variables 

         var crystals = {
             violet: {
                "score": 0 
             },
             blue: {
                "score": 0
             },
             pink: {
                "score": 0
             },
             green: {
                "score": 0
             }
         }

    

        //  var targetNumber = 0;
         var totalScoreCount = 0; 
         var winsCount = 0; 
         var lossesCount = 0; 
        

        // random number generated 19-120

        
        var targetNumber = Math.floor(Math.random()*(120 - 19 + 1));
        console.log(targetNumber)

        $("#randomNumber").text(targetNumber);


        
        // Scoreboard Count 
        $("#wins").text(wins);
        $("#losses").text(losses);

        //  Crystal value generated 1-12
        for (var i = 0; i < 4; i++) {
            var images = $('img');
            // Math.floor((Math.random() * 12) + 1);
           

            var crystalValue = Math.floor(Math.random()*(12 - 1 + 1));

            $(images[i]).attr('value', crystalValue);

        }

    

        // $("crystalValue").text(totalScore)

        // Key click Events (your score)


        var totalScoreSpan = document.getElementById("total-score")
           
        // var totalScoreSpan = document.$("total-score")

        var winsSpan = document.getElementById("wins")

        // var winsSpan = document.$("wins")

        var lossesSpan = document.getElementById("losses")

        // var lossesSpan = document.$("losses")
            

        $("#violet").on("click", function() {
            console.log("violet image was clicked " + $(this).attr("value"))
            violet = $(this).attr("value");
            totalScoreCount += crystalValue;
            totalScoreSpan.textContent = totalScoreCount;
        });

        $("#blue").on("click", function(){
            console.log("blue image was clicked " + $(this).attr("value"))
            blue = $(this).attr("value");
            totalScoreCount += crystalValue;
            totalScoreSpan.textContent = totalScoreCount;
            console.log(totalScoreCount);
        })

        $("#pink").on("click", function() {
            console.log("pink image was clicked " + $(this).attr("value"))
            pink = $(this).attr("value");
            totalScoreCount += crystalValue;
            totalScoreSpan.textContent = totalScoreCount;
        });

        $("#green").on("click", function() {
            console.log("green image was clicked " + $(this).attr("value"))
            green = $(this).attr("value");
            totalScoreCount += crystalValue;
            totalScoreSpan.textContent = totalScoreCount;
        });
       
        // updating total score variable .random

        $("#totalScore").text(totalScoreCount)
        $("#number-to-guess").text(targetNumber);

        // crystals.attr("crystal-value", crystalValues[i]);

       
        

        // if else statements (win count, loss count, alert,random num reset)
        

        winsSpan.textContent = winsCount
        // lossesSpan.textContent = lossesCount
        totalScoreSpan.textContent = totalScoreCount 

        

        
    

        if (totalScoreCount === targetNumber) {
                
                winsCount++;
                // console.log(winsCount);
                winsSpan.textContent = winsCount;
                alert("Awesome, Nice Crystal Collection!");
                
        
            }
        


        else {
                // lossesCount++;
                lossesSpan.textContent = lossesCount;
                totalScoreCount > targetNumber;
                lossesCount++;
            }



        </script>