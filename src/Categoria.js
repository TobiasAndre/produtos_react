import React,{ Component } from 'react'
import axios from 'axios'

class Categoria extends Component {
    
    constructor(props){
        super(props)
        console.log('constructor')
        this.state ={
            produtos:[]
        }
    }
    componentDidMount(){
        console.log('did mount')
        const id = this.props.match.parms.catId;

        axios
        .get('http://localhost:3001/produtos?categoria='+id)
        .then(res => {
            this.setState({
                produtos: res.data
            })
        })

    }
    componentWillReceiveProps(newProps){
        console.log(newProps.match.params.catId)
    }
    render(){
        return (
            <div>
                <h1>Categoria {this.props.match.params.catId}</h1>
                <p>{JSON.stringify(this.state.produtos)}</p>
            </div>            
        )
    }
}
export default Categoria