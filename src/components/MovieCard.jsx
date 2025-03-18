export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card mt-8">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <div className="content">
        <div className="rating">
          <img src="star.svg" alt="star" />
          <p>{movie.vote_average}</p>
        </div>
        <span>{movie.release_date.slice(0, 4)}</span>
        <span className="lang">{movie.original_language.toUpperCase()}</span>
      </div>
    </div>
  );
};
