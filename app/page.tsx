'use client'

import { Navigation } from "./components/app-bar";
import { PlayButton } from "./play-button";

export default function Home() {
  return (
    <>
      <Navigation title="Dart Scoreboard" />
      <div className="flex flex-row p-4">
          <PlayButton/>
      </div>
    </>
  );
}


