import React from "react"
import { Link } from "gatsby"

import generateCreaturePageUrlById from "@/utils/generateCreaturePageUrlById"

import PageTitle from "@/components/PageTitle"

import "./WandOfOrcusStyles.less"

const WandOfOrcusComponent = ({ undeadIdList, onSummonUndead }) => (
  <section className='WandOfOrcus'>
    <PageTitle>Жезл Оркуса</PageTitle>

    <section className='WandOfOrcus_body'>
      <button
        className='WandOfOrcus_btn'
        onClick={onSummonUndead}
      />

      {
        undeadIdList.length
          ? (
            <section className='WandOfOrcus_result'>
              <p>Призваны на службу Оркусу, повелителю нежити</p>
              <ul className='WandOfOrcus_list'>
                {
                  undeadIdList
                    .sort(
                      ({ name: A }, { name: B }) => A > B ? 1: -1
                    )
                    .map(
                      (undead, i) => (
                        <li
                          key={i}
                          className='WandOfOrcus_item'
                        >
                          <span className='WandOfOrcus_undeadCount'>{undead.summonedCount}</span>
                          <Link to={generateCreaturePageUrlById(undead.id)}>
                            {undead.name}
                          </Link>
                        </li>
                      ),
                    )
                }
              </ul>
            </section>
          )
          : null
      }
    </section>
  </section>
)

export default WandOfOrcusComponent
