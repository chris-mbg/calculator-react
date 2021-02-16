import {button} from '../css/Button.module.css'

const Button = ({data}) => {
  return (
    <div className={button}>
      <span>{data}</span>
    </div>
  );
}

export default Button;