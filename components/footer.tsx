import { availabilityLabel } from "@/lib/status";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 border-t border-[#2a2a2a] px-6 py-8 text-center text-[11px] tracking-[0.08em] text-[#666] md:flex-row md:justify-between md:text-left">
      <span>© 2026 Terry Ward</span>
      <div className="inline-flex items-center gap-2 text-xs tracking-[0.08em] text-[#00ff88]">
        <span className="size-2 rounded-full bg-[#00ff88] animate-pulse" />
        {availabilityLabel}
      </div>
    </footer>
  );
};
