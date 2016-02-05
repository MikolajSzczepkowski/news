$(function (){
	$("#comments .reply").find("li:lt(1)").show();
	$("#comments .reply").prev().find(".comment-wrapper").addClass("no-boarder");
	$(document).on("click", "#showMoreComments", function(){
		$("#comments .reply").find("li").show();
		$(this).text("hide");
		$(this).attr("id", "hideComments");
	});
	$(document).on("click", "#hideComments", function(){
		$("#comments .reply").find("li").hide();
		$("#comments .reply").find("li:lt(1)").show();
		$(this).text("show more");
		$(this).attr("id", "showMoreComments");
	});
});