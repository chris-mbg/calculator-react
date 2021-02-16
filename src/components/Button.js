import {button} from '../css/Button.module.css'
import { DataContext } from '../contexts/DataContext'
import { useContext } from 'react'

const Button = ({data}) => {

  const { handleClick } = useContext(DataContext);

  return (
    <div className={button} onClick={() => handleClick(data)}>
      <span>{data}</span>
    </div>
  );
}

export default Button;