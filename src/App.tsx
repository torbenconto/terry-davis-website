import terry from "./assets/terrystare.png";

function App() {
  return (
    <>
      <div className="w-full h-screen flex">
        <img src={terry} className="p-24" alt="Terry Davis" />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="instrument-serif-regular text-9xl font-serif uppercase tracking-wide">Terry Davis 2024</h1>
          <h2 className="instrument-serif-regular text-5xl font-serif uppercase tracking-wider mt-4">
            A Vision Beyond the System
          </h2>
          <p className="mt-8 text-xl instrument-serif-regular italic">
           A brighter future built on clarity, honesty, and truth.
          </p>
          <button className="mt-6 pt-serif-regular px-8 py-3 border-2 border-black text-black text-lg rounded-lg hover:shadow-lg transition-all duration-300">
            Info
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
