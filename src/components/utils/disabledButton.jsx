export default function DisabledButton({
  textColor,
  borderColor,
  buttonInnerText,
}) {
  return (
    <button
      className={`bg-transparent ${textColor} font-semibol py-1 px-4 border ${borderColor} rounded opacity-50 cursor-not-allowed text mr-1`}
    >
      {buttonInnerText}
    </button>
  );
}
