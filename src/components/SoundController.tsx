import React, { useState } from "react";
import { Play, useHowl } from "rehowl";

export default function SoundController() {
  const maxTracksIndex = 5;
  const sources = [
    "/tracks/track-3.mp3",
    "/tracks/track-1.mp3",
    "/tracks/track-2.mp3",
    "/tracks/track-4.mp3",
    "/tracks/track-5.mp3",
  ];
  const [volume, setVolume] = useState<number>(0.5);
  const [track, updateTrack] = useState<number>(1);
  const [playing, setPlaying] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false);
  const { howl, state, error } = useHowl({
    src: sources[track],
    defaultVolume: 1.0,
  });
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && e.altKey) {
        e.preventDefault();
        if (track === maxTracksIndex - 1) {
          updateTrack(0);
        } else {
          const prevTrack = track;
          updateTrack(prevTrack + 1);
        }
      } else if (e.key === "ArrowLeft" && e.altKey) {
        e.preventDefault();
        if (track === 1) {
          updateTrack(maxTracksIndex - 1);
        } else {
          const prevTrack = track;
          updateTrack(prevTrack - 1);
        }
      } else if (e.key === "π" && e.altKey) {
        e.preventDefault();
        const prevPlaying = playing;
        setPlaying(!prevPlaying);
      } else if (e.key === "ArrowDown" && e.altKey) {
        e.preventDefault();
        if (volume === 0) {
          return;
        }
        setVolume(volume - 0.05);
      } else if (e.key === "ArrowUp" && e.altKey) {
        e.preventDefault();
        if (volume === 1) {
          return;
        }
        setVolume(volume + 0.05);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [playing, track, howl, volume, mute]);
  return <Play howl={howl} pause={!playing} volume={volume} loop={true} />;
}
