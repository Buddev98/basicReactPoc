import React from 'react'
import Card from "./Card";
const CardsCarousel = () => {
  return (
    <React.Fragment>
          <div id="cardsCarouselExampleDark" className="carousel carousel-dark slide cardsCarousel" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#cardsCarouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#cardsCarouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#cardsCarouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className='cards-wrapper'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className='cards-wrapper'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='cards-wrapper'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#cardsCarouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cardsCarouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
    </React.Fragment>
  )
}

export default CardsCarousel