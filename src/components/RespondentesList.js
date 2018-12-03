import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SERVER_URL } from '../constante'

class RespondentesList extends Component {
    
    constructor(props) {
        super(props)
        this.state = { data: []}
    }

    componentDidMount = () => {
        this.fetchRespondentes();
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
            accessor: 'cdNumeroRegistro'
        },{
            Header: 'Cod Individuo',
            accessor: 'cdIndividuo'
        },{
            Header: 'Fonte',
            accessor: 'cdFkTabFonte'
        },{
            Header: 'CPF',
            accessor: 'cdCpf'
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
            accessor: 'cdFkTabEstado'
        }, {
            Header: 'Cidade',
            accessor: 'cdFkTabCidade'
        }, {
            Header: 'Municipio',
            accessor: 'cdFkTabMunicipio'
        },{
            Header: 'sexo',
            accessor: 'sexo'
        },{
            Header: 'Data de Nascimento',
            accessor: 'dataNascimento'
        },{
            Header: 'Faixa Etária',
            accessor: 'cdFkTabFaixaEtaria'
        },{
            Header: 'Estado Civil',
            accessor: 'cdFkTabEstadoCivil'
        },{
            Header: 'Classe Social',
            accessor: 'classeSocial'
        },{
            Header: 'Nível Educação',
            accessor: 'cdFkTabEducacao'
        },{
            Header: 'Renda Familiar',
            accessor: 'cdFkTabRenda'
        },{
            Header: 'Profissao',
            accessor: 'cdFkTabProfissao'
        },{
            Header: 'Cargo',
            accessor: 'cdFkPosicaoTrabalho'
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
                <ReactTable data={this.state.data} columns={columns} filterable={true}/>
                <ToastContainer autoClose={1500}/>
            </div>
        )
    }
} 

export default RespondentesList
