import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation}) => {
    if (!results.length) { //if there are no results for the price category, don't even return that category
        return null;
    }

    return <View style = {styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => { //item is our actual business object
                return (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('ResultsShow', {id: item.id})}
                    >
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
              )
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList); //exporting a special version of ResultsList (injecting navigation prop to it directly instead of having to pass it from the parent to the child which is this class)