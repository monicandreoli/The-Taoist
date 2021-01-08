import React, { useState} from 'react'
import { BannerContainer, BannerBackground, VideoBg, BannerHeadings, Span, BannerTitle, BannerP, BannerSignUp, SignUpBtnWrapper, ArrowForward, ArrowRight } from './BannerElements'
import { Button } from '../../components/ButtonElements';
import  video from '../../videos/video.mp4'

const Banner = () => {
  const [ hover, setHover ] = useState(false);
  const onHover = () => {
      setHover(!hover)
  }


    return (
        <BannerContainer id="home">
        <BannerBackground>
            <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </BannerBackground>

        <BannerHeadings>
                <BannerTitle>
                    BALANCE YOUR MIND
                </BannerTitle>
                <BannerP>
                    <Span>yoga online</Span><br />is never been so easy.
                </BannerP>
                <BannerSignUp>
                    Start NOW and receive the first month FREE!
                </BannerSignUp>

                <SignUpBtnWrapper>
                        <Button to="signup"
                        onMouseOver={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        >
                        Get started { hover ? <ArrowForward /> : <ArrowRight /> }</Button>
                </SignUpBtnWrapper>
             </BannerHeadings>
        </BannerContainer>
    )
}

export default Banner
