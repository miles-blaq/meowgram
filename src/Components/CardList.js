import React, { Component } from 'react'
import Card from './Card'


class CardList extends Component {
    render() {
        const {Robots} = this.props
        const roboList = Robots.map(robot=> <Card key={robot.id} robot={robot}/>)
        return (
            <div>
               {roboList}
            </div>
        )
    }
    // />  id={robot.id} name={robot.name} email={robot.email}/>
}

export default CardList
