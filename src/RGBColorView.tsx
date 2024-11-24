const RGBColorView = (props:{color: string}): JSX.Element => {
  return(
    <div className="color-rgb">{props.color}</div>
  );
}

export default RGBColorView;