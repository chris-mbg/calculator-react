import { buttons } from '../css/ButtonsContainer.module.css'
import React, { useState } from 'react';
import Button from './Button';

const ButtonsContainer = () => {
  const [buttonValues, setButtonValues] = useState(
    [7, 8, 9, '/', 4, 5, 6, 'X', 1, 2, 3, '-', 'clear', 0, '+', '=']
  )

  return (
    <div className={buttons}>
      {buttonValues.map((value) => (
        <Button key={value} />
      ))}
    </div>
  )
}
export default ButtonsContainer;