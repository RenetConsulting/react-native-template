import React, { Fragment } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'red',
    },
    body: {
        backgroundColor: 'white',
    },
});

export default function App() {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.body}>
                        <Text>Body</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};