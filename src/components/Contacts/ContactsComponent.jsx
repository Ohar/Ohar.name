import React from 'react'
import { faNpm } from '@fortawesome/free-brands-svg-icons'

import Icon from '@/components/Icon'

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
    text:  'GitHub',
  },
  {
    url: 'https://www.hackerrank.com/oharr',
    type: 'hackerrank',
    text: 'Hackerrank',
  },
  {
    url: 'https://linkedin.com/in/oharr',
    type: 'linkedin',
    text: 'LinkedIn',
  },
  {
    url: 'https://discourse.mozilla-community.org/users/ohar',
    type: 'mozilla',
    text: 'Mozilla',
  },
  {
    url: 'https://www.npmjs.com/~ohar',
    type: 'npm',
    text: (
      <React.Fragment>
        <Icon icon={faNpm}/>
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
    url: 'https://stackoverflow.com/cv/ohar',
    type: 'stackoverflow',
    text: (
      <img
        src="https://stackexchange.com/users/flair/2351078.png"
        width="208"
        height="58"
        alt="Profile for Pavel Lysenko on Stack Exchange"
        title="Profile for Pavel Lysenko on Stack Exchange"
      />
    ),
  },
  {
    url: 'https://steamcommunity.com/id/ohar',
    type: 'steam',
    text: 'Steam',
  },
  {
    url: 'https://t.me/Oharr',
    type: 'telegram',
    text: 'Telegram',
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
  {
    url: 'https://www.worldanvil.com/author/Ohar',
    type: 'worldanvil',
    text: 'World Anvil',
  },
  {
    url: 'https://people.mozilla.org/p/ohar',
    type: 'mozilla_people',
    text: 'Mozilla People',
  },
  {
    url: 'https://discordapp.com/users/177339467823185930',
    type: 'discord',
    text: 'Discord',
  },
]
  .sort(
    ({type: A}, {type: B}) => A > B
      ? 1
      : -1
  )

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
