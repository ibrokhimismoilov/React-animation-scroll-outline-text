import img from "./react.jpg";
import "./app.scss";
import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollYPos, setScrollYPos] = useState(window.pageYOffset);

  const onScroll = () => {
    setScrollYPos(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.RemoveEventListener("scroll", onScroll);
    }
  }, [])

  return scrollYPos
}


const App = () => {
  const scrollPos = useScrollPosition();

  const imgStyle = {
    transform: `translate3d(-50%, calc(-${scrollPos * .5}px - 50%), 0)`,
    // filter: `hue-rotate(${scrollPos * 1}deg)`
  }

  const heading1 = {
    transform: `translate3d(-${scrollPos / 2}px, -${scrollPos * 0.5}px, 0px)`
  }

  const heading2 = {
    transform: `translate3d(${scrollPos / 2}px, -${scrollPos * 0.5}px, 0px)`
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="text-parent">
          <h1 style={heading1}>
            HTML CSS JAVASCRIPT BOOTSTRAP SASS LESS STYLUS JQUERY REACT REDUX
          </h1>
          <h1 style={heading2}>
            Frontend Developer Frontend Developer Frontend Developer Frontend Developer
          </h1>
        </div>
        <img src={img} alt="" style={imgStyle} />
        <div className="text-parent">
          <h1 className="outline" style={heading1}>
            HTML CSS JAVASCRIPT BOOTSTRAP SASS LESS STYLUS JQUERY REACT REDUX
          </h1>
          <h1 className="outline" style={heading2}>
            Frontend Developer Frontend Developer Frontend Developer Frontend Developer
          </h1>
        </div>
      </div>
      <div className="section"></div>
    </>
  );
}
export default App;