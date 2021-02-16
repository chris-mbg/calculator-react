import { calculator } from '../css/Calculator.module.css'
import Display from './Display';
import ButtonsContainer from './ButtonsContainer';

const Calculator = () => {
  return (
    <div className={calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default Calculator;