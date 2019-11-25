// Social Sharing Dropdown
$( "#social-share" ).click(function() {
  $("#social").toggleClass("visible").slideToggle(200);
});

// Follow User Button
$(".username")
  .hover(function addUser() {
    $(this).text("Amador M.");
  }, function() {
    $(this).text("Martinez A.");    
});
