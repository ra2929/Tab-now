$(document).ready(function() {
    
    var items = $("#loop > div").length;
    var page_limit = 1;
    $("#loop .list-group:gt(" + (page_limit - 1) + ")").hide();
    var total_pages = Math.round(items / page_limit);
    $(".pagination").append("<li class='page-item current'><a class='page-link' href='#'>" + 1 + "</a></li>");
    
    for(var i = 2; i <= total_pages; i++){
    
        $(".pagination").append("<li class='page-item current'><a class='page-link' href='#'>" + i + "</a></li>");
    }
    $(".pagination").append("<li class='page-item next-page'><a class='page-link' href='#'>Next</a></li>");
    

    //functionality to the number buttons
    $(".pagination li.current").click(function () { 
        if ($(this).hasClass("active")){
            return false;

        }else{
            //index of the number we picked
            var current_page = $(this).index();
            //console.log(current_page);
            $(".pagination li").removeClass("active");
            $(this).addClass("active");
            $("#loop .list-group").hide();

            var grandTotal = page_limit * current_page;
            //console.log(grandTotal);
            for(var i = grandTotal - page_limit; i < grandTotal; i++){
                $("#loop .list-group").eq(i).show();
                //console.log(i);
            }
            
        }
        
    })
    $(".next-page").click(function() {
        var current_page = $(".pagination li.active").index(); // Identify the current active page

        if (current_page == total_pages) {
            return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
        } else {
            current_page+=1; // Increment the page by one
            $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
            $("#loop .list-group").hide(); // Hide all items in the pagination loop
            var grandTotal = page_limit * current_page; // Get the total number of items up to the page that was selected

            for(var i = grandTotal - page_limit; i < grandTotal; i++){
                $("#loop .list-group").eq(i).show();
            }
            $(".pagination .list-group").eq(current_page).addClass("active");
        }
      });
      
      $(".prev-page").click(function() {
        var current_page = $(".pagination li.active").index(); // Identify the current active page

        if (current_page == 1) {
            return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
        } else {
            current_page-=1; // decrements the page by one
            $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
            $("#loop .list-group").hide(); // Hide all items in the pagination loop
            var grandTotal = page_limit * current_page; // Get the total number of items up to the page that was selected

            for(var i = grandTotal - page_limit; i < grandTotal; i++){
                $("#loop .list-group").eq(i).show();
            }
            $(".pagination .list-group").eq(current_page).addClass("active");
        }
      });

})




// var build_tab_page = function(){
//     console.log("We made it")
//     $(".tab_layout").empty();
//     var image1 = $("<img src='https://guitarlessons-com.s3.amazonaws.com/media/blog/frets-fingers-strings-hr.png' alt='tab_image' height='500' width='800'>");
//     var message = "<br><b>Reminder!</b> the numbers on the side of the box are the <b>frets</b> while the numbers above the box are the <b>strings</b>.<br>"
//     var buttons = $("<div class='button_org'>" + "<a href='tab_page' >" + "<img src='https://img.icons8.com/color/48/000000/circled-left-2.png'/>" + "</a>" + " " + "<a href='tab_page'>" + "<img src='https://img.icons8.com/color/48/000000/circled-right-2.png'/>"+ "</a>" + "</div>")
//     $(".tab_layout").append(message);
//     $(".tab_layout").append(image1);
//     $(".tab_layout").append(buttons);
// }
//use this for tab slides


// <br>Ready to test your knowledge?<br><br>
// <img src="https://img.icons8.com/color/48/000000/circled-left-2.png"/>
// <img src="https://img.icons8.com/color/48/000000/circled-right-2.png"/><br>
// <button class="btn"><a href="/quiz">Quiz</a></button><br><br>