import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "@features/_global/hooks";
import { routeNames } from "@features/_root/utils";
import { appStyles, spacings } from "@core/styles";
import { P } from "@features/_global";
import { useAuth } from "../hooks";
import { Button, Checkbox, FAB, TextInput } from "react-native-paper";
import { ArrowRight } from "lucide-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Header, Shape } from "../components";
import { Controller, useForm } from "react-hook-form";
import { RegisterFormSchema, registerFormSchema } from "..";
import { zodResolver } from "@hookform/resolvers/zod";

export const Register = () => {
  const navigation = useNavigation();
  const colors = useColors();

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      handphone: "",
      address: "",
      termCondition: false,
      confirmPassword: "",
    },
  });

  const handleNavigateLogin = () => {
    navigation.navigate(routeNames.login as never);
  };

  const onSubmitForm = () => {
    console.log("submit register");
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={150}
      contentContainerStyle={[styles.container, colors.bgWhiteAlpha100]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary(1)} />
      <Shape />
      <Header
        title="Buat Akun"
        description="Jelajahi fitur dan mulai dapatkan kebaikan juga umrahnya!"
      />

      {/* Input Email dan Password dengan Label dan Placeholder */}
      <View style={[styles.inputContainer, appStyles.glg]}>
        <Controller
          control={form.control}
          name="name"
          rules={{ required: true }}
          render={p => {
            return (
              <View>
                <TextInput
                  label="Nama Lengkap"
                  placeholder="Masukan nama lengkap anda"
                  value={p.field.value}
                  onChangeText={p.field.onChange}
                  style={[
                    styles.input,
                    colors.textWhiteAlpha100,
                    colors.bgGrayAlpha100,
                  ]}
                  error={Boolean(p.fieldState.error)}
                  keyboardType="default"
                  underlineColor={colors.primary(1)}
                />
                {Boolean(p.fieldState.error) && (
                  <P size="xs" style={[colors.textDangerAlpha100]}>
                    {p.fieldState.error?.message}
                  </P>
                )}
              </View>
            );
          }}
        />

        <Controller
          control={form.control}
          name="handphone"
          render={p => {
            return (
              <View>
                <TextInput
                  label="No. HP / WA"
                  placeholder="Masukan nomor handphone / wa"
                  value={p.field.value}
                  onChangeText={p.field.onChange}
                  style={[
                    styles.input,
                    colors.textWhiteAlpha100,
                    colors.bgGrayAlpha100,
                  ]}
                  error={Boolean(p.fieldState.error)}
                  keyboardType="number-pad"
                  underlineColor={colors.primary(1)}
                />
                {Boolean(p.fieldState.error) && (
                  <P size="xs" style={[colors.textDangerAlpha100]}>
                    {p.fieldState.error?.message}
                  </P>
                )}
              </View>
            );
          }}
        />

        <Controller
          control={form.control}
          name="email"
          render={p => {
            return (
              <View>
                <TextInput
                  label="Email"
                  placeholder="Masukkan email"
                  value={p.field.value}
                  onChangeText={p.field.onChange}
                  style={[
                    styles.input,
                    colors.textWhiteAlpha100,
                    colors.bgGrayAlpha100,
                  ]}
                  keyboardType="email-address"
                  error={Boolean(p.fieldState.error)}
                  underlineColor={colors.primary(1)}
                />
                {Boolean(p.fieldState.error) && (
                  <P size="xs" style={[colors.textDangerAlpha100]}>
                    {p.fieldState.error?.message}
                  </P>
                )}
              </View>
            );
          }}
        />

        <Controller
          control={form.control}
          name="password"
          render={p => {
            return (
              <View>
                <TextInput
                  label="Kata Sandi"
                  placeholder="Masukkan kata sandi"
                  value={p.field.value}
                  onChangeText={p.field.onChange}
                  secureTextEntry
                  error={Boolean(p.fieldState.error)}
                  underlineColor={colors.primary(1)}
                  style={[
                    styles.input,
                    colors.textWhiteAlpha100,
                    colors.bgGrayAlpha100,
                  ]}
                />
                {Boolean(p.fieldState.error) && (
                  <P size="xs" style={[colors.textDangerAlpha100]}>
                    {p.fieldState.error?.message}
                  </P>
                )}
              </View>
            );
          }}
        />

        <Controller
          control={form.control}
          name="confirmPassword"
          render={p => {
            return (
              <View>
                <TextInput
                  label="Masukan Ulang Kata Sandi"
                  placeholder="Masukkan kata sandi"
                  value={p.field.value}
                  onChangeText={p.field.onChange}
                  secureTextEntry
                  underlineColor={colors.primary(1)}
                  error={Boolean(p.fieldState.error)}
                  style={[
                    styles.input,
                    colors.textWhiteAlpha100,
                    colors.bgGrayAlpha100,
                  ]}
                />
                {Boolean(p.fieldState.error) && (
                  <P size="xs" style={[colors.textDangerAlpha100]}>
                    {p.fieldState.error?.message}
                  </P>
                )}
              </View>
            );
          }}
        />

        <Controller
          control={form.control}
          name="address"
          render={p => {
            return (
              <View>
                <TextInput
                  label="Alamat Lengkap"
                  placeholder="Masukkan kata sandi"
                  value={p.field.value}
                  onChangeText={p.field.onChange}
                  underlineColor={colors.primary(1)}
                  error={Boolean(p.fieldState.error)}
                  style={[
                    styles.input,
                    colors.textWhiteAlpha100,
                    colors.bgGrayAlpha100,
                  ]}
                />
                {Boolean(p.fieldState.error) && (
                  <P size="xs" style={[colors.textDangerAlpha100]}>
                    {p.fieldState.error?.message}
                  </P>
                )}
              </View>
            );
          }}
        />

        <View style={[appStyles.flexRow, appStyles.gxs]}>
          <Controller
            control={form.control}
            name="termCondition"
            render={p => {
              return (
                <>
                  <Checkbox
                    status={p.field.value ? "checked" : "unchecked"}
                    onPress={() => p.field.onChange(!p.field.value)}
                  />

                  <P size="xs">{`Saya menerima syarat dan ketentuan\nyang berlaku pada aplikasi`}</P>
                </>
              );
            }}
          />
        </View>
      </View>

      {/* Kontainer tombol */}
      <View
        style={[
          appStyles.flexRow,
          appStyles.justifyBetween,
          appStyles.alignCenter,
        ]}>
        <P size="xxl" bold>
          Daftar
        </P>
        <FAB
          style={[appStyles.roundedFull, colors.bgPrimaryAlpha100]}
          icon={() => <ArrowRight color={colors.white(1)} />}
          onPress={form.handleSubmit(onSubmitForm)}
        />
      </View>

      <View
        style={[
          appStyles.flexRow,
          appStyles.justifyCenter,
          appStyles.pvlg,
          appStyles.phmd,
        ]}>
        <Button mode="text" onPress={handleNavigateLogin}>
          <P size="sm" style={[colors.textPrimaryAlpha100]}>
            Sudah punya akun? Masuk disini!
          </P>
        </Button>
      </View>
      {/* Link Lanjut Tanpa Login */}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: spacings.xl,
    paddingTop: 100,
  },
  headerImage: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    fontSize: 16,
    marginBottom: spacings.xs,
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    fontSize: 16,
    marginTop: 10,
    textDecorationLine: "underline",
  },
  versionText: {
    marginTop: 20,
    fontSize: 14,
    color: "#aaa",
  },
});
