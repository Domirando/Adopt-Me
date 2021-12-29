import ReactDOM from 'react-dom'
import Navbar from "./Navbar";
// alert(x)
let App = () => {
    return <Navbar />
}
const path_dom = document.querySelector('body');
ReactDOM.render(<App />, path_dom)