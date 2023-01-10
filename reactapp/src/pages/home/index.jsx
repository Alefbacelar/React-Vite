import './style.css'
import {Card} from '../../components/Card';

export function Home() {  
  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
      <Card name="Bernardo" time="10:55:22"/>
      <Card name="Mariana" time="04:20:00"/>           
      <Card name="Alef" time="12:20:00"/>           
    </div>
  )
}

