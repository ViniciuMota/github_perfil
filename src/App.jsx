import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import RepoList from './components/RepoList'
import { useState } from 'react'

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <RepoList nomeUsuario={nomeUsuario}/>
        </>
      )}
      {/* <Formulario/> */}
    </>
  )
}

export default App
