import React from "react"
import { Text, StyleSheet, View, TouchableNativeFeedback, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";
import { COLORS } from "../../styles/COLORS";
import { DrawerActions } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { unsetUserAction } from "../../store/actions/userActions";
import { runOnJS } from "react-native-reanimated";

export default function DrawerContent({ state, navigation, descriptors }) {
    const user = useSelector(userSelector)
    const dispacth = useDispatch()

    const handlePress = (routeName) => {
        navigation.navigate(routeName)
        navigation.dispatch(DrawerActions.closeDrawer)
    }
    const onLogOut = async () => {
        await AsyncStorage.removeItem('user')
        dispacth(unsetUserAction())
    }

    return (
        <View style={styles.drawerContent}>
            <TouchableNativeFeedback>
                <View style={styles.connectedUser}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../../assets/images/user.png')} style={styles.image} />
                    </View>
                    <View style={styles.userNames}>
                        <Text style={styles.fullName} numberOfLines={1}>{user?.NOM} {user?.PRENOM}</Text>
                        <Text style={styles.email}>{user?.EMAIL}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
            <View style={styles.separator} />
            <DrawerContentScrollView style={styles.drawerScroller}>
                <TouchableNativeFeedback useForeground background={TouchableNativeFeedback.Ripple(COLORS.handleColor)} onPress={() => handlePress('AllCourrierScreen')}>
                    <View style={[{ borderRadius: 10, overflow: "hidden" }, (state.index == 0) && { backgroundColor: COLORS.handleColor }]}>
                        <View style={styles.drawerItem}>
                            <Image source={require('../../../assets/images/mail-receive.png')} style={styles.imageIcon} />
                            {
                               user?.ID_PROFIL == 3 ?
                                <Text style={[styles.drawerItemLabel, (state.index == 0) && { color: '#777' }]}>
                                Courriers livré
                            </Text>:<Text style={[styles.drawerItemLabel, (state.index == 0) && { color: '#777' }]}>
                                Courriers entrants
                            </Text>
                            }
                            
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground background={TouchableNativeFeedback.Ripple(COLORS.handleColor)} onPress={() => handlePress('AllCourrierSortantScreen')}>
                    <View style={[{ borderRadius: 10, overflow: "hidden" }, (state.index == 1) && { backgroundColor: COLORS.handleColor }]}>
                        <View style={styles.drawerItem}>
                            <Image source={require('../../../assets/images/send-mail.png')} style={styles.imageIcon} />
                            {
                               user?.ID_PROFIL == 3 ?
                                    <Text style={[styles.drawerItemLabel, (state.index == 1) && { color: '#777' }, { marginBottom: 3 }]}>
                                        Nouveau courriers 
                                    </Text> : <Text style={[styles.drawerItemLabel, (state.index == 1) && { color: '#777' }, { marginBottom: 3 }]}>
                                        Courriers sortants
                                    </Text>
                            }

                        </View>
                    </View>
                </TouchableNativeFeedback>
            </DrawerContentScrollView>
            <View style={styles.bottomSection}>
                <TouchableNativeFeedback useForeground background={TouchableNativeFeedback.Ripple('#EFEFEF')}>
                    <View style={{ borderRadius: 10, overflow: "hidden" }}>
                        <View style={styles.drawerItem}>
                            <AntDesign name="setting" size={24} color="#777" />
                            <Text style={styles.drawerItemLabel}>Paramètres</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback useForeground background={TouchableNativeFeedback.Ripple('#EFEFEF')} onPress={onLogOut}>
                    <View style={{ borderRadius: 10, overflow: "hidden" }}>
                        <View style={styles.drawerItem}>
                            <MaterialIcons name="logout" size={20} color="#777" />
                            <Text style={styles.drawerItemLabel}>Déconnexion</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    separator: {
        height: 2,
        width: "95%",
        backgroundColor: COLORS.handleColor,
        alignSelf: "center"
    },
    drawerContent: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    connectedUser: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.handleColor,
        borderRadius: 10,
        padding: 5
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        resizeMode: "center"
    },
    userNames: {
        marginLeft: 10,
        flex: 1
    },
    fullName: {
        fontWeight: "bold",
        fontSize: 14,
        maxWidth: "90%"
    },
    email: {
        color: '#777',
        fontSize: 13
    },
    drawerScroller: {
        paddingHorizontal: 10
    },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        overflow: "hidden"
    },
    drawerItemLabel: {
        marginLeft: 10,
        fontWeight: "bold",
        color: '#777'
    },
    services: {
        paddingLeft: 20
    },
    service: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    serviceImageContainer: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: COLORS.handleColor,
        borderWidth: 2
    },
    serviceImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    serviceName: {
        color: '#777',
        marginLeft: 10,
        fontSize: 13
    },

    actionBadge: {
        minWidth: 20,
        minHeight: 18,
        backgroundColor: "red",
        borderRadius: 100,
        position: 'absolute',
        right: 10,
        // top: -9,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 3
    },
    actionBadgeText: {
        color: '#FFF',
        fontSize: 12,
        marginTop: -2,
        fontWeight: "bold"
    },
    bottomSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    imageIcon: {
        width: 25,
        height: 25
    }
})