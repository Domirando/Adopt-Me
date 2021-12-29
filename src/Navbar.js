import { useState } from "react";

let Navbar = () => {
    let [search, setSearch] = useState('Home')
    let nav = ['about me', 'home', 'projects', 'social network', 'contact with me', 'blog', 'search']
    let [follow, following] = useState('Visitor')
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                {nav.map((item) => (
                    <li key={item} className='nav-item'>{item}</li>
                ))}
                <input onChange={e => setSearch(e.target.value)} value={search}  placeholder='Search...' />
                <button>Search</button>
            </ul>
            <p>{follow}</p>
            <button onClick={e => following('following')}>Follow</button>
        </nav>
    )
}

export default Navbar;


// const data = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num !== 'number' && isNaN(num)){
//             setTimeout(() => {
//                 let err = 'error'
//                 reject(err);
//             }, 0)
//         }else { if(num % 2 !== 0){
//             setTimeout(() => {
//                 let result = 'odd'
//                 resolve(result)
//             }, 1000)
//         } else {
//             return console.log("return test")
//         } }
//     })
// }
// data('3').then((res)=>console.log(res)).catch((res)=>console.log(res))