$( document ).ready(
    function() {
        $("#spinner").remove();
        $("#sketchpad").removeClass("loading");
        for (i=1;i<=100*100;i++){
            $('#sketchpad').append('<div class="pixel"></div>');
        }
    }
);
$( document ).ready(
    function(){
        $(".pixel").on('mouseover',function(){
            $(this).addClass("drawn");
        });
    }
);

$(document).ready(
    function(){
        $("#clear").on('click',function(event){
            event.preventDefault();
            $(".pixel").removeClass("drawn");
        });
    }
);
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
$(document).ready(
    function(){
        $("#settings-button").on('click',function(){
            $("#settings-mainlist").slideToggle(250);
        });
    }
);

var drawColor = '#555'

var pickColor = function(colorName){
    switch (colorName) {
        case 'pink':
            drawColor = '#f0a4ab'
            break;
        case 'green':
            drawColor = '#d9e0b0'
            break;
        case 'maroon':
            drawColor = '#f9dc86'
            break;
        case 'orange':
            drawColor = '#ffa517'
            break;
        case 'red':
            drawColor = '#f57650'
            break;
        case 'blue':
            drawColor = '#3591d0'
            break;
        case 'lightblue':
            drawColor = '#bdcee2'
            break;
        case 'black':
            drawColor = '#555'
            break;
        default:
            drawColor = '#555554'
    }
}
