import React, { Component } from 'react';
// import Konva from 'konva';
import { Line } from 'react-konva';

export default class SideLine extends Component{
    state = {
        color: '',
        fixed: false 
    }

    componentWillMount(){
        this.setState({
            color: this.props.color
        })
    }

    handleMouseOver = () => {
        if (!this.state.fixed)  
            return this.setState({
                color: 'blue'
            })
    }

    handleMouseOut = () => {
        if (!this.state.fixed)  
            return this.setState({
                color: this.props.color
            })  
    }

    handleClick = (el) => {
        // console.log(el.currentTarget.attrs.points)
        if (!this.state.fixed){
            this.setState ({color: this.props.playerMove ? '#009900' : '#990099', fixed: true})
            this.props.onClick(el.currentTarget.attrs.points)
        }
    }

    render(){   
        const { x0, y0, x1, y1} = this.props
        // console.log(index)
        return(
            <Line
                // key = {index}
                points ={[x0, y0, x1, y1]}
                stroke = {this.state.color}
                strokeWidth ={12}
                onMouseOver = {this.handleMouseOver}
                onMouseOut = {this.handleMouseOut}
                onClick = {this.handleClick}
                
            /> 
        )
    }
}