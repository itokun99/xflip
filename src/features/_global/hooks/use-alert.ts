import { showMessage } from "@core/packages";
import { useColors } from "./use-color";

export const useAlert = () => {
  const colors = useColors();

  const success = (message: string) =>
    showMessage({
      message,
      backgroundColor: colors.success(1),
      color: colors.white(1),
    });

  const error = (message: string) =>
    showMessage({
      message,
      backgroundColor: colors.danger(1),
      color: colors.white(1),
    });

  const warning = (message: string) =>
    showMessage({
      message,
      backgroundColor: colors.warning(1),
      color: colors.white(1),
    });

  const info = (message: string) =>
    showMessage({
      message,
      backgroundColor: colors.info(1),
      color: colors.white(1),
    });

  return {
    success,
    error,
    warning,
    info,
  };
};
