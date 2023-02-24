import React from "react";

const EpisodeCard = ({ episode }) => {
  const RenderCards = () => {
    if (episode.explicit) {
      return (
      <section className="card-container">
        <img src={episode.imgUrl} />
        <div className="card-text">
          <span class="material-symbols-outlined">explicit</span>
          <h2>{episode.name}</h2>
          <p>
            {episode.dateUploaded}, {episode.length}
          </p>
        </div>
      </section>
      );
    } return (
      <section className="card-container">
        <img src={episode.imgUrl} />
        <div className="card-text">
          <h2>{episode.name}</h2>
          <p>
            {episode.dateUploaded}, {episode.length}
          </p>
        </div>
      </section>
    );
  };

  return <RenderCards />;
};

export default EpisodeCard;
