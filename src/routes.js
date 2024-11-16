import Pishkhan from "./Pishkhan/Pishkhan";
import Form from "./Form/Form";
import Element from "./Element/Element";
import Table from "./Table/Table";
import Chart from "./Chart/Chart";
import Page from "./Page/Page";
import Takhfif from "./Takhfif/Takhfif";


const routes=[



    {path:"/main",element:<Pishkhan/>},
    {path:"/edit-password",element:<Form/>},
    {path:"/products",element:<Element/>},
    {path:"/chat",element:<Table/>},
    {path:"/edit-profile",element:<Chart/>},
    {path:"/users",element:<Page/>},
    {path:"/takhfif",element:<Takhfif/>},
    // {path:"/login",element:<Login/>},
    
];
export default routes;