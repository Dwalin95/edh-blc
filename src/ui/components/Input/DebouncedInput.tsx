import React, { useEffect, useState } from 'react';

import Input, { type InputProps } from './Input';

type DebouncedInputProps = InputProps & {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export default function DebouncedInput(props: DebouncedInputProps) {
  const { value: initialValue, onChange, debounce = 500, ...rest } = props;
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, onChange, debounce]);

  return <Input {...rest} value={value} onChange={handleInputChange} />;
}
