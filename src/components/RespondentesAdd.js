import React, { Component } from 'react'
import SkyLight from 'react-skylight'
import Button from '@material-ui/core/es/Button/Button'
import TextField from '@material-ui/core/es/TextField'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const sexo = [
  {
    value: '1',
    label: 'Masculino',
  },
  {
    value: '2',
    label: 'Feminino',
  },
  {
    value: '3',
    label: 'Não Informar',
  }
];

const faixaEtaria = [
  {
    value: 1,
    label: 'menos de 20 anos',
  },
  {
    value: 2,
    label: '21 a 30 anos',
  },
  {
    value: 3,
    label: '31 a 40 anos',
  },
  {
    value: 4,
    label: '41 a 50 anos',
  },
  {
    value: 5,
    label: '51 a 60 anos'
  },
  {
    value: 6,
    label: '61 a 70 anos '
  },
  {
    value: 7,
    label: 'mais de 70 anos'
  }
];

class RespondentesAdd extends Component{


  constructor(props) {
    super(props)
    this.state = {

      cod: '',
      nomeFonte: '',
      cpf: '',
      nome: '',
      email: '',
      telefoneFixo: '',
      telefoneCel: '',
      cep: '',
      estado: '',
      cidade: '',
      municipio: '',
      sexo: 'Masculino',
      dataNascimento: '',
      faixaEtaria: '',
      estadoCivil: '',
      classeSocial: '',
      nivelEducacao: '',
      rendaFamilia: '',
      profissao: '',
      cargo: '',
      moradia: '',
      moradiaLazer: '',
      auxiliarDoLar: '',
      possuiCarro: '',
      raca: ''

    }

  }

  handleChange = (event) => {
    this.setState(
      {[event.target.name] : event.target.value}
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var respondenteNovo = {

      cod: this.state.cod,
      nomeFonte: this.state.nomeFonte,
      cpf: this.state.cpf,
      nome: this.state.nome,
      email: this.state.email,
      telefoneFixo: this.state.telefoneFixo,
      telefoneCel: this.state.telefoneCel,
      cep: this.state.cep,
      estado: this.state.estado,
      cidade: this.state.cidade,
      municipio: this.state.municipio,
      sexo: this.state.sexo,
      dataNascimento: this.state.dataNascimento,
      faixaEtaria: this.state.faixaEtaria,
      estadoCivil: this.state.estadoCivil,
      classeSocial: this.state.classeSocial,
      nivelEducacao: this.state.nivelEducacao,
      rendaFamilia: this.state.rendaFamilia,
      profissao: this.state.profissao,
      cargo: this.state.cargo,
      moradia: this.state.moradia,
      moradiaLazer: this.state.moradiaLazer,
      auxiliarDoLar: this.state.auxiliarDoLar,
      possuiCarro: this.state.possuiCarro,
      raca: this.state.raca


    };
    console.log(respondenteNovo);
    this.props.RespondentesAdd(respondenteNovo);
    this.refs.addDialog.hide();

  }



  render() {

    var myModal = {
      // backgroundColor: '#d4e0e0',
      // color: '#ffffff',
      width: '70%',
      height: '650px',
      marginTop: '-300px',
      marginLeft: '-35%',
    };

    const container = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    };

    return(
      <div style={container}>

        <SkyLight
          dialogStyles={myModal}
          hideOnOverlayClicked
          ref='addDialog' >

          <h3 style={{ alignItems : 'center' }}>Novo Respondente</h3>
          <form>
            <label>Dados Pessoais</label>
            <br/>
            <TextField
              label='cod'
              placeholder='Cod. Usuário'
              name='cod'
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : 20 }}
            />

            <TextField
              label='fonte'
              placeholder='Fonte Pesquisa'
              name='nomeFonte'
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : 20 }}
            />

            <TextField
              label='cpf'
              placeholder='CPF'
              name='cpf'
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : 20 }}
            />

            <TextField
              id="standard-select-currency"
              select
              label="Sexo"

              // className={classes.textField}
              value={this.state.sexo}
              onChange={this.handleChange}


              // onChange={this.handleChange('sexo')}
              // SelectProps={{
              //   MenuProps: {
              //     // className: classes.menu,
              //   },
              // }}
              // onChange={this.handleChange('sexo')}
              helperText="Informe um valor para o sexo"
              style={{ marginRight : '20px'}}
              margin="normal"

            >
              {sexo.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}

            />
            </TextField>
            <br/>

            {/* Row */}
            <TextField
              id='nome'
              label='nome'
              placeholder='Nome Respondente'
              name="nome"
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : 20 }}
              // fullWidth
            />


            {/* Row */}
            <TextField
              id='email'
              label='email'
              placeholder='E-mail'
              type='email'
              name='email'
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : 20 }}
            />


            <TextField
              id='fone'
              label='fone'
              placeholder='Fone'
              name='telefoneFixo'
              type="number"
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : 20 }}
            />

            <TextField
              label="Cel"
              placeholder="Cel"
              name="telefoneCel"
              // type="number"
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : 20 }}
            />

            {/* Row */}

            <br/>

            <label>Endereço</label>
            <br/>

            <TextField
              label="cep"
              placeholder="Cep"
              name="cep"
              // type="number"
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : 20 }}
            />

            <TextField
              label="estado"
              placeholder="Estado"
              name="estado"
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : '20px'}}
            />

            <TextField
              label="cidade"
              placeholder="Citado"
              name="cidade"
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : '20px'}}
            />

            <TextField
              label="municipio"
              placeholder="Municipio"
              name="municipio"
              onChange={this.handleChange}
              margin='normal'
              style={{ marginRight : '20px'}}
            />


            <TextField
              id="data"
              label="dataNascimento"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              // className={classes.textField}
              style={{ marginRight : '20px'}}
              margin="normal"
              onChange={this.handleChange}/>

            <TextField
              id='faixaEtaria'
              label='Faixa Etária'
              select
              // defaultValue="2017-05-24T10:30"
              // className={classes.textField}
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText="Informe um valor para o sexo"
              onChange={this.handleChange}

            >
              {faixaEtaria.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}

              />

            </TextField>


            <TextField
              id="tel"
              label="Estado Civil"
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText="Informe um estado Civil"
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id="classeSocial"
              label='Social'
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText='Qualificação Social'
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id="educacao"
              label="Nível Educacional"
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText="Informe o graú de escolaridade."
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id='renda'
              label='Renda'
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText='Informe uma Renda.'
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id='profissao'
              label='Profissão'
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText='Informe uma Profissão'
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id='cargo'
              label='Trabalho'
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText='Informe o Cargo.'
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id='moradia'
              label='Casa Propria'
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText='Possui Moradia Propria.'
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id='moradaLazer'
              label='Moradia Lazer'
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText='Possui uma moradia pra lazer'
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id="ajudanteDolar"
              label="Ajudante"
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText='Possui uma ajudante no lar.'
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id="carro"
              label="Carro"
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText='Possu carro.'
              onChange={this.handleChange}
            >

            </TextField>

            <TextField
              id='etinia'
              label="Etínia"
              select
              style={{ marginRight : '20px'}}
              margin="normal"
              helperText="Informe a etínia."
              onChange={this.handleChange}
            >

            </TextField>

            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleSubmit}
              style={{ margin : '20px'}}
            >
              Salvar
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              onClick={this.cancelSubmit}
              style={{ margin : '35px'}}
            >
              Cancel
            </Button>

          </form>

        </SkyLight>

        <div>

          <Button
            variante='raised'
            color='primary'
            style={
              {
                'margin':'10px',
                'padding' : '10px',
                'backgroundColor' : 'lightblue'
              }
            }

            onClick={() => this.refs.addDialog.show()}>Novo Respondente

          </Button>

        </div>

      </div>
    )
  }
}

export default RespondentesAdd
