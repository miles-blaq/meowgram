import React from 'react';
import "tachyons"
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import "./App.css"
import axios from "axios";
import Scrollable from './Components/Scrollable';


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Cats: [],
       searchFeild:"",
       errMsg:""
    }
  }

componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      this.setState({Cats: response.data})
    })
    .catch(error => {
      this.setState({errMsg:"Something went wrong"})
      console.log(error)
    })
  }

  onSearchChange = (e)=>{
    this.setState({
      searchFeild: e.target.value
    })
  }
  
  render(){
    const {Cats,searchFeild,errMsg} = this.state
    const FilteredCats = Cats.filter(cat=> cat.name.toLocaleLowerCase()
    .includes(searchFeild.toLocaleLowerCase()))

    return (
      <div className="App tc">
        {/* sega logo fonts ( Cufon fonts) */}
        {Cats.length?
          <div>
            <h1 className="custom-color f1">MeowGram</h1> 
            <p style={{color:"#0ccac4"}} className="f2">Welcome to meowGram instagram for cats</p>
            <span className="f4">Don't hit the DM if don't have a delicious mouse</span>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <Scrollable>
              <CardList Cats={FilteredCats}/>
            </Scrollable>
          </div> : null
        }

        {errMsg ? <div>{errMsg}</div> :null}
        
      </div>
    );
  }
}

export default App;
