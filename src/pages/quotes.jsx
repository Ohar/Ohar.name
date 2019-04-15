import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import Quotes from '@/components/Quotes'

import quotesList from "@/constants/quotesList"
import DEFAULT_QUOTE_ID from '@/constants/DEFAULT_QUOTE_ID'

const getQuoteData = search => search
  .substring(1) // remove ´?´ symbol
  .split('&')
  .map(
    str => str.split('='),
  )
  .find(
    ([key]) => key === 'id',
  )

const getQuoteId = search => {
  const data = getQuoteData(search)

  return data && data[1] || DEFAULT_QUOTE_ID
}

const QuotesPage = ({ location: {search} }) => {
  const quoteId = getQuoteId(search)
  const quote = quotesList[quoteId]

  const title = quoteId
    ? `Цитата №${quoteId}`
    : 'Цитаты'

  const description = quote
    ? `${quote.text}\n© ${quote.author}`
    : 'Цитаты из разных источников'

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
      />
      <Quotes quoteId={quoteId}/>
    </Layout>
  )
}

export default QuotesPage
