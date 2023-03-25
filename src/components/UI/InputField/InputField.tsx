import React, { forwardRef } from 'react';
import styles from './InputField.module.scss';
interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  dirtyField?: boolean;
}
type Ref = HTMLInputElement;

const InputField = forwardRef<Ref, InputProps>((props, ref) => {
  const { label, errorMessage, dirtyField, ...restProps } = props;

  const isValid = !!errorMessage;
  let inputClasses = styles.inputWrapper;

  if (isValid) {
    inputClasses += ` ${styles.invalid}`;
  }

  return (
    <div className={inputClasses}>
      <input ref={ref} {...restProps} />
      <label className={`${styles.label} ${dirtyField ? styles.dirty : ''}`}>{label}</label>

      {isValid && errorMessage && <span>{errorMessage}</span>}
    </div>
  );
});

export default InputField;
