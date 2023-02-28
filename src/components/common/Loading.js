import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Overlay } from 'react-native-elements'

export default function Loading(props) {
    const { isVisible, text } = props
    return (
        <Overlay
            overlayStyle={styles.overlay}
            isVisible={isVisible}
        >
            <View style={styles.viewLoad}>
                <ActivityIndicator size="large" color="#00ff00" />
                {text != null ? <Text style={styles.text}>{text}...</Text> : <Text style={styles.text}>Cargando...</Text>}
            </View>
        </Overlay>
    )
}

Loading.defaultProps = {
    isVisible: false,
    text: null
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#00a680",
        borderWidth: 2,
        borderRadius: 10
    },
    viewLoad: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#00a680",
        textTransform: "uppercase",
        marginTop: 10
    }
})