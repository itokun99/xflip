import { TransactionItemDataInterface } from "@core/interfaces";
import { formatCurrency, formatDate, useLanguage } from "@core/libs";
import { RNPaper, View } from "@core/packages";
import { appStyles, spacings } from "@core/styles";
import { BaseCard, P, useColors } from "@features/_global";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";

export interface TransactionItemProps {
  onPress?: () => void;
  senderBank?: string;
  beneficiaryName?: string;
  beneficiaryBank?: string;
  amount?: number;
  date?: string;
  status?: string;
}

export const TransactionItem = React.memo(
  ({ ...props }: TransactionItemProps) => {
    const colors = useColors();
    const language = useLanguage();

    const wrapperStyle = useMemo(
      () =>
        StyleSheet.flatten([
          appStyles.flexRow,
          {
            borderLeftColor: colors.primary(1),
            borderLeftWidth: spacings.xs,
          },
        ]),
      [colors],
    );

    const getStatus = (status: string) => {
      switch (status?.toLowerCase()) {
        case "success":
          return language.dictionary("completed");
        case "pending":
          return language.dictionary("pending");
      }
    };

    const getColorByStatus = (status: string) => {
      switch (status?.toLowerCase()) {
        case "success":
          return colors.success(1);
        case "pending":
          return colors.warning(1);
      }
    };

    return (
      <BaseCard onPress={props.onPress} style={wrapperStyle}>
        <View style={[appStyles.flex1]}>
          <P size="xs">
            {props.senderBank && props.beneficiaryBank
              ? `${props.senderBank?.toUpperCase()} > ${props.beneficiaryBank?.toUpperCase()}`
              : ""}
          </P>
          <P size="sm" bold>
            {props.beneficiaryName || ""}
          </P>
          <P size="sm">{`${props.amount ? formatCurrency(props.amount) : ""}${
            props.date ? ` - ${formatDate(props.date)}` : ""
          }`}</P>
        </View>
        <View style={[appStyles.justifyCenter]}>
          <RNPaper.Chip
            style={[{ backgroundColor: getColorByStatus(props.status || "") }]}>
            {props.status ? getStatus(props.status) : ""}
          </RNPaper.Chip>
        </View>
      </BaseCard>
    );
  },
);
