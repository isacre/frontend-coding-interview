import { useMemo } from "react";
import LoadingSpinner from "../../components/loadingSpinner";
import { Page } from "../../components/page";
import usePhotos from "../../hooks/usePhotos";
import PhotoComponent from "./Photo";
import { GaleryWrapper, LoadingWrapper, Wrapper } from "./styles";

export default function AllPhotosPage() {
  const { photos, photosLoading } = usePhotos();
  const memoizedPhotos = useMemo(
    () =>
      photos.map((photo) => <PhotoComponent key={photo.id} photo={photo} />),
    [photos]
  );

  return (
    <Wrapper>
      <Page.LogoAndTitle alignItems="left" title="All photos" />
      <GaleryWrapper>
        {photosLoading ? (
          <LoadingWrapper>
            <LoadingSpinner />
          </LoadingWrapper>
        ) : (
          memoizedPhotos
        )}
      </GaleryWrapper>
    </Wrapper>
  );
}
