$(function() {

  $('#j-currencyCode').change(_.throttle(function () {
    grabPeriodsData();
    init();
  }, 500));

  $('#j-options_addProfit').click(function () {
    addProfit();
  });
});
