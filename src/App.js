import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

 async function handleSearch() {
    // 06145096

    if (input === '') {
      alert('Preencha o campo com um CEP')
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput('')

    }catch {
      alert('Erro ao buscar endereço')
      setInput('')
    }

  }

  return (
    <div className='container'>
      <div className='cabecalho'>
        <header>
          <nav>
            <a href="https://www.linkedin.com/in/douglaswelber/" target='_blank'>LINKEDIN</a>
            <a href="https://github.com/doguebart" target='_blank'>GITHUB</a>
          </nav>
        </header>
      </div>

      <h1 className='title'>Welber's Finder</h1>
      <p className='simpleText'>Encontre qualquer endereço apenas com o CEP</p>
      <div className='areaInput'>
        <input type="text" placeholder='Digite o cep'
         value={input} 
         onChange={(e) => setInput(e.target.value)}
         />

        <button className='btnProcurar' onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>


      {Object.keys(cep).length > 1 && (
              <main className='main'>
              <h2>CEP: {cep.cep}</h2>
      
              <span>Logradouro: {cep.logradouro}</span>
              <span>Bairro: {cep.bairro} {cep.complemento}</span>
              <span>{cep.localidade} - {cep.uf}</span>
            </main>
      )}

    </div>
  );
}

export default App;
