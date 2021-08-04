import {useState, useEffect} from 'react'
import { lazy, Suspense } from 'react';

import Users from "./Users"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes'
import Main from './pages/Main/Main';

import ShowBookList from "./Books/ShowBookList"
import CreateBook from "./Books/CreateBook"
import UpdateBookInfo from "./Books/UpdateBookInfo"
import ShowBookDetails from "./Books/ShowBookDetails"

const Login = lazy(() =>
    import ('./pages/login'));
const SignUp = lazy(() =>
    import ('./pages/signup')); 

    function App() {

        // fetch('/')
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    
        return ( <Router>
                <Suspense fallback = { < p > Loading... </p>}>  <Switch > 
                    <Route path = { ROUTES.LOGIN }
                    component = { Login }/>  
                    <Route path = { ROUTES.SIGN_UP }
                    component = { SignUp }/>  
                    <Route exact path = '/' 
                    render = { () => < h1 > Home </h1>} />
                        < Route exact path = '/exp'
                        render = {
                            () => < h1 > Exp </h1>}/>
                            <Route exact path = '/'
                            component = { ShowBookList }/> 
                            <Route path = '/create-book'
                            component = { CreateBook }
                            />  
                            <Route path = '/edit-book/:id'
                            component = { UpdateBookInfo }
                            /> 
                            <Route path = '/show-book/:id'
                            component = { ShowBookDetails }
                            />              
                            <Main />
                            </Switch>   
                            </Suspense > 
                            </Router>
                        )
    
                        };
                    export default App;




// function App() {

//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:5000')
//         .then(res => res.json())
//         .then(data => {
//             setUsers(data)
//         })
//     }, [])

//     const usersList = users.map(user => {
//         return <Users
//             name={user.name}
//             url={user.url} 
//         />
//     })

//     return ( <div className = "App" >
// {usersList}

//         </div>
//     );
// }

// export default App;