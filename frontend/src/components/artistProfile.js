import { useParams, Navigate } from "react-router-dom";

import artistProfileImg1 from "../img/artistProfileImg1.png";
import artistProfileImg2 from "../img/artistProfileImg2.png";
import artistProfileImg3 from "../img/artistProfileImg3.png";
import artistProfileImg4 from "../img/artistProfileImg4.png";

const artists = {
  1: { artistId: 1, artistName: "Kanye", artistImage: artistProfileImg1 },
  2: { artistId: 2, artistName: "Ed", artistImage: artistProfileImg2 },
  3: { artistId: 3, artistName: "Justin", artistImage: artistProfileImg3 },
  4: { artistId: 4, artistName: "Harry", artistImage: artistProfileImg4 },
};

const validArtistIds = Object.keys(artists).map((id) => parseInt(id, 10));

function ArtistProfile() {
  const { artistId } = useParams();
  const artistIdNumber = parseInt(artistId, 10);

  if (validArtistIds.includes(artistIdNumber)) {
    const artist = artists[artistIdNumber];
    const artistImage = artist.artistImage;

    return (
      <div className="profile">
        <div className="profileLogo">
          <img src={artistImage} alt={artistImage} />
        </div>
        <div>
          <h2 className="profileInfoName">{artist.artistName}</h2>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/artists" />;
  }
}

export default ArtistProfile;
