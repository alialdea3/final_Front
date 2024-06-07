import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type Props = {
  id: string;
  fav: boolean;
  userid: string;
};

const Fav: FunctionComponent<Props> = ({ userid, id, fav }) => {
  const [favourite, setFavourite] = useState<boolean>(fav);
  const toggleFav = async (userid: string, id: string) => {
    const res = await fetch(
      `https://videoapp-api.deno.dev/fav/${userid}/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
    );
    if (res.status === 200) {
      setFavourite(!favourite);
      console.log("Fav toggled");
    } else {
      console.error("Error toggling fav");
    }
  };
  return (
    <button
      class="fav-button"
      onClick={() => {
        toggleFav(userid, id);
      }}
    >
      {favourite
        ? "\u2764\uFE0F Remove from Favorites"
        : "\u{1F90D} Add to Favorites"}
    </button>
  );
};
export default Fav;
