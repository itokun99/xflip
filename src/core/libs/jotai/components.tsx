import { React } from "@core/packages";
import { appQueryClient } from "@core/libs";
import {
  QueryClientCore,
  queryClientAtom,
  useHydrateAtoms,
} from "@core/packages";

export const HydrateAtoms = ({ children }: React.PropsWithChildren) => {
  useHydrateAtoms([
    [queryClientAtom, appQueryClient as unknown as QueryClientCore],
  ]);
  return <>{children}</>;
};
