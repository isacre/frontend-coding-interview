import styled from "styled-components";
import { Page } from "../../components/page";
import { useEffect, useMemo, useState } from "react";
import { getPhotos } from "../../services/pexels";
import type { Photo } from "../../services/pexels/types";
import PhotoComponent from "./Photo";
import LoadingSpinner from "../../components/loadingSpinner";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 36px 32px;
  gap: 40px;
`;

const GaleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function AllPhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const memoizedPhotos = useMemo(
    () =>
      photos.map((photo) => <PhotoComponent key={photo.id} photo={photo} />),
    [photos]
  );

  useEffect(() => {
    setLoading(true);
    getPhotos("nature", 10)
      .then((response) => {
        setPhotos(response.photos);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        window.alert(err.message);
      });
  }, []);

  return (
    <Wrapper>
      <Page.LogoAndTitle alignItems="left" title="All photos" />
      <GaleryWrapper>
        {loading ? (
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
