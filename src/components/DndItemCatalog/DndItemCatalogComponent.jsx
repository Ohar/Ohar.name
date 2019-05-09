import React from 'react'
import PropTypes from 'prop-types'

import PageTitle from '@/components/PageTitle'
import DndItemTable from '@/components/DndItemTable'

import './DndItemCatalogStyles.css'

const DndItemCatalogComponent = (
    {
        onSearch,
        goodsFilteredList,
    }
) => (
    <section className='DndItemCatalog'>
        <PageTitle>Каталог предметов</PageTitle>

        <input
            className='DndItemCatalog_input'
            onChange={onSearch}
            type='search'
        />
        {
            goodsFilteredList.length
                ? (
                    <DndItemTable
                        className='DndItemCatalog_result'
                        itemList={goodsFilteredList}
                    />
                )
                : <p className='DndItemCatalog_result'>Ничего не найдено</p>
        }
    </section>
)

DndItemCatalogComponent.propTypes = {
    goodsFilteredList: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
}

export default DndItemCatalogComponent
