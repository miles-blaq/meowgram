import React, { Component } from 'react'

export class SearchBox extends Component {
    render() {
        const{onSearchChange} = this.props
        return (
            <div className="pa1">
                <input className="pa2 ba b--green bg-lightest-blue" type="text" placeholder="Search"
                onChange={onSearchChange}/>
            </div>
        )
    }
}

export default SearchBox
