import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

function EpisodeDetails({ episode }) {
  return (
    <section>
      <h2>Episode Details</h2>

      {episode ? (
        <div>
          <h3>Episode {episode.id}: {episode.title}</h3>
          <p>{episode.description}</p>
        </div>
      ) : (
        <p>Select an episode to see its details.</p>
      )}
    </section>
  );
}

function EpisodeList({ episodes, onSelectEpisode }) {
  return (
    <EpisodeList
      episodes={episodes}
      onSelectedEpisode={setSelectedEpisode}
    />
  );
}

export default function App() {
  const [episodes, setEpisodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  console.log("Selected Episode:", selectedEpisode);

  return (
    <div>
      <h1>Dark Echoes</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <button onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </button>
          </li>
        ))}
      </ul>

      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
