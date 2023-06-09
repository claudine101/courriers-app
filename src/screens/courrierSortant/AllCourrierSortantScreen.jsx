import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from '../../components/app/AppHeader';

export default function AllCourrierSortantScreen() {
    return (
        <>
            <AppHeader />
            <View style={styles.container}>
                <Text>Open up App.js to start working on your AllCourrierScreen!</Text>
                <StatusBar style="auto" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
