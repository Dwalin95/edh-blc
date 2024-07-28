import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { z } from 'zod';

import Form from './Form';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
});

const mockSubmitHandler = vi.fn();

describe('<Form />', () => {
  it('submits the form with valid data', async () => {
    render(
      <Form schema={formSchema} onSubmit={mockSubmitHandler}>
        {({ register }) => (
          <>
            <input {...register('name')} data-testid="name-input" />
            <input {...register('email')} data-testid="email-input" />
            <button type="submit">Submit</button>
          </>
        )}
      </Form>,
    );

    await userEvent.type(screen.getByTestId('name-input'), 'John Doe');
    await userEvent.type(screen.getByTestId('email-input'), 'john.doe@example.com');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(mockSubmitHandler).toHaveBeenCalled();
  });

  it('displays a validation error for invalid email', async () => {
    render(
      <Form schema={formSchema} onSubmit={mockSubmitHandler}>
        {({ register, formState: { errors } }) => (
          <>
            <input {...register('email')} data-testid="email-input" />
            <p data-testid="email-error">{errors.email?.message as string}</p>
            <button type="submit">Submit</button>
          </>
        )}
      </Form>,
    );

    await userEvent.type(screen.getByTestId('email-input'), 'john.doe');
    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByTestId('email-error')).toHaveTextContent('Invalid email address');
  });
});
