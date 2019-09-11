import _ from 'lodash';

export default list => _.groupBy(list, ({ name }) => name[0]);
