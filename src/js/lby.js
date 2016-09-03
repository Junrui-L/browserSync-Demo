$(function(){
   $('.nav-bar li').click(function(){
       if($(this).hasClass('active')) {
           $(this).removeClass('active');
           $('.dropdown-wrap .dropdown-toggle').hide();
       } else {
           $('.nav-bar .nav li').removeClass('active');
           $(this).addClass('active');

           $('.dropdown-wrap .dropdown-toggle').hide();

           var data_nav = $(this).attr('data-nav');
           console.log(data_nav);
            $('.dropdown-toggle-' + data_nav).show();
       };


   });
});