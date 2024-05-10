import React from 'react'
import { FacebookLogo, InstagramLogo} from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-red-700 text-amber-400">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Farmácia React | Copyright: Giovanna Tocuti </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer