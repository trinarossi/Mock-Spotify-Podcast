import React from "react";
import { Route, Routes } from "react-router-dom";
import { TopNav } from "./index";
import { SideNav } from "./index";
import { BottomPlayer } from "./index";
import { PodcastHome } from "./index";
import { ShowSeries } from "./index";
import { ShowEpisode } from "./index";


const Main = () => {
  return (
      <div>
        <TopNav />
        <SideNav />
        <BottomPlayer />
        <Routes>
          <Route path="/" element={<PodcastHome />}></Route>
          <Route path="/series/:id" element={<ShowSeries />}></Route>
          <Route path="/episode/:id" element={<ShowEpisode />}></Route>
        </Routes>
      </div>
  );
};

export default Main;