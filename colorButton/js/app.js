$.get("data/data.json", function(data){
    for(var i = 0; i<data.length; i++){
        var button = '<div id="button'+data[i].id+'" data-id="'+data[i].id+'" class="button"></div>';

        $(".buttons").append(button);

        $("#button"+data[i].id).css("background-color", data[i].color);
    }

    $(".button").click(function(){
       var id = $(this).attr("data-id");

        $(".fill").css({"background-color": data[id].color, "width": data[id].width});

    });
});
