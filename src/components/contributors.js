import React  from 'react';
import Carousel from "react-multi-carousel";

const contributors = require('../contents/contributors.json');

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 768 },
        items: 4,
    },
    laptop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 768, min: 440 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 440, min: 0 },
        items: 1,
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
const Contributors = ({ deviceType }) => {
    return (
        <Carousel
            ssr
            partialVisible
            autoPlay={false}
            deviceType={deviceType}
            itemClass="image-item"
            shouldResetAutoplay={false}
            responsive={responsive}
            infinite={true}
            renderButtonGroupOutside={true}
            arrows={false} customButtonGroup={<ButtonGroup />}
        >
            {contributors.map((contributor,index) => {
                return (
                    <div className={'contributor'} key={index}
                        draggable={false}
                    >
                        <div className={'name'}>{contributor.name}</div>
                        <div className={'title'}>{contributor.title}</div>
                        <a href={contributor.twitter} className={'twitter'}>
                            <i className={'icon-twitter'}></i>
                        </a>
                    </div>
                );
            })}
        </Carousel>
    );
};

export default Contributors;
