import Header from '../app/Header';
import '../app/globals.css';

export default function Cartoonize() {
  return (
    <>
      <Header />
      <main className="bg-off-white p-12">
        {/* Upload Section */}
        <section className="max-w-screen-lg mx-auto">
          <h1 className="font-trend text-5xl text-center mb-10">Cartoonize Your Image</h1>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 mb-6 border rounded-md overflow-hidden">
              <div className="w-1/2 h-[300px] bg-gray-200 flex items-center justify-center text-gray-500">
                <img src="uploaded-image-url" alt="Uploaded Image" className="w-full h-full object-cover" />
                <span className="absolute">Uploaded Image</span>
              </div>
              <div className="w-1/2 h-[300px] bg-gray-200 flex items-center justify-center text-gray-500">
                <img src="generated-image-url" alt="Generated Image" className="w-full h-full object-cover" />
                <span className="absolute">Generated Image</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <label className="font-pop-sbold text-lg">
                Name:&nbsp;
                <input type="text" className="border p-2 rounded-md" placeholder="Enter your name" />
              </label>
              <label className="font-pop-sbold text-lg">
                Upload Image:&nbsp;
                <input type="file" className="border p-2 rounded-md" />
              </label>
              <label className="font-pop-sbold text-lg">
                Choose Style:&nbsp;
                <select className="border p-2 rounded-md">
                  <option value="style1">Shinkai</option>
                  <option value="style2">Hayao</option>
                  <option value="style2">Paprika</option>
                  <option value="style2">Hosoda</option>
                </select>
              </label>
              <button className="font-trend bg-turquoise text-off-white px-6 py-2 rounded-md text-center hover:bg-turquoise-dark pb-3">
                Generate
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
