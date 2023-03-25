import { forwardRef } from 'react';
import styles from './Button.module.scss';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { className = '', ...restProps } = props;

  return (
    <button ref={ref} className={`${styles.button} ${className}`} {...restProps}>
      {props.children}
    </button>
  );
});

export default Button;
