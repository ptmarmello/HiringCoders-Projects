import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={['' , '/']} component={Home}/>
                <Route path="/signin" component={Signin} />
            </Switch>
        </BrowserRouter>
    )
}