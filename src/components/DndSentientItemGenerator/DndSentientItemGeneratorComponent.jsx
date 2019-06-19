import React, { Component } from "react"

import PageTitle from '@/components/PageTitle'
import BtnGenerate from "@/components/BtnGenerate"

import SentientItem from "./SentientItem"

import './DndSentientItemGeneratorStyles.css'

class DndSentientItemGenerator extends Component {
  state = {
    item: null,
  }

  onGenerate = () => {
    this.setState({
      item: new SentientItem(),
    })
  }

  render() {
    const {item} = this.state

    return (
      <section className='DndSentientItemGenerator'>
        <PageTitle>Генератор разумных магических предметов</PageTitle>

        <p>
          {JSON.stringify(item)}
        </p>

        <BtnGenerate onClick={this.onGenerate}/>
      </section>
    )
  }
}

export default DndSentientItemGenerator
