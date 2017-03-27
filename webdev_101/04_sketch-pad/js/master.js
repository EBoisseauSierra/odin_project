$( document ).ready(
    function() {
        $("#spinner").remove();
        $("main").removeClass("loading");
        for (i=1;i<=100*100;i++){
            $('main').append('<div class="pixel"></div>');
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
