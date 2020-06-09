import styled from "styled-components";
import { FC, ReactElement, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./Photos";

const Gallery = dynamic(() => import("react-photo-gallery"), {
  ssr: false,
});

export const MasonryGallery: FC = (): ReactElement => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_event, { index }) => {
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
  overflow-y: auto;

  img {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-4px);
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

  @media (max-width: 1445px) {
    overflow: initial;
    overflow-x: hidden;
  }
`;
