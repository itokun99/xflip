import { useLanguage } from "@core/libs";
import { React } from "@core/packages";
import { DefaultLayout } from "@features/_global";
import { TranscationInfoSection } from "@features/transaction";

export const TransactionDetail = React.memo(() => {
  const language = useLanguage();
  return (
    <DefaultLayout
      title={language.dictionary("transactionDetail")}
      bgMode="light"
      scrolling={false}>
      <TranscationInfoSection />
    </DefaultLayout>
  );
});
