import React from 'react'
import useClima from '../hooks/UseClima'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './Loading'
useClima


const AppClima = () => {

    const { resultado, cargando, noResultado } = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />
            {cargando ? <Loading /> : resultado?.name ? <Resultado/> :
            noResultado ? <p>{noResultado}</p> : <p></p>}
        </main>
    </>
  )
}

export default AppClima