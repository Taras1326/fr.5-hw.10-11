import css from "./Filter.module.css";

export default function Filter({ value, onChange }) {
  return (
    <div className={css.wrapper}>
      <label>
        Find contacts by name
      </label>

      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}