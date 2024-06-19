

import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import ListContactsComponent from './components/ListContactsComponent'
import AddContactComponent from './components/AddContactComponent';
import EditContactComponent from './components/EditContactComponent';

function App() {
  
  return (
    
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
              {/* http://localhost:3000 */}
              <Route path='/' element={<ListContactsComponent/>}></Route>
              {/* http://localhost:3000/contacts */}
              <Route path='/contacts' element={<ListContactsComponent/>}></Route>
              {/* http://localhost:3000/add-contact */}
              <Route path='/add-contact' element={<AddContactComponent/>}></Route>
              {/* http://localhost:3000/edit-contact */}
              <Route path='/edit-contact/:id' element={<EditContactComponent/>}></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
    
  )
}

export default App
