import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { BenStackParamList } from '../Types/types';
import GridListButton from '../Atoms/GridListButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GridCardBen from '../Atoms/GridCardBen';
import HistoryRow from '../Atoms/HistoryRow';
import EmptyBen from '../Atoms/EmptyBen';
import { theme } from '../theme/theme';
interface MyObject {
    id:number;
    path:any;
    name:string;
    phone:string;
    amount:string;
    history?: {
        title: string;
        date: string;
        amount: string;
    }[];
}
type NavigationProp = NativeStackNavigationProp<BenStackParamList, 'Ben'>;

function Ben () {
    const data = [
        {
            id:1,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
            history:[{
                title:'Flat Rent',
                date:'15-12-2021',
                amount:'$892,48.0',
            },
            {
                title:'House Fixes',
                date:'15-12-2021',
                amount:'$892,48.0',
            },
            ],
        },
        {
            id:2,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
            history:[{
                title:'Flat Rent',
                date:'15-12-2021',
                amount:'$892,48.0',
            },
            {
                title:'House Fixes',
                date:'15-12-2021',
                amount:'$892,48.0',
            },
            {
                title:'House Fixes',
                date:'15-12-2021',
                amount:'$892,48.0',
            },
            ],
        },
        {
            id:3,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:4,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:5,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:6,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:7,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:8,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:9,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:10,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:11,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:12,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },

    ];

    const [isGrid, setIsGrid] = useState<boolean>(true);
    const navigation = useNavigation<NavigationProp>();
    const handleCardPress = (item: MyObject) => {
        navigation.navigate('DetailCard', item);
    };

    const renderGridItem = ({item}:{ item: MyObject }) => (
        <TouchableOpacity onPress={()=>handleCardPress(item)}>
            <GridCardBen path={item.path} text={item.name} />
        </TouchableOpacity>
    );

    const renderListItem = ({item}:{ item: MyObject }) => (
        <TouchableOpacity onPress={()=>handleCardPress(item)}>
            <HistoryRow path={item.path} name={item.name} date={item.phone} text={item.amount} type="ben"/>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.benRowContainer}>
                <Text style={styles.title}>Beneficiaries</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <GridListButton
                            path={require('../../Assets/images/grid.png')}
                            isActive={isGrid}
                            onPress={() => setIsGrid(true)}
                        />
                    <GridListButton
                        path={require('../../Assets/images/list.png')}
                        isActive={!isGrid}
                        onPress={() => setIsGrid(false)}
                    />
                    </View>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate('AddBen')}>
                        <GridListButton
                                path={require('../../Assets/images/plus.png')}
                                type="add"
                        />
                        <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                data.length !== 0 ? (
                    <View style={styles.list}>
                        <FlatList
                            data={data}
                            renderItem={isGrid ? renderGridItem : renderListItem}
                            keyExtractor={item => item.id.toString()}
                            key={isGrid ? 'G' : 'L'}
                            numColumns={isGrid ? 4 : 1}
                            columnWrapperStyle={isGrid ? styles.columnWrapper : undefined}
                        />
                    </View>
                ) : (
                    <EmptyBen path={require('../../Assets/images/emptyben.png')} title="No Beneficiaries" text1="You don&#39;t have beneficiaries, add" text2="some so you can send money" type="ben"/>
                )
            }

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.BackgroundScreen,
        paddingHorizontal:12,
    },
    benRowContainer:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
    },
    title:{
        color:theme.textColor,
        fontWeight:'bold',
        fontSize:20,
        // marginTop:-15,
    },
    buttonsContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: 'white',
        // backgroundColor:theme.BackgroundNav,
        padding: 3,
        borderRadius: 25,
        width:61,
        height:30,
        marginEnd:15,
    },
    addText:{
        color:'#007236',
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    list:{
        marginTop:15,
    },
});
export default Ben;
