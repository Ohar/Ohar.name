import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import PageTitle from '@/components/PageTitle'
import DndItemTable from '@/components/DndItemTable'

import './DndItemCatalogStyles.css'

const DndItemCatalogComponent = (
    {
        onSearch,
        isTooMuch,
        goodsFilteredList,
    }
) => (
    <section className='DndItemCatalog'>
        <PageTitle>Каталог предметов</PageTitle>

        <input
            className='DndItemCatalog_input'
            onChange={onSearch}
            type='search'
            placeholder='Введите строку поиска'
            autoFocus
        />
        {
            goodsFilteredList.length
                ? (
                    <DndItemTable
                        className={classNames(
                            'DndItemCatalog_result',
                            {
                                'DndItemCatalog_result-tooMuch': isTooMuch,
                            }
                        )}
                        itemList={goodsFilteredList}
                        isTooMuch={isTooMuch}
                    />
                )
                : <p className='DndItemCatalog_result'>Ничего не найдено</p>
        }
    </section>
)

DndItemCatalogComponent.defaultProps = {
    isTooMuch: false,
}

DndItemCatalogComponent.propTypes = {
    goodsFilteredList: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
    isTooMuch: PropTypes.bool,
}

export default DndItemCatalogComponent
