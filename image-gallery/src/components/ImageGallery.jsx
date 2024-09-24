import React, { useEffect, useState } from "react";

const ImageGallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((res) => setGalleryImages(res.slice(1, 10)))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h3>Image Gallery</h3>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          galleryImages.map((galleryImage) => (
            <img
              src={galleryImage.thumbnailUrl}
              alt={galleryImage.title}
              id={galleryImage.id}
            />
          ))
        )}

        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
