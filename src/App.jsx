import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const {locale} = this.props

    return (
      <section>
        App {locale}
      </section>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    ...ownProps,
    locale: state.optionsState.locale
  }
}

export default connect(mapStateToProps)(App)
