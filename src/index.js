import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Favicon from 'react-favicon';
import InitPage from './containers/init-page';
import SelectedNews from './components/selected-news';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { news: [] }
	}

 	render () {
 		return (
 		<BrowserRouter>	
 			<div className="main-man">
 				<Favicon url="http://localhost:8080/favicon.png?v=2" />
 				<Switch>
					<Route path="/:id" component={SelectedNews} /> 
					<Route path="/" component={InitPage} /> 
				</Switch>
 			</div>
 		 </BrowserRouter> 
 	  )
   };
}

const store = createStoreWithMiddleware(reducers, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
	<App />
</Provider>, 
document.querySelector('.container'));