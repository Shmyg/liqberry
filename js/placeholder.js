
$(function(){

    var input = 'input[type=\'text\'], input[type=\'password\'], input[type=\'email\']';
    var textarea = 'textarea';

    $(input).each(function() {
        if ($(this).attr('placeholder')) {
            this.value = this.value ? this.value : $(this).attr('placeholder');// if no value found
        }
    });
    $(textarea).each(function() {
        if ($(this).attr('placeholder')) {
            var value = $(this).text();
            var text = value ? value : $(this).attr('placeholder');
            $(this).text(text)
        }
    });
    $('html')
        .on('focus', input, function(event) {
            event.preventDefault();
            this.value = this.value == $(this).attr('placeholder') ? '' : this.value;
        })
        .on('blur', input, function(event) {
            event.preventDefault();
            if (!this.value) {
                this.value = $(this).attr('placeholder');
            }
        })
        .on('focus', textarea, function(event) {
            event.preventDefault();
            var value = $(this).text();
            var text = value == $(this).attr('placeholder') ? '' : value;
            $(this).text(text)
        })
        .on('blur', textarea, function(event) {
            event.preventDefault();
            var value = $(this).text()
            if (!value) {
                var text = $(this).attr('placeholder');
                $(this).text(text)
            }
        })

});


