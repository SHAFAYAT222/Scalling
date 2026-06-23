import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Prose({ children }: Props) {
  return (
    <div
      className="
        prose text-lg
        [&_p]:mb-4 [&_p]:leading-relaxed
        [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3
        [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
        [&_a]:text-accent [&_a]:underline
      "
    >
      {children}
    </div>
  );
}
