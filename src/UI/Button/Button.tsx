import './Button.scss';

interface ButtonProps {
  text: string;
  color: string;
}
const Button = ({ text, color }: ButtonProps) => {
  const btnColor =
    color === 'accent'
      ? ' button_accent'
      : color === 'dark'
      ? ' button_dark'
      : '';

  const buttonClassName = `button${btnColor}`;

  return <button className={buttonClassName}>{text}</button>;
};

export default Button;
