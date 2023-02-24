import React, { Component } from 'react';
import './Main.css';
import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1, // Se for -1 significa que estou criando, se for diferente estou editando
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;

    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    const novasTarefas = [...tarefas]; // Copiando estado antigo, estado não pode ser alterado... apenas copiado e atribuido novamente

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa], // Setando tarefas com as tarefas antigas com a nova tarefa
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa; // Setando indice  com a nova tarefa
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;
    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };
  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index: index,
      novaTarefa: tarefas[index],
    });
    console.log('Click ', index);
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
