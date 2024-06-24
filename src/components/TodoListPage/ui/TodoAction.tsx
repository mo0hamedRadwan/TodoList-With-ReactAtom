type propsType = { actionName: string, onClickAction: () => void };

const TodoAction = ({ actionName, onClickAction }: propsType) => {
  return (
    <button
      type="button"
      onClick={onClickAction}
      className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-100 transition duration-200"
    >
      <img
        src={`./src/assets/icons/${actionName}.png`}
        alt={`${actionName} todo`}
        className="w-5 h-5"
      />
    </button>
  );
};

export default TodoAction;
