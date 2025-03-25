"use client"
import Header from '../src/app/Header';
import '../src/app/globals.css';
import React, { useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


export default function Cartoonize() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setGeneratedImageUrl(null); 
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
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImageUrl(URL.createObjectURL(e.target.files[0]));
      setUploadedFileName(e.target.files[0].name);
      setGeneratedImageUrl(null);
    }
  };

  const downloadImage = (url, filename) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        const objectURL = URL.createObjectURL(blob);
        link.href = objectURL;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(objectURL); 
      })
      .catch(console.error);
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
                {/* uploaded box */}
                <div className="w-1/2 h-[400px] bg-gray-200 flex items-center justify-center text-gray-500">
                  { uploadedImageUrl ? <img src={uploadedImageUrl} alt="Uploaded Image" className="w-full h-full object-cover" /> : 'Uploaded Image' }
                </div>
                {/* generated box */}
                <div className="w-1/2 h-[400px] bg-gray-200 flex flex-col items-center justify-center text-gray-500 relative">
                { generatedImageUrl ? (
                  <>
                    <img src={generatedImageUrl} alt="Generated Image" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:opacity-100 opacity-0 transition-opacity duration-300">
                      <button onClick={() => downloadImage(generatedImageUrl, 'GeneratedImage.png')}>
                        <FontAwesomeIcon icon={faDownload} className="text-white" />
                      </button>
                    </div>
                  </>
                ) : (
                  isGenerating ? (
                    <div className="loader"></div>
                  ) : (
                    'Upload an image to generate'
                  )
                )}
              </div>
              </div>
              {/* Labels */}
              <div className="flex flex-col gap-4">
                <label htmlFor="nameInput" className="font-pop-sbold text-lg">
                  Name:&nbsp;
                </label>
                <input id="nameInput" type="text" name="name" className="border p-2 rounded-md" placeholder="Enter your name" maxLength="32" style={{ width: '200px' }} />
  
                <label className="font-pop-sbold text-lg">
                  Upload Image:&nbsp;
                </label>
                <div className="custom-file-upload">
                  <button type="button" onClick={() => document.getElementById('hiddenFileInput').click()} className="border p-2 rounded-md">
                    Choose File
                  </button>
                  {uploadedFileName && <span className="ml-2">{uploadedFileName}</span>}
                  <input id="hiddenFileInput" type="file" name="img" style={{ display: 'none' }} onChange={handleFileChange} />
                </div>
  
                <label htmlFor="styleSelect" className="font-pop-sbold text-lg">
                  Choose Style:&nbsp;
                </label>
                <select id="styleSelect" name="style" className="border p-2 rounded-md" style={{ width: '200px' }}>
                  <option value="Shinkai">Shinkai</option>
                  <option value="Hayao">Hayao</option>
                  <option value="Paprika">Paprika</option>
                  <option value="Hosoda">Hosoda</option>
                </select>
  
                <button type="submit" className="font-trend bg-turquoise text-off-white px-6 py-2 rounded-md text-center hover:bg-turquoise-dark pb-3">
                  {isGenerating ? 'Generating...' : 'Generate'}
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
  
  }  