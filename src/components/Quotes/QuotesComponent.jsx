import React, { Component } from "react"

import quotesList from "./constants/quotesList"

import "./QuotesStyles.css"

// TODO
// $(window).on('hashchange', get_cur_quote);
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
    quote: null,
    quoteNum: 0,
    isNextBtnEnabled: false,
    isPrevBtnEnabled: false,
  }

  componentDidMount() {
    window.location.hash
      ? this.setCurrQuote()
      : this.setRandomQuote()
  }

  setRandomQuote = () => {
    const maxNum = quotesList.length - 1

    this.setQuote(Math.round(Math.random() * maxNum))
  }

  setCurrQuote = () => {
    this.setQuote(this.getCurrNum())
  }

  setQuote = num => {
    const numMax = quotesList.length - 1
    const numMin = 0
    const quoteNum = Math.min(numMax, Math.max(numMin, num))
    const quote = quotesList[quoteNum]

    // TODO
    // window.location.hash = quoteNum
    // $("title").text("Цитата № " + quoteNum + " | Ohar")
    // $(".meta_description").attr("content", quote.text + "\n" + "© " + quote.author)

    this.setState({
      quote,
      quoteNum,
      isNextBtnEnabled: quoteNum !== numMax,
      isPrevBtnEnabled: quoteNum !== numMin,
    })
  }

  getCurrNum = () => {
    const curNum = Number(window.location.hash.slice(1))

    return isNaN(curNum)
      ? 0
      : curNum;
  }

  setNextQuote = () => {
    this.setQuote(this.getCurrNum() + 1);
  }

  setPrevQuote = () => {
    this.setQuote(this.getCurrNum() - 1);
  }

  render() {
    const { quote, isNextBtnEnabled, isPrevBtnEnabled, quoteNum } = this.state

    return (
      <section className='QuotesComponent'>
        <div className='buttons'>
          <button
            onClick={this.setPrevQuote}
            type='button'
            disabled={!isPrevBtnEnabled}
            title='Предыдущая цитата'
          >
            ←
          </button>
          <button
            onClick={this.setRandomQuote}
            type='button'
          >
            Случайная цитата
          </button>
          <button
            onClick={this.setNextQuote}
            disabled={!isNextBtnEnabled}
            type='button'
            title='Следующая цитата'
          >
            →
          </button>
        </div>

        {
          quote
            ? (
              <blockquote className='quote'>
                <a
                  className='quote_link'
                  href={`#${quoteNum}`}
                >
                  №&thinsp;{quoteNum}
                </a>
                <p className='quote_text'>
                  {quote.text}
                </p>
                <cite className='quote_cite'>
                  <a
                    className='quote_origin'
                    target='_blank'
                    href={quote.url}
                    rel='nofollow'
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
