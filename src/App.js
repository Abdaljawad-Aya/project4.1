
import MyNavbar from './component/navbar'
import LandingPage from './component/Landing page/landingPage'
import RegisterForm from './component/RegisterLogin page/RegisterLogin'
import LogIn from './component/RegisterLogin page/Login'
import AppOne from './component/Profile page/AppOne'
import Form from './component/Booking page/Form'
// import ServicPage from './component/Services page/servicePage'
import Footer from './component/footer'
import Cards from './component/Cards'
import {BrowserRouter,Route ,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
<MyNavbar/>
<Switch>
<Route  path="/" exact component={LandingPage} />
 <Route  path="/RegisterForm"  component={RegisterForm} />
 <Route  path="/LogIn"  component={LogIn} />
 {/* <Route  path="/servicePage"  component={ServicPage} /> */}
 <Route  path="/servicePage"  component={Form} />
 <Route  path="/AppOne"  component={AppOne} />
 {/* <Route  path="/"  component={} /> */}
 

 </Switch>
 <Cards/>
<Footer/>

    </div>
</BrowserRouter>
  );
}

export default App;
