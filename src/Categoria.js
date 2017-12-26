import React,{ Component } from 'react'

class Categoria extends Component {
    
    constructor(props){
        super(props)
        this.loadData = this.loadData.bind(this)
        this.state ={
            produtos:[],
            categoria:{},
            id:null
        }
    }
    loadData(id){
        this.setState({ id })
        this.props.loadProdutos(id)
        this.props.loadCategoria(id)
    }
    renderProduto(produto){
        return (
            <p className='well' key={produto.id}>{produto.produto}</p>
        )
    }
    componentDidMount(){
        const id = this.props.match.params.catId;
        this.loadData(id);
    }
    componentWillReceiveProps(newProps){
        if(newProps.match.params.catId !== this.state.id){
            this.loadData(newProps.match.params.catId)
        }
    }
    render(){
        return (
            <div>
                <h1>{this.props.categoria.categoria}</h1>
                <p>{this.props.produtos.map(this.renderProduto)}</p>
            </div>            
        )
    }
}
export default Categoria