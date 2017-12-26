import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

const apis = {
    loadCategorias: ()=> api.get('categorias'),
    deleteCategoria :(id)=> api.delete('categorias/'+id),
    createCategoria :(categoria)=> api.post('categorias',categoria),
    editCategoria: (categoria)=> api.put('categorias/'+categoria.id,categoria),
    
    createProduto :(produto)=> api.post('produtos',produto),
    loadProdutos:(categoria)=> api.get('produtos?categoria='+categoria),
    readCategoria:(id) => api.get('categorias/'+id)
}

export default apis