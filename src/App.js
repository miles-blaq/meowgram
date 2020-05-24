import React from 'react';
import "tachyons"
import {connect} from "react-redux";
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import "./App.css"
import Scrollable from './Components/Scrollable';


import { setSearchField, requestCats } from './actions';

const mapStateToProps = (state)=>{
    return {
      searchField: state.searchCats.searchField,
      isPending: state.getCats.isPending,
      cats: state.getCats.cats,
      errMsg: state.getCats.errMsg
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
    onRequestCats : () => dispatch(requestCats())
})

class App extends React.Component {

componentDidMount(){
    this.props.onRequestCats()
  }


  
  render(){
    const {searchField,onSearchChange,cats,errMsg} = this.props;
    const FilteredCats = cats.filter(cat=> cat.name.toLocaleLowerCase()
    .includes(searchField.toLocaleLowerCase()))

    return (
      <div className="App tc">
        {/* sega logo fonts ( Cufon fonts) */}
        {cats.length?
          <div>
            <h1 className="custom-color f1">MeowGram</h1> 
            <p style={{color:"#0ccac4"}} className="f2">Welcome to meowGram: instagram for cats</p>
            <span className="f4">Don't hit the DM if don't have a delicious mouse</span>
            <SearchBox onSearchChange={onSearchChange}/>
            <Scrollable>
              <CardList Cats={FilteredCats }/>
            </Scrollable>
          </div> : null
        }

        {errMsg ? <div>{errMsg}</div> :null}
        
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
