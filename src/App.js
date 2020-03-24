import React , {Component} from 'react';
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
      console.log('ax running')
        axios({
          "method":"GET",
          "url":"https://iata-and-icao-codes.p.rapidapi.com/airlines",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"iata-and-icao-codes.p.rapidapi.com",
          "x-rapidapi-key":"de69d9e857msh910fd87746308cep152c4cjsn3d824c08d821"
          }
          })
          .then((response)=>{
            console.log(response.data)
            this.setState({ 
              data: response.data
            });
          })
          .catch((error)=>{
            console.log(error)
          })
  }
  
  render() {
    const all  = this.state.data.map(data => {
    return (
    <li className="list-group-item">
        <div>{data.iata_code}</div>
        <div>{data.name}</div>
        <div>{data.icao_code}</div>
    </li>
    )
    })
    return(
      <div className="container">
        <h1>IATA and ICAO Codes</h1>
         <ul className="list-group">
          <li className="list-group-item">
            <h3>iata_code</h3>
            <h3>Name</h3>
            <h3>icao_code</h3>
          </li>
           {all}
         </ul>
      </div>
      )
  }
}
export default App;
