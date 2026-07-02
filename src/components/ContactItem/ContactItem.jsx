import css from "./ContactItem.module.css";

export default function ContactItem({ contact, onDelete }) {
  return (
    <li className={css.item}>
      <span className={css.text}>
        {contact.name}: {contact.number}
      </span>

      <button
        className={css.button}
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}