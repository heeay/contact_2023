import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactSource from "./component/ContactSource";
import ContactDetail from "./component/ContactDetail";
import DetailPage from './component/DetailPage';



function App() {

  //const contactList

  return (
    <>
      <h1>연락망</h1>
      <Routes>
        <Route path="/" element={<ContactSource/>}/>
        <Route path="/detailPage" element={<DetailPage/>}/>
        {/* <Route path="/contact" element={<ContactDetail/>}/>  */}
        {/* <Route path="*" element={<h1>잘못된 페이지 요청입니당</h1>}/> */}
      </Routes>
    </>
  );
}

export default App;
