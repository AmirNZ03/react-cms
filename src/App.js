import logo from './logo.svg';
import './App.css';
import './input.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import DeleteModal from './Element/DeleteModal';
import "./cms.css";

// import "@mui/icons-material";
// import "tailwindcss";

function App() {
 const router=useRoutes(routes)
  return (
    <>
    <Header/>
    
    <div>
    <Navbar />

<Main/>
{router}
{/* <DeleteModal/> */}
</div>
    </>
    
  );
}

export default App;
