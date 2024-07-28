import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Button from './Button'; // Adjust the import path to your Button component's location

describe('Button component', () => {
  it('renders correctly with children', async () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button', { name: /test button/i })).toBeInTheDocument();
  });

  it('applies variant and outline classes correctly', async () => {
    render(<Button variant="primary">Primary Button</Button>);
    expect(screen.getByRole('button', { name: /primary button/i })).toHaveClass('btn-primary');

    render(<Button variant="outline-success">Success Button</Button>);
    // Note: This assertion assumes your Button component or ButtonBase properly handles and applies the variant class.
    // You might need to adjust based on your actual implementation.
    expect(screen.getByRole('button', { name: /success button/i })).toHaveClass('btn-outline-success');
  });

  it('shows an icon when provided', async () => {
    render(<Button icon="bi bi-check">Icon Button</Button>);
    expect(screen.getByText(/icon button/i)).toContainHTML('<i class="bi bi-check me-2"></i>');
  });

  it('displays loader correctly', () => {
    render(<Button loader>Loader Button</Button>);
    const loader = within(screen.getByRole('button', { name: /loader button/i })).getByRole('status');
    expect(loader).toBeVisible();
  });

  it('applies rounded classes based on props', async () => {
    render(<Button rounded="pill">Rounded Pill</Button>);
    expect(screen.getByRole('button', { name: /rounded pill/i })).toHaveClass('rounded-pill');

    render(<Button rounded="circle">Rounded Circle</Button>);
    expect(screen.getByRole('button', { name: /rounded circle/i })).toHaveClass('rounded-circle');
  });

  it('sets aria-disabled attribute when disabled', async () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });
});
