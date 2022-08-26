const FormInput = (props) => {
  const { label, onChange, ...inputProps } = props;

  return (
    <div className="flex flex-col w-full mb-2">
      <label className="pl-[2px]">{label}</label>
      <input
        className="h-8 min-w-[40px] max-w-[135px] text-center w-full shadow-sm border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
