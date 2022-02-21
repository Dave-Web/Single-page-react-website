import React, {useState} from 'react'
import videoFile from '../../videos/VideoFile.mp4';
/* import { Button  } from '../ButtonElements'; */
import { 
    HeroContainer,
     HeroBg, 
     VideoBg,
      HeroContent, 
      HeroH1, 
      HeroP,
       /* HeroBtnWrapper, 
       ArrowForward, 
       ArrowRight  */
    } from './HeroElements';

    const HeroSection = () => {
        const [hover, setHover] = useState(false)
    
        const onHover = () => {
            setHover(!hover)
        }


    return (
        <HeroContainer>
            <HeroBg>                
                <video autoPlay loop muted id ='video'>
                    <source src={videoFile} type ='video/mp4' />
                    </video>         
            </HeroBg>
            <HeroContent>
                <HeroH1>
                Diverging Solutions For Specific Business Needs.
                </HeroH1>
                <HeroP>
                    Custom IT Services and Solutions for Your Needs.
                    We help you win! Let us handle IT for you.
                </HeroP>
                {/* <HeroBtnWrapper>
                    <Button to='Reachus' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact='true' 
                    offset={-80}
                            >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>

        </HeroContainer>
        
    )
}

export default HeroSection
