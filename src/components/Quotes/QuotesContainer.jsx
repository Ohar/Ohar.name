import React, { Component } from 'react'
import { navigate } from 'gatsby'

import quotesList from '@/constants/quotesList'
import DEFAULT_QUOTE_ID from '@/constants/DEFAULT_QUOTE_ID'

import MAX_QUOTE_ID from './constants/MAX_QUOTE_ID'
import MIN_QUOTE_ID from './constants/MIN_QUOTE_ID'
import KEYCODE_ARROW_LEFT from './constants/KEYCODE_ARROW_LEFT'
import KEYCODE_ARROW_RIGHT from './constants/KEYCODE_ARROW_RIGHT'
import generateQuotePath from './utils/generateQuotePath'

import QuotesComponent from './QuotesComponent'

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

    window.addEventListener('keyup', this.handleArrowKeys)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleArrowKeys)
  }

  componentDidUpdate(prevProps) {
    const {quoteId} = this.props

    if (quoteId !== prevProps.quoteId) {
      this.setQuote(quoteId)
    }
  }

  handleArrowKeys = ({ keyCode }) => {
    const {quoteId} = this.props

    if (keyCode === KEYCODE_ARROW_LEFT || keyCode === KEYCODE_ARROW_RIGHT) {
      const nextQuoteId = keyCode === KEYCODE_ARROW_LEFT
        ? quoteId - 1
        : quoteId + 1

      if (nextQuoteId >= MIN_QUOTE_ID && nextQuoteId <= MAX_QUOTE_ID) {
        navigate(generateQuotePath(nextQuoteId))
      }
    }
  }

  getRandomQuoteNum = () => Math.round(Math.random() * MAX_QUOTE_ID)

  setQuote = num => {
    const quoteId = Math.min(MAX_QUOTE_ID, Math.max(MIN_QUOTE_ID, num))
    const quote = quotesList[quoteId]

    this.setState({
      quote,
      quoteId,
      isNextBtnEnabled: quoteId !== MAX_QUOTE_ID,
      isPrevBtnEnabled: quoteId !== MIN_QUOTE_ID,
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
