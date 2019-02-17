$('.privet').click(function(){
    makeRed($(this));
});

$('#hello').click(function(){
    makeRed($(this));
});


function makeRed(parameter_this){
    if($(parameter_this).hasClass('active')) {
        $(parameter_this).removeClass('active');
    } else {
        $(parameter_this).addClass('active');
    }
}

function move (){

}