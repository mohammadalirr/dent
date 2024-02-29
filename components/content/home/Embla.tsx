"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Box, Button, Image, Text } from "@mantine/core";

const Embla = () => {
  const autoplay = useRef(Autoplay({ delay: 1000 }));
  return (
    <>
      <Carousel
      
        className="bg-white rounded-lg w-full"
        dir="ltr"
        withIndicators
        height={400}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize="100%"
        align="start"
        dragFree
        slideGap="md"
        loop        
        slidesToScroll={1}
      >
        <Carousel.Slide>
          <Box className="box-1 w-full h-full flex flex-col items-end justify-start px-5 py-5">
            <Text>
                آنگل
            </Text>
            <Button>
            همین حالا تهیه کنید
            </Button>
          </Box>
        </Carousel.Slide>
        <Carousel.Slide>
          <Box className="box-2 w-full h-full flex flex-col items-end justify-start px-5 py-5">
          <Text>
                توربین
            </Text>
            <Button>
             همین حالا تهیه کنید
            </Button>

          </Box>
        </Carousel.Slide>
        <Carousel.Slide>
          <Box className="box-3 w-full h-full flex flex-col items-end justify-start px-5 py-5">
          <Text>
                ایرموتور
            </Text>
            <Button>
                همین حالا تهیه کنید
            </Button>

          </Box>
        </Carousel.Slide>
      </Carousel>
      {/* <Carousel
        dir="ltr"
        className="bg-white relative top-24"
        w={300}
        withIndicators
        height={200}
        dragFree
        slideGap="md"
        align="center"
      >
        <Carousel.Slide>1</Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
      </Carousel> */}
    </>
  );
};

export default Embla;
