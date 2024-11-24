import { useState } from 'react';
import InputHexColor from './InputHexColor';
import RGBColorView from './RGBColorView';

const ColorForm = () => {
  const [hex, setHex] = useState('#ffffff');
  const [rgb, setRGB] = useState('');

  const hexToRgb = (hex: string): void => {
    const parseHex = hex.match(/\w\w/g) || [];
    const [r, g, b] = parseHex.map(x => parseInt(x, 16));

    setRGB(`rgb(${r},${g},${b})`);
  }

  const hendleColorInput = ({target}: React.ChangeEvent<HTMLInputElement>): void => {
    const color = target.value;

    if (color.length === 7) {
      const colorValid = /^#[0-9A-F]{6}$/i.test(color);

      colorValid ? setHex(color) : null;
      colorValid ? hexToRgb(color) : setRGB('Ошибка!');
    }
  }
  
  return (
    <form className='form-set-color' style={{ backgroundColor: hex }}>
      <InputHexColor hendleColorInput={hendleColorInput}/>
      <RGBColorView color={rgb}/>
    </form>
  );
}

export default ColorForm;