import blushImg from '../assets/categories/blush.jpg';
import blushImgHover from '../assets/categories/blush-hover.jpg';
import foundationImg from '../assets/categories/foundation.jpg';
import foundationImgHover from '../assets/categories/foundation-hover.jpg';
import lipstickImg from '../assets/categories/lipstick.jpg';
import lipstickImgHover from '../assets/categories/lipstick-hover.jpg';
import eyeshadowImg from '../assets/categories/eyeshadow.jpg';
import eyeshadowImgHover from '../assets/categories/eyeshadow-hover.jpg';
import mascaraImg from '../assets/categories/mascara.jpg';
import mascaraImgHover from '../assets/categories/mascara-hover.jpg';
import nailpolishImg from '../assets/categories/nailpolish.jpg';
import nailpolishImgHover from '../assets/categories/nailpolish-hover.jpg';

export type CategoryItem = {
    name: string;
    id: string;
    imgPath: string;
    imgPathHover: string;
}

export const CATEGORIES: CategoryItem[] = [
    {
        name: 'Blush',
        id: 'blush',
        imgPath: blushImg,
        imgPathHover: blushImgHover,
    },
    {
        name: 'Foundation',
        id: 'foundation',
        imgPath: foundationImg,
        imgPathHover: foundationImgHover,
    },
    {
        name: 'Lipstick',
        id: 'lipstick',
        imgPath: lipstickImg,
        imgPathHover: lipstickImgHover,
    },
    {
        name: 'Eyeshadow',
        id: 'eyeshadow',
        imgPath: eyeshadowImg,
        imgPathHover: eyeshadowImgHover,
    },
    {
        name: 'Mascara',
        id: 'mascara',
        imgPath: mascaraImg,
        imgPathHover: mascaraImgHover,
    },
    {
        name: 'Nail Polish',
        id: 'nail',
        imgPath: nailpolishImg,
        imgPathHover: nailpolishImgHover,
    },
]