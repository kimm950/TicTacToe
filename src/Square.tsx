import React from 'react'

interface Props {
  value?: string | null,
  onClick: () => void,
}

const Square = (props: Props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
