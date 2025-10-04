'use client';
import './styles/starButton.css';

type StarBorderProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  speed?: string;
  thickness?: number;
  children?: React.ReactNode;
};

const StarButton: React.FC<StarBorderProps> = ({
  className = '',
  color = 'white',
  speed = '5s',
  thickness = 1,
  children,
  style,
  ...rest
}) => {
  return (
    <button
      className={`star-border-container ${className}`}
      {...rest}
      style={{
        padding: `${thickness}px 0`,
        ...(style || {}),
      }}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </button>
  );
};

export default StarButton;
