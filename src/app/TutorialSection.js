// components/TutorialSection.js
import React, { useState } from 'react';

export default function TutorialSection() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (imagePath) => {
    setEnlargedImage(imagePath);
  };

  const handleCloseImage = () => {
    setEnlargedImage(null);
  };

  return (
    <section id="Tutorial" className="bg-gray-100 p-8 text-center relative">
      <h2 className="font-trend text-4xl mb-4">Tutorial</h2>

      {enlargedImage && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <img src={enlargedImage} alt="Enlarged" className="rounded-lg max-w-full max-h-full" />
          <button onClick={handleCloseImage} className="absolute top-4 right-4 text-white text-2xl">
            X
          </button>
        </div>
      )}

      <div className="space-y-8">
        {/* Steps */}
        {[1, 2, 3, 4, 5].map((step, index) => (
          <div className={`flex flex-wrap ${index % 2 === 1 ? 'flex-wrap-reverse' : ''}`}>
            <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="font-trend text-2xl mb-2">Step {step}: Title</h3>
              <p className="font-pop-thin">Here is how to do step {step}...</p>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <img
                src={`/images/default${step}.jpg`}
                alt={`Step ${step}`}
                className="rounded-lg cursor-pointer w-[380px] h-[250px] object-cover"
                onClick={() => handleImageClick(`/images/default${step}.jpg`)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
