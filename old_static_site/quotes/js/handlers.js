$(function() {
    
    $('.get_random_quote').click(get_random_quote);
    
    $('.get_next_quote').click(get_next_quote);
    
    $('.get_prev_quote').click(get_prev_quote);
    
    $(window).on('hashchange', get_cur_quote);
    
    $(document).on('keyup', handleArrows);
});
