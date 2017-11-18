function init () {
	return getCourses().promise()
		.then(function () {
			renderProfits().promise().then(
				draw()
			);

		});
}

function getCourses () {
	var start = new Date(_.min(periods, function (period) {
			return (new Date(period.start).getTime())
		}).start),
		end = new Date(_.max(periods, function (period) {
			return (new Date(period.end).getTime())
		}).end);

	return $.get('/api/cbr/', {
			date_req1: formatDateCbr(start),
			date_req2: formatDateCbr(end),
			currency: getCurrencyCode()
		},
		parseCbrAnswer
	);
}

function parseCbrAnswer (data) {
	var courses = {};
	_.each(data, function (dayData) {
		var cbrdate = dayData.date.split('.'),
            date = toISODateString(new Date(cbrdate[2], Number(cbrdate[1]) - 1, Number(cbrdate[0]) + 1)),
            value = dayData.value.replace(',', '.');

		courses[date] = value;
	});

  storage('MoneyCourses', courses);
  console.info('courses', storage('MoneyCourses'));
}

function formatDateCbr (date) {
	var z = function (i) {
		return (i < 10) ? "0" + i : i
	};
	return z(date.getDate()) + '/' + z(date.getMonth() + 1) + '/' + date.getFullYear();
}

function getCurrencyCode () {
	var currency = $('#j-currencyCode').val();
	return currency;
}

function draw () {
    var drawData = getDrawData(),
        c = document.getElementById('canvas'),
        c_h = c.height,
        c_w = c.width,
        minMoney = 0,
        maxMoney = _.max(drawData, function (toDraw) {
            return toDraw.money
        }).money,
        diffMoney = maxMoney - minMoney,
        minTime = getMinTime(drawData),
        maxTime = getMaxTime(drawData),
        diffDays = Math.ceil((maxTime - minTime) / MS_IN_DAY),
        koefX = c_w / diffDays,
        koefY = c_h / diffMoney;
    
    drawGrid();

    clearCanvas();

	graph_from_json(koefX, koefY, c, drawData, 1, 'orange');

    function getMaxTime (data) {
        return getLimitTime(data, 'max')
    }
    
    function getMinTime (data) {
        return getLimitTime(data, 'min')
    }
    
    function getLimitTime (data, limit) {
        return _[limit](data, function (e) {
            return e.date.getTime()
        }).date.getTime()
    }
    
    function graph_from_json (koefX, koefY, c, data, width, color) {
        var x1, y1, x2, y2;

        x1 = y1 = x2 = y2 = 0;

        for (var i = 0; i < data.length - 1; i++) {
            x1 = koefX * i;
            y1 = koefY * parseInt(data[i]['money']);
            x2 = koefX * (i + 1);
            y2 = koefY * parseInt(data[i + 1]['money']);

            line(c, x1, y1, x2, y2, width, color);
        }

        function line (c, x1, y1, x2, y2, width, color) {
            var ctx = c.getContext('2d');
            width = width || 2;
            color = color || 'red';

            // Перевернуть y-координаты
            y1 = c.height - y1;
            y2 = c.height - y2;

            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.strokeStyle = color;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }

    function clearCanvas () {
      c.getContext('2d').clearRect(0, 0, c.width, c.height);
    }
    
    function drawGrid () {
      
    }

}


function getDrawData () {
    var toDraw = [];
    var MoneyCourses = storage('MoneyCourses');

	_.each(periods, function (period) {
		var startDate = new Date(period.start),
			startTime = startDate.getTime(),
			endTime = (new Date(period.end)).getTime(),
			diffDaysCount = Math.ceil((endTime - startTime) / MS_IN_DAY),
			addingDate = startDate,
			course;

		while (diffDaysCount--) {
			course = MoneyCourses[toISODateString(addingDate)] || course || null;
			toDraw.push({
				date: addingDate,
				money: course ? Math.round(period.salary / course) : 0
			});
			addingDate = getNextDay(addingDate);
		}

	});

	return _.sortBy(toDraw, 'date');
}

function getNextDay (date) {
	return new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate() + 1
	)
}

function toISODateString (date) {
	return date.toISOString().split('T')[0]
}


function renderProfits () {
	return getProfitTemplate().then(renderProfitTemplates);

	function renderProfitTemplates(data) {
		var template = _.template(data),
			templates = '';

		for (var i = 0; i < periods.length; i++) {
			templates += template(
				_.extend(
					{
						lvl: i
					},
					periods[i]
				)
			);
		}

		$('#j-options_profitList').html(templates);
		initOptions();
	}
}

function addProfit() {
	var lvl = $('.j-options_profit').length;

	return getProfitTemplate().then(renderProfitTemplate);

	function renderProfitTemplate (data) {
		var template = _.template(data)({
			lvl: lvl,
			name: '',
			salary: '',
			start: '',
			end: ''
		});

		$('#j-options_profitList').append(template);
		initOptions();
	}
}

function removeProfit (id) {
    $('.j-options_profit[data-id=' + id + ']').remove();
    reInit();
}

function getProfitTemplate () {
	return $.get('/salary/tpl/options_profit.html').promise();
}

function grabPeriodsData () {
	var $profits = $('.j-options_profit');
	periods = [];
	console.info('$profits', $('.j-options_profit'));
	_.each($profits, function (profit) {
		var period = {
			name: $('.j-options_profit_data-name', profit).val(),
			salary: $('.j-options_profit_data-salary', profit).val(),
			start: $('.j-options_profit_data-start', profit).val(),
			end: $('.j-options_profit_data-end', profit).val()
		};

		console.info('period', period);
		periods.push(period)
	});
	savePeriodsToStorage();
}

function initOptions () {
	initDatepicker();
	initRemoveButtons();
	setChangesHandler();

	function initDatepicker () {
		$('.datepicker').datepicker({
			dateFormat: 'yy-mm-dd'
		});
	}

	function setChangesHandler () {
		$('.j-options_profit_data').on('change, keyup', function () {
            reInit();
		});
	}

	function initRemoveButtons () {
      $('.j-options_profit_removeBtn').click(function () {
        var id = $(this).parent().data('id');
        removeProfit(id);
      });
	}
}

function reInit () {
    grabPeriodsData();
    init();
}


function savePeriodsToStorage () {
	var savingPeriods = _.filter(periods, function (p) {
		return p.salary !== '' && p.start !== '' && p.end !== '';
	});
  storage('periods', savingPeriods);
}


function storage (name, value) {
  if (arguments.length === 1) {
    return lsGet (name);
  } else if (arguments.length === 2) {
    return lsSet (name, value);
  }

  function lsGet (name) {
    return JSON.parse(localStorage.getItem(name))
  }

  function lsSet (name, value) {
    return localStorage.setItem(name, JSON.stringify(value));
  }
}
