import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import NavBar from './NavBar'

function ArtistView() {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);
  
// ID# for http://localhost:3000/artist/(.....) 657515
  useEffect(() => {
    const API_URL = `http://localhost:4000/album/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      setArtistData(resData.results);
      // console.log(resData)
    };
    fetchData();
  }, [id]);

  const justAlbums = artistData.filter(
   (entry) => entry.collectionType === "Album"
 );
  const renderAlbums = justAlbums.map((album, i) => {
    return (
      <div key={i}>
         <Link to={`/album/${album.collectionId}`}>
            <p>{album.collectionName}</p>
         </Link>
      </div>
    );
  });

  return (
    <div>
      <NavBar />
      <h2>The id passed was: {id}</h2>
      {renderAlbums}
    </div>
  );
}

export default ArtistView;