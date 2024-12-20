import { useLanguage } from "@core/libs";
import { View, StyleSheet, Pressable, useNavigation } from "@core/packages";
import { appStyles } from "@core/styles";
import {
  BaseCard,
  P,
  SectionLayout,
  SvgIcon,
  useColors,
} from "@features/_global";
import { routeNames } from "@features/_root/utils";
import { useTransaction } from "@features/transaction";
import { ArrowRight, Check, CheckCircle, Clock } from "lucide-react-native";
import React from "react";

export const SummaryTransaction = React.memo(() => {
  const navigation = useNavigation();
  const transaction = useTransaction();
  const language = useLanguage();
  const colors = useColors();

  return (
    <SectionLayout header={false} animateDuration={1000}>
      <View style={[appStyles.gmd, appStyles.flexColumn]}>
        <BaseCard style={[appStyles.flex1]}>
          <View style={[appStyles.flexRow, appStyles.gxxs]}>
            <SvgIcon
              name="Banknote"
              size={14}
              style={[appStyles.mtxxs]}
              color={colors.success(1)}
            />
            <P>{language.dictionary("totalAmount")}</P>
          </View>
          <P size="xl" bold>
            {transaction.totalAmountFormatted}
          </P>
        </BaseCard>
        <View style={[appStyles.flexRow, appStyles.gmd]}>
          <BaseCard style={[appStyles.flex1]}>
            <View style={[appStyles.flexRow, appStyles.gxxs]}>
              <CheckCircle
                size={14}
                style={[appStyles.mtxxs]}
                color={colors.success(1)}
              />
              <P size="sm">{language.dictionary("success")}</P>
            </View>
            <P size="sm" bold>
              {Number(transaction.success?.length)}
            </P>
          </BaseCard>
          <BaseCard style={[appStyles.flex1]}>
            <View style={[appStyles.flexRow, appStyles.gxxs]}>
              <SvgIcon
                name="Clock"
                size={14}
                style={[appStyles.mtxxs]}
                color={colors.warning(1)}
              />
              <P size="sm">{language.dictionary("pending")}</P>
            </View>
            <P size="sm" bold>
              {Number(transaction.pending?.length)}
            </P>
          </BaseCard>
        </View>
        <BaseCard style={[{ flex: -1 }]}>
          <Pressable
            onPress={() => navigation.navigate(routeNames.transaction as never)}
            style={[appStyles.flexRow, appStyles.justifyBetween]}>
            <P size="sm">{language.dictionary("seeAllTransaction")}</P>
            <ArrowRight color={colors.primary(1)} size={24} />
          </Pressable>
        </BaseCard>
      </View>
    </SectionLayout>
  );
});

const styles = StyleSheet.create({});
