import logo from './logo.svg';

import HomePage from './pages/HomePage'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar  from './NavBar'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar/>
      <div id="page-body">
      <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} exact/>
            <Route path="/articles-list" component={ArticlesListPage} exact/>
            <Route path="/article/:name" component={ArticlePage} exact/>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
