import React, { Component } from 'react';
import _ from 'lodash';

import SEARCH_PROP_NAME from '@/constants/SEARCH_PROP_NAME';
import dndCreatureList from '@/constants/dnd/dndCreatureList';

import prepareForSearch from '@/utils/prepareForSearch';

import DndCreatureCatalogComponent from './DndCreatureCatalogComponent';

const MAX_LEN = 20;
const TIME_LAG = 100;

class DndCreatureCatalogContainer extends Component {
  state = {
    filteredCreatureList: [],
    isTooMuch: false
  };

  onSearch = _.debounce(
    value => {
      const filteredCreatureList = value
        ? dndCreatureList
          .filter(
            item => item[SEARCH_PROP_NAME].includes(prepareForSearch(value))
          )
        : [];

      const isTooMuch = filteredCreatureList.length > MAX_LEN;

      this.setState({
        filteredCreatureList: filteredCreatureList.slice(0, MAX_LEN),
        isTooMuch
      });
    },
    TIME_LAG
  );

  render() {
    const { filteredCreatureList } = this.state;

    return (
      <DndCreatureCatalogComponent
        onSearch={this.onSearch}
        filteredCreatureList={filteredCreatureList}
      />
    );
  }
}

export default DndCreatureCatalogContainer;
