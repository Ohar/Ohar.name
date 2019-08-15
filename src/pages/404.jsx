import React, { Component } from "react"

import Layout from '@/components/Layout'
import SEO from '@/components/Seo'

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?size=full'
const CAT_API_KEY = 'e4410a4c-59e5-4664-9bc7-931f661c8b3d'

class NotFoundPage extends Component {
  state = {
    url: '',
    width: 'auto',
    height: 'auto',
  }

  componentDidMount () {
    fetch(
      CAT_API_URL,
      {
        headers: {
          'x-api-key': CAT_API_KEY,
        }
      }
    )
      .then(res => res.json())
      .then(
        ([{url, width, height}]) => {
          this.setState({url, width, height})
        }
      )
      .catch(console.error)
  }
  render() {
    const {url, width, height} = this.state

    return (
      <Layout>
        <SEO title='404: Не найдено'/>
        <h1>Такой страницы нету</h1>
        {
          url
            ? (
              <>
                <p>Зато есть котик</p>
                <img
                  alt="Котик"
                  height={height}
                  src={url}
                  width={width}
                  style={{maxWidth: '100vw', maxHeight: '100vh'}}
                />
              </>
            )
            : null
        }
      </Layout>
    )
  }
}

export default NotFoundPage
