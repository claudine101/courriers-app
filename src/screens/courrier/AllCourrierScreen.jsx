import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableNativeFeedback } from 'react-native';
import AppHeader from '../../components/app/AppHeader';
import { useNavigation } from '@react-navigation/native';

export default function AllCourrierScreen() {
    const navigation = useNavigation()
    return (
        <>
            <AppHeader />
            <View style={styles.container}>
                <Text>Open up App.js to start working on your AllCourrierScreen!</Text>
                <StatusBar style="auto" />
                <TouchableNativeFeedback onPress={() => navigation.navigate('DetailCourrierScreen')}>
                <Text>Open up App.js to start working on your AllCourrierScreen!</Text>
                
                </TouchableNativeFeedback>
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
