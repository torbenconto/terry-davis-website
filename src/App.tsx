import terry from "./assets/terrystare.png";
import terryvid from "./assets/terry.mp4";
import temple from "./assets/templeos-graphics.png";

import artwork1 from "./assets/art/470076365_3930810933822350_4824221168064251002_n.jpg";
import artwork2 from "./assets/art/470095597_554468964150243_7205601323776952488_n.jpeg";
import artwork3 from "./assets/art/470166861_1099972761871966_5928038366435500008_n.jpeg";
import artwork4 from "./assets/art/470170902_3872257696347226_7109883915271230723_n.jpg";
import artwork5 from "./assets/art/470315418_1113198070245136_4769477162421614948_n.jpg";
import artwork6 from "./assets/art/470483325_938486717760958_102117141937502529_n.jpg";
import artwork7 from "./assets/art/470309955_1317834836022284_6862856987641447156_n.jpg";
import artwork8 from "./assets/art/470309965_448917728271002_5584524119879475940_n.jpg";


function App() {
  return (
    <>
      {/* First Fullscreen Section */}
      <div className="w-full h-screen flex">
        <img src={terry} className="p-24 py-36" alt="Terry Davis" />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="instrument-serif-regular text-9xl font-serif uppercase tracking-wide">Terry Davis <span className="text-blue-800">2024</span></h1>
          <h2 className="instrument-serif-regular text-5xl font-serif uppercase tracking-wider mt-4">
            A Vision Beyond the System
          </h2>
          <p className="mt-8 text-xl instrument-serif-regular italic">
            A brighter future built on clarity, honesty, and truth.
          </p>
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
            Terry Davis was a computer programmer who developed TempleOS, a 64 bit operating system that he built entirely from scratch. He was a brilliant mind who struggled with mental health issues.
          </p>
          <p className="mt-6 text-lg instrument-serif-regular">
            His journey was filled with obstacles, but his words and works continue to inspire countless people.
          </p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen flex bg-white">
        <div className="flex flex-row-reverse justify-center items-center text-center p-12">
          <img src={temple} className="w-1/2 p-12" alt="TempleOS">
          </img>
          <div className="px-12">
          <h1 className="instrument-serif-regular text-6xl font-serif uppercase tracking-wide">A Devoted Man</h1>
          <p className="mt-8 text-xl instrument-serif-regular">
            Davis dedicated his life and work to God, and his faith was a central part of his identity.
          </p>
          <p className="mt-6 text-lg instrument-serif-regular">
            He was incredibly devoted to his craft, and his passion for programming was unmatched.
          </p>
          </div>
        </div>
      </div>

      <div className="w-full h-screen flex bg-gray-100">
        <div className="flex flex-col justify-center items-center text-center p-12 self-center mx-auto">
          <div className="px-12">
          <h1 className="instrument-serif-regular text-6xl font-serif uppercase tracking-wide">Our promises</h1>
          <ul className="text-left instrument-serif-regular">
            <li className="mt-8 text-2xl instrument-serif-regular">Transparency</li>
            <p>Davis, as an open-source advocate, will adopt the principle to the federal government. The federal government was originally created as a servant of the people but has over time transformed into a secretive and incredibly-powerful bureaucratic machine. Terry Davis is committed to bringing full and unfiltered transparency to the federal government, giving control back to those who should’ve had it in the first place: The American People.
            </p>
            <li className="mt-4 text-2xl instrument-serif-regular">Effeciency</li>
            <p>There are more than 2000 bureaucratic agencies in the U.S. Government. While many of these agencies do a great service to the American people, many contribute very little whilst consuming large amounts of taxpayer money. Mr. Davis will audit, review, and revise many of these agencies, ensuring that the American taxpayer’s money is being used to benefit them, not incredibly wealthy people with power over the government.</p>
            <li className="mt-4 text-2xl instrument-serif-regular">Security</li>
            <p>With several large-scale cyberattacks on both the United States and its government in recent years, cyber security initiatives are more important than ever. Through the open-source government policy, vulnerabilities can be identified and patched quickly with the help of the to-be-implemented Federal Bug Bounty Program, which will reward citizens who identify areas of improvement in government software. A Federal Cybersecurity Task Force will be instantiated for the sole purpose of protecting the United States from any and all cyber threats, foreign or domestic.</p>
          </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-gray-200">
        <div className="flex flex-wrap justify-center items-center h-full p-12">
          <h1 className="instrument-serif-regular text-6xl font-serif uppercase tracking-wide text-center w-full">Gallery</h1>
          <div className="grid grid-cols-3 gap-8 w-full mt-12">
            <div className="flex justify-center">
              <img src={artwork1} className="w-full h-full object-cover rounded-lg" alt="Artwork 1" />
            </div>
            <div className="flex justify-center">
              <img src={artwork2} className="w-full h-full object-cover rounded-lg" alt="Artwork 2" />
            </div>
            <div className="flex justify-center">
              <img src={artwork3} className="w-full h-full object-cover rounded-lg" alt="Artwork 3" />
            </div>
            <div className="flex justify-center">
              <img src={artwork4} className="w-full h-full object-cover rounded-lg" alt="Artwork 3" />
            </div>
            <div className="flex justify-center">
              <img src={artwork5} className="w-full h-full object-cover rounded-lg" alt="Artwork 3" />
            </div>
            <div className="flex justify-center">
              <img src={artwork6} className="w-full h-full object-cover rounded-lg" alt="Artwork 3" />
            </div>
            <div className="flex justify-center">
              <img src={artwork7} className="w-full h-full object-cover rounded-lg" alt="Artwork 3" />
            </div>
            <div className="flex justify-center">
              <img src={artwork8} className="w-full h-full object-cover rounded-lg" alt="Artwork 3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
