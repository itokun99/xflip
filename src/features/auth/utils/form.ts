import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: "Email tidak boleh kosong!" })
    .email({ message: "Email tidak valid!" }),
  password: z.string({ required_error: "Kata sandi tidak boleh kosong!" }),
});

export const registerFormSchema = z
  .object({
    name: z.string().min(1, { message: "Nama tidak boleh kosong!" }),
    email: z
      .string({ required_error: "Email tidak boleh kosong!" })
      .email({ message: "Email tidak valid" }),
    handphone: z
      .string()
      .min(10, { message: "Nomor Handphone wajib diisi" })
      .max(15),
    password: z
      .string()
      .min(8, { message: "Password harus terdiri dari minimal 8 karakter" })
      .regex(/[A-Z]/, {
        message: "Password harus mengandung setidaknya satu huruf besar",
      })
      .regex(/[a-z]/, {
        message: "Password harus mengandung setidaknya satu huruf kecil",
      })
      .regex(/[0-9]/, {
        message: "Password harus mengandung setidaknya satu angka",
      }),
    confirmPassword: z.string(),
    termCondition: z.boolean({
      required_error: "Anda harus menyetujui syarat dan ketentuan aplikasi!",
    }),
    address: z.string().optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Konfirmasi password tidak sesuai",
  });

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
