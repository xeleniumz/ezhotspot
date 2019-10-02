var nas = '@ez';

$(function(){
    'use strict';
    $('ezuser').focus();

    $('#loginFrm').submit(function(e){
        e.preventDefault();
        var user = $('#ezuser').val() + nas;
        var pass = $('#ezpass').val();
        
        $('#hsuser').val(user);
        $('#hspass').val(pass);

        $('#sendinFrm').submit();
        
    });

})