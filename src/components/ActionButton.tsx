type ActionButtonProps = {
  value: string;
};

export const ActionButton = ({ value }: ActionButtonProps): JSX.Element => (
  <button className="h-14 w-60 rounded-full bg-hack-green text-xl font-bold text-white">
    {value}
  </button>
);
