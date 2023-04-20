import React, { Component } from 'react'
import CardsCarousel from '../components/CardsCarousel'
import Carousel from '../components/Carousel'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <CardsCarousel />
      </div>
    )
  }
}
