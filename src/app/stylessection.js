"use client"

import { useState } from 'react';
export default function StylesSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const [comparisonImages, setComparisonImages] = useState([null, null]);
  const styles = [
    { name: 'Normal', images: ['/images/default1.jpg', '/images/default2.jpg', '/images/default3.jpg'], color: 'bg-gray-200 text-black' },
    { name: 'Shinkai', images: ['/images/shinkai1.png', '/images/shinkai2.png', '/images/shinkai3.png'], color: 'bg-cerulean text-white' },
    { name: 'Hayao', images: ['/images/hayao1.png', '/images/hayao2.png', '/images/hayao3.png'], color: 'bg-forest-green text-white' },
    { name: 'Paprika', images: ['/images/paprika1.png', '/images/paprika2.png', '/images/paprika3.png'], color: 'bg-dreamy-purple text-white' },
    { name: 'Hosoda', images: ['/images/hosoda1.png', '/images/hosoda2.png', '/images/hosoda3.png'], color: 'bg-earthy-brown text-white' },    
  ];

  const handleDragStart = (e, style) => {
    e.dataTransfer.setData('style', JSON.stringify(style));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.style.border = '3px dashed #000';
  };

  const handleDragLeave = (e) => {
    e.currentTarget.style.border = 'none'; 
  };

  const handleDrop = (e, index) => {
    e.currentTarget.style.border = 'none'; 
    const style = JSON.parse(e.dataTransfer.getData('style'));
    setComparisonImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = style; 
      return newImages;
    });
  };

  const handleRemoveImage = (index) => {
    setComparisonImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = null;
      return newImages;
    });
  };


  return (
    <section id="Styles" className="bg-off-white py-12">
    {/* Types of Styles */}
      <h2 className="font-trend text-5xl text-center mb-10">Styles</h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {styles.map((style, index) => (
          <div key={index} className={`rounded-lg shadow-lg relative ${style.color}`} draggable onDragStart={(e) => handleDragStart(e, style)}>
            <img src={style.images[imageIndex]} alt={style.name} className="w-full h-[300px] object-cover rounded-lg" />
            {style.name === 'Normal' && (
              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center h-12">
                <button onClick={() => setImageIndex((imageIndex - 1 + styles[0].images.length) % styles[0].images.length)} className="font-trend text-black px-2 py-1 text-3xl">{'<'}</button>
                <button onClick={() => setImageIndex((imageIndex + 1) % styles[0].images.length)} className="font-trend text-black px-2 py-1 text-3xl">{'>'}</button>
              </div>
            )}
            <div className="flex-grow flex flex-col justify-center p-6">
              <h3 className="font-trend text-2xl text-center">{style.name}</h3>
            </div>
          </div>
        ))}
      </div>
        {/* Compare boxes */}
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {comparisonImages.map((style, index) => (
            <div key={index}>
              <p className="text-center mb-2 font-pop-sbold">Drag a style here to compare</p>
              <div className="rounded-lg shadow-lg p-6 h-[400px] bg-gray-200 flex justify-center items-center relative" 
                  onDrop={(e) => handleDrop(e, index)} 
                  onDragOver={handleDragOver} 
                  onDragLeave={handleDragLeave}
                  style={{ border: 'none' }}>
                  {style && (
                  <>
                    <div className="absolute top-0 left-0 right-0 bg-gray-200 text-blue-900 rounded-t-lg flex items-center h-8 mt-1">
                      <h5 className={`text-2xl font-trend mb-2 w-full text-center ${style.color.split(' ')[0].replace('bg-', 'text-')}`}>{style.name}</h5>
                      <button onClick={() => handleRemoveImage(index)} className="text-blue-900 font-bold py-1 px-2 rounded-full text-xl w-8 h-8 flex justify-center items-center absolute top-0 right-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <img src={style.images[imageIndex]} alt={style.name} className="w-full h-full object-cover rounded-lg" />
                  </>
                  )}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}