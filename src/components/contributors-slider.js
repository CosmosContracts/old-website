import Contributors from "./contributors";
import React from "react";

const ContributorSlider = ({ deviceType }) => {
    return (
<div className={'row contributors align-items-center'}>
    <div className={'col-12'}>
        <div className={'row justify-content-between align-items-center'}>
            <div className={'col-auto'}>
                <h3
                    data-sal="fade"
                    data-sal-delay="200"
                    data-sal-duration="1000">
                    Core <br/>
                    Contributors
                </h3>
            </div>
        </div>
    </div>
    <div className={'col-12 pt-4'}>
        <Contributors/>
    </div>
    <div className={'col-12 pt-4'}
         data-sal="fade"
         data-sal-delay="400"
         data-sal-duration="1000">
        <a href={menu['view-all-contributors']} target={'_blank'} rel={'noreferrer'}>
            <div className={'link'}><i className={'icon-arrow-right'} aria-label={'View all'}></i>View all</div>
        </a>
    </div>
</div>)
};

export default ContributorSlider;
