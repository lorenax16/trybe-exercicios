import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
// Leia as tarefas de dentro de um Array.
const tarefas = ['comer','trabalhar','tomar banho','comprar','amar'];
// Utilize a função Task dentro do componente App .
class App extends React.Component {
  render() {
    return (
      // Use a função map para criar cada item da lista no HTML.
      <ul>{ tarefas.map(tarefas => Task(tarefas)) }</ul>
    );
  }
}
export default App;
