$(function() {

  $(window).load(function() {

    var p1Score = 0;
    var p2Score = 0;
    var count = 0;
    // var answers = $('#multiple-choice')
    // var answer1 = $('#answer1').val
    // var answer2 = $('#answer2').text
    // var answer3 = $('#answer3').text
    // var answer4 = $('#answer4').text
// if  (count == 8){
//     if (p1Score > p2Score) {
//     	   $("#typed").typed('reset');
//             $("#typed").typed({
//               strings: ["HUMAN_ONE!!! ^1000",
//                 "You are the champion ^1000",
//                 "You may leave now. ^1000",
//                 "HUMAN_TWO, you get to wait for eternity ^1200",
//                 "Congradulations HUMAN_ONE!"]
//             });
//     }else if (p1Score < p2Score) {
//     	 $("#typed").typed('reset');
//             $("#typed").typed({
//               strings: ["HUMAN_TWO!!! ^1000",
//                 "You are the champion ^1000",
//                 "You may leave now. ^1000",
//                 "HUMAN_ONE, you get to wait for eternity ^1200",
//                 "Congradulations HUMAN_TWO!"]
//             });
//     }else if (p1Score == p2Score) {
//     	 $("#typed").typed('reset');
//             $("#typed").typed({
//               strings: ["HUMAN_ONE^1000",
//                 "You are the champion ^1000",
//                 "You may leave now. ^1000",
//                 "HUMAN_TWO, you get to wait for eternity^1200",
//                 "Congradulations HUMAN_ONE!"]
//             });
//     };;

// };

    $(function() {
      $("#accordion-riddle").accordion({

      });
    });

    $(function() {
      $("#accordion-hints").accordion({
        // collapsible: true,
        active: false
      });
    });

    $(function() {

      $("#typed").typed({
        strings: ["^4000 Hello HUMAN_ONE and HUMAN_TWO!! ",
          "My name is RIDDLE_BOT!! ^1000",
          "You're probably thinking something like ^1000",
          "Why am I strapped to this chair?! ^1000",
          "or ^500",
          "How did I get here?! ^1000",
          "Why is a computer talking to me?! ^1000",
          "Am I being held captive?! ^1000",





          "Don't worry, I'm mostly harmless ^1000",
          "Except for the homicidal rage... ^1200",
          "But probably not today!!! ^1000",
          "We're going to play a riddle game! ^1000",
          "If you answer my riddles correctly, ^1000",
          "you gain a point ^1000",
          "If you answer incorrectly, ^1000",
          "you lose a point  ^1000",
          "Ready! Let's play!^1000",
          "PLAYER_ONE, press the red button! ^1000"
        ],
        typeSpeed: 1,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        // callback: function(){ foo(); },
        // resetCallback: function() { newTyped(); }
      });

      $(".reset").click(function() {
        $("#typed").typed('reset');

      });

    });

    // $()

     $('.riddle1').on('click', function(e) {
      e.preventDefault();
      // $('#riddle1').removeClass('riddle1');
      $('#riddle1').addClass('riddle-button-active')
      $("#typed").typed('reset');
      // $('#riddle1').addClass('hide-on-click');

      $(function() {

        $("#typed").typed({
          strings: ["?uestion #1!!! ^1000",
            "It is greater than God and ^1000",
            "more evil than the devil. ^1000",
            "The poor have it, the rich need it. ^1000",
            "If you eat it you will die. ^1200",
            "What is it?"
          ]
        });

        $('#answer1').text('Love');
        $('#answer2').text('Nothing');
        $('#answer3').text('Motivation');
        $('#answer4').text('Money');

        $('#answer1, #answer3, #answer4').on('click', function() {
          if (count == 0) {
     		$('#r1').addClass('hide')
      		$('#r2').removeClass('hide');

            p1Score--;
            $('.p1-score').text(p1Score)
         
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Oh HUMAN_ONE ^1000",
                "You've let us both down ^1000",
                "Try harder next time! ^1000",
                "And I thought HUMAN_TWO was stupid... ^1200",
                "HUMAN_TWO!! Next button!!"]
            });
          	count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })

        $('#answer2').on('click', function() {
          if (count == 0) {
          	$('#r1').addClass('hide');
      		$('#r2').removeClass('hide');

            p1Score++;
            $('.p1-score').text(p1Score)
            
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["HUMAN_ONE!!!^1000",
                "You've impressed me!! ^1000",
         	 	"For an organic life-form.  ^1000",
                "Well you had to get at least one... ^1000",
                "HUMAN_TWO! click the red button.",
              ]
            });
          count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })



      });
          

    });
// end riddle 1

    $('.riddle2').on('click', function(e) {
      e.preventDefault();
      // $('#riddle1').removeClass('riddle1');
      $('#riddle2').addClass('riddle-button-active')
      $("#typed").typed('reset');
      // $('#riddle1').addClass('hide-on-click');

      $(function() {

        $("#typed").typed({
          strings: ["?uestion #2!!! ^1000",
            "I am the beginning of the end, ^1000",
            "and the end of time and space. ^1000",
            "I am essential to creation,  ^1000",
            "and I surround every place. ^1200",
            "What am I?"
          ]
        });

        $('#answer1').text('God');
        $('#answer2').text('The Big Bang');
        $('#answer3').text('Birth');
        $('#answer4').text('Letter E');

        $('#answer1, #answer2, #answer3').one('click', function() {
          if (count == 1) {

    		$('#r2').addClass('hide');
      		$('#r3').removeClass('hide');

            p2Score--;
            $('.p2-score').text(p2Score)
             
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["WOW!! ^1000",
                "That one was easy!!! ^1000",
                "But apparently not for you. ^1000",
                "You make HUMAN_ONE look smart ^1200",
                "HUMAN_ONE prove me right!!"]
            });
          	count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })

        $('#answer4').one('click', function() {
          if (count == 1) {
          	$('#r2').addClass('hide');
      		$('#r3').removeClass('hide');

            p2Score++;
            $('.p2-score').text(p2Score)
         
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["What!! How!!!^1000",
                "If you're cheating I'll know!! ^1000",
                "Well you had to get at least one... ^1000",
                "OK HUMAN_ONE, next button please.",
              ]
            });
          count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })



      });

    });
// end riddle 2

$('.riddle3').on('click', function(e) {
      e.preventDefault();
   
      $('#riddle3').addClass('riddle-button-active')
      $("#typed").typed('reset');
    

      $(function() {

        $("#typed").typed({
          strings: ["?uestion #3!!! ^1000",
            "What always runs but never walks, ^1000",
            "often murmurs, never talks, ^1000",
            "has a bed but never sleeps,  ^1000",
            "has a mouth but never eats? ^1200",
            "What am I?"
          ]
        });

        $('#answer1').text('A shark');
        $('#answer2').text('Water');
        $('#answer3').text('A river');
        $('#answer4').text('A garbage truck');

        $('#answer1, #answer2, #answer4').one('click', function() {
          if (count == 2) {

    		$('#r3').addClass('hide');
      		$('#r4').removeClass('hide');

            p1Score--;
            $('.p1-score').text(p1Score)
   
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Gee... ^1000",
                "I almost feel bad ^1000",
                "Except I don't have feelings ^1000",
                "Maybe that's why I do this... ^1200",
                "HUMAN_TWO!, it's up to you!"]
            });
          	count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })

        $('#answer3').one('click', function() {
          if (count == 2) {
          	$('#r3').addClass('hide');
      		$('#r4').removeClass('hide');

            p1Score++;
            $('.p1-score').text(p1Score)
      
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Hmmm... that's correct...^1000",
                "That didn't register as cheating. ^1000",
                "I guess that's ok. ^1000",
                "OK HUMAN_TWO, the button.",
              ]
            });
          count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })



      });

    });
// end riddle 3


$('.riddle4').on('click', function(e) {
      e.preventDefault();
      // $('#riddle1').removeClass('riddle1');
      $('#riddle4').addClass('riddle-button-active')
      $("#typed").typed('reset');
      // $('#riddle1').addClass('hide-on-click');

      $(function() {

        $("#typed").typed({
          strings: ["?uestion #4!!! ^1000",
            "The one who makes it, sells it. ^1000",
            "The one who buys it, never uses it. ^1000",
            "The one that uses it never knows that they used it.  ^1000",
            "What am I?"
          ]
        });

        $('#answer1').text('A coffin');
        $('#answer2').text('A story');
        $('#answer3').text('Insurance');
        $('#answer4').text('Air');

        $('#answer3, #answer2, #answer4').one('click', function() {
          if (count == 3) {
    		$('#r4').addClass('hide');
      		$('#r5').removeClass('hide');

            p2Score--;
            $('.p2-score').text(p2Score)
          
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["OOooooohh... ^1000",
                "SO close. ^1000",
                "Just a few brain cells away... ^1000",
                "You can quit now... ^1200",
                "HUMAN_ONE!! do it!"]
            });
          	count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })
       
        $('#answer1').one('click', function() {
          if (count == 3) {
			$('#r4').addClass('hide');
      		$('#r5').removeClass('hide');

            p2Score++;
            $('.p2-score').text(p2Score)
        
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Is my processor working correctly? ^1000",
                "You might be smarter than HUMAN_ONE. ^1000",
                "Oh well. ^1000",
                "OK HUMAN_ONE, the button.",
              ]
            });
          count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
          $('#riddle4').removeClass('riddle-button-active');
        })



      });

    });
// end of riddle 4

    $('.riddle5').on('click', function(e) {
      e.preventDefault();
      // $('#riddle1').removeClass('riddle1');
      $('#riddle5').addClass('riddle-button-active')
      $("#typed").typed('reset');
      // $('#riddle1').addClass('hide-on-click');

      $(function() {

        $("#typed").typed({
          strings: ["?uestion #5!!! ^1000",
            "I am always hungry, ^1000",
            "I must always be fed ^1000",
            "The finger I touch, ^1000",
            "Will soon be red. ^1200",
            "What am I?"
          ]
        });

        $('#answer1').text('A Lion');
        $('#answer2').text('Fire');
        $('#answer3').text('Hatred');
        $('#answer4').text('Blood');

        $('#answer1, #answer3, #answer4').on('click', function() {
          if (count == 4) {
          	$('#r5').addClass('hide');
      		$('#r6').removeClass('hide');
    		
            p1Score--;
            $('.p1-score').text(p1Score)
   
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["... ^1000",
                "... ^1000",
                "You've got to realize ^1000",
                "You're playing for your life! ^1200",
                "it's HUMAN_TWO's turn now."]
            });
          	count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })

        $('#answer2').on('click', function() {
          if (count == 4) {
          	$('#r5').addClass('hide');
      		$('#r6').removeClass('hide');

            p1Score++;
            $('.p1-score').text(p1Score)
              // console.log(robinScore)
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["01100110 01110101 01100011 01101011 ^1000",
                "You can't be googling these player-one. ^1000",
         	 	"err.... I mean....  ^1000",
                "Congrats! ^1000",
                "HUMAN_TWO! click the red button.",
              ]
            });
          count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })



      });

    });
// end riddle 5

    $('.riddle6').on('click', function(e) {
      e.preventDefault();
      $('#riddle6').addClass('riddle-button-active')
      $("#typed").typed('reset');

      $(function() {

        $("#typed").typed({
          strings: ["?uestion #6!!! ^1000",
            "My life can be measured in hours, ^1000",
            "I serve by being devoured. ^1000",
            "Thin, I am quick, fat, I am slow  ^1000",
            "The wind is my greatest foe. ^1200",
            "What am I?"
          ]
        });

        $('#answer1').text('Rain');
        $('#answer2').text('A fly');
        $('#answer3').text('A bird');
        $('#answer4').text('A candle');

        $('#answer1, #answer2, #answer3').one('click', function() {
          if (count == 5) {
    		$('#r6').addClass('hide');
      		$('#r7').removeClass('hide');

            p2Score--;
            $('.p2-score').text(p2Score)
         
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Interesting... ^1000",
                "Did you HUMANS get dumber? ^1000",
                "I did work that one for while. ^1000",
                "Next!!"]
            });
          	count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
          $('#riddle2').removeClass('riddle-button-active');
        })

        $('#answer4').one('click', function() {
          if (count == 5) {
          	$('#r6').addClass('hide');
      		$('#r7').removeClass('hide');

            p2Score++;
            $('.p2-score').text(p2Score)
              // console.log(robinScore)
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Ok listen. ^1000",
                "You might have won this round ^1000",
                "Well you had to get at least a few. ^1000",
                "OK HUMAN_ONE, your go...",
              ]
            });
          count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
        })



      });

    });
// end riddle 6

$('.riddle7').on('click', function(e) {
      e.preventDefault();
      $('#riddle7').addClass('riddle-button-active')
      $("#typed").typed('reset');

      $(function() {

        $("#typed").typed({
          strings: ["?uestion #7!!! ^1000",
            "I am a box that holds keys, ^1000",
            "These keys have no locks, ^1000",
            "But when they are used  ^1000",
            "They can unlock your soul. ^1200",
            "What am I?"
          ]
        });

        $('#answer1').text('Skeleton Key');
        $('#answer2').text('Key Lime Pie');
        $('#answer3').text('A piano');
        $('#answer4').text('Love');

        $('#answer1, #answer2, #answer4').one('click', function() {
          if (count == 6) {
          	$('#r7').addClass('hide');
      		$('#r8').removeClass('hide');
    		
            p1Score--;
            $('.p1-score').text(p1Score)
              // console.log(robinScore)
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Gee... ^1000",
                "I almost feel bad ^1000",
                "Except I don't have feelings ^1000",
                "Maybe that's why I do this... ^1200",
                "HUMAN_TWO!, it's up to you!"]
            });
          	count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
          $('#riddle3').removeClass('riddle-button-active');
        })

        $('#answer3').one('click', function() {
          if (count == 6) {
			$('#r7').addClass('hide');
      		$('#r8').removeClass('hide');

            p1Score++;
            $('.p1-score').text(p1Score)

            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Hmmm... that's correct...^1000",
                "That didn't register as cheating. ^1000",
                "I guess that's ok. ^1000",
                "OK HUMAN_TWO, the button.",
              ]
            });
          count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
          $('#riddle7').removeClass('riddle-button-active');
        })



      });

    });
// end riddle 7


$('.riddle8').on('click', function(e) {
      e.preventDefault();
      // $('#riddle1').removeClass('riddle1');
      $('#riddle8').addClass('riddle-button-active')
      $("#typed").typed('reset');
      // $('#riddle1').addClass('hide-on-click');

      $(function() {

        $("#typed").typed({
          strings: ["?uestion #8!!! ^1000",
            "The one who makes it, sells it. ^1000",
            "The one who buys it, never uses it. ^1000",
            "The one that uses it never knows that they used it.  ^1000",
            "What am I?"
          ]
        });

        $('#answer1').text('A coffin');
        $('#answer2').text('A story');
        $('#answer3').text('Insurance');
        $('#answer4').text('Air');

        $('#answer3, #answer2, #answer4').one('click', function() {
          if (count == 7) {

            p2Score--;
            $('.p2-score').text(p2Score)

            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["OOooooohh... ^1000",
                "SO close. ^1000",
                "Just a few brain cells away... ^1000",
                "You can quit now... ^1200",
                "HUMAN_ONE!! do it!"]
            });
          	count++;
          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
          $('#riddle8').removeClass('riddle-button-active');
        })

        $('#answer1').one('click', function() {
          if (count == 7) {
            p2Score++;

            $('.p2-score').text(p2Score)
              // console.log(count)
            $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Is my processor working correctly? ^1000",
                "You might be smarter than you look. ^1000",
                "Oh well. ^1000",
                "OK HUMAN_ONE, the button.",
              ]
            });
          count++;
              // console.log(count)

          }
          $('#answer1').text('?');
          $('#answer2').text('?');
          $('#answer3').text('?');
          $('#answer4').text('?');
          $('#riddle8').removeClass('riddle-button-active');
          console.log(count)
          console.log(p1Score)
          console.log(p2Score)

   // if  (count == 8){
    if (count == 8 && p1Score > p2Score && p1Score !== p2Score) {
    	   $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["HUMAN_ONE!!! ^1000",
                "You are the champion ^1000",
                "You may leave now. ^1000",
                "HUMAN_TWO, you get to wait for eternity ^1200",
                "Congradulations HUMAN_ONE!"]
            });
    }else if (p1Score < p2Score) {
    	 $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["HUMAN_TWO!!! ^1000",
                "You are the champion ^1000",
                "You may leave now. ^1000",
                "HUMAN_ONE, you get to wait for eternity ^1200",
                "Congradulations HUMAN_TWO!"]
            });
    }else if (p1Score == p2Score) {
    	 $("#typed").typed('reset');
            $("#typed").typed({
              strings: ["Well this is new... ^1000",
                "You are both the champion ^1000",
                "You may leave now. ^1000",
                "I'll just malfunction and die. ^1200",
                "IT WAS A TIE!!!"]
            });
    };;

// };
        })



      });

    });







  });

});