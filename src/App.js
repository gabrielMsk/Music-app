import React from "react"
import Nav from "./components/Nav"
import "./styles/App.css"
import SongOverview from "./components/SongOverview"
import About from "./components/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/Footer"

function App() {
	return (
		<Router>
			<div className="body-container">
				<Nav />
				<Switch>
					<Route
						path="/"
						exact
						component={SongOverview}
					/>
					<Route
						path="/about"
						component={About}
					/>
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App