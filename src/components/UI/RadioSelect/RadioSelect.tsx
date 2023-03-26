import React, { forwardRef } from 'react';
import styles from './RadioSelect.module.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  values: Readonly<string[]>;
  errorMessage?: string;
  dirtyField?: boolean;
}

type Ref = HTMLInputElement;

const RadioSelect = forwardRef<Ref, InputProps>((props, ref) => {
  const { label, errorMessage, values, dirtyField, ...restProps } = props;

  const isValid = !!errorMessage;
  let inputClasses = styles.wrapper;

  if (isValid) {
    inputClasses += ` ${styles.invalid}`;
  }

  return (
    <div className={inputClasses}>
      <label className={`${styles.label} ${dirtyField ? styles.dirty : ''}`}>{label}</label>
      <div className={styles.radioButtons}>
        {values.map((element, ind) => (
          <React.Fragment key={element + ind}>
            <input type="radio" ref={ref} value={element + ind} {...restProps} id={element + ind} />
            <label htmlFor={element + ind}>{element}</label>
          </React.Fragment>
        ))}
      </div>

      {isValid && errorMessage && <span>{errorMessage}</span>}
    </div>
  );
});

export default RadioSelect;
