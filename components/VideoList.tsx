import { Video } from "../types.ts";
import { FunctionComponent } from "preact";
import Header from "./Headers.tsx";
import Fav from "../islands/FAv.tsx";

type Props = {
  videos: Video[];
  userid: string;
  username: string;
};

const VideoList: FunctionComponent<Props> = ({ videos, userid, username }) => {
  return (
    <div>
      <Header username={username} />
      <div class="video-page-container">
        <h1 class="video-list-title">Curso Deno Fresh</h1>
        <div class="video-list-container">
          {videos.map((video) => (
            <div key={video.id} class="video-item">
              <a href={`/video/${video.id}`} class="video-link">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  class="video-thumbnail"
                >
                </img>

                <div class="video-info">
                  <h3 class="video-title">{video.title}</h3>
                  <p class="video-description">{video.description}</p>
                  <p class="video-release-date">
                    Release date: {new Date(video.date).toLocaleDateString()}
                  </p>
                </div>
              </a>
              <Fav id={video.id} userid={userid} fav={video.fav}></Fav>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default VideoList;
