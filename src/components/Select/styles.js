import chroma from 'chroma-js';

export const customStyles = {

    dropdownIndicator: (styles, state) => ({
      ...styles,
    }),
  
    control: (provided) => ({ ...provided, backgroundColor: '#f8f9fa', color:"red", border:"none"}),
  
    multiValue: (provided, { data }) => {
      const color = chroma(data.color);
      return {
        ...provided,
        backgroundColor: color.alpha(0.3).css(),
      };
    },
  
  
    menu: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
    }),
  
  
    option: (provided, {data}) => {      
      const color = data.color
      return {
      ...provided,
      color: color,
      backgroundColor: chroma(color).alpha(0.05).css(),
      padding: 7
    }}
  
  }

  
  export const colors = [
    "rgb(0, 184, 217)",
    "rgb(255, 86, 48)",
    "rgb(82, 67, 170)",
    "rgb(255, 139, 0)",
    "rgb(0, 82, 204)",
    "rgb(54, 179, 126)",
    "rgb(82, 67, 170)",
    "rgb(0, 135, 90)",
    "rgb(255, 196, 0)",
    "rgb(37, 56, 88)",
    "rgb(102, 102, 102)",
  ]