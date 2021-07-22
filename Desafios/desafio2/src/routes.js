import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Bagpage from './pages/Bagpage'
import Home from './pages/Home'
import Signup from './pages/Signup'


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/mybag"  component={Bagpage}/>
            </Switch>
        </BrowserRouter>
    )
}