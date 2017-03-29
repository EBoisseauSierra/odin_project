$( document ).ready(
    function() {
        $("#spinner").remove();
        $("#sketchpad").removeClass("loading");
        var newPixel = '<div class="pixel" data-color="blank"></div>'
        for (i=1;i<=100*100;i++){
            $('#sketchpad').append(newPixel);
        }
    }
);
$( document ).ready(
    function(){
        $("#sketchpad").on('mouseover',".pixel",function(){
            $(this).attr("data-color",drawColor);
        });
    }
);

$(document).ready(
    function(){
        $("#clear").on('click',function(event){
            event.preventDefault();
            $(".pixel", "#sketchpad").attr("data-color","blank");
        });
    }
);
$(".settings-list").hide();
$(document).ready(
    function(){
        $("#settings-size").on('click',function(){
            $("#subsettings-size").slideToggle(250);
        });
    }
);
$(document).ready(
    function(){
        $("#settings-color").on('click',function(){
            $("#subsettings-color").slideToggle(250);
        });
    }
);
$(document).ready(function(){
    $("#settings-button").on('click',function(){
        $("#settings-mainlist").slideToggle(250);
        $(".settings-sublist", "#settings-mainlist").hide();
    });
});

drawColor = 'black'

$(document).ready(function(){
    $("#settings-mainlist").on('click', ".color-item", function(){
        drawColor = this.getAttribute("data-color")
    });
});
