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
