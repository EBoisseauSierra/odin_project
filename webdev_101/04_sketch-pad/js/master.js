var pixelSize = "12";
var nbPixelsSide = 600/(+pixelSize);
var newPixel = '<div class="pixel" data-color="blank" data-pixsize='+pixelSize+'></div>'
var drawBool = false;

var colorCurrentBrushSize = function  foo(){
        var listItems = $("#subsettings-size li");
        listItems.each(function(){
            if ($(this).attr("data-size") == pixelSize) {
                $(this).addClass('selected-size');
                return true
            }
        });
    }
var removeColorCurrentBrushSize = function  foo(){
        var listItems = $("#subsettings-size li");
        listItems.each(function(){
            if ($(this).attr("data-size") == pixelSize) {
                $(this).removeClass('selected-size');
                return true
            }
        });
    }

$(document).ready(function() {
        $("#sketchpad").on('click',function() {
            drawBool = !drawBool;
            console.log("yep");
            $("#sketchpad").toggleClass('hide-foreground');
        });
});

$( document ).ready(
    function() {
        $("#spinner").hide();
        $("#sketchpad").removeClass("loading");
        colorCurrentBrushSize();
        for (i=1;i<=nbPixelsSide*nbPixelsSide;i++,$('#sketchpad').append(newPixel)){}
    }
);

$( document ).ready(
    function(){
        $("#sketchpad").on('mouseover',".pixel",function(){
            if (drawBool) {
                $(this).attr("data-color",drawColor);
            }
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
        $("#settings-button").toggleClass("settings-list-visible");
        $("#settings-mainlist").slideToggle(250);
        $(".settings-sublist", "#settings-mainlist").hide();
    });
});

drawColor = 'black'
selectedCross='<i class="fa fa-times" aria-hidden="true" id="chosen-color"></i>'

$(document).ready(function(){
    $("#"+drawColor).html(selectedCross);
    $("#settings-mainlist").on('click', ".color-item", function(){
        $("#"+drawColor).html("");
        drawColor = this.getAttribute("data-color")
        $("#"+drawColor).html(selectedCross);
    });

});

$(document).ready(function () {
    $("#settings-mainlist").on('click',".size-item",function () {
        $("#spinner").show();
        $("#sketchpad").empty();
        removeColorCurrentBrushSize();
        pixelSize = this.getAttribute("data-size")
        newPixel = '<div class="pixel" data-color="blank" data-pixsize='+pixelSize+'></div>'
        nbPixelsSide = 600/(+pixelSize);
        for(i=1;i<=nbPixelsSide*nbPixelsSide;i++,$('#sketchpad').append(newPixel)){}
        $("#spinner").hide();
        colorCurrentBrushSize();
    });
});

$(document).ready(function() {
    $("#subsettings-size .size-item")
});
