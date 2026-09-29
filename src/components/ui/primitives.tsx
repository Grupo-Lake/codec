import type { ComponentProps, ReactNode } from "react";

export const cx = (...c: (string | false | undefined)[]) =>
  c.filter(Boolean).join(" ");

export function Container({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cx("mx-auto max-w-[1080px] px-[22px]", className)}
      {...props}
    />
  );
}

const PAD = "py-[clamp(72px,10vw,130px)]";

export function Section({
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cx(PAD, className)} {...props}>
      {children}
    </section>
  );
}

export function Eyebrow({
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cx("mb-3 text-[17px] font-semibold text-link", className)}
      {...props}
    />
  );
}

export function SectionTitle({
  className,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cx(
        "text-[clamp(34px,5.4vw,64px)] leading-[1.05] font-bold tracking-[-0.03em] text-balance",
        className,
      )}
      {...props}
    />
  );
}

type PillProps = ComponentProps<"a"> & {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

const PILL_SIZE = {
  sm: "px-[13px] py-[5px] text-xs font-semibold",
  md: "px-7 py-[14px] text-[17px] font-semibold",
  lg: "px-8 py-[15px] text-[19px] font-bold",
};

/** Botão pílula amarelo com texto marinho (CTA principal do design). */
export function PillLink({ size = "md", className, ...props }: PillProps) {
  return (
    <a
      className={cx(
        "inline-block rounded-full bg-brand-yellow text-brand-navy no-underline hover:brightness-95",
        PILL_SIZE[size],
        className,
      )}
      {...props}
    />
  );
}

export function ExternalLink(props: ComponentProps<"a">) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
