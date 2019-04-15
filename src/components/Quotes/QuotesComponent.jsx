import React, { Component } from 'react'
import { Link } from 'gatsby'

import quotesList from '@/constants/quotesList'
import DEFAULT_QUOTE_ID from '@/constants/DEFAULT_QUOTE_ID'

import './QuotesStyles.css'

// TODO
// $(document).on('keyup', handleArrows);
// function handleArrows (e) {
//   if (e.keyCode === 37) { // ←
//     get_prev_quote();
//   } else if (e.keyCode === 39) { // →
//     get_next_quote();
//   }
// }

class QuotesComponent extends Component {
  state = {
    quote: quotesList[DEFAULT_QUOTE_ID],
    quoteId: DEFAULT_QUOTE_ID,
    isNextBtnEnabled: false,
    isPrevBtnEnabled: false,
  }

  componentDidMount() {
    const {quoteId} = this.props

    this.setQuote(quoteId || DEFAULT_QUOTE_ID)
  }

  componentDidUpdate(prevProps) {
    const {quoteId} = this.props

    if (quoteId !== prevProps.quoteId) {
      this.setQuote(quoteId)
    }
  }

  getRandomQuoteNum = () => {
    const maxNum = quotesList.length - 1

    return Math.round(Math.random() * maxNum)
  }

  setQuote = num => {
    const numMax = quotesList.length - 1
    const numMin = 0
    const quoteId = Math.min(numMax, Math.max(numMin, num))
    const quote = quotesList[quoteId]

    this.setState({
      quote,
      quoteId,
      isNextBtnEnabled: quoteId !== numMax,
      isPrevBtnEnabled: quoteId !== numMin,
    })
  }

  render() {
    const { quote, isNextBtnEnabled, isPrevBtnEnabled, quoteId } = this.state

    return (
      <section className='QuotesComponent'>
        <div className='buttons'>
          {
            isPrevBtnEnabled
              ? (
                <Link
                  to={`/quotes?id=${quoteId - 1}`}
                  title='Предыдущая цитата'
                >
                  ←
                </Link>
              )
              : <span>←</span>
          }

          <Link to={`/quotes?id=${this.getRandomQuoteNum()}`}>
            Случайная цитата
          </Link>

          {
            isNextBtnEnabled
              ? (
                <Link
                  to={`/quotes?id=${quoteId + 1}`}
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
                <p className='quote_text'>
                  {quote.text}
                </p>
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
  }
}

export default QuotesComponent
