export interface LabelTextProps {
  children?: React.ReactNode;
}

export function LabelText({ children }: LabelTextProps) {
  return (
    <div className="text-[12px] font-medium uppercase leading-[24px] text-gray-400">
      {children}
    </div>
  );
}
