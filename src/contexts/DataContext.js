import { useState, createContext } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {

  const [dataInput, setDataInput] = useState('');

  const handleClick = (value) => {
    //console.log('Button pressed', value)
    //Regex expression
    if(/\d/.test(value)){
      setDataInput(dataInput + value);    // Eftersom dataInput som default är en sträng görs value om till sträng
    } else if ( value === 'clear'){
      setDataInput('');
    } else if (value === '=') {
      console.log('Calculating...');
    } else {
      setDataInput(dataInput + ` ${value} `);
    }
  }


  const values = {
    dataInput,
    handleClick
  }

  return (
    <DataContext.Provider value={values}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContextProvider;