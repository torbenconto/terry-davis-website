import terry from "./assets/terrystare.png";
import terryvid from "./assets/terry.mp4";

function App() {
  return (
    <>
      {/* First Fullscreen Section */}
      <div className="w-full h-screen flex">
        <img src={terry} className="p-24 py-36" alt="Terry Davis" />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="instrument-serif-regular text-9xl font-serif uppercase tracking-wide">Terry Davis 2024</h1>
          <h2 className="instrument-serif-regular text-5xl font-serif uppercase tracking-wider mt-4">
            A Vision Beyond the System
          </h2>
          <p className="mt-8 text-xl instrument-serif-regular italic">
            A brighter future built on clarity, honesty, and truth.
          </p>
          <button className="mt-6 pt-serif-regular px-12 py-3 border-2 border-black text-black text-lg rounded-lg hover:shadow-lg transition-all duration-300">
            Info
          </button>
        </div>
      </div>

      {/* Second Fullscreen Section */}
      <div className="w-full h-screen flex bg-gray-100">
        <div className="flex justify-center items-center text-center p-12">
          <video className="w-1/2" controls autoPlay>
            <source src={terryvid} type="video/mp4" />
          </video>
          <div className="px-12">
          <h1 className="instrument-serif-regular text-6xl font-serif uppercase tracking-wide">More About Terry</h1>
          <p className="mt-8 text-xl instrument-serif-regular">
            Terry Davis, a computer programmer, was known for creating TempleOS, an operating system that he built entirely from scratch. He was a brilliant mind who struggled with mental health issues.
          </p>
          <p className="mt-6 text-lg instrument-serif-regular">
            His journey was filled with obstacles, but his reality continues to inspire countless people.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
