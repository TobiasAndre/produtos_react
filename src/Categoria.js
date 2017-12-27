import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

class Categoria extends Component {
    
    constructor(props){
        super(props)
        this.loadData = this.loadData.bind(this)
        this.state ={
            produtos:[],
            categoria:{},
            id:null
        }
        this.renderProduto = this.renderProduto.bind(this)
    }
    loadData(id){
        this.setState({ id })
        this.props.loadProdutos(id)
        this.props.loadCategoria(id)
    }
    renderProduto(produto){
        return (
            <p className='well' key={produto.id}>
            {produto.produto}
            <button onClick={()=> {
                this.props.removeProduto(produto)
                    .then(res=> this.loadData(this.props.match.params.catId))
            }}>Excluir</button>
            <Link to={'/produtos/editar/'+produto.id}>Editar</Link>
            </p>
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
                {/*<h1>{this.props.categoria.categoria}</h1>*/}
                {this.props.produtos.length ===0 &&
                    <p className='alert alert-danger'>Nenhum Produto.</p>
                }
                <p>{this.props.produtos.map(this.renderProduto)}</p>
            </div>            
        )
    }
}
export default Categoria