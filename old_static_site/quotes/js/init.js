$(function() {
    window.quotes = [];

    $('.quotes_dump').load('quotes.txt', function () { // Грузим файл
        var quotes = $('.quotes_dump').html().trim().split('\n'); // Парсим построчно

        for (i in quotes) {
            var quote_arr = quotes[i].split('©'),
                quote_origin_arr = quote_arr[1].split('@');

            window.quotes.push({
                text: quote_arr[0].trim(),
                origin: {
                    name: quote_origin_arr[0].trim(),
                    uri: quote_origin_arr[1].trim()
                }
            });
        }

        if (location.hash) {
            get_cur_quote();
        } else {
            get_random_quote();
        }
    });
});
