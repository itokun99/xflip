import { TransactionList } from "../components";
import { useTransaction, useTransactionDetail } from "..";
import React from "react";
import { BaseCard, P, SvgIcon, useColors, useStyles } from "@features/_global";
import { View } from "@core/packages";
import { appStyles } from "@core/styles";
import { useLanguage } from "@core/libs";
import { TouchableOpacity } from "react-native-gesture-handler";

export const TranscationInfoSection = React.memo(() => {
  const language = useLanguage();
  const detail = useTransactionDetail();

  const colors = useColors();

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
            <View style={[appStyles.flexRow, appStyles.justifyBetween]}>
              <P size="xl" bold>
                {detail?.id ? `#${detail?.id}` : ""}
              </P>
              <TouchableOpacity>
                <SvgIcon name="Copy" size={24} color={colors.primary(1)} />
              </TouchableOpacity>
            </View>
          </View>
        </BaseCard>
      </View>
    </>
  );
});
