var MS_IN_DAY = 1000 * 60 * 60 * 24;

var defaultPeriods = [
  {
    name: '2006',
    start: '2006-01-01',
    end: '2006-12-31',
    salary: 10000
  },
  {
    name: '2007',
    start: '2007-01-01',
    end: '2007-12-31',
    salary: 20000
  },
  {
    name: '2008',
    start: '2008-01-01',
    end: '2008-12-31',
    salary: 30000
  },
  {
    name: '2009',
    start: '2009-01-01',
    end: '2009-12-31',
    salary: 40000
  },
  {
    name: '2010',
    start: '2010-01-01',
    end: '2010-12-31',
    salary: 50000
  },
  {
    name: '2011',
    start: '2011-01-01',
    end: '2011-12-31',
    salary: 60000
  },
  {
    name: '2012',
    start: '2012-01-01',
    end: '2012-12-31',
    salary: 70000
  },
  {
    name: '2013',
    start: '2013-01-01',
    end: '2013-12-31',
    salary: 80000
  },
  {
    name: '2014',
    start: '2014-01-01',
    end: '2014-12-31',
    salary: 90000
  },
  {
    name: '2015',
    start: '2015-01-01',
    end: toISODateString(new Date()),
    salary: 100000
  }
];

var periods = storage('periods') || defaultPeriods;
