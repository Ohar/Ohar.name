import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME';
import {dndCreatureNameList} from '@/constants/dnd/dndCreatureList';

import prepareForSearch from '@/utils/prepareForSearch';

import DndCreatureCatalogComponent from './DndCreatureCatalogComponent';

const TIME_LAG = 100;

const groupListByName = list => _.groupBy(list, ({name}) => name[0])

class DndCreatureCatalogContainer extends Component {
  static propTypes = {
    showAll: PropTypes.bool,
  }

  static defaultProps = {
    showAll: false,
  }

  state = {
    filteredCreatureCollection: {},
    isTooMuch: false,
    searchStr: '',
  };

  componentDidMount () {
    const { showAll } = this.props;

    this.updateList(null, showAll);
  }

  onSearch = searchStr => {
    this.setState({searchStr});
    this.filterList(searchStr);
  }

  updateList = (value, showAll) => {
    if (showAll && !value) {
      this.setState({
        filteredCreatureCollection: groupListByName(dndCreatureNameList),
      });
    } else {
      const filteredCreatureCollection = value
        ? groupListByName(
          dndCreatureNameList.filter(
            item => item[SEARCH_PROP_NAME].includes(prepareForSearch(value))
          )
        )
        : {};

      this.setState({filteredCreatureCollection});
    }
  }

  filterList = _.debounce(this.updateList, TIME_LAG);

  render() {
    const { filteredCreatureCollection, searchStr } = this.state;

    return (
      <DndCreatureCatalogComponent
        searchStr={searchStr}
        onSearch={this.onSearch}
        creatureCollection={filteredCreatureCollection}
      />
    );
  }
}

export default DndCreatureCatalogContainer;
