import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function getUser(imdbID) {
  return fetch(`https://www.omdbapi.com/?&apikey=722a3818&s=ted/movies/` + imdbID)
  .then((res) => res.json());
}

function Details() {
  const [data, setData] = useState({});
  const param = useParams();
  useEffect(() => {
    getUser(param.imdbID).then((res) => {
      setData(res.data);
    });
  }, [param.imdbID]);
  console.log(data);
  return (
    <div>
      <h1>movies ID: {param.imdbID}</h1>
      <p>{param.Title}</p>
      {/* {data && (
        <>
          <img src={data.Poster} width="100px" alt={data.Poster} />
          <h3>Name:{`${data.Title}`}</h3>
         

          <Link to="/home"> Go BACk</Link>
        </>
      )} */}
       <Link to="/"> Go BACk</Link>
    </div>
  );
}
export default Details;
