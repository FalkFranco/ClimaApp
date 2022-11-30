import { useState } from 'react'
import useClima from '../hooks/UseClima'


const Formulario = () => {

    const [ alerta, setAlerta ] = useState('')
    const  {busqueda, datosBusqueda, consultarClima} = useClima()

    const {ciudad, pais} = busqueda

    const handleSubmit = e =>{
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta(false)
        consultarClima(busqueda)
    }


  return (
    <div className="contenedor">

        {alerta && <p>{alerta}</p>}
        <form
            onSubmit={handleSubmit}
        >
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    id="ciudad" 
                    name="ciudad" 
                    placeholder="Ciudad"
                    onChange={datosBusqueda}
                    value={ciudad}
                />
            </div>
            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select
                    id="pais"
                    name="pais"
                    onChange={datosBusqueda}
                    value={pais}
                >
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estador Unidos</option>
                    <option value="AR">Argentina</option>
                    <option value="BR">Brasil</option>
                    <option value="CO">Colombia</option>
                    <option value="MX">Mexico</option>
                    <option value="PE">Peru</option>
                    <option value="ES">España</option>
                </select>
            </div>

            <input
                type="submit"
                value='Consultar Clima'
            ></input>
        </form>
    </div>
  )
}

export default Formulario