import { Component } from "react";
import "../SearchMultimedia/map.css"

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_search: "",
      name_movie: []
    };
  }

  getData = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '18cea3435amsh9070ecc5a32cbabp197864jsn76a19fa4dfbe',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    let respuesta = await fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${this.state.name_search}`, options)
    let data = await respuesta.json()
    console.log (data)
    this.setState({ name_movie: data.results})
  };


  handleName = (evento) => {
    this.setState({
      name_search: evento.target.value
    })
  }

  handleSubmit = (evento) => {
    evento.preventDefault();
    this.getData();
  };


  render() {

    let data = this.state.name_movie.map(valor=>{
      return( 
        <div className="map-style" key={valor.id}>
        <div className="cards" key={JSON.stringify(valor["id"])}>
        <p>{valor.titleText.text}</p>
        <p>{console.log(valor.results)}</p>
        <p>{valor.titleType.text}</p>
        </div>
      </div>
      )
    })

    return (
      <>
        <div className="card">
          <div className="card-header text-black">Search for your movie or TV series</div>

          <div className="card-body">
            <form>
              <label className="text-black">Enter the title</label>
              <br />
              <input
                type="text"
                placeholder="Nombre multimedia"
                onChange={this.handleName} className="input-multi" />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.handleSubmit}>
                Buscar
              </button>
            </form>
          </div>
        </div>
        <div className="cont-results">
        {data}
        </div>
        
      </>

    );
  }
}
