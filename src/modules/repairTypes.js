import slider from './slider';
import sliderLine from './sliderLine';
import tabs from './tabs';

const repairTypes = () => {
    const repairTypesSlider = document.querySelector('.repair-types-slider');

    for (let elem of repairTypesSlider.children) {
        slider({
            sliderBlock        : '.repair-types-slider-wrap',
            sliderItems        : '.' + elem.classList[0],
            sliderItem         : '.repair-types-slider__slide',
            sliderItemActive   : 'active-item',
            sliderDots         : false,
            sliderPagination   : true,
            sliderCurrentSlide : '.slider-counter-content__current',
            sliderTotalSlide   : '.slider-counter-content__total',
            sliderNav          : '.slider-arrow',
            sliderPrev         : '#repair-types-arrow_left',
            sliderNext         : '#repair-types-arrow_right',
            sliderAutoplay     : false,
            sliderSpeed        : 10000,
            sliderMulti        : '.repair-types-slider',
        });
    }

    tabs({
        classMainTabs     : '.repair-types-slider-wrap',
        classButtons      : '.nav-list-repair',
        classButton       : '.repair-types-nav__item',
        classButtonActive : 'active',
        classContents     : '.repair-types-slider',
        classContent      : '.types-repair',
        classContentActive: 'active',
    });

    sliderLine({
        classList       : '.nav-list-repair',
        classNav        : '.repair-types-nav',
        classButton     : 'button',
        classButtonLeft : '#nav-arrow-repair-left_base',
        classButtonRight: '#nav-arrow-repair-right_base',
    });
};

export default repairTypes;