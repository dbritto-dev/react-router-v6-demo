export interface LineItemProps {
  label: string;
  amount: number;
  bold?: boolean;
}

export function LineItem({ label, amount, bold }: LineItemProps) {
  return (
    <div
      className={
        'flex justify-between border-t border-gray-100 py-4 text-[14px] leading-[24px]' +
        ' ' +
        (bold ? 'font-bold' : '')
      }
    >
      <div>{label}</div>
      <div>${amount.toLocaleString()}</div>
    </div>
  );
}
