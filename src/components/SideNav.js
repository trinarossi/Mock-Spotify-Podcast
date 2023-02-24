import React from "react";

const SideNav = () => {
  return (
    <>
      <img className="logo" src="Spotify_Logo_RGB_White.png" />
      <section>
        <div className="top-3">
          <p>Home</p>
          <p>Search</p>
          <p>Your List</p>
        </div>
        <div className="bottom-3">
          <p>Create Playlist</p>
          <p>Liked Songs</p>
          <p>Your Episodes</p>
        </div>
      </section>
      <section className="my-playlists">
        <ul>
          <li>Favorite Classical Songs</li>
          <li>How Insensitive</li>
          <li>Frankie and Da Crew</li>
          <li>My Way -2008 Remastered Radio</li>
          <li>Soft 50s</li>
          <li>Twee</li>
          <li>NYE Pregame</li>
          <li>Daily Mix 2</li>
          <li>Chill Mix</li>
          <li>Classic Acoustic</li>
          <li>after school club</li>
          <li>Doja Cat & Ariana Grande Playlist</li>
          <li>Road Trip!</li>
          <li>Vibin' on alt oldies</li>
          <li>Soccer Mommy Radio</li>
          <li>This is Grimes</li>
          <li>Pure Pop Punk</li>
          <li>Alternative 10s</li>
          <li>Dark & Gothic</li>
          <li>squiggly-wiggly new wave boys</li>
          <li>This is Talking Heads</li>
          <li>This is Yo La Tengo</li>
          <li>Smooth like buttah</li>
          <li>This is Sarah Vaughan</li>
        </ul>
      </section>
      <p>Install App</p>
    </>
  );
};

export default SideNav;
