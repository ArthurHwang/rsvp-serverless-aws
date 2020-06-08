import styled from "styled-components";
import { FC, ReactElement, useState, useCallback } from "react";
// import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("react-photo-gallery"), {
  ssr: false,
});

const photos = [
  { src: require("images/about/photo-2.jpg"), width: 4.5, height: 3 },
  { src: require("images/about/us.jpg"), width: 1, height: 1.7 },
  { src: require("images/about/photo-3.jpg"), width: 3.3, height: 4.2 },
  { src: require("images/about/photo-4.jpg"), width: 4, height: 3 },
  { src: require("images/about/photo-5.jpg"), width: 4, height: 3 },
  { src: require("images/about/photo-6.jpg"), width: 4, height: 3 },
  { src: require("images/about/photo-7.jpg"), width: 4, height: 3 },
  { src: require("images/about/us-matt.jpg"), width: 4, height: 3 },
  { src: require("images/about/photo-1.jpg"), width: 4, height: 3 },
];

export const MasonryGallery: FC = (): ReactElement => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // @ts-ignore
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <StyledMasonryGallery>
      {/* 
      //@ts-ignore */}
      <Gallery photos={photos} direction={"column"} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              // @ts-ignore
              views={photos.map((x) => ({
                ...x,
                // @ts-ignore
                srcset: x.srcSet,
                // @ts-ignore
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </StyledMasonryGallery>
  );
};

const StyledMasonryGallery = styled("div")`
  background-color: black;
  overflow-x: hidden;
  overflow-y: scroll;
  /* overflow: scroll; */

  @media (max-width: 1445px) {
    overflow: initial;
    overflow-x: hidden;
    /* display: block; */
  }

  img {
    transition: all 0.3s ease-in-out;
    /* width: 100px; */
    &:hover {
      transform: scale(1.03);
      z-index: 9999;
    }
  }

  ul {
    list-style-type: none;

    li {
      max-width: 450px;
      min-width: 100px;
      margin: 0rem 0.5rem;
    }
  }

  .gallery {
    padding: 0;
    height: 100%;

    width: 4600px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
