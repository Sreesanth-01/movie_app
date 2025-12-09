const SelectedMovie = ({movie,onClose}) =>{
    if(!movie){
        return null
    }
    const {title,poster_path,overview,vote_average,original_language,release_date} = movie
    return(
        <div className="selected-backdrop">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>✕</button>

                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'no-movie.png' } alt={title} />
                <div className="model-content">
                    <h2>{title}</h2>
                    <div className="movie-meta">
                        
                        <span>⭐ {movie.vote_average.toFixed(1)}</span>
                         <span>•</span>
                        <p className='lang'>{original_language}</p>
                        <span>•</span>
                        <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                    </div>
                    <p className="overview">{overview}</p>
                </div>

            </div>

        </div>
    )
}
export default SelectedMovie