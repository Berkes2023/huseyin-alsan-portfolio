export default function BlueprintBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(182,217,87,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(182,217,87,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#003C3F]/20 via-[#003C3F]/70 to-[#003C3F]" />
    </div>
  );
}