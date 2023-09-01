import { StyleSheet, Text, TextInput, View, Button } from "react-native"
import React, {useState} from "react"


export default function AddTodo({fetchCitiesFunc}) {

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder="new city..."
                onChangeText={changeHandler}
            />
            <Button 
                onPress={() => fetchCitiesFunc(text)}
                title={'Add City'}
                color={'coral'}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})