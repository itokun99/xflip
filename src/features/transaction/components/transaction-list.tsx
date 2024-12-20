import React from "react";
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  View,
} from "@core/packages";
import { TransactionItem } from "../components";
import { TransactionItemDataInterface } from "@core/interfaces";
import { appStyles } from "@core/styles";
import { P } from "@features/_global";

export interface TransactionListProps {
  items?: TransactionItemDataInterface[];
  onPressItem?: (item: TransactionItemDataInterface) => void;
  onRefresh?: () => void;
  refreshing?: boolean;
}

export const TransactionList = React.memo(
  ({ items = [], ...props }: TransactionListProps) => {
    const renderItem: ListRenderItem<TransactionItemDataInterface> = ({
      item,
    }) => {
      return (
        <TransactionItem
          onPress={() => props.onPressItem?.(item)}
          senderBank={item.sender_bank}
          beneficiaryBank={item.beneficiary_bank}
          beneficiaryName={item.beneficiary_name}
          amount={item.amount}
          date={item.created_at}
          status={item.status}
        />
      );
    };

    return (
      <FlatList
        data={items}
        refreshControl={
          <RefreshControl
            refreshing={Boolean(props.refreshing)}
            onRefresh={props.onRefresh}
          />
        }
        contentContainerStyle={styles.container}
        keyExtractor={item => `transaction-item-${item.id}`}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={[appStyles.flexRow, appStyles.justifyCenter]}>
            <P>No Result Found</P>
          </View>
        )}
      />
    );
  },
);

const styles = StyleSheet.create({
  container: {
    ...appStyles.phmd,
    ...appStyles.pvmd,
    ...appStyles.gsm,
  },
});
