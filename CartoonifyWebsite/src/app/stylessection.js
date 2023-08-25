"use client"

import { useState } from 'react';
export default function StylesSection() {
  const [imageIndex, setImageIndex] = useState(0);
  const [comparisonImages, setComparisonImages] = useState([null, null]);
  const styles = [
    { name: 'Normal', images: ['/images/default1.jpg', '/images/default2.jpg', '/images/default3.jpg'], color: 'bg-gray-200 text-black' },
    { name: 'Shinkai', images: ['/images/shinkai1.png', '/images/shinkai2.png', '/images/shinkai3.png'], color: 'bg-blue-900 text-off-white' },
    { name: 'Hayao', images: ['/images/hayao1.png', '/images/hayao2.png', '/images/hayao3.png'], color: 'bg-turquoise text-off-white' },
    { name: 'Paprika', images: ['/images/paprika1.png', '/images/paprika2.png', '/images/paprika3.png'], color: 'bg-blue-900 text-off-white' },
    { name: 'Hosoda', images: ['/images/hosoda1.png', '/images/hosoda2.png', '/images/hosoda3.png'], color: 'bg-turquoise text-off-white' },    
  ];


  const handleDragStart = (e, style) => {
    e.dataTransfer.setData('style', JSON.stringify(style));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.style.border = '3px dashed #000'; // Highlight the drop target
  };

  const handleDragLeave = (e) => {
    e.currentTarget.style.border = 'none'; // Remove highlight
  };

  const handleDrop = (e, index) => {
    e.currentTarget.style.border = 'none'; // Remove highlight
    const style = JSON.parse(e.dataTransfer.getData('style'));
    setComparisonImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = style; // Store the entire style object
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
    <section className="bg-off-white py-12">
    {/* Types of Styles */}
      <h2 className="font-trend text-5xl text-center mb-10">Styles</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {styles.map((style, index) => (
            <div key={index} className={`rounded-lg shadow-lg relative ${style.color}`} draggable onDragStart={(e) => handleDragStart(e, style)}>
            <img src={style.images[imageIndex]} alt={style.name} className="w-full h-[300px] object-cover rounded-lg" />
            {style.name === 'Normal' && (
                <div className="absolute top-0 left-0 right-0 h-[300px] flex justify-between items-center">
                <button onClick={() => setImageIndex((imageIndex - 1 + styles[0].images.length) % styles[0].images.length)} className="font-trend text-off-white px-2 py-1 text-3xl">{'<'}</button>
                <button onClick={() => setImageIndex((imageIndex + 1) % styles[0].images.length)} className="font-trend text-off-white px-2 py-1 text-3xl">{'>'}</button>
                </div>
            )}
            <div className="flex-grow flex flex-col justify-between p-6">
                <h3 className="font-trend text-2xl mt-4">{style.name}</h3>
                <p className="font-pop-thin text-lg text-justify flex-grow">Description for {style.name} style.</p>
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
                    <img src={style.images[imageIndex]} alt={style.name} className="w-full h-full object-cover rounded-lg" />
                    <h3 className="absolute top-0 left-0 right-0 text-center text-off-white font-trend text-2xl bg-blue-900 opacity-75">{style.name}</h3>
                    <button onClick={() => handleRemoveImage(index)} className="absolute top-0 right-0 text-red-500 bg-turquoise font-trend p-2 rounded-full">X</button>
                </>
                )}
            </div>
            </div>
        ))}
        </div>

    </section>
  );
}