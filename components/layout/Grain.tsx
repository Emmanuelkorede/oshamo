
export function Grain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99] h-screen w-screen overflow-hidden opacity-30"
    >
      <div className="bg-grain h-full w-full" />
    </div>
  );
}