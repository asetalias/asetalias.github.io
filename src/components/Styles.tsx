import { useEffect, useRef } from "react";
import { getStyles, setStylesTarget } from "typestyle";

const Styles = () => {
  const ref = useRef<HTMLStyleElement>();
  useEffect(() => {
    setStylesTarget(ref.current);
  },[]);

  return <style>{getStyles()}</style>;
};

export default Styles;
