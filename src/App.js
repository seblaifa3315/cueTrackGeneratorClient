import React from 'react';
import './App.css';

//Importing Router stuff
import { BrowserRouter } from 'react-router-dom';

//Importing Components
import Main from './Components/Main';

//importing react-redux stuff
import { ConfigureStore } from './redux/configureStore';
import{ Provider } from 'react-redux';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
