import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import Quotes from '@/components/Quotes'

import quotesList from "@/constants/quotesList"
import DEFAULT_QUOTE_ID from '@/constants/DEFAULT_QUOTE_ID'

const QuotePageTemplate = ({pageContext: {slug: quoteId = DEFAULT_QUOTE_ID}}) => {
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

export default QuotePageTemplate
