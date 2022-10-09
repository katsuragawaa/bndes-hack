type ActionButtonProps = {
  value: string;
  action: () => void;
};

export const ActionButton = ({ value, action }: ActionButtonProps) => (
  <button
    className="h-14 w-64 rounded-full bg-hack-green text-xl font-bold text-white"
    onClick={action}
  >
    {value}
  </button>
);
