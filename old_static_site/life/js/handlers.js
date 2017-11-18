$(function(){
    $('.js-restart_game').change(function(){
        var mode = this.value;
        location.hash = mode;
        game.restart(mode);
    });
});