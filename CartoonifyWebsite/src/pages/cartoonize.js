"use client"
import Header from '../app/Header';
import '../app/globals.css';
import React, { useState, useEffect} from 'react';

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
              {/* Labels */}
              <div className="flex flex-col gap-4">
                <label htmlFor="nameInput" className="font-pop-sbold text-lg">
                  Name:&nbsp;
                </label>
                <input id="nameInput" type="text" name="name" className="border p-2 rounded-md" placeholder="Enter your name" />

                <label className="font-pop-sbold text-lg">
                  Upload Image:&nbsp;
                </label>
                <div className="custom-file-upload">
                  <button type="button" onClick={() => document.getElementById('hiddenFileInput').click()} className="border p-2 rounded-md">
                    Choose File
                  </button>
                  <input id="hiddenFileInput" type="file" name="img" style={{ display: 'none' }} onChange={(e) => {
                      if (e.target.files && e.target.files[0]) { setUploadedImageUrl(URL.createObjectURL(e.target.files[0])); } }}/>
                </div>

                <label htmlFor="styleSelect" className="font-pop-sbold text-lg">
                  Choose Style:&nbsp;
                </label>
                <select id="styleSelect" name="style" className="border p-2 rounded-md">
                  <option value="Shinkai">Shinkai</option>
                  <option value="Hayao">Hayao</option>
                  <option value="Paprika">Paprika</option>
                  <option value="Hosoda">Hosoda</option>
                </select>

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