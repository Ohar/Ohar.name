function parse () {    
    var $input = $('.j-input'),
        $output = $('.j-output'),
        input = $input.val(), 
        output = _.uniq(input.replace(/\n/g, ' ').split(' ')).join('\n');
        
    $output.val(output);
}
