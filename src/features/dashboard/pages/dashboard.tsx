import { React, View } from "@core/packages";
import { appStyles } from "@core/styles";
import { DashboardLayout } from "../components";
import { useTransaction } from "@features/transaction";
import { useLanguage } from "@core/libs";
import { SummaryTransaction } from "../containers";

export const Dashboard = React.memo(() => {
  const transaction = useTransaction();
  return (
    <DashboardLayout
      bgMode="light"
      refreshing={transaction.isLoading}
      onRefresh={transaction.refetch}
      containerStyle={[appStyles.ptmd, appStyles.phmd]}>
      <SummaryTransaction />
    </DashboardLayout>
  );
});

Dashboard.displayName = "Dashboard";
