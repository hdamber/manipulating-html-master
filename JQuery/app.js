// button with a nice alert 
$('#button').on("click", function () {
    alert("Hello!");
});

// form with alert set to what is typed
$('#buttonSubmit').on("click", function () {
    alert($("#someText").val())
});


// div change background color
$(function() {
    $('div').hover(
    function() {
        $(this).css({
            'background-color': '#b3b3ff'})
    }, function() {
        $(this).css('background-color', '')
    });
});

//text paragraph changes to random color when clicked
