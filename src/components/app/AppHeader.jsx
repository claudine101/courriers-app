import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableNativeFeedback, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { COLORS } from "../../styles/COLORS";
import { useSelector } from 'react-redux';
import { userSelector } from '../../store/selectors/userSelector';
export default function AppHeader() {
    const user = useSelector(userSelector)
    const navigation = useNavigation()
    return (
        <View style={styles.cardHeader}>
            <TouchableNativeFeedback
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                background={TouchableNativeFeedback.Ripple('#c9c5c5', true)}>
                <View style={styles.menuOpener}>
                    <View style={styles.menuOpenerLine} />
                    <View style={[styles.menuOpenerLine, { width: 15 }]} />
                    <View style={[styles.menuOpenerLine, { width: 25 }]} />
                </View>
            </TouchableNativeFeedback>
            {user?.ID_PROFIL == 3 ?
                <Text style={styles.logo}>Courrier livré</Text> :
                <Text style={styles.logo}>Courrier entrants</Text>

            }
            {user?.ID_PROFIL != 3 ?
                <TouchableNativeFeedback

                    onPress={() => navigation.navigate("CourrierScreen", { service: 1 })}
                    background={TouchableNativeFeedback.Ripple('#c9c5c5', true)}>
                    <View style={{ marginTop: 20, padding: 10 }}>
                        <Ionicons name="add-circle-sharp" size={35} color="#18678E" />
                    </View>
                </TouchableNativeFeedback> : <TouchableNativeFeedback>
                    <View style={{ marginTop: 20, padding: 10 }}>
                    </View>
                </TouchableNativeFeedback>}
        </View >
    )
}

const styles = StyleSheet.create({
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    menuOpener: {
        padding: 10
    },
    menuOpenerLine: {
        height: 3,
        width: 30,
        backgroundColor: COLORS.primary,
        marginTop: 5,
        borderRadius: 10
    },
    imgBackground: {
        flex: 1,
        width: '100%',
        height: "100%"
    },
    logo: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})