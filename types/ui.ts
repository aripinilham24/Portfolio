import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type AnchorProps = ComponentPropsWithoutRef<"a">;

export type ReusableLinkProps = AnchorProps & {
  text: ReactNode;
};

export type ButtonNavProps = {
  className?: string;
};
