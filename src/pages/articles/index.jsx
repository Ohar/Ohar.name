import React from 'react'
import { Link } from "gatsby"

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

const articleList = [
  {
    url: '/articles/smotrya-na-kod-s-zakrytymi-glazami',
    text: 'Смотря на код с закрытыми глазами',
  },
  {
    url: '/articles/how-does-a-visually-impaired-computer-programmer-do-programming',
    text: 'Как программируют слабовидящие программисты?',
  },
]

const ArticlesPage = () => (
  <Layout>
    <Seo
      title='Статьи'
      description='Статьи Павла Лысенко'
      keywords={['Pavel Lysenko\'s articles', 'Статьи Павла Лысенко']}
    />
    <h1>Статьи</h1>
    <ul>
      {
        articleList.map(
          ({url, text}) => (
            <li>
              <Link to={url}>
                {text}
              </Link>
            </li>
          )
        )
      }
    </ul>
  </Layout>
)

export default ArticlesPage
