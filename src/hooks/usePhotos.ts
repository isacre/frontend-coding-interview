import { useEffect, useState } from "react";
import type { Photo } from "../services/pexels/types";
import { getPhotos } from "../services/pexels";

export default function usePhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [photosLoading, setLoading] = useState(true);
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

  return { photos, photosLoading };
}
