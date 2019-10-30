const colors = [
  {variable: 'blue', hex: '#48B0F7'},
  {variable: 'dark-blue', hex: '#1CA2FF'},
  {variable: 'green', hex: '#28A745'},
  {variable: 'red', hex: '#D73A49'},
  {variable: 'yellow', hex: '#FADA3B'},
  {variable: 'black', hex: 'rgba(0, 0, 0, 0.9)'},
  {variable: 'gray-dark', hex: 'rgba(0, 0, 0, 0.6)'},
  {variable: 'gray-light', hex: 'rgba(0, 0, 0, 0.3)'},
  {variable: 'gray-extra-light', hex: 'rgba(0, 0, 0, 0.12)'},
  {variable: 'white', hex: '#FFFFFF'}
];

const colorBox = color => {
  return {
    padding: '40px',
    marginRight: '20px',
    color: color === '#000000' ? '#FFFFFF' : '#000000',
    backgroundColor: color,
    boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.4)',
    borderRadius: '5px'
  };
};

const colorSection = color => {
  return {
    padding: '20px',
    width: '100%',
    fontSize: '20px',
    color: color === '#000000' ? '#FFFFFF' : '#000000',
    boxShadow: '0 0 2rem 0 rgba(136, 152, 170, 0.4)',
    backgroundColor: color
  };
};

const colorText = color => {
  return {
    padding: '20px',
    width: '100%',
    color: color,
    fontSize: '30px',
    backgroundColor: color === '#FFFFFF' ? '#000000' : 'none'
  };
};

export {colors, colorBox, colorSection, colorText};
