import { LabelText } from "components/label-text";

export interface InvoicesInfoProps {
  label: string;
  amount: number;
  right?: boolean;
}

export function InvoicesInfo({ label, amount, right }: InvoicesInfoProps) {
  return (
    <div className={right ? "text-right" : ""}>
      <LabelText>{label}</LabelText>
      <div className="text-[length:18px] text-black">
        ${amount.toLocaleString()}
      </div>
    </div>
  );
}
