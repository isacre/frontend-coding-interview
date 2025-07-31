import { Page } from "../../components/page";
import usePhotos from "../../hooks/usePhotos/usePhotos";
import Galery from "./galery";
import { Wrapper } from "./styles";

export default function AllPhotosPage() {
  const { photos, photosLoading } = usePhotos();

  return (
    <Wrapper>
      <Page.LogoAndTitle alignItems="left" title="All photos" />
      <Galery photos={photos} loading={photosLoading} />
    </Wrapper>
  );
}
