import { useLanguage } from "@core/libs";
import { React } from "@core/packages";
import { DefaultLayout } from "@features/_global";
import { TransactionSection } from "@features/transaction";

export const TransactionLanding = React.memo(() => {
  const language = useLanguage();
  return (
    <DefaultLayout
      title={language.dictionary("transactions")}
      bgMode="light"
      scrolling={false}>
      <TransactionSection />
    </DefaultLayout>
  );
});

TransactionLanding.displayName = "TransactionLanding";
