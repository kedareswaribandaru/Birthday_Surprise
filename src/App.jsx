
import { useRef, useState } from "react";
import "./index.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BackgroundMusic from "./components/BackgroundMusic";
import ConfettiAnimation from "./components/ConfettiAnimation";
import BalloonAnimation from "./components/BalloonAnimation";
import MemoryLane from "./components/MemoryLane";
import MessageSection from "./components/MessageSection";
import ScrapbookOpening from "./components/ScrapbookOpening";

import { templateContent } from "./templateContent";

function App() {
  const musicRef = useRef(null);

  const [candlesBlown, setCandlesBlown] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [scrapbookOpened, setScrapbookOpened] = useState(false);

  const allCandlesBlown = candlesBlown.every(Boolean);

  return (
    <>
      {/* Keep background music available across both screens. */}
      <BackgroundMusic
        ref={musicRef}
        playOn={allCandlesBlown}
      />

      {!scrapbookOpened ? (
        /* Opening scrapbook screen */
        <ScrapbookOpening
          onOpen={() => setScrapbookOpened(true)}
        />
      ) : (
        /* Existing birthday page */
        <div className="min-h-screen overflow-x-clip bg-gradient-to-b from-birthday-pink-50 to-white">
          <ConfettiAnimation onCandleBlow={true} />
          <BalloonAnimation trigger={true} balloonCount={6} />

          <Header />

          <div className="-mt-8 md:-mt-12 lg:-mt-16">
            <HeroSection
              recipientName={templateContent.recipientName}
              age={templateContent.age}
              candlesBlown={candlesBlown}
              setCandlesBlown={setCandlesBlown}
              onAllCandlesBlown={() =>
                musicRef.current?.playFromUserGesture()
              }
            />
          </div>

          <div className="hp-victus-container">
            <MemoryLane
              photos={templateContent.photos}
              isLocked={!allCandlesBlown}
            />

            <MessageSection
              message={templateContent.message}
              author={templateContent.senderName}
              isLocked={!allCandlesBlown}
            />

            <footer className="py-6 text-center text-gray-600 md:py-8 lg:py-10">
              <p className="text-base md:text-lg lg:text-xl">
                {templateContent.footerText}
              </p>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
