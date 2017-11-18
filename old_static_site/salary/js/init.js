$(function() {

  addProfit().promise().then(function () {
    initOptions();
    init();
  });

});
