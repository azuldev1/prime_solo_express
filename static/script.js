$( document ).ready(function() {
    console.log( "ready!" );

    $('button').on('click', function(){
        $.ajax({
          url:'/balance'
        }) .done(function(json){
      $('p').html(json);
    })
  });

});



// $.ajax({
//   url:'/balance'
// }) .done(function(json){
//   $('button').on('click', function(){
//     $('p').html(json);
//   });
// });
