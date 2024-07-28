import React, { useId } from 'react';
import { Form, FormControlProps, InputGroup } from 'react-bootstrap';

export type InputProps = FormControlProps & {
  label: string;
  /** Il messaggio di errore visualizzato se l'input è invalido. */
  error?: string;
  /** Il messaggio di successo visualizzato se l'input è valido. */
  success?: string;
  /** Indica se l'input è stato `touched`. */
  touched?: boolean;
  /** Abilita l'input group wrapper. */
  inputGroup?: boolean;
  /** Sottotitolo dell'input. */
  subtitle?: string;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const InputGroupWrapper: React.FC<Pick<InputProps, 'children' | 'inputGroup' | 'className'>> = ({
  children,
  inputGroup,
  className,
}) => {
  if (inputGroup) {
    return (
      <InputGroup role="group" className={className}>
        {children}
      </InputGroup>
    );
  }

  return <div className={className}>{children}</div>;
};

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>((props, ref) => {
  const { label, error, success, touched, inputGroup, id, children, subtitle, ...attributes } = props;

  const helperId = `input-feedback-${useId()}`;

  return (
    <>
      {/* Form Label */}
      <Form.Label htmlFor={id}>
        {label}: {attributes.required && <span className="text-danger">*</span>}
      </Form.Label>

      {/* Form Subtitle */}
      {subtitle && <span className="text-muted float-end">{subtitle}</span>}

      <InputGroupWrapper className="mb-3" inputGroup={inputGroup}>
        {/* Form Input */}
        <Form.Control
          id={id}
          ref={ref}
          isInvalid={!!error && touched}
          isValid={!error && touched}
          aria-describedby={error && helperId}
          {...attributes}
        />

        {children}

        {/* Form Feeback */}
        {error && touched && (
          <Form.Control.Feedback type="invalid" id={helperId}>
            {error}
          </Form.Control.Feedback>
        )}

        {success && <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>}
      </InputGroupWrapper>
    </>
  );
});

Input.displayName = 'Input';

export default Input;
