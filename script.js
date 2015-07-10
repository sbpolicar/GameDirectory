$(function(){

$(window).load(function(){


	$(function() {
    $( "#accordion-riddle" ).accordion({
    	
    });
  });

	$(function() {
    $( "#accordion-hints" ).accordion({
    	// collapsible: true,
    	active: false
    });
  });

	// $(function() {
 //    var progressbar = $( ".progressbar" ),
 //      progressLabel = $( ".progress-label" );
 
 //    progressbar.progressbar({
 //      value: false,
 //      change: function() {
 //        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
 //      },
 //      complete: function() {
 //        progressLabel.text( "Complete!" );
 //      }
 //    });

 
 //    // function progress() {
 //    //   var val = progressbar.progressbar( "value" ) || 0;
 
 //    //   progressbar.progressbar( "value", val + 2 );
 
 //    //   if ( val < 99 ) {
 //    //     setTimeout( progress, 80 );
 //    //   }
 //    // }
 
 //    setTimeout( progress, 2000 );
 //  });
$(function(){

        $("#typed").typed({
            strings: ["^4000 Hello boy-wonder and bat-chick... ", 
            "Can you guess who? ^1000", 
            "I've bat-knapped your boss ^1000", 
            "hidden him here in the city. ^1000", 
            "If you answer my riddles correctly, ^1000", 
            "nothing will happen... ^1000", 
            "If you answer incorrectly, ^1000", 
            "He dies!!! ^1000", 
            "You can click for a hint ^1000",
            "but it will cost you points ^1000",  
            "You two will take turns answering my riddles ^1000",
            "Robin, press the first button! ^1000"],
            typeSpeed: 1,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            // callback: function(){ foo(); },
            // resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');

        });

    });


// $()
	

	$('.riddle1').on('click', function(){
		$(function(){
		
        $("#typed").typed({
            strings: ["It is greater than God and ^1000", 
            "more evil than the devil. ^1000", 
            "The poor have it, ^1000",
            "the rich need it. ^1000", 
            "If you eat it you will die. ^1200", 
            "What is it?" ],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            
           
        });
        

        // $(".reset").click(function(){
        //     $("#typed").typed('reset');
        // });

    });

	})

	$('.riddle2').on('click', function(){
		$(function(){
		
        $("#typed").typed({
            strings: ["I am the beginning of the end, ^1000", 
            "and the end of time and space. ^1000", 
            "I am essential to creation, ^1000",
            "and I surround every place. ^1200", 
            "What am I? "],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            
           
        });
        

        // $(".reset").click(function(){
        //     $("#typed").typed('reset');
        // });

    });

	})

	$('.riddle3').on('click', function(){
		$(function(){
		
        $("#typed").typed({
            strings: ["It is greater than God and ^1000", 
            "more evil than the devil. ^1000", 
            "The poor have it, ^1000",
            "the rich need it. ^1000", 
            "If you eat it you will die. ^1200", 
            "What is it?" ],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            
        });

    });

	})

	$('.riddle4').on('click', function(){
		$(function(){
		
        $("#typed").typed({
            strings: ["It is greater than God and ^1000", 
            "more evil than the devil. ^1000", 
            "The poor have it, ^1000",
            "the rich need it. ^1000", 
            "If you eat it you will die. ^1200", 
            "What is it?" ],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            
        });

    });

	})

	$('.riddle5').on('click', function(){
		$(function(){
		
        $("#typed").typed({
            strings: ["It is greater than God and ^1000", 
            "more evil than the devil. ^1000", 
            "The poor have it, ^1000",
            "the rich need it. ^1000", 
            "If you eat it you will die. ^1200", 
            "What is it?" ],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            
        });

    });

	})

	$('.riddle6').on('click', function(){
		$(function(){
		
        $("#typed").typed({
            strings: ["It is greater than God and ^1000", 
            "more evil than the devil. ^1000", 
            "The poor have it, ^1000",
            "the rich need it. ^1000", 
            "If you eat it you will die. ^1200", 
            "What is it?" ],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            
        });

    });

	})

	$('.riddle7').on('click', function(){
		$(function(){
		
        $("#typed").typed({
            strings: ["It is greater than God and ^1000", 
            "more evil than the devil. ^1000", 
            "The poor have it, ^1000",
            "the rich need it. ^1000", 
            "If you eat it you will die. ^1200", 
            "What is it?" ],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            
        });

    });

	})

	$('.riddle8').on('click', function(){
		$(function(){
		
        $("#typed").typed({
            strings: ["It is greater than God and ^1000", 
            "more evil than the devil. ^1000", 
            "The poor have it, ^1000",
            "the rich need it. ^1000", 
            "If you eat it you will die. ^1200", 
            "What is it?" ],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            
        });

    });

	})












    })
})