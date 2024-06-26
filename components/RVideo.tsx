import Fav from "../islands/Fav.tsx";
import { Video } from "../types.ts";
import { FunctionComponent } from "preact";

type Props = {
  video: Video;
  userid: string;
};

const RVideo: FunctionComponent<Props> = ({ video, userid }) => {
  return (
    <div class="video-detail-container">
      <a href="/videos" class="back-button">← Go Back to List</a>

      <div class="video-frame">
        <iframe
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/${video.youtubeid}`}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      </div>
      <h2 class="video-detail-title">{video.title}</h2>
      <p class="video-detail-description">{video.description}</p>
      <Fav userid={userid} id={video.id} fav={video.fav}></Fav>
    </div>
  );
};
export default RVideo;
