import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RespondentesAdd from './RespondentesAdd'
import { CSVLink } from 'react-csv'
import { SERVER_URL } from '../constante'

class RespondentesList extends Component {
    
    constructor(props) {
        super(props)
        this.state = { data: []}
    }

    componentDidMount = () => {
        this.fetchRespondentes();
    }
    // addCar           car
    addRespondentes (representantes) {
        console.log(representantes)
        fetch (SERVER_URL + 'respondentes',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(representantes) //car
        })                              // fetchCars
        .then(response => this.fetchRespondentes())
        .catch(err => console.error(err))
    }


    fetchRespondentes = () => {
        fetch(SERVER_URL + 'respondentes')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    data: responseData.data,
                })

            })
            .catch(err => console.log(err))
    }

    onDeleteClick = (id) => {
        fetch(SERVER_URL + 'respondentes/' + id, {method: 'DELETE'})
            .then(response => {
                toast.success("Respondente deletado", { position: toast.POSITION.BOTTOM_LEFT})
                this.fetchRespondentes()
            })
            .catch(err => console.error(err))
    }

    confirmDelete = (id) => {
        confirmAlert({
            message: "Você tem certeza que deseja deletar o respondente?",
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => this.onDeleteClick(id)
                },
                {
                    label: 'Não',
                }
            ]
        })
    }

    render () {
        const columns =[{
            Header: 'Nº de Registro',
            accessor: 'id'
        },{
            Header: 'Cod Individuo',
            accessor: 'cod'
        },{
            Header: 'Fonte',
            accessor: 'nomeFonte'
        },{
            Header: 'CPF',
            accessor: 'cpf'
        },{
            Header: 'Nome',
            accessor: 'nome'
        },{
            Header: 'Email',
            accessor: 'email'
        },{
            Header: 'Telefone Fixo',
            accessor: 'telefoneFixo'
        },{
            Header: 'Celular',
            accessor: 'telefoneCel'
        },{
            Header: 'Cep',
            accessor: 'cep'
        },{
            Header: 'Estado',
            accessor: 'estado'
        }, {
            Header: 'Cidade',
            accessor: 'cidade'
        }, {
            Header: 'Municipio',
            accessor: 'municipio'
        },{
            Header: 'sexo',
            accessor: 'sexo'
        },{
            Header: 'Data de Nascimento',
            accessor: 'dataNascimento'
        },{
            Header: 'Faixa Etária',
            accessor: 'faixaEtaria'
        },{
            Header: 'Estado Civil',
            accessor: 'estadoCivil'
        },{
            Header: 'Classe Social',
            accessor: 'classeSocial'
        },{
            Header: 'Nível Educação',
            accessor: 'nivelEducacao'
        },{
            Header: 'Renda Familiar',
            accessor: 'rendaFamilia'
        },{
            Header: 'Profissao',
            accessor: 'profissao'
        },{
            Header: 'Cargo',
            accessor: 'cargo'
        },{
            Header: 'Moradia',
            accessor: 'moradia'
        },{
            Header: 'Moradia Descanso',
            accessor: 'moradiaLazer'
        },{
            Header: 'Auxiliar do Lar',
            accessor: 'auxiliarDoLar'
        },{
            Header: 'Carro Proprio',
            accessor: 'possuiCarro'
        },{
            Header: 'Etinía',
            accessor: 'raca'
        },{
            id: 'delbutton',
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'cdNumeroRegistro',
            Cell: ({value}) => (<button onClick={() => {this.confirmDelete(value)}}>Delete</button>)
        }]

        return (
            <div className="App">
              <CSVLink

                data={this.state.data}
                separator=';'
                style={
                  {
                    margin: '10 auto',
                    display: 'flex' ,
                    flexDirection: 'column',
                    alignItems: 'center'
                  }
                }
              >Exporte CSV</CSVLink>

                {/*<Res addCar={this.addCar} fetchCars={this.fetchCars}*/}
                <RespondentesAdd addRespondentes={this.addRespondentes} fetchRespondente={this.fetchRespondentes}
                    style={{ margin: 'auto' }}
                />
                <ReactTable data={this.state.data} columns={columns} filterable={true} pageSize={10}/>
                <ToastContainer autoClose={1500}/>
            </div>
        )
    }
} 

export default RespondentesList
