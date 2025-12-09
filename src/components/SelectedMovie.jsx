const SelectedMovie = ({movie,onClose}) =>{
    if(!movie){
        return null
    }
    const {title,poster_path,overview} = movie
    return(
        <div className="selected-card">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>✕</button>

                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'no-movie.png' } alt={title} />
                <h2>{title}</h2>
                <p className="overview">{overview}</p>

            </div>

        </div>
    )
}
export default SelectedMovie