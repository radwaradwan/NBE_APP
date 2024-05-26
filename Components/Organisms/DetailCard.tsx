import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { BenStackParamList } from '../Types/types';
import HistoryRow from '../Atoms/HistoryRow';
import EmptyBen from '../Atoms/EmptyBen';

interface HistoryItem {
    title: string;
    date: string;
    amount: string;
}

type DetailCardRouteProp = RouteProp<BenStackParamList, 'DetailCard'>;

interface DetailCardProps {
    route: DetailCardRouteProp;
}

function DetailCard ({ route }: DetailCardProps ) {
    const { path, name, phone, amount, history } = route.params;

    const renderHistoryItem = ({ item }: { item: HistoryItem }) => (
        <HistoryRow name={item.title} date={item.date} text={item.amount} type="home"/>
    );

    return (
        <View style={styles.container}>
            <HistoryRow path={path} type="ben" name={name} date={phone} text={amount} />
            <Text style={styles.historyTitle}>Transactions History</Text>
            {history && history.length > 0 ? (
                <FlatList
                data={history}
                renderItem={renderHistoryItem}
                keyExtractor={(item, index) => index.toString()}
                />
            ) : (
                <EmptyBen path={require('../../Assets/images/noHistory.png')} title="No History" text1="Not a single transaction was made" text2="to this account" type="history"/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor:'#F1F3FB',
    },
    historyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color:'#000',
    },
});

export default DetailCard;
