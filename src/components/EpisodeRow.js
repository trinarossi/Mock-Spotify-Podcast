import React from "react";

const EpisodeRow = ({ episode }) => {
  const RenderRows = () => {
    if (episode.explicit) {
      return (
        <section className="row-container">
          <img src={episode.imgUrl} />
          <div className="row-body">
            <div className="main-text">
              <h2>{episode.name}</h2>
              <p>{episode.description}</p>
            </div>
            <div className="row-bottom"></div>
            <button>Play</button>
            <span class="material-symbols-outlined">explicit</span>
            <p>
              {episode.dateUploaded}, {episode.length}
            </p>
          </div>
        </section>
      );
    }
    return (
      <section className="row-container">
          <img src={episode.imgUrl} />
          <div className="row-body">
            <div className="main-text">
              <h2>{episode.name}</h2>
              <p>{episode.description}</p>
            </div>
            <div className="row-bottom"></div>
            <button>Play</button>
            <p>
              {episode.dateUploaded}, {episode.length}
            </p>
          </div>
        </section>
    );
  };

  return <RenderRows />;
};

export default EpisodeRow;
