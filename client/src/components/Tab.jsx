import React,{useState} from 'react'

const Tab = ({ children }) => {
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });
    // const [active, setActive] = useState(true);
    // const handleClick = () => {
    //   setActive(!active);
    // };
    // style={{backgroundColor: active ? "hsl(225,81%,58%)" : "hsl(225,81%,40%)"}} onClick={handleClick}
    function moveHighlight(e) {
      setHighlightStyle({
        left: e.nativeEvent.layerX - 150,
      });
    }
  
    function hideHighlight(e) {
      setHighlightStyle({
        opacity: 0,
        left: e.nativeEvent.layerX - 150,
      });
    }
  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  )
}

export default Tab