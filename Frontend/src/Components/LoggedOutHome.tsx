import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import firstImageSrc from '../assets/Images/img2_purple.png';
import secondImageSrc from '../assets/Images/img1_white.png';
import colorSwirl from '../assets/Images/color_swirl.png';
import { HomePageButton } from './HomePageButton';



const firstImage = {
  imageUrl: firstImageSrc 
}

const secondImage = {
  imageUrl: secondImageSrc
}

export const LoggedOutHome = () => {
    return (
      <div className='slider-container'>
      <ReactBeforeSliderComponent
          className='slider-component'
          firstImage={firstImage}
          secondImage={secondImage}
          delimiterIconStyles={{
            width: '50px',
            height: '50px',
            backgroundSize: 'cover',
            borderRadius: 'none',
            backgroundImage: `url(${colorSwirl})`
          }}
      />
      <HomePageButton />
     
  </div>
      
    )
}