"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = HTMLAttributes<HTMLDivElement>;

export default function RevealOnScroll({ children, className = "", ...props }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={["reveal-on-scroll", visible ? "reveal-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
