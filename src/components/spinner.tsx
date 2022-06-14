export function Spinner({ className }: { className?: string }) {
  return (
    <div
      // this is silly, but it works so there you go...
      className={`${className?.includes(" h-") ? "" : "h-full"} w-full ${
        className ?? ""
      }`}
    >
      <img
        src="/loading.gif"
        className="object-contain object-top w-full h-full"
        alt=""
      />
    </div>
  );
}
