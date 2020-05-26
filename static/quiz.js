$(document).ready(function() {

    display_quiz(quiz);
    quiz_logic(quiz);
})
//Build quiz layout for the page
var display_quiz = function(quiz){
    $("#quiz_box").empty();
  
    $.each(quiz, function(i,values){
            var quiz_div = $("<div class='indiv_quiz' data-index=" + i + "></div>");
            var quiz_img = $("<img id ='dynamic' height='200' width='350'>");
            var q_counter = $("<div class='counter'>" + "Question " + (i + 1 ) + "  of  " + " 5 " + "</div>");
            
            quiz_img.attr("src", values["image"]);
            quiz_img.attr("alt", "quiz_image");
            var quiz_question = $("<div class='question'>"+  "<br>" + values["question"] + "</div>");
            var quiz_choices = values["choices"];
            $(quiz_div).append("<br>");
            $(quiz_div).append(q_counter);
            $(quiz_div).append("<br>");
            $(quiz_div).append(quiz_img);
            $(quiz_div).append(quiz_question);
            $("#quiz_box").append(quiz_div);
            $(quiz_div).append("<br>");

            //Iterate over quiz choices
            $.each(quiz_choices, function(i, answer){
                //quiz divs will be styled the same
                var choice1 = $("<div class='quiz_choice'>" + answer["a"] + "</div>");
                var choice2 = $("<div class='quiz_choice'>" + answer["b"] + "</div>");
                var choice3 = $("<div class='quiz_choice'>" + answer["c"] + "</div>");
                var choice4 = $("<div class='quiz_choice'>" + answer["d"] + "</div>");

                $(quiz_div).append(choice1); 
                $(quiz_div).append(choice2);
                $(quiz_div).append(choice3);
                $(quiz_div).append(choice4);
                
                $("#quiz_box").append(quiz_div);
                
            })
        })
}


var quiz_logic = function(quiz){
    
    var num_correct = 0;
    var quiz_limit = 1;
    var answers =[];

    $.each(quiz, function(i, values){
        
        answers.push(values["answer"]);
    })

    //hide all pages other than the current
    $("#quiz_box .indiv_quiz:gt(" + (quiz_limit-1) + ")").hide();
    //total number of quizes
    $(".quiz_choice").click(function(){
       
        var current_choice = $(this).text();

        if(!(answers.includes(current_choice))){

            $(this).addClass("wrong_answer").delay(400).queue(function(){
                $(this).removeClass("wrong_answer").dequeue();
                $(this).parent().hide();
            });
            $(this).parent().next().delay(400).show(0);
        }else{
            //right answer chosen
            $(this).addClass("correct_answer").delay(400).queue(function(){
                $(this).parent().hide();
                $(this).removeClass("correct_answer").dequeue();
            });
            $(this).parent().next().delay(400).show(0);
            num_correct += 1;
        }
        console.log($(this).parent().index());
        
        if($(this).parent().index() == 4){
            var end_screen = $("<div id='end_box'></div>");
            var total_score = $("<div class='correct'>" +  "<br>" + "You scored " + num_correct + " of 5 points!" + "</div>");
            var options = $("<div id='options'><a href='/'><button class='btn'> Home </button></a><a href='quiz'><button class='btn'>Again</button></a></div>");
            //$("#quiz_box .indiv_quiz").hide()
            $(end_screen).append(total_score);
            $(end_screen).append("<img src='https://assets.yousician.com/app/uploads/2019/09/20124520/traditional-guitar-tablature-1024x427.png' alt='guitar-tab'></img>");
            $(end_screen).append(options);
            $("#quiz_box").append(end_screen);
        }
    })
}