import React, { useState } from 'react';

function Slides({slides}) {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = ( ) => {
       if(currentSlide >= 0 && currentSlide < slides.length - 1) {
           setCurrentSlide(state => state + 1)
       }
    }

    const prevSlide = ( ) => {
        if(currentSlide > 0 && currentSlide <= slides.length -1 ) {
            setCurrentSlide(state => state - 1)
        }
    }

    const resetSlide = () =>  {
        setCurrentSlide(0)
    }

    
    const shouldPrevDisabled = () => {
      return currentSlide === 0 ? true : false   
    }

    const shouldNextDisabled = () => {
        return currentSlide === slides.length -1  ? true : false
    }

    const shouldResetDisabled = () => {
        return currentSlide > 0 ? false : true
    }
    
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" disabled={shouldResetDisabled()} onClick={resetSlide} className="small outlined" >Restart</button>
                <button data-testid="button-prev" disabled={shouldPrevDisabled()} onClick={prevSlide} className="small" >Prev</button>
                <button data-testid="button-next" disabled={shouldNextDisabled()} onClick={nextSlide} className="small" >Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentSlide].title}</h1>
                <p data-testid="text">{slides[currentSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;