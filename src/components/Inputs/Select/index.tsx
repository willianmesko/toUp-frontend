import React, {
  SelectHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface OptionData {
  key: string;
  value: string | number;
}

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  icon?: React.ComponentType<IconBaseProps>;
  options: OptionData[];
}

const Select: React.FC<InputProps> = ({
  name,
  icon: Icon,
  label,
  options,
  ...rest
}) => {
  const inputRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <select
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      >
        <option id="label" value="" disabled selected>
          {label}
        </option>
        {options.map(option => (
          <option value={option.value}>{option.key}</option>
        ))}
      </select>

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c33030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Select;
