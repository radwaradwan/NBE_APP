import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GridListButton from '../Atoms/GridListButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GridCardBen from '../Atoms/GridCardBen';
import HistoryRow from '../Atoms/HistoryRow';
interface MyObject {
    id:number;
    path:any;
    name:string;
    phone:string;
    amount:string;
}

function Ben () {
    const data = [
        {
            id:1,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
        },
        {
            id:2,
            path:require('../../Assets/images/robert.png'),
            name:'robert',
            phone:'+20 102 675 9186',
            amount:'$494,472.95',
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

    const renderGridItem = ({item}:{ item: MyObject }) => (
        <GridCardBen path={item.path} text={item.name} />
    );

    const renderListItem = ({item}:{ item: MyObject }) => (
        <HistoryRow path={item.path} name={item.name} date={item.phone} text={item.amount} type="ben"/>
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
                    <TouchableOpacity style={styles.buttonContainer}>
                        <GridListButton
                                path={require('../../Assets/images/plus.png')}
                                type="add"
                        />
                        <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F1F3FB',
        paddingHorizontal:12,
    },
    benRowContainer:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
    },
    title:{
        color:'#000',
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
