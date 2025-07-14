"use client";
import useUIStoreContext from "@/shared/state/useUIStoreContext";
export default function ViewToggle() {
  const { toggle, onToggle } = useUIStoreContext();
  const focusedStyle =
    "font-bold bg-limegreen border-1 border-limegreen text-primary-text";
  const unfocusedStyle =
    "font-normal bg-transparent border-1 border-gray text-gray";
  return (
    <div>
      <button
        className={`lowercase text-center cursor-pointer rounded-[10px] ${
          toggle === "spotify" ? focusedStyle : unfocusedStyle
        }`}
        onClick={onToggle}
      >
        <p>Spotify</p>
      </button>
      <button
        className={`lowercase text-center cursor-pointer rounded-[10px] ${
          toggle === "lastfm" ? focusedStyle : unfocusedStyle
        }`}
        onClick={onToggle}
      >
        <p>Lastfm</p>
      </button>
    </div>
  );
}
