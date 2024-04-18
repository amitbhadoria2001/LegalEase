import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function IPCScreen() {
    // Define an array of IPC sections with dummy data
    const ipcData = [
        {
            id: 1,
            title: 'IPC Section 300: Murder',
            content: 'Defines the crime of murder and its punishments...',
            relatedSections: [
                'Related Section 1: Manslaughter',
                'Related Section 2: Attempted Murder',
            ],
        },
        {
            id: 2,
            title: 'IPC Section 302: Punishment for Murder',
            content: 'Provides the punishment for murder...',
            relatedSections: [
                'Related Section 1: Capital Punishment',
                'Related Section 2: Life Imprisonment',
            ],
        },
        // Add more IPC sections as needed
    ];

    // State to keep track of the clicked box
    const [clickedBoxId, setClickedBoxId] = useState(null);

    // Handle box click to toggle the clicked box ID
    const handleBoxClick = (id) => {
        setClickedBoxId(clickedBoxId === id ? null : id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Indian Penal Code (IPC) Laws</Text>
            {/* Create the clickable boxes */}
            {ipcData.map((item) => (
                <View key={item.id} style={styles.boxContainer}>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => handleBoxClick(item.id)}
                    >
                        <Text style={styles.heading}>{item.title}</Text>
                    </TouchableOpacity>
                    {/* Display the detailed information if the box is clicked */}
                    {clickedBoxId === item.id && (
                        <View style={styles.detailContainer}>
                            <Text style={styles.content}>{item.content}</Text>
                            <Text style={styles.relatedTitle}>Related Sections:</Text>
                            {item.relatedSections.map((section, index) => (
                                <Text key={index} style={styles.relatedContent}>
                                    {section}
                                </Text>
                            ))}
                        </View>
                    )}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    boxContainer: {
        width: '100%',
        marginBottom: 20,
    },
    box: {
        width: '100%',
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    detailContainer: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
    },
    content: {
        fontSize: 14,
        marginBottom: 10,
    },
    relatedTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    relatedContent: {
        fontSize: 14,
        marginBottom: 3,
    },
});
