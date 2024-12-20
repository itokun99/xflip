import { TransactionList } from "../components";
import { useTransaction, useTransactionDetail } from "..";
import React from "react";
import { BaseCard, P } from "@features/_global";
import { View } from "@core/packages";
import { appStyles } from "@core/styles";
import { useLanguage } from "@core/libs";

export const TranscationInfoSection = React.memo(() => {
  const language = useLanguage();
  const detail = useTransactionDetail();

  if (!detail)
    return (
      <View>
        <P>Data tidak ditemukan</P>
      </View>
    );

  return (
    <>
      <View style={[appStyles.phmd, appStyles.pvmd]}>
        <BaseCard>
          <View>
            <P>ID Transsaksi</P>
            <View>
              <P size="xl" bold>
                {detail?.id ? `#${detail?.id}` : ""}
              </P>
            </View>
          </View>
        </BaseCard>
      </View>
    </>
  );
});
