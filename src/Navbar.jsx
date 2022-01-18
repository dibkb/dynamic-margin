import "./Navbar.css";
import React, { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const initailStyle = {
    margin: {
      marginTop: 0,
      marginBottom: 0,
      marginRight: 0,
      marginLeft: 0,
    },
    padding: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 0,
      paddingLeft: 0,
    },
  };
  const [selected, setSelected] = useState(false);
  const [style, setStyle] = useState(initailStyle);
  //   const [padding, setPadding] = useState(initailPadding);
  const containerRef = useRef(null);
  const mainRef = useRef(null);
  const containerMarginTopRef = useRef(null);
  const containerMarginRightRef = useRef(null);
  const containerMarginBottomRef = useRef(null);
  const containerMarginLeftRef = useRef(null);
  const selectHandler = () => {
    setSelected((value) => !value);
  };
  useEffect(() => {
    if (selected) {
      containerRef.current.style.border = "3px solid #0A5C97";
    } else {
      containerRef.current.style.border = "3px solid #fff";
    }
  }, [selected]);
  //   console.log(containerRef.current?.getBoundingClientRect().y);
  console.log(mainRef.current?.getBoundingClientRect());
  useEffect(() => {
    if (!selected) {
      containerMarginTopRef.current.style.display = "none";
      containerMarginRightRef.current.style.display = "none";
      containerMarginBottomRef.current.style.display = "none";
      containerMarginLeftRef.current.style.display = "none";
    } else {
      containerMarginTopRef.current.style.display = "flex";
      containerMarginRightRef.current.style.display = "flex";
      containerMarginBottomRef.current.style.display = "flex";
      containerMarginLeftRef.current.style.display = "flex";
      // // top
      containerMarginTopRef.current.style.height = `${style.margin.marginTop}px`;
      containerMarginTopRef.current.style.width = `${
        containerRef.current?.getBoundingClientRect().width
      }px`;
      containerMarginTopRef.current.style.left = `${
        containerRef.current?.getBoundingClientRect().left -
        mainRef.current?.getBoundingClientRect().x
      }px`;
      // right
      containerMarginRightRef.current.style.left = `${
        containerRef.current?.getBoundingClientRect().right -
        mainRef.current?.getBoundingClientRect().x
      }px`;
      containerMarginRightRef.current.style.width = `${style.margin.marginRight}px`;
      containerMarginRightRef.current.style.top = `${
        containerRef.current?.getBoundingClientRect().top -
        mainRef.current?.getBoundingClientRect().y
      }px`;
      containerMarginRightRef.current.style.height = `${
        containerRef.current?.getBoundingClientRect().height
      }px`;
      // bottom
      containerMarginBottomRef.current.style.height = `${style.margin.marginBottom}px`;
      containerMarginBottomRef.current.style.width = `${
        containerRef.current?.getBoundingClientRect().width
      }px`;
      containerMarginBottomRef.current.style.top = `${
        containerRef.current?.getBoundingClientRect().bottom -
        mainRef.current?.getBoundingClientRect().x
      }px`;
      containerMarginBottomRef.current.style.left = `${
        containerRef.current?.getBoundingClientRect().left -
        mainRef.current?.getBoundingClientRect().x
      }px`;
      // left
      containerMarginLeftRef.current.style.width = `${style.margin.marginLeft}px`;
      containerMarginLeftRef.current.style.top = `${
        containerRef.current?.getBoundingClientRect().top -
        mainRef.current?.getBoundingClientRect().y
      }px`;
      containerMarginLeftRef.current.style.height = `${
        containerRef.current?.getBoundingClientRect().height
      }px`;
    }
  }, [selected, style]);
  useEffect(() => {
    if (selected && containerRef.current) {
      //  margin
      // console.log(containerRef.current.style.marginTop);
      containerRef.current.style.marginTop = `${style.margin.marginTop}px`;
      containerRef.current.style.marginBottom = `${style.margin.marginBottom}px`;
      containerRef.current.style.marginRight = `${style.margin.marginRight}px`;
      containerRef.current.style.marginLeft = `${style.margin.marginLeft}px`;
      // padding
      // containerRef.current.style.paddingTop = `${padding.paddingTop}px`;
      // containerRef.current.style.paddingBottom = `${padding.paddingBottom}px`;
      // containerRef.current.style.paddingRight = `${padding.paddingRight}px`;
      // containerRef.current.style.paddingLeft = `${padding.paddingLeft}px`;
    }
  }, [selected, style]);
  return (
    <div className="main-container" ref={mainRef}>
      <div className="container-buffer-top" ref={containerMarginTopRef}>
        Margin Top : {style.margin.marginTop}px
      </div>
      <div className="container-buffer-right" ref={containerMarginRightRef}>
        Margin Right : {style.margin.marginRight}px
      </div>
      <div className="container-buffer-bottom" ref={containerMarginBottomRef}>
        Margin Bottom : {style.margin.marginBottom}px
      </div>
      <div className="container-buffer-left" ref={containerMarginLeftRef}>
        Margin Left: {style.margin.marginLeft}px
      </div>
      <div
        className="container item-one"
        ref={containerRef}
        onClick={selectHandler}
      >
        <div className="logo">
          <img
            src="https://cdn.wallpapersafari.com/53/85/upiEBU.jpg"
            alt="logo"
          />
        </div>
        <ul className="list">
          <li className="list-item">Cyborg</li>
          <li className="list-item">Deathstroke</li>
          <li className="list-item">Doomsday</li>
          <li className="list-item">Green Arrow</li>
          <li className="list-item">lex Luthor</li>
        </ul>
      </div>
      {!selected && <p className="message">Select Container First !!!</p>}
      <div className="input-container ">
        <h3>Change Margin Here</h3>
        <input
          type="number"
          placeholder="margin top"
          onChange={(e) => {
            setStyle((prevState) => ({
              margin: {
                ...prevState.margin,
                marginTop: parseInt(e.target.value),
              },
            }));
          }}
        />
        <input
          type="number"
          placeholder="margin right"
          onChange={(e) => {
            setStyle((prevState) => ({
              margin: {
                ...prevState.margin,
                marginRight: parseInt(e.target.value),
              },
            }));
          }}
        />
        <input
          type="number"
          placeholder="margin bottom"
          onChange={(e) => {
            setStyle((prevState) => ({
              margin: {
                ...prevState.margin,
                marginBottom: parseInt(e.target.value),
              },
            }));
          }}
        />
        <input
          type="number"
          placeholder="margin left"
          onChange={(e) => {
            setStyle((prevState) => ({
              margin: {
                ...prevState.margin,
                marginLeft: parseInt(e.target.value),
              },
            }));
          }}
        />
      </div>
    </div>
  );
};

export default React.memo(Navbar);
