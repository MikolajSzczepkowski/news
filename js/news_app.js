$(function (){
	$("#comments").find("li:lt(3)").show();
	$(document).on("click", "#showMoreComments", function(){
		$("#comments").find("li").show();
		$(this).text("hide");
		$(this).attr("id", "hideComments");
	});
	$(document).on("click", "#hideComments", function(){
		$("#comments").find("li").hide();
		$("#comments").find("li:lt(3)").show();
		$(this).text("show more");
		$(this).attr("id", "showMoreComments");
	});
});