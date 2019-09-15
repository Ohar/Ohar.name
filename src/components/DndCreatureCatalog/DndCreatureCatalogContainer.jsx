import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import arrify from 'arrify';

import dndCreatureList, { dndCreatureNameList } from '@/constants/dnd/dndCreatureList';

import prepareForSearch from '@/utils/prepareForSearch';

import filterCollectionOriginal from './constants/filterCollection';
import TIME_LAG from './constants/TIME_LAG';

import groupListByName from './utils/groupListByName';

import DndCreatureCatalogComponent from './DndCreatureCatalogComponent';

class DndCreatureCatalogContainer extends Component {
  static propTypes = {
    showAll: PropTypes.bool
  };

  static defaultProps = {
    showAll: false
  };

  state = {
    filteredCreatureCollection: {},
    isTooMuch: false,
    filterCollection: filterCollectionOriginal,
  };

  componentDidMount() {
    const { showAll } = this.props;

    this.updateList(showAll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { filterCollection } = this.state;

    if (filterCollection !== prevState.filterCollection) {
      this.filterList(false);
    }
  }

  onSearch = ({ name, value }) => {
    const { filterCollection } = this.state;

    this.setState({
      filterCollection: {
        ...filterCollection,
        [name]: {
          ...filterCollection[name],
          value
        }
      }
    });
  };

  updateList = showAll => {
    if (showAll) {
      this.setState({
        filteredCreatureCollection: groupListByName(dndCreatureNameList)
      });
    } else {
      const { filterCollection } = this.state;

      const filteredCreatureCollection = groupListByName(
        Object
          .keys(filterCollection)
          .reduce(
            (list, filterName) => {
              const { type, value } = filterCollection[filterName];

              if (value) {
                return list.filter(
                  item => {
                    const propToCheck = type === 'input'
                      ? prepareForSearch(item[filterName])
                      : arrify(item[filterName]).map(prepareForSearch);

                    return arrify(value).some(
                      valueItem => !valueItem || propToCheck.includes(prepareForSearch(valueItem))
                    )
                  }
                )
              }

              return list
            },
            dndCreatureList
          )
      );

      this.setState({ filteredCreatureCollection });
    }
  };

  filterList = _.debounce(this.updateList, TIME_LAG);

  render() {
    const { showAll } = this.props;
    const { filteredCreatureCollection, filterCollection } = this.state;

    const isFiltersEmpty = filterCollection === filterCollectionOriginal

    return (
      <DndCreatureCatalogComponent
        showList={showAll || !isFiltersEmpty}
        filterCollection={filterCollection}
        onSearch={this.onSearch}
        creatureCollection={filteredCreatureCollection}
      />
    );
  }
}

export default DndCreatureCatalogContainer;
