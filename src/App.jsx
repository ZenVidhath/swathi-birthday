import { useState } from "react";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Hero from "./components/Hero/Hero";
import Beginning from "./components/Beginning/Beginning";
import Gallery from "./components/Gallery/Gallery";
import Library from "./components/Library/Library";
import BusDiaries from "./components/BusDiaries/BusDiaries";
import Bunk from "./components/Bunk/Bunk";
import GameTime from "./components/GameTime/GameTime";
import Achievement from "./components/Achievement/Achievement";
import FinalLetter from "./components/FinalLetter/FinalLetter";
import Ending from "./components/Ending/Ending";
function App() {

  const [loadingFinished, setLoadingFinished] = useState(false);
  const [storyStarted, setStoryStarted] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showBus, setShowBus] = useState(false);
  const [showBunk, setShowBunk] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showAchievement, setShowAchievement] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showEnding, setShowEnding] = useState(false);
  return (
    <>
      {!loadingFinished ? (
        <LoadingScreen onFinish={() => setLoadingFinished(true)} />
      ) : (
        <>
          <Hero onStartStory={() => setStoryStarted(true)} />

          {storyStarted && (
            <Beginning
              onContinue={() => setShowGallery(true)}
            />
          )}

          {showGallery && (
            <Gallery
              onContinue={() => setShowLibrary(true)}
            />
          )}

          {showLibrary && (
            <Library
              onContinue={() => setShowBus(true)}
            />
          )}

          {showBus && (
            <BusDiaries
                  onContinue={() => setShowBunk(true)}

            />
          )}

         {showBunk && (
    <Bunk
        onContinue={() => setShowGame(true)}
    />
)}
      {showGame && (
    <GameTime
        onContinue={() => setShowAchievement(true)}
    />
)}
{showAchievement && (
    <Achievement
    onContinue={() => setShowLetter(true)}
/>
)}

{showLetter && (
    <FinalLetter
        
         onContinue={() => setShowEnding(true)}
        
    />
)}
{showEnding && (
    <Ending />
)}
        </>
      )}
    </>
  );
}

export default App;