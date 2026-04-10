export default function Checkbox() {
  const { id, ...rest } = props;
  return (
    <>
      <input type="checkbox" id={`chk-${id}`} className="todo__checkbox" />;
      <label htmlFor={`chk-${id}`} className="todo__label">
        think
      </label>
      ;
    </>
  );
}
