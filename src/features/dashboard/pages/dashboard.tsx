import { React } from "@core/packages";
import { appStyles } from "@core/styles";
import { DashboardLayout } from "../components";

export const Dashboard = React.memo(() => {
  return (
    <DashboardLayout
      bgMode="light"
      containerStyle={[appStyles.ptmd]}></DashboardLayout>
  );
});

Dashboard.displayName = "Dashboard";
