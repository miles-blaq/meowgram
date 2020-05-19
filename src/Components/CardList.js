import React, { Component } from 'react'
import Card from './Card'


class CardList extends Component {
    render() {
        const {Cats} = this.props
        const catList = Cats.map(cat=> <Card key={cat.id} cat={cat}/>)
        return (
            <div>
               {catList}
            </div>
        )
    }
    // />  id={robot.id} name={robot.name} email={robot.email}/>
}

export default CardList
