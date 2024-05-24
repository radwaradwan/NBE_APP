import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import HistoryRow from '../Atoms/HistoryRow';

interface HistoryItem {
    title: string;
    date: string;
    amount: string;
}

interface DetailCardProps {
    route: {
        params: {
            path: any;
            name: string;
            phone: string;
            amount: string;
            history: HistoryItem[];
        };
    };
}

function DetailCard ({ route }: DetailCardProps ) {
    const { path, name, phone, amount, history } = route.params;

    const renderHistoryItem = ({ item }: { item: HistoryItem }) => (
        // <View style={styles.historyItem}>
        //     <Text>{item.title}</Text>
        //     <Text>{item.date}</Text>
        //     <Text>{item.amount}</Text>
        // </View>
        <HistoryRow name={item.title} date={item.date} text={item.amount}/>
    );

    return (
        <View style={styles.container}>
            {/* <View style={styles.card}>
                <Image source={path} style={styles.image} />
                <Text>{name}</Text>
                <Text>{phone}</Text>
                <Text>{amount}</Text>
            </View> */}
            <HistoryRow path={path} type="ben" name={name} date={phone} text={amount} />
            <Text style={styles.historyTitle}>History</Text>
            {history.length > 0 ? (
                <FlatList
                    data={history}
                    renderItem={renderHistoryItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            ) : (
                <Text>No history</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    historyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    historyItem: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default DetailCard;
