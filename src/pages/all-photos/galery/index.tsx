import { type JSX } from "react";
import LoadingSpinner from "../../../components/loadingSpinner";
import type { Photo } from "../../../services/pexels/types";
import PhotoComponent from "../Photo";
import { GaleryWrapper, LoadingWrapper } from "./styles";

interface Props {
  photos: Photo[];
  loading: boolean;
}
export default function Galery({ photos, loading }: Props) {
  const photoElements: JSX.Element[] = photos.map((photo) => (
    <PhotoComponent key={photo.id} photo={photo} />
  ));

  return (
    <GaleryWrapper>
      {loading ? (
        <LoadingWrapper>
          <LoadingSpinner />
        </LoadingWrapper>
      ) : (
        photoElements
      )}
    </GaleryWrapper>
  );
}
