
$(document).ready(function(){
    //this variable counts clicks
    var clicks = 0;
    //when a card is clicked
		$(".memoryCards").click(function(){
      //clicks variable increments by 1
      clicks += 1;
      //checking if its the first card
      if(clicks == 1){
        //if it is, we assign its source name to firstCard
        firstCard = $(this).children().attr("src");
        //and we open it to user
        $(this).children().slideDown()
      //if its the second card
      }else if(clicks == 2){ 
        //we assign second cards src name to secondCard
        var secondCard = $(this).children().attr("src");
        //and open the card
        $(this).children().slideDown(function(){
          //checking if two cards are matching
          if(firstCard == secondCard){
            //if they match, we tell user wins
            $("h3").html("You Win!").css({"color" : "skyblue"});
            //then wait for 3 seconds
            setTimeout(function(){
              //then hide cards again
              $("img").css({"display" : "none"});
            }, 3000)
            //we reset the clicks counter           
            clicks = 0; 
            //if cards dont match
          }else{
            //we tell user lost
            $("h3").html("You Lose!").css({"color" : "red"});
            //then wait for 3 seconds
            setTimeout(function(){
              //then hide cards again
              $("img").css({"display" : "none"});
            }, 3000)   
            //also reset the clicks counter        
            clicks = 0;           
          }

        }) 

      }			
		})
	})

    function f(){
        window.location.reload();
    }
    