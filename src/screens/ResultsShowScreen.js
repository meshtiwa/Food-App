import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

// this component is to show pictures of the foods in a specific restaurant when clicked on
const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id'); //separate id for each restaurant 

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo} /* each photo has its own unique URl, so you can just get the photo itself */
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item}} /> //by default, images don't show up, so u have to use styling
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;