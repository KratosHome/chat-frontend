
import React, {  useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import {carouselData} from "../../../../services/helpBlockCarousel.service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import './HelpBlockCarousel.scss';
import { HelpTitle } from '../HelpTitle';


export const HelpBlockCarousel: React.FC= 
   () => {
      const [slideIndex, setSlideIndex] = useState(0);
      const [isSlideHover, setIsSlideHover] = useState(false)
      const [ref, {width}]=useMeasure()
      const [slideInfo,setSlideInfo] = useState(carouselData[slideIndex]);
      const [ tuple, setTuple ] = useState<[number,number]>([0,slideIndex]);
      
      if(tuple[1] !== slideIndex){
         setTuple([tuple[1],slideIndex])
      }
      const prevSlideIndex = tuple[0];

      useEffect(()=>{
         setSlideInfo(carouselData[slideIndex]);
      },[slideIndex])
      
      const handleClickNext =()=>{
         setSlideIndex(prev=>prev+1);
      }

      const handleClickPrev =()=>{
         if(slideIndex !== 0 ){
            setSlideIndex(prev=>prev-1);
         }
      }

      const direction =  slideIndex > prevSlideIndex ?1:-1;

      const videoElement = (src:string):JSX.Element=>{
         return (
         <video className='help-block-carousel__item-video' autoPlay >
            <source src={src} type="video/mp4"/>
         </video>)
      }

      const imageElement = (src:string):JSX.Element=>{
         return <img className='help-block-carousel__item-video'  src={src} alt="Get someone’s attention with mentions"></img>
      }


      return (
         <div className='help-block-carousel__container' ref={ref}>
            <div 
               className={`help-block-carousel__slide-buttons ${!isSlideHover && "opacity"}`}  
               onMouseEnter={()=>setIsSlideHover(true)}
               onMouseLeave={()=>setIsSlideHover(false)}
            >
               <button className={`help-block-carousel__slide-button ${slideIndex === 0 && "opacity"}`} onClick={handleClickPrev}>
                  <FontAwesomeIcon icon={faArrowLeft}/>
               </button>
               {slideIndex+1 !== carouselData.length && 
               <button className='help-block-carousel__slide-button-right' onClick={handleClickNext}>
                  <FontAwesomeIcon icon={faArrowRight}/>
               </button>}
            </div>
            <div className='help-block-carousel__header'>
               <HelpTitle text='Discover more' icon={faStar}/>
               <p className='help-block-carousel__count'>{slideIndex+1}/{carouselData.length}</p>
            </div>
               <AnimatePresence initial={false} custom={{direction, width}}>
                  <motion.div 
                     onMouseEnter={()=>setIsSlideHover(true)}
                     onMouseLeave={()=>setIsSlideHover(false)}
                     key={slideInfo.id} 
                     variants={variants}
                     initial="enter"
                     animate="center"
                     exit="exit"
                     custom={{direction, width}}
                     transition={{duration:0.3}}
                     className='help-block-carousel__item-container'
                  >
                     <div className='help-block-carousel__item-header'>
                        <p className='help-block-carousel__item-header-title'>{slideInfo.title}</p>
                        <p className='help-block-carousel__item-header-under-title'>{slideInfo.underTitle}</p>
                     </div>
                    
                    {slideInfo.typeOfSrc === "video"?videoElement(slideInfo.src):imageElement(slideInfo.src)}
                  </motion.div>
               </AnimatePresence>  
            </div> 
      );

   
   }

   interface IVariants{
      direction:number,
      width:number
   }

   const variants ={
      enter:({direction,width}:IVariants) =>({x: direction* width}),
      center:{x:0}, 
      exit:({direction, width}:IVariants) =>({x:direction * -width})
   }