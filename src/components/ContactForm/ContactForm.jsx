import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export const ContactForm = () => {
  const dispath = useDispatch();
  const inputNameId = useId();
  const inputPhoneId = useId();
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 symbols')
      .max(20, 'Max length is 20')
      .required('Name is required!'),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8, 'Number must be at least 8 symbols')
      .required('Number is required!'),
  });

  return (
    <div className={css.container}>
      <Formik
        initialValues={{ name: '', phone: '' }}
        onSubmit={(values, action) => {
          dispath(addContact(values));
          action.resetForm();
        }}
        validationSchema={contactSchema}
      >
        <Form>
          <label className={css.label} htmlFor={inputNameId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={inputNameId}
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label} htmlFor={inputPhoneId}>
            Number
          </label>
          <Field
            className={css.field}
            type="tel"
            name="phone"
            id={inputPhoneId}
          ></Field>
          <ErrorMessage className={css.error} name="phone" component="span" />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
