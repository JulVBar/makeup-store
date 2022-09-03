import { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from '../../assets/slider/slider2.jpg';
import slider3 from '../../assets/slider/slider3.jpg';

import './slider.scss';

const slides = [
    {
        heading: 'Sale 2022',
        subheading: 'Up to',
        subheadingGreen: '70% off',
        img: slider1,
    },
    {
        heading: 'Pure organic',
        subheading: 'Fresh.',
        subheadingGreen: 'Healthy.',
        img: slider2,
    },
    {
        heading: 'Skin care',
        subheading: 'Soft and',
        subheadingGreen: 'safety',
        img: slider3,
    }
];


class CitiesSlider extends Component {
    constructor(props) {
        super(props);
        
        this.IMAGE_PARTS = 4;
        
        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;
        
        this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
    
    componentWillUnmount() {
        window.clearTimeout(this.changeTO);
    }
    
    componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
    }
    
    runAutochangeTO() {
        this.changeTO = setTimeout(() => {
        this.changeSlides(1);
        this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
    }
    
    changeSlides(change) {
        window.clearTimeout(this.changeTO);
        const { length } = slides;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide });
    }
    
    render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
        <div className={classnames('slider', { 's--ready': sliderReady })}>
        
        <div className="slider__slides">
            {slides.map((slide, index) => (
                <div
                    className={classnames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                    key={`${slide}-${index}`}
                >
                    <div className="slider__slide-content">
                        <p className="slider__top-heading">Natural Cosmetics</p>
                        <h3 className="slider__slide-subheading">{slide.subheading} <span>{slide.subheadingGreen}</span> </h3>
                        <ul className="slider__slide-heading">
                            {slide.heading.split('').map((l, index) => <li key={`${l}-${index}`}>{l}</li>)}
                        </ul>
                        <Link to={'/shop'}>
                            <button className="slider__slide-button button-green">Shopping now!</button>
                        </Link>
                        
                    </div>
                    <div className="slider__slide-parts">
                        {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                            <div className="slider__slide-part" key={i}>
                            <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
        </div>
    );
    }
}

export default CitiesSlider;



