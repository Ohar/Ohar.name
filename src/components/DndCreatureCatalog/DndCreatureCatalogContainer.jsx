import React, { Component } from 'react';
import _ from 'lodash';

import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME';
import {dndCreatureNameList} from '@/constants/dnd/dndCreatureList';

import prepareForSearch from '@/utils/prepareForSearch';

import DndCreatureCatalogComponent from './DndCreatureCatalogComponent';

const TIME_LAG = 100;

const groupListByName = list => _.groupBy(list, ({name}) => name[0])

class DndCreatureCatalogContainer extends Component {
  state = {
    filteredCreatureCollection: {},
    isTooMuch: false,
    searchStr: '',
  };

  onSearch = searchStr => {
    this.setState({searchStr});
    this.filterList(searchStr);
  }

  filterList = _.debounce(
    value => {
      const filteredCreatureCollection = value
        ? groupListByName(
            dndCreatureNameList.filter(
              item => item[SEARCH_PROP_NAME].includes(prepareForSearch(value))
            )
          )
        : {};

      this.setState({filteredCreatureCollection});
    },
    TIME_LAG
  );

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
