export default function Button({
  hoverColor,
  textColor,
  borderColor,
  buttonInnerText,
  onClickHandler,
  disabled,
}) {
  return (
    <button
      className={`bg-transparent ${hoverColor} ${textColor} font-semibold hover:text-white py-1 px-4 border ${borderColor} hover:border-transparent rounded mr-1`}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {buttonInnerText}
    </button>
  );
}
