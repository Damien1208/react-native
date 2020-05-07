import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const SearchInput = props => {
    return (
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        defaultValue={props.data}
        style={styles.text}
        onChangeText={(text) => props.getMovieDetail(text)}
        onPress={props.data = ''}
      />
    );
}

const styles = StyleSheet.create({

    text: {
        color: 'white',
        width: '90%',
        marginBottom: 12
    }
});

export default SearchInput;