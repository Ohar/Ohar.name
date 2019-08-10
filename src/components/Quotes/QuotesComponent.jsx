import React from 'react'
import { Link } from 'gatsby'

import './QuotesStyles.css'

const QuotesComponent = ({ quote, isNextBtnEnabled, isPrevBtnEnabled, quoteId, getRandomQuoteNum }) => (
  <section className='QuotesComponent'>
    <div className='buttons'>
      {
        isPrevBtnEnabled
          ? (
            <Link
              to={`/quotes/${quoteId - 1}`}
              title='Предыдущая цитата'
            >
              ←
            </Link>
          )
          : <span>←</span>
      }

      <Link to={`/quotes/${getRandomQuoteNum()}`}>
        Случайная цитата
      </Link>

      {
        isNextBtnEnabled
          ? (
            <Link
              to={`/quotes/${quoteId + 1}`}
              title='Следующая цитата'
            >
              →
            </Link>
          )
          : <span>→</span>
      }
    </div>

    {
      quote
        ? (
          <blockquote className='quote'>
            <a
              className='quote_link'
              href={`#${quoteId}`}
            >
              №&thinsp;{quoteId}
            </a>
            <p
              className='quote_text'
              dangerouslySetInnerHTML={{__html: quote.text}}
            />
            <cite className='quote_cite'>
              <a
                className='quote_origin'
                target='_blank'
                href={quote.url}
                rel='nofollow noopener noreferrer'
              >
                {quote.author}
              </a>
            </cite>
          </blockquote>
        )
        : null
    }
  </section>
)

export default QuotesComponent
