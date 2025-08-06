import { useCallback, useEffect, useState } from "react";
import type { Photo } from "../services/pexels/types";
import { getPhotos } from "../services/pexels";

export default function usePhotos(search: string, limit: number = 10) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [photosLoading, setLoading] = useState(true);

  //useCallback for future useCases where fetchPhotos is passed down as a prop to a child component
  const fetchPhotos = useCallback(() => {
    setLoading(true);
    getPhotos(search, limit)
      .then(({ photos }) => {
        setPhotos(photos);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        window.alert(err.message);
      });
  }, [search, limit]);

  useEffect(() => {
    fetchPhotos();
  }, [search, limit, fetchPhotos]);

  return { photos, photosLoading, fetchPhotos };
}
