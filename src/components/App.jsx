
import  ContactForm  from './ContactForm/ContactForm';
import  Filter  from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './ContactForm/ContactForm.module.css';


const App = () => {
  return (
    <div className={css.Container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
};

export default App;