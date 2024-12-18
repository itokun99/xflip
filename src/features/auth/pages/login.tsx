import React, { useState } from "react";
import { View, StyleSheet, StatusBar, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAlert, useColors } from "@features/_global/hooks";
import { routeNames } from "@features/_root/utils";
import { appStyles, spacings } from "@core/styles";
import { P } from "@features/_global";
import { FAB, TextInput } from "react-native-paper";
import { ArrowRight } from "lucide-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Controller, useForm } from "react-hook-form";
import { LoginFormSchema, loginFormSchema } from "../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActionLink, Header, Shape } from "../components";
import { useAuth } from "..";

export const Login = () => {
  const auth = useAuth();

  const dims = useWindowDimensions();
  const navigation = useNavigation();
  const colors = useColors();

  const alert = useAlert();

  const [visiblePassword, setVisiblePassword] = useState(false);

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const handleVisiblePassword = () => setVisiblePassword(prev => !prev);

  const onSubmitForm = async (data: LoginFormSchema) => {
    try {
      await auth.login(data);
      alert.success("Berhasil masuk, selamat datang kembali!");
      navigation.reset({
        index: 0,
        routes: [
          {
            name: routeNames.dashboard as never,
          },
        ],
      });
    } catch (err: any) {
      alert.error(err?.message || "Terjadi Kesalahan, silahkan coba lagi");
    }
  };

  const onErrorForm = (d: any) => {
    console.log("error", d);
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={150}
      contentContainerStyle={[
        styles.container,
        colors.bgWhiteAlpha100,
        { height: dims.height },
      ]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary(1)} />
      <Shape />
      <Header title="Selamat Datang" />
      <View style={[styles.inputContainer, appStyles.glg]}>
        <Controller
          name="email"
          control={form.control}
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
                  error={Boolean(p.fieldState.error)}
                  keyboardType="email-address"
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
          name="password"
          control={form.control}
          render={p => {
            return (
              <View>
                <TextInput
                  label="Kata Sandi"
                  placeholder="Masukkan kata sandi"
                  value={p.field.value}
                  onChangeText={p.field.onChange}
                  secureTextEntry={!visiblePassword}
                  underlineColor={colors.primary(1)}
                  error={Boolean(p.fieldState.error)}
                  right={
                    <TextInput.Icon
                      onPress={handleVisiblePassword}
                      icon={visiblePassword ? "eye" : "eye-off"}
                    />
                  }
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
      </View>

      <View
        style={[
          appStyles.flexRow,
          appStyles.justifyBetween,
          appStyles.alignCenter,
        ]}>
        <P size="xxl" bold>
          Masuk
        </P>
        <FAB
          style={[appStyles.roundedFull, colors.bgPrimaryAlpha100]}
          icon={() => <ArrowRight color={colors.white(1)} />}
          onPress={form.handleSubmit(onSubmitForm, onErrorForm)}
        />
      </View>
      <ActionLink
        ctas={[
          {
            text: "Registrasi",
            onPress: () => navigation.navigate(routeNames.register as never),
          },
          {
            text: "Lupa kata sandi?",
            onPress: () => {},
          },
        ]}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: spacings.xl,
    paddingBottom: 40,
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
    paddingLeft: 0,
    width: "100%",
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
