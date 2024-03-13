import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const users = useSelector(selectFilteredContacts);

  return (
    <div className={css.container}>
      {users.map(item => (
        <Contact data={item} key={item.id} />
      ))}
    </div>
  );
};
