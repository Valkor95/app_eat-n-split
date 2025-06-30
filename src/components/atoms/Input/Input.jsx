const Input = ({ type, label, name, disabled, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
