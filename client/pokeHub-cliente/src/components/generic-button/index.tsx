import './genericButton.css';

interface IGenericButtonProps {
  text?: string;
  width?: string;
  height?: string;
  background?: string;
  color?: string;
  margin?: string;
  padding?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const GenericButton: React.FC<IGenericButtonProps> = (props) => {
  const { text, width, height, background, color, margin, padding, type, onClick } = props;

  return (
    <button
      style={{
        width,
        height,
        background,
        color,
        margin,
        padding
      }}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default GenericButton;
