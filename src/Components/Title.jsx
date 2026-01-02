import React from 'react';

const Title = (props) => {
  return (
    <div className="text-center flex-col justify-center  uppercase">
      <h2 className="">
        {props.firrstline}
      </h2>
    </div>
  );
};

export default Title;
