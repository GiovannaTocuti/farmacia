import React from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-red-700 text-amber-400 flex justify-center py-4'>
          <div className="container flex justify-around text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia React</div>

            <div className='flex gap-x-16'>
              <Link to='/home' className='hover:bg-amber-50'>Home</Link>
              <Link to='/produtos' className='hover:bg-amber-50'>Produtos</Link>
              <Link to='/categorias' className='hover:bg-amber-50'>Categorias</Link>
              <Link to='/editarCategoria/:id' className='hover:bg-amber-50'>Editar Categoria</Link>
              <Link to='/cadastroCategoria' className='hover:bg-amber-50'>Cadastrar Categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar