import React from "react"
import { faNpm, faGithub } from '@fortawesome/free-brands-svg-icons'

import MenuIcon from '@/components/MenuIcon'

import './ContactsStyles.css'

const contactList = [
  {
    url: 'https://vk.com/place_your_ad_here',
    type: 'vkontakte',
    text: 'ВКонтакте',
  },
  {
    url: 'https://moikrug.ru/ohar-43416',
    type: 'moikrug',
    text: 'Мой круг',
  },
  {
    url: 'https://pikabu.ru/@Ohar',
    type: 'pikabu',
    text: 'Пикабу',
  },
  {
    url: 'http://habrahabr.ru/users/ohar/',
    type: 'habrahabr',
    text: 'Хабрахабр',
  },
  {
    url: 'https://angel.co/pavel-lysenko',
    type: 'angelco',
    text: 'Angel.co',
  },
  {
    url: 'https://exchange.awwcor.com/dashboard/profile/764',
    type: 'awwcorexchange',
    text: 'AwwcorExchange',
  },
  {
    url: 'https://c9.io/ohar',
    type: 'c9',
    text: 'Cloud9',
  },
  {
    url: 'https://www.f6s.com/ohar/',
    type: 'f6s',
    text: 'F6S',
  },
  {
    url: 'https://www.facebook.com/oharpage',
    type: 'facebook',
    text: 'Facebook',
  },
  {
    url: 'https://github.com/Ohar',
    type: 'github',
    text:  (
      <React.Fragment>
        <MenuIcon icon={faGithub}/>
        GitHub
      </React.Fragment>
    ),
  },
  {
    url: 'https://linkedin.com/in/oharr',
    type: 'linkedin',
    text: 'LinkedIn',
  },
  {
    url: 'https://developer.mozilla.org/ru/profiles/Ohar',
    type: 'mdn',
    text: 'MDN',
  },
  {
    url: 'https://discourse.mozilla-community.org/users/ohar',
    type: 'mozilla',
    text: 'Mozilla',
  },
  {
    url: 'https://www.npmjs.com/~ohar',
    type: 'npm',
    text:  (
      <React.Fragment>
        <MenuIcon icon={faNpm}/>
        NPM
      </React.Fragment>
    ),
  },
  {
    url: 'https://www.paypal.me/ohar',
    type: 'paypal',
    text: 'PayPal',
  },
  {
    url: 'https://remote.com/commodusvoke',
    type: 'remotecom',
    text: 'Remote.com',
  },
  {
    url: 'https://skillsnet.ru/users/5ac7838fd010617793e9d428',
    type: 'skillsnet',
    text: 'SkillsNet',
  },
  {
    url: 'https://soshace.com/developers/Pavel_L',
    type: 'soshace',
    text: 'Soshace',
  },
  {
    url: 'https://stackoverflow.com/users/2059884/ohar',
    type: 'stackoverflow',
    text: 'StackOverflow',
  },
  {
    url: 'https://steamcommunity.com/id/ohar',
    type: 'steam',
    text: 'Steam',
  },
  {
    url: 'https://www.talent.io/candidates/86299',
    type: 'talentio',
    text: 'Talent.io',
  },
  {
    url: 'https://t.me/Oharr',
    type: 'telegram',
    text: 'Telegram',
  },
  {
    url: 'https://toxme.io/u/ohar',
    type: 'tox',
    text: 'Tox',
  },
  {
    url: 'https://twitter.com/CommodusVoke',
    type: 'twitter',
    text: 'Twitter',
  },
  {
    url: 'https://www.xing.com/profile/Pavel_Lysenko',
    type: 'xing',
    text: 'XING',
  },
]

// TODO: use here LinkList
const ContactsComponent = () => (
  <ul className="contacts">
    {
      contactList.map(
        ({url, type, text}) => (
          <li
            key={url}
            className="contacts__item"
          >
            <a
              href={url}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className={`contacts__item__contact contacts__item__contact--${type}`}
            >
              {text}
            </a>
          </li>
        )
      )
    }
  </ul>
)

export default ContactsComponent
