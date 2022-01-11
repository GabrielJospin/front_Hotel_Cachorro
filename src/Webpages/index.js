import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home';
import Header from '../components/header.js'
import ListarAnimal from "./listarAnimal";
import NovoAnimal from "./NovoAnimal";
import ListarDono from "./listarDono";
import NovoDono from "./NovoDono";
import ListarMedicamento from "./listarMedicamento";
import NovoMedicamento from "./NovoMedicamento";
import ListarDieta from "./listarDieta";
import NovoDieta from "./NovoDieta";

const Webpages = () => {
    return(
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component= {Home} />
                    <Route path = "/animal" component = {ListarAnimal} />
                    <Route path = "/NovoAnimal" component = {NovoAnimal} />
                    <Route path = "/dono" component = {ListarDono} />
                    <Route path = "/novoDono" component = {NovoDono}/>
                    <Route path = "/medicamento" component = {ListarMedicamento} />
                    <Route path = "/novoMedicamento" component = {NovoMedicamento}/>
                    <Route path = "/dieta" component = {ListarDieta} />
                    <Route path = "/novoDieta" component = {NovoDieta}/>
                </Switch>
            </Router>
        </div>
    );
};
export default Webpages;