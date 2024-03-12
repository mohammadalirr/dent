import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Image } from "@mantine/core";

const Crsl = ({ prdct }: { prdct: any }) => {
  return (
    <Carousel withIndicators dir="ltr" loop h={500}>
        <Carousel.Slide key={prdct.id}>
          <Image h={500} src={prdct.images[0].src} alt={prdct.name} />
        </Carousel.Slide>
        <Carousel.Slide key={prdct.id}>
          <Image  h={500} src={prdct.images[1].src} alt={prdct.name} />
        </Carousel.Slide>
        {/* <Carousel.Slide key={prdct.id}>
          <Image src={prdct.images[0].src} alt={prdct.name} />
        </Carousel.Slide> */}
    </Carousel>
  );
};

export default Crsl;
