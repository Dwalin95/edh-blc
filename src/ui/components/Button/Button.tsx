import classNames from 'classnames';
import React from 'react';
import { Button as ButtonBase, ButtonProps as ButtonBaseProps } from 'react-bootstrap';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'white'
  | 'celeste'
  | 'link';

type ButtonOutlineVariant = `outline-${ButtonVariant}`;

export interface ButtonProps extends ButtonBaseProps {
  /** Da utilizzare se si usa una icona nel contenuto del Button. */
  icon?: string;
  /** Da utilizzare se si vuole visualizzare uno spinner nel contenuto del Button. */
  loader?: boolean;
  /** Da utilizzare per le varianti di colore. */
  variant?: ButtonVariant | ButtonOutlineVariant;
  /** Da utilizzare per le varianti di bordo. */
  rounded?: 'pill' | 'circle';
}

const Button = React.forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { className, rounded, icon, loader, children, ...attributes } = props;

  const classes = classNames(className, {
    'rounded-pill': rounded === 'pill',
    'rounded-circle': rounded === 'circle',
  });

  const ariaAttributes = {
    ...(attributes.disabled && { 'aria-disabled': true }),
  };

  return (
    <ButtonBase className={classes} {...attributes} {...ariaAttributes} ref={ref}>
      {!loader && icon ? <i className={`${icon} me-2`} /> : null}
      {loader && <span role="status" className="spinner-border spinner-border-sm me-2" />}
      {children}
    </ButtonBase>
  );
});

Button.displayName = 'Button';

export default Button;
