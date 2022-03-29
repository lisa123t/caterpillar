$(function() {  
    $('#restore').hide();
    $("#transform").on('click', function() {
        // Add your code here 
        $("h1").toggle(); 
        $("h1").css("color", "orange"); 
        $("#cat").hide();
        $("#butt").show(); 
        $("img").attr("src", "https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png");
        $("div").show();  
        $("a").toggle(); 
        $("#transform").hide();
        $("#restore").show(); 
    });

 
//    $("img").attr("src", "https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png"); 
//    $("h1").css("color", "orange"); 


    $("#restore").on('click', function() {
        location.reload(true); 
    }); 

});



