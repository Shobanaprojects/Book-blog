import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import About from "./component/About";
import BlogContent from "./component/BlogContent";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog/:id" element={<BlogContent/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}
export default App;