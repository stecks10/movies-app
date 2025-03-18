export const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? "https://image.tmdb.org/t/p/w500" + poster_path
            : "/no-movie.png"
        }
        alt=""
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="contet">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "0.1"}</p>
            <span className="text-white">•</span>
            <p className="lang uppercase">{original_language}</p>
            <span className="text-white">•</span>
            <p className="date">
              {release_date ? release_date.split("-")[0] : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
