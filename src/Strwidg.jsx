import React from "react";

const Strwidg = (props) => {
  const { name, b, c } = props;
  return (
    <>
      <h3>{name}</h3>
      <div className={`flex columns-2 w-60`}>
        <hr className={` w-${b} border-4 border-[#adb7c9] rounded-xl `} />
        <hr
          className={` w-${c} border-4 border-white -rounded-l-xl rounded-r-xl `}
        />
      </div>
    </>
  );
};

export default Strwidg;
