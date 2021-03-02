import { useEffect, useRef, useState } from "react";

function useShow() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [content, setContent] = useState();
  const [isShow, setIsShow] = useState(window.innerWidth > 768 ? true : false);
  const style = {
    height,
    overflow: "hidden",
    transition: "height 0.3s ease-in-out",
  };

  function show() {
    setIsShow((prevIsShow) => {
      return !prevIsShow;
    });
  }

  useEffect(() => {
    if (isShow) {
      setHeight(
        ref.current.clientHeight +
          parseInt(getComputedStyle(ref.current).marginBottom)
      );
      return;
    }
    setHeight(0);
  }, [isShow, content]);

  return { ref, style, show, setContent };
}

export default useShow;
