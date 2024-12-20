import { TransactionList } from "../components";
import { useTransaction, useTransactionDetail } from "..";
import React, { useMemo } from "react";
import {
  BaseCard,
  LabelValue,
  P,
  SvgIcon,
  useClipboard,
  useColors,
} from "@features/_global";
import { Clipboard, View } from "@core/packages";
import { appStyles, spacings } from "@core/styles";
import { formatCurrency, formatDate, useLanguage } from "@core/libs";
import { TouchableOpacity } from "react-native-gesture-handler";

export const TranscationInfoSection = React.memo(() => {
  const language = useLanguage();
  const clipboard = useClipboard();
  const detail = useTransactionDetail();

  const formFormatted = useMemo(
    () =>
      detail
        ? [
            {
              label: detail?.beneficiary_name,
              value: detail?.account_number,
            },
            {
              label: language.dictionary("amount"),
              value: formatCurrency(detail?.amount),
            },
            {
              label: language.dictionary("remark"),
              value: detail?.remark,
            },
            {
              label: language.dictionary("uniqueCode"),
              value: String(detail?.unique_code),
            },

            {
              label: language.dictionary("createdAt"),
              value: detail?.created_at
                ? formatDate(detail.created_at)
                : detail?.created_at,
            },
            {
              label: language.dictionary("status"),
              value:
                detail?.status?.toLowerCase() === "success"
                  ? "Berhasil"
                  : "Pending",
            },
          ]
        : [],
    [detail],
  );

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
            <P>{language.dictionary("transactionId")}</P>
            <View style={[appStyles.flexRow, appStyles.justifyBetween]}>
              <P size="xl" bold>
                {detail?.id ? `#${detail?.id}` : ""}
              </P>
              <TouchableOpacity
                onPress={() => clipboard.copy(String(detail.id))}>
                <SvgIcon name="Copy" size={24} color={colors.primary(1)} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: colors.black(0.1),
              marginVertical: spacings.md,
            }}
          />
          <View>
            <P
              size="xl"
              bold>{`${detail.sender_bank?.toUpperCase()} > ${detail.beneficiary_bank?.toUpperCase()}`}</P>
            <View
              style={[appStyles.flexRow, appStyles.gmd, appStyles.flexWrap]}>
              {formFormatted?.map((d, i) => {
                return (
                  <LabelValue
                    label={String(d.label)}
                    value={String(d.value)}
                    key={i}
                  />
                );
              })}
            </View>
          </View>
        </BaseCard>
      </View>
    </>
  );
});
