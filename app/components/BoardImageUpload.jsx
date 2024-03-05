// ImageUpload.js
import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div>
      <label htmlFor="imageUpload" className="block text-gray-700 text-sm font-bold mb-2">
        Upload Image
      </label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageChange}
        className="border w-full py-2 px-3 focus:outline-none focus:border-blue-500"
      />

      {image && (
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Image Preview</label>
          <img src={image} alt="Preview" className="max-w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
