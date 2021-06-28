import React, {Suspense, lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './components/routes'
import AppBar from './components/AppBar'
import styles from './styles.module.css'

const HomePage = lazy(()=>import('./views/HomePage.js' /* webpackChunkName: "HomePage" */)) 
const MovieDetailsPage = lazy(()=>import('./components/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */)) 
const MoviesPage = lazy(()=>import('./views/MoviesPage.js' /* webpackChunkName: "MoviesPage" */)) 
const NotFoundPage = lazy(()=>import('./views/NotFoundPage.js' /* webpackChunkName: "NotFoundPage" */)) 


const App = () => (
    <div className={styles.container}>
        <AppBar/>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                <Route exact path={routes.HomePage} component={HomePage} />
                <Route path={routes.MovieDetailsPage} component={MovieDetailsPage}/>
                <Route path={routes.MoviesPage} component={MoviesPage}/>           
                <Route path="" component={NotFoundPage}/>        
            </Switch>
        </Suspense>
    </div>
)
 
export default App;
 


