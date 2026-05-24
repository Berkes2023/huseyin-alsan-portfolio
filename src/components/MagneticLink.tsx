"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import { ReactNode } from "react";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export default function MagneticLink({
  href,
  children,
  className = "",
  external = false,
}: MagneticLinkProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 180,
    damping: 18,
  });

  const smoothY = useSpring(y, {
    stiffness: 180,
    damping: 18,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const moveX = event.clientX - rect.left - rect.width / 2;
    const moveY = event.clientY - rect.top - rect.height / 2;

    x.set(moveX * 0.25);
    y.set(moveY * 0.25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const sharedProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { x: smoothX, y: smoothY },
    whileTap: { scale: 0.96 },
    className,
  };

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        {...sharedProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div style={{ x: smoothX, y: smoothY }}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}