import { React } from "@core/packages";
import { appStyles } from "@core/styles";
import { DefaultLayout } from "@features/_global";
import { useTransaction } from "@features/transaction";

export const TransactionLanding = React.memo(() => {
  const transaction = useTransaction();
  return (
    <DefaultLayout
      bgMode="light"
      refreshing={transaction.isLoading}
      onRefresh={transaction.refetch}
      containerStyle={[appStyles.ptmd, appStyles.phmd]}></DefaultLayout>
  );
});

TransactionLanding.displayName = "TransactionLanding";
