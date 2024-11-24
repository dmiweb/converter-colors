type InputProps = {
  hendleColorInput: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

const InputHexColor = ({ hendleColorInput }: InputProps): JSX.Element => {
  return (
    <input
      type="text"
      className="input-color"
      name="color"
      onInput={hendleColorInput}
      maxLength={7} />
  );
}

export default InputHexColor;