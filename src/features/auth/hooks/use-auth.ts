import { LoginRequestModel, RegisterRequestModel } from "@core/models/auth";
import { authService } from "@core/services/auth";
import { useMutation } from "@tanstack/react-query";
import { saveTokenToStorage } from "..";

export const useAuth = () => {
  const loginMutation = useMutation({
    mutationFn: (vars: LoginRequestModel) => authService.login(vars),
    onSuccess: vars => {
      // if (vars?.token) {
      //   saveTokenToStorage(vars.token);
      // }
    },
  });

  const registerMutation = useMutation({
    mutationFn: (vars: RegisterRequestModel) => authService.register(vars),
  });

  const login = (req: LoginRequestModel) => loginMutation.mutateAsync(req);
  const register = (req: RegisterRequestModel) =>
    registerMutation.mutateAsync(req);

  return {
    login,
    register,
    loginMutation,
    registerMutation,
  };
};
