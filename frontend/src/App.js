import React from 'react';
import Product from './components/Product';
import { data } from './data';
import { BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
    return (
    <Router>  
        <div className="grid-container">
            <header className="row" >
                <div>
                    <a className="brand" href="/">Ecommerce</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>    
            </header>
            <Route path="/product/:id" component={ProductScreen} ></Route>
            <Route exact path="/" component={HomeScreen} ></Route>
            <main>
                <div className="row center">
                    {
                        data.products.map(product => (
                        <Product key={product._id} product={product} />
                        ))      
                    }  
                </div>
            </main>
            <footer className="row center" >
                All rights reserved
            </footer>
        </div>
    </Router>        
  );
}

export default App;
