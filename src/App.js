import { Route, Switch } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import ResumeScreen from "./screens/ResumeScreen"
import AboutScreen from "./screens/AboutScreen"
import ProjectScreens from "./screens/ProjectScreens"
import { useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import "./styles/app.scss"
import ContactScreen from "./screens/ContactScreen"

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/resume" component={ResumeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/contact" component={ContactScreen} />
          <Route exact path="/projects" component={ProjectScreens} />
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
