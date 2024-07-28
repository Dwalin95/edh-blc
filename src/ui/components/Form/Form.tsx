import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FieldValues, FormProvider, SubmitHandler, UseFormProps, UseFormReturn, useForm } from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

type FormAttributes = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'children'>;

interface FormProps<TFormValues extends FieldValues, Schema> extends FormAttributes {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  schema?: Schema;
}

function FormInner<
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>,
>(props: FormProps<TFormValues, Schema>, ref: React.ForwardedRef<HTMLFormElement>) {
  const { onSubmit, children, options, schema, ...rest } = props;
  const methods = useForm<TFormValues>({ ...options, resolver: schema && zodResolver(schema) });

  return (
    <FormProvider {...methods}>
      <form ref={ref} onSubmit={methods.handleSubmit(onSubmit)} noValidate {...rest}>
        {children(methods)}
      </form>
      {import.meta.env.DEV && <DevTool control={methods.control} />}
    </FormProvider>
  );
}

const Form = React.forwardRef(FormInner) as <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>,
>(
  props: FormProps<TFormValues, Schema> & { ref?: React.ForwardedRef<HTMLFormElement> },
) => React.ReactElement;

export default Form;
