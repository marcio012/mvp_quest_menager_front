import React, { Component } from 'react';
import './App.css';
// import MuiThemeProvider from '@material-ui/co'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import RespondentesList from './components/RespondentesList'
import RespondenteAdd from './components/RespondentesAdd'
import RespondentesListCompleta from './components/RespondentesListaCompleta'
import Home from './components/Home'

class App extends Component {
  
  render() {

    const menu = {
      width: '100%',
      backgroundColor: '#eeeeee',
      padding: '10px',
      alignItems: 'center',
      textAlign: 'center'
    };

    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Respondentes</h1>
        </header>
        
        <BrowserRouter>
          <div>
            <div style={menu}>
              <Link to="/">Home</Link>{' '} | 
              <Link to="/lista"> Listar</Link>{' '} | 
              <Link to="/listacompleta"> ListarCompleta</Link>{' '} | 
              {/*<Link to="/adicionar"> Adicionar</Link>{' '} | */}
              <Link to="/links"> Links</Link>{' '}
            </div>
            <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/lista" component={RespondentesList} />
              <Route path="/listacompleta" component={RespondentesListCompleta} />
              {/*<Route path="/adicionar" component={RespondenteAdd} />*/}
              <Route path="/links" render={() => <h1>Links</h1>} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
