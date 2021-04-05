//PROGRESS BAR
var delay = 500;
$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
        }
    });
});

/*DATE PICKER*/
$(function () {
    $("#datepicker_1").datepicker({ 
          autoclose: true, 
          todayHighlight: true
    }).datepicker('update', new Date());
    $("#datepicker_2").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
  });

  /*sortable table*/
  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

  /***VIEW MODES***/
  $(".btn-list-view").click(function(){
    $("#list-view").fadeIn();
    $("#grid-view").hide();
  });
  
  $(".btn-grid-view").click(function(){
    $("#list-view").hide();
    $("#grid-view").fadeIn();
  });