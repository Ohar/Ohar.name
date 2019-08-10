import React, { Component } from 'react'

import quotesList from '@/constants/quotesList'
import DEFAULT_QUOTE_ID from '@/constants/DEFAULT_QUOTE_ID'

import QuotesComponent from './QuotesComponent'

// TODO
// $(document).on('keyup', handleArrows);
// function handleArrows (e) {
//   if (e.keyCode === 37) { // ←
//     get_prev_quote();
//   } else if (e.keyCode === 39) { // →
//     get_next_quote();
//   }
// }

class QuotesContainer extends Component {
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
      <QuotesComponent
        isPrevBtnEnabled={isPrevBtnEnabled}
        isNextBtnEnabled={isNextBtnEnabled}
        quoteId={quoteId}
        quote={quote}
        getRandomQuoteNum={this.getRandomQuoteNum}
      />
    )
  }
}

export default QuotesContainer
