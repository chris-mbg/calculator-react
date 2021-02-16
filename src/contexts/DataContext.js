import { useState, createContext } from 'react';

const DataContext = createContext();

const DataContextProvider = (props) => {

  const [dataInput, setDataInput] = useState('');

  const handleClick = (value) => {
    console.log('Button pressed', value)
  }


  const values = {
    handleClick,
  }

  return (
    <DataContext.Provider value={values}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContextProvider;