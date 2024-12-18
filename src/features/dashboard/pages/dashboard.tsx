import React from "react";
import { DashboardLayout } from "../components";
import { appStyles } from "@core/styles";
import { GuestBannerSection } from "../containers";

export const Dashboard = React.memo(() => {
  return (
    <DashboardLayout bgMode="light" containerStyle={[appStyles.ptmd]}>
      <GuestBannerSection animateDuration={500} />
    </DashboardLayout>
  );
});

Dashboard.displayName = "Dashboard";
