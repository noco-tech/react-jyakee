import React from 'react';

export const ColorfulMessage = (props) => {
  const { color, message, children } = props;
  const contentStyle = {
    color, //省略できる　color: color,
    fontSize: '1rem'
  };
  return (
    <>
      <p style={contentStyle}>{message}</p>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

// export default ColorfulMessage;
