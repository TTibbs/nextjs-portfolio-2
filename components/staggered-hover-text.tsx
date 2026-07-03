import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type StaggeredHoverTextProps = {
  text: string;
  className?: string;
  charClassName?: string;
  /** Wrapper class when using stroke mode (stroke applied to wrapper, not each char) */
  wrapperClassName?: string;
  delayStepMs?: number;
  /** Offset index when continuing a stagger across multiple segments */
  startIndex?: number;
  /** Wrap in its own hover group when no parent `group` or `stagger-group` exists */
  selfHover?: boolean;
};

export function StaggeredHoverText({
  text,
  className,
  charClassName,
  wrapperClassName,
  delayStepMs = 25,
  startIndex = 0,
  selfHover = false,
}: StaggeredHoverTextProps) {
  const isStroke = charClassName?.includes("stagger-char-stroke");

  const chars = text.split("").map((char, index) => (
    <span
      key={`${startIndex + index}-${char}`}
      className={cn("stagger-char", charClassName)}
      style={
        { "--char-index": (startIndex + index) * delayStepMs } as CSSProperties
      }
    >
      {char === " " ? " " : char}
    </span>
  ));

  const content = isStroke ? (
    <span className={cn("stagger-char-stroke-wrapper inline-block", wrapperClassName)}>
      {chars}
    </span>
  ) : (
    chars
  );

  if (selfHover) {
    return (
      <span className={cn("stagger-group inline", className)}>{content}</span>
    );
  }

  return <span className={className}>{content}</span>;
}
