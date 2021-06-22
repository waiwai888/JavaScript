const API_KEY = "3fea7b9060a0ce293df34d3f7a8a76e9";
$(function(){
  $('#btn').on('click', function() {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "3fea7b9060a0ce293df34d3f7a8a76e9",
      dataType : 'jsonp',
      }).done(function (data){
        //通信成功
      }).fail(function (data) {
        //通信失敗
    });
    })
  });
});