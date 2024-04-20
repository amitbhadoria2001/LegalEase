import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView } from 'react-native';

export default function IPCScreen() {
    const [clickedBoxId, setClickedBoxId] = useState(null);

    const ipcData = [
        {
            id: 1,
            title: 'IPC Section 1: Title and extent of operation of the Code',
            content: 'This Act shall be called the Indian Penal Code, and shall extend to the whole of India...',
            notes: [
                'The Original words have successively been amended by Act 12 of 1891, s. 2 and Sch. I, the A.O. 1937, the A.O. 1948 and the A.O. 1950 to read as above.',
                'The words "except the State of Jammu and Kashmir" omitted by Act 34 of 2019, s. 95 and the Fifth Schedule (w.e.f. 31-10- 2019).'
            ]
        },
        {
            id: 2,
            title: 'IPC Section 2: Punishment of offences committed within India',
            content: 'Every person shall be liable to punishment under this Code and not otherwise for every act or omission contrary to the provisions thereof, of which he shall be guilty within India.',
            notes: [
                'The original words "the said territories" have successively been amended by the A.O. 1937, the A.O. 1948, the A.O 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above.',
                'The words and figures "on or after the said first day of May, 1861" rep. by Act 12 of 1891, s. 2 and the First Sch.'
            ],
            relatedSections: [
                'Related Section 1: Title and extent of operation of the Code'
            ]
        },
        {
            id: 3,
            title: 'IPC Section 3: Punishment of offences committed beyond, but which by law may be tried within, India',
            content: 'Any person liable, by any Indian law, to be tried for an offence committed beyond India shall be dealt with according to the provisions of this Code for any act committed beyond India in the same manner as if such act had been committed within India.',
            notes: [
                'The original words "the said territories" have successively been amended by the A.O. 1937, the A.O. 1948, the A.O 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above.',
                'Subs. by the A.O. 1937, for "law passed by the Governor General of India in Council".',
                'The Original words "the limits of the said territories" have successively been amended by the A.O. 1937, the A.O.1948, the A.O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above.'
            ],
            relatedSections: []
        },
        {
            id: 4,
            title: 'IPC Section 4: Extension of Code to extra-territorial offences',
            content: 'The provisions of this Code apply also to any offence committed by any citizen of India in any place without and beyond India; any person on any ship or aircraft registered in India wherever it may be; any person in any place without and beyond India committing offence targeting a computer resource located in India. Explanation: In this section, (a) the word "offence" includes every act committed outside India which, if committed in India, would be punishable under this Code; (b) the expression "computer resource" shall have the meaning assigned to it in clause (k) of sub-section (1) of section 2 of the Information Technology Act, 2000 (21 of 2000).',
            notes: [
                'Subs. by Act 4 of 1898, s. 2, for section 4.',
                'Subs. by the A.O. 1950, for cls. (1) to (4).',
                'Ins. by Act 10 of 2009, s. 51 (w.e.f. 27-10-2009).',
                'Subs. by s. 51, ibid., for the Explanation (w.e.f. 27-10-2009).',
                'Subs. by Act 36 of 1957, s. 3 and Schedule II, for "lllustrations".',
                'The brackets and letter "(a)" omitted by s. 3 and the Second Sch., ibid.',
                'Subs. by the A.O. 1948, for "a coolie, who is a Native Indian subject".',
                'Subs. by the A.O. 1950, for "a British subject of Indian domicile".',
                'The words "British India" have been successively amended by the A.O. 1948, the A.O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above.',
                'Illustrations (b), (c) and (d) omitted by the A.O. 1950.'
            ],
            relatedSections: []
        },
        {
            id: 5,
            title: 'IPC Section 5: Certain laws not to be affected by this Act',
            content: 'Nothing in this Act shall affect the provisions of any Act for punishing mutiny and desertion of officers, soldiers, sailors or airmen in the service of the Government of India or the provisions of any special or local law.',
            notes: [
                'Subs., ibid., for section 5.'
            ],
            relatedSections: []
        },
        {
            id: 6,
            title: 'IPC Section 6: Definitions in the Code to be understood subject to exceptions',
            content: 'Throughout this Code every definition of an offence, every penal provision, and every illustration of every such definition or penal provision, shall be understood subject to the exceptions contained in the Chapter entitled "General Exceptions", though those exceptions are not repeated in such definition, penal provision, or illustration. Illustrations: (a) The sections, in this Code, which contain definitions of offences, do not express that a child under seven years of age cannot commit such offences; but the definitions are to be understood subject to the general exception which provides that nothing shall be an offence which is done by a child under seven years of age. (b) A, a police-officer, without warrant, apprehends Z, who has committed murder. Here A is not guilty of the offence of wrongful confinement; for he was bound by law to apprehend Z, and therefore the case falls within the general exception which provides that "nothing is an offence which is done by a person who is bound by law to do it".',
            relatedSections: []
        },
        {
            id: 7,
            title: 'IPC Section 7: Sense of expression once explained',
            content: 'Every expression which is explained in any part of this Code, is used in every part of this Code in conformity with the explanation.',
            relatedSections: []
        },
        {
            id: 8,
            title: 'IPC Section 8: Gender',
            content: 'The pronoun "he" and its derivatives are used of any person, whether male or female.',
            relatedSections: []
        },
        {
            id: 9,
            title: 'IPC Section 9: Number',
            content: 'Unless the contrary appears from the context, words importing the singular number include the plural number, and words importing the plural number include the singular number.',
            relatedSections: []
        },
        {
            id: 10,
            title: 'IPC Section 10: "Man". "Woman"',
            content: 'The word "man" denotes a male human being of any age; the word "woman" denotes a female human being of any age.',
            relatedSections: []
        },
        {
            id: 11,
            title: 'IPC Section 11: "Person"',
            content: 'The word "person" includes any Company or Association or body of persons, whether incorporated or not.',
            relatedSections: []
        },
        {
            id: 12,
            title: 'IPC Section 12: "Public"',
            content: 'The word "public" includes any class of the public or any community.',
            relatedSections: []
        },
        {
            id: 13,
            title: 'IPC Section 13: [Omitted]',
            content: '["Definition of Queen".] Omitted by the A. O. 1950.',
            relatedSections: []
        },
        {
            id: 14,
            title: 'IPC Section 14: "Servant of Government"',
            content: 'The words "servant of Government" denote any officer or servant continued, appointed or employed in India by or under the authority of Government.',
            notes: [
                'Subs. by Act 4 of 1898, for section 14.'
            ],
            relatedSections: []
        },
        {
            id: 15,
            title: 'IPC Section 15: [Repealed]',
            content: '[Definition of "British India".] Rep. by the A. O. 1937.',
            relatedSections: []
        },
        {
            id: 16,
            title: 'IPC Section 16: [Repealed]',
            content: '[Definition of "Government of India".] Rep., ibid.',
            relatedSections: []
        },
        {
            id: 17,
            title: 'IPC Section 17: "Government"',
            content: 'The word "Government" denotes the Central Government or the Government of a State.',
            notes: [
                'Subs. by the A.O. 1950, for section 17.',
                'The word and letter "Part A" omitted by Act 3 of 1951, s. 3 and the Sch.'
            ],
            relatedSections: []
        },
        {
            id: 18,
            title: 'IPC Section 18: "India"',
            content: '"India" means the territory of India excluding the State of Jammu and Kashmir.',
            notes: [
                'Subs. by s. 3 and the Sch., ibid., for s. 18 which was ins. by the A.O. 1950. The Original s. 18 was rep. by the A.O. 1937.'
            ],
            relatedSections: []
        },
        {
            id: 19,
            title: 'IPC Section 19: "Judge"',
            content: 'The word "Judge" denotes not only every person who is officially designated as a Judge, but also every person who is empowered by law to give, in any legal proceeding, civil or criminal, a definitive judgment, or a judgment which, if not appealed against, would be definitive, or a judgment which, if confirmed by some other authority, would be definitive, or who is one of a body or persons, which body of persons is empowered by law to give such a judgment. Illustrations: (a) A Collector exercising jurisdiction in a suit under Act 10 of 1859, is a Judge. (b) A Magistrate exercising jurisdiction in respect of a charge on which he has power to sentence to fine or imprisonment, with or without appear, is a Judge. (c) A member of a panchayat which has power, under Regulation VII, 1816, of the Madras Code, to try and determine suits, is a Judge. (d) A Magistrate exercising jurisdiction in respect of a charge on which he has power only to commit for trial to another Court, is not a Judge.',
            notes: [
                'Rep. by the Madras Civil Courts Act, 1873 (3 of 1873).'
            ],
            relatedSections: []
        },
        {
            id: 20,
            title: 'IPC Section 20: "Court of Justice"',
            content: 'The words "Court of Justice" denote a Judge who is empowered by law to act judicially alone, or a body of Judges which is empowered by law to act judicially as a body, when such Judge or body of Judges is acting judicially. Illustration: A Panchayat acting under Regulation VII, 1816, of the Madras Code, having power to try and determine suits, is a Court of Justice.',
            notes: [
                'Rep. by the Madras Civil Courts Act, 1873 (3 of 1873).'
            ],
            relatedSections: []
        },
        
        
        
        
        {
            id: 300,
            title: 'IPC Section 300: Murder`',
            content: 'Defines the crime of murder and its punishments...',
            relatedSections: [
                'Related Section 1: Manslaughter',
                'Related Section 2: Attempted Murder',
            ],
        },
        {
            id: 302,
            title: 'IPC Section 302: Punishment for Murder',
            content: 'Provides the punishment for murder...',
            relatedSections: [
                'Related Section 1: Capital Punishment',
                'Related Section 2: Life Imprisonment',
            ],
        },
        // Add more IPC sections as needed
    ];

    const handleBoxClick = (id) => {
        setClickedBoxId(clickedBoxId === id ? null : id);
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Indian Penal Code (IPC) Laws</Text>
            {ipcData.map((item) => (
                <View key={item.id} style={styles.boxContainer}>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => handleBoxClick(item.id)}
                    >
                        <Text style={styles.heading}>{item.title}</Text>
                    </TouchableOpacity>
                    {clickedBoxId === item.id && (
                        <View style={styles.detailContainer}>
                            <Text style={styles.content}>{item.content}</Text>
                            {item.relatedSections.length > 0 && (
                                <>
                                    <Text style={styles.relatedTitle}>Related Sections:</Text>
                                    {item.relatedSections.map((section, index) => (
                                        <Text key={index} style={styles.relatedContent}>
                                            {section}
                                        </Text>
                                    ))}
                                </>
                            )}
                        </View>
                    )}
                </View>
            ))}
        </View>
        </ScrollView>
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