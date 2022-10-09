type ActionButtonProps = {
  value: string;
  action: () => void;
};

export const ActionButton = ({ value, action }: ActionButtonProps) => (
  <button
    className="h-10 w-48 cursor-pointer rounded-full bg-hack-green font-bold text-white"
    onClick={action}
  >
    {value}
  </button>
);
