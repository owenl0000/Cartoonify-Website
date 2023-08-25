"use client"
import Header from '../app/Header';
import '../app/globals.css';
import React, { useState, useEffect} from 'react';


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}


export default function Cartoonize() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('http://208.167.255.60/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setGeneratedImageUrl(data.img_url);

        // Instead of sleep, consider using a more robust method to know when the image is ready
        await sleep(5000);

        // Update the image using React state
        setGeneratedImageUrl("http://208.167.255.60/media/output.png");
      } else {
        console.error('Failed to upload image');
        console.error('Response:', response);
      }
    } catch (error) {
      console.error('There was an error uploading the image', error);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-off-white p-12">
        <section className="max-w-screen-lg mx-auto">
          <h1 className="font-trend text-5xl text-center mb-10">Cartoonize Your Image</h1>
          <form onSubmit={handleSubmit} id="myForm">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 mb-6 border rounded-md overflow-hidden">
                <div className="w-1/2 h-[300px] bg-gray-200 flex items-center justify-center text-gray-500">
                  { uploadedImageUrl ? <img src={uploadedImageUrl} alt="Uploaded Image" className="w-full h-full object-cover" /> : 'Uploaded Image' }
                </div>
                <div id="image_id" className="w-1/2 h-[300px] bg-gray-200 flex items-center justify-center text-gray-500">
                  { generatedImageUrl ? <img src={generatedImageUrl} alt="Generated Image" className="w-full h-full object-cover" /> : 'Generated Image' }
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label className="font-pop-sbold text-lg">
                  Name:&nbsp;
                  <input type="text" name="name" className="border p-2 rounded-md" placeholder="Enter your name" />
                </label>
                <label className="font-pop-sbold text-lg">
                  Upload Image:&nbsp;
                  <input type="file" name="img" className="border p-2 rounded-md" onChange={(e) => setUploadedImageUrl(URL.createObjectURL(e.target.files[0]))} />
                </label>
                <label className="font-pop-sbold text-lg">
                  Choose Style:&nbsp;
                  <select name="style" className="border p-2 rounded-md">
                    <option value="Shinkai">Shinkai</option>
                    <option value="Hayao">Hayao</option>
                    <option value="Paprika">Paprika</option>
                    <option value="Hosoda">Hosoda</option>
                  </select>
                </label>
                <button type="submit" className="font-trend bg-turquoise text-off-white px-6 py-2 rounded-md text-center hover:bg-turquoise-dark pb-3">
                  Generate
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
  }  