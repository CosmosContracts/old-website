import React  from 'react';
import Carousel from "react-multi-carousel";
import Ecosystem from "./ecosystem";

const ecosystems = require('../contents/ecosystems.json');

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1440 },
        items: 4,
        paritialVisibilityGutter: 0
    },
    laptop: {
        breakpoint: { max: 1440, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 50
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30
    }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group">
            <button className={currentSlide === 0 ? 'left-arrow disable' : 'left-arrow'} onClick={() => previous()} aria-label={'Previous'} />
            <button className={'right-arrow'} onClick={() => next()} aria-label={'Next'} />
        </div>
    );
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const EcosystemSlider = ({ deviceType }) => {
    return (
        <Carousel
            ssr
            autoPlay={false}
            infinite={true}
            shouldResetAutoplay={false}
            deviceType={deviceType}
            itemClass="ecosystem-item"
            responsive={responsive}
            renderButtonGroupOutside={true}
            arrows={false} customButtonGroup={<ButtonGroup />}
        >
            {ecosystems.map(ecosystem => {
                return (
                    <Ecosystem ecosystem={ecosystem} />
                );
            })}
        </Carousel>
    );
};

export default EcosystemSlider;
