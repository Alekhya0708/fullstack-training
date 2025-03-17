const ParentComponent1=()=>{
  const moviesList=["Avathar","Hello","World","Lucky","Lost"]
  return(
    <div className="container">
        <h2>ParentComponent</h2>
        <ChildComponent1 moviesList={moviesList} />
    </div>

  )
}
const ChildComponent1=({moviesList})=>{
    return (
        moviesList.map((movies)=><h2>{movies}</h2>)
    )
}

export default ParentComponent1;