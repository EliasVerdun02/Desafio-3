//1) Tener  React en scope
//import React from 'react'; //'react': ubicacion de que queremos importar para empezar a usar React(OPCIONAL)

//2) Tener A ReactDOM en scope 

import ReactDOM from 'react-dom';

//3) Tener por lo menos un componente(en nuestra app)
import App from "./Componentes/App"


//4) Mostrar aplicacion en el DOM
ReactDOM.render(<App/>,document.getElementById('root'));
