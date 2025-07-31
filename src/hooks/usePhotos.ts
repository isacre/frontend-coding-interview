import { useCallback, useEffect, useState } from "react";
import type { Photo } from "../services/pexels/types";
import { getPhotos } from "../services/pexels";

export default function usePhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [photosLoading, setLoading] = useState(true);

  //useCallback for future useCases where fetchPhotos is passed down as a prop to a child component
  const fetchPhotos = useCallback(() => {
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

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return { photos, photosLoading, fetchPhotos };
}
