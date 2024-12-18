import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";

type GlobalWebViewProps = {
  url: string;
};

export const GlobalWebView = () => {
  const route = useRoute();
  const url = String((route?.params as any)?.url);
  const [loading, setLoading] = React.useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#007aff"
          style={styles.loading}
        />
      )}
      <WebView
        source={{ uri: url }}
        onLoadEnd={() => setLoading(false)}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  webview: {
    flex: 1,
  },
});
