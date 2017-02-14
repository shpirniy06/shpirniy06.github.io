 $(document).ready(function() { 

 $('.sl').slick({
 	autoplay: true,
 	autoplaySpeed: 4500,
 });


 $('.wrapper').jScrollPane();

$(".main li a").click(function(){
		$(".main li a").removeClass("active");
		$(this).addClass("active");
	});
 


 });

