import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

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
            "id": 21,
            "title": "IPC Section 21: 'Public servant'",
            "content": "The term 'Public servant' denotes a person falling under any of the descriptions hereinafter following, namely:\n1. Every Commissioned Officer in the Military, Naval or Air Forces of India;\n2. Every Judge including any person empowered by law to discharge, whether by himself or as a member of any body of persons, any adjudicatory functions;\n3. Every officer of a Court of Justice (including a liquidator, receiver or commissioner) whose duty it is, as such officer, to investigate or report on any matter of law or fact, or to make, authenticate, or keep any document, or to take charge or dispose of any property, or to execute any judicial process, or to administer any oath, or to interpret, or to preserve order in the Court, and every person specially authorised by a Court of Justice to perform any of such duties;\n4. Every juryman, assessor, or member of a panchayat assisting a Court of Justice or public servant;\n5. Every arbitrator or other person to whom any cause or matter has been referred for decision or report by any Court of Justice, or by any other competent public authority;\n6. Every person who holds any office by virtue of which he is empowered to place or keep any person in confinement;\n7. Every officer of the Government whose duty it is, as such officer, to prevent offences, to give information of offences, to bring offenders to justice, or to protect the public health, safety or convenience;\n8. Every officer whose duty it is as such officer, to take, receive, keep or expend any property on behalf of the Government, or to make any survey, assessment or contract on behalf of the Government, or to execute any revenue-process, or to investigate, or to report, on any matter affecting the pecuniary interests of the Government, or to make, authenticate or keep any document relating to the pecuniary interests of the Government;\n9. Every officer whose duty it is, as such officer, to take, receive, keep or expend any property, to make any survey or assessment or to levy any rate or tax for any secular common purpose of any village, town or district, or to make, authenticate or keep any document for the ascertaining of the rights of the people of any village, town or district;\n10. Every person who holds any office in virtue of which he is empowered to prepare, publish, maintain or revise an electoral roll or to conduct an election or part of an election;\n11. Every person in the service or pay of the Government or remunerated by fees or commission for the performance of any public duty by the Government, or in the service or pay of a local authority, a corporation established by or under a Central, Provincial or State Act or a Government company as defined in section 617 of the Companies Act, 1956 (1 of 1956).\n",
            "notes": [
                "Cl. First omitted by the A.O. 1950.",
                "Subs. by Act 10 of 1927, s. 2 and the First Sch., for or Naval.",
                "The original words of the Queen while serving under the Government of India, or any Government have successively been amended by the A.O. 1937, the A.O. 1948 and the A.O. 1950 to read as above.",
                "The words of the Dominion omitted by the A.O. 1950.",
                "Subs. by Act 40 of 1964, s. 2, for cl. Third.",
                "Ins. by s. 2, ibid.",
                "Subs. by the A.O. 1950, for the Crown which had been subs. by the A.O. 1937, for Government.",
                "Certain words omitted by Act 40 of 1964, s. 2.",
                "Ins. by Act 39 of 1920, s. 2.",
                "Subs. by Act 40 of 1964, s. 2, for Cl. Twelfth.",
                "Explanation 4 omitted by Act 39 of 1920, s. 2."
            ],
            "relatedSections": []
        },
        {
            "id": 22,
            "title": "IPC Section 22: 'Moveable property'",
            "content": "The words 'movable property' are intended to include corporeal property of every description, except land and things attached to the earth or permanently fastened to anything which is attached to the earth.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 23,
            "title": "IPC Section 23: 'Wrongful gain'",
            "content": "\"Wrongful gain\" is gain by unlawful means of property to which the person gaining is not legally entitled.\n\"Wrongful loss\".―\"Wrongful loss\" is the loss by unlawful means of property to which the person losing it is legally entitled.\nGaining wrongfully/Losing wrongfully.―A person is said to gain wrongfully when such person retains wrongfully, as well as when such person acquires wrongfully. A person is said to lose wrongfully when such person is wrongfully kept out of any property, as well as when such person is wrongfully deprived of property.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 24,
            "title": "IPC Section 24: 'Dishonestly'",
            "content": "Whoever does anything with the intention of causing wrongful gain to one person or wrongful loss to another person, is said to do that thing \"dishonestly\".",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 25,
            "title": "IPC Section 25: 'Fraudulently'",
            "content": "A person is said to do a thing fraudulently if he does that thing with intent to defraud but not otherwise.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 26,
            "title": "IPC Section 26: 'Reason to believe'",
            "content": "A person is said to have \"reason to believe\" a thing, if he has sufficient cause to believe that thing but not otherwise.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 27,
            "title": "IPC Section 27: 'Property in possession of wife, clerk or servant'",
            "content": "When property is in the possession of a person's wife, clerk or servant, on account of that person, it is in that person's possession within the meaning of this Code.\nExplanation.—A person employed temporarily or on a particular occasion in the capacity of a clerk or servant, is a clerk or servant within the meaning of this section.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 28,
            "title": "IPC Section 28: 'Counterfeit'",
            "content": "A person is said to \"counterfeit\" who causes one thing to resemble another thing, intending by means of that resemblance to practise deception, or knowing it to be likely that deception will thereby be practised.\nExplanation 1.—It is not essential to counterfeiting that the imitation should be exact.\nExplanation 2.—When a person causes one thing to resemble another thing, and the resemblance is such that a person might be deceived thereby, it shall be presumed, until the contrary is proved, that the person so causing the one thing to resemble the other thing intended by means of that resemblance to practise deception or knew it to be likely that deception would thereby be practised.",
            "notes": [
                "Subs. by Act 1 of 1889, s. 9, for the \"Explanation\""
            ],
            "relatedSections": []
        },
        {
            "id": 29,
            "title": "IPC Section 29: 'Document'",
            "content": "The word \"document\" denotes any matter expressed or described upon any substance by means of letters, figures or marks, or by more than one of those means, intended to be used, or which may be used, as evidence of that matter.\nExplanation 1.—It is immaterial by what means or upon what substance the letters, figures or marks are formed, or whether the evidence is intended for, or may be used in, a Court of Justice, or not.\nIllustrations:\n- A writing expressing the terms of a contract, which may be used as evidence of the contract, is a document.\n- A cheque upon a banker is a document.\n- A power-of-attorney is a document.\n- A map or plan which is intended to be used or which may be used as evidence, is a document.\n- A writing containing directions or instructions is a document.\nExplanation 2.—Whatever is expressed by means of letters, figures or marks as explained by mercantile or other usage, shall be deemed to be expressed by such letters, figures or marks within the meaning of this section, although the same may not be actually expressed.\nIllustration:\n- A writes his name on the back of a bill of exchange payable to his order. The meaning of the endorsement, as explained by mercantile usage, is that the bill is to be paid to the holder. The endorsement is a document, and must be construed in the same manner as if the words \"pay to the holder\" or words to that effect had been written over the signature.",
            "notes": [],
            "relatedSections":[],
        },
        {
            "id": 29.1,
            "title": "IPC Section 29A: 'Electronic record'",
            "content": "29A. “Electronic record”.—The words \"electronic record\" shall have the meaning assigned to them in clause (t) of sub-section (1) of section 2 of the Information Technology Act, 2000 (21 of 2000).",
            "notes": [
                "Ins. by Act 21 of 2000, s. 91 and the First Sch. (w.e.f. 17-10-2000)."
            ],
            "relatedSections": []
        },
        {
            "id": 30,
            "title": "IPC Section 30: 'Valuable security'",
            "content": "The words \"valuable security\" denote a document which is, or purports to be, a document whereby any legal right is created, extended, transferred, restricted, extinguished or released, or whereby any person acknowledges that he lies under legal liability, or has not a certain legal right.\nIllustration:\n- A writes his name on the back of a bill of exchange. As the effect of this endorsement is to transfer the right to the bill to any person who may become the unlawful holder of it, the endorsement is a \"valuable security\".",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 31,
            "title": "IPC Section 31: 'A will'",
            "content": "The words \"a will\" denote any testamentary document.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 32,
            "title": "IPC Section 32: 'Words referring to acts include illegal omissions'",
            "content": "In every part of this Code, except where a contrary intention appears from the context, words which refer to acts done extend also to illegal omissions.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 33,
            "title": "IPC Section 33: 'Act' and 'Omission'",
            "content": "\"Act\". \"Omission\".-- The word \"act\" denotes as well as series of acts as a single act: the word \"omission\" denotes as well a series of omissions as a single omission.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 34,
            "title": "IPC Section 34: 'Acts done by several persons in furtherance of common intention'",
            "content": "Acts done by several persons in furtherance of common intention.—When a criminal act is done by several persons in furtherance of the common intention of all, each of such persons is liable for that act in the same manner as if it were done by him alone.",
            "notes": [
                "Subs. by Act 27 of 1870, s. 1, for section 34."
            ],
            "relatedSections": []
        },
        {
            "id": 35,
            "title": "IPC Section 35: 'When such an act is criminal by reason of its being done with a criminal knowledge or intention'",
            "content": "Whenever an act, which is criminal only by reason of its being done with a criminal knowledge or intention, is done by several persons, each of such persons who joins in the act with such knowledge or intention is liable for the act in the same manner as if the act were done by him alone with that knowledge or intention.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 36,
            "title": "IPC Section 36: 'Effect caused partly by act and partly by omission'",
            "content": "Wherever the causing of a certain effect, or an attempt to cause that effect, by an act or by an omission, is an offence, it is to be understood that the causing of that effect partly by an act and partly by an omission is the same offence.\n\nIllustration:\nA intentionally causes Z's death, partly by illegally omitting to give Z food, and partly by beating Z. A has committed murder.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 37,
            "title": "IPC Section 37: 'Co-operation by doing one of several acts constituting an offence'",
            "content": "When an offence is committed by means of several acts, whoever intentionally co-operates in the commission of that offence by doing any one of those acts, either singly or jointly with any other person, commits that offence.\n\nIllustrations:\n(a) A and B agree to murder Z by severally and at different times giving him small doses of poison. A and B administer the poison according to the agreement with intent to murder Z. Z dies from the effects the several doses of poison so administered to him. Here A and B intentionally cooperate in the commission of murder and as each of them does an act by which the death is caused, they are both guilty of the offence though their acts are separate.\n(b) A and B are joint jailors, and as such have the charge of Z, a prisoner, alternatively for six hours at a time. A and B, intending to cause Z's death, knowingly co-operate in causing that effect by illegally omitting, each during the time of his attendance, to furnish Z with food supplied to them for that purpose. Z dies of hunger. Both A and B are guilty of the murder of Z.\n(c) A, a jailor, has the charge of Z, a prisoner. A, intending to cause Z's death, illegally omits to supply Z with food; in consequence of which Z is much reduced in strength, but the starvation is not sufficient to cause his death. A is dismissed from his office, and B succeeds him. B, without collusion or co-operation with A, illegally omits to supply Z with food, knowing that he is likely thereby to cause Z's death. Z dies of hunger. B is guilty of murder, but, as A did not co-operate with B. A is guilty only of an attempt to commit murder.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 38,
            "title": "IPC Section 38: 'Persons concerned in criminal act may be guilty of different offences'",
            "content": "Where several persons are engaged or concerned in the commission of a criminal act, they may be guilty of different offences by means of that act.\n\nIllustration:\nA attacks Z under such circumstances of grave provocation that his killing of Z would be only culpable homicide not amounting to murder. B, having ill-will towards Z and intending to kill him, and not having been subject to the provocation, assists A in killing Z. Here, though A and B are both engaged in causing Z's death, B is guilty of murder, and A is guilty only of culpable homicide.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 39,
            "title": "IPC Section 39: 'Voluntarily'",
            "content": "A person is said to cause an effect 'voluntarily' when he causes it by means whereby he intended to cause it, or by means which, at the time of employing those means, he knew or had reason to believe to be likely to cause it.\n\nIllustration:\nA sets fire, by night, to an inhabited house in a large town, for the purpose of facilitating a robbery and thus causes the death of a person. Here, A may not have intended to cause death; and may even be sorry that death has been caused by his act; yet, if he knew that he was likely to cause death, he has caused death voluntarily.",
            "notes": [],
            "relatedSections": []
        },
        {
            "id": 40,
            "title": "IPC Section 40: 'Offence'",
            "content": "Except in the Chapters and sections mentioned in clauses 2 and 3 of this section, the word 'offence' denotes a thing made punishable by this Code.\n\nIn Chapter IV, Chapter VA and in the following sections, namely, sections 64, 65, 66, 67, 71, 109, 110, 112, 114, 115, 116, 117, 118, 119 and 120, 187, 194, 195, 203, 211, 213, 214, 221, 222, 223, 224, 225, 327, 328, 329, 330, 331, 347, 348, 388, 389 and 445, the word 'offence' denotes a thing punishable under this Code, or under any special or local law as hereinafter defined.\n\nAnd in sections 141, 176, 177, 201, 202, 212, 216 and 441, the word 'offence' has the same meaning when the thing punishable under the special or local law is punishable under such law with imprisonment for a term of six months or upwards, whether with or without fine.",
            "notes": [
                "Substituted by Act 27 of 1870, s. 2, for section 40.",
                "Substituted by Act 8 of 1930, s. 2 and the First Sch., for 'Chapter'.",
                "Inserted by Act 8 of 1913, s. 2.",
                "Inserted by Act 8 of 1882, s. 1.",
                "Inserted by Act 10 of 1886, s. 21 (1).",
                "Inserted by Act 10 of 2009, s. 51 (w.e.f. 27-10-2009)."
            ]
        },
        {
            "id": 41,
            "title": "IPC Section 41: 'Special law'",
            "content": "A 'special law' is a law applicable to a particular subject."
        },
        {
            "id": 42,
            "title": "IPC Section 42: 'Local law'",
            "content": "A 'local law' is a law applicable only to a particular part of India.",
            "amendments": [
                {
                    "description": "Substituted by the A.O. 1948, for 'British India'.",
                    "date": "The A.O. 1948"
                },
                {
                    "description": "The words 'the territories comprised in' omitted by Act 48 of 1952, s. 3 and the Second Sch.",
                    "date": "Act 48 of 1952"
                },
                {
                    "description": "Substituted by Act 3 of 1951, s. 3 and the Sch., for 'the States' which had been substituted by the A.O. 1950, for 'the Provinces'.",
                    "date": "Act 3 of 1951"
                }
            ]
        },
        {
            "id": 43,
            "title": "IPC Section 43: 'Illegal' and 'Legally bound to do'",
            "content": "\"Illegal\". \"Legally bound to do\" -- The word \"illegal\" is applicable to everything which is an offence or which is prohibited by law, or which furnishes ground for a civil action; and a person is said to be \"legally bound to do\" whatever it is illegal in him to omit."
        },
        {
            "id": 45,
            "title": "IPC Section 45: 'Life'",
            "content": "The word \"life\" denotes the life of a human being, unless the contrary appears from the context."
        },
        {
            "id": 47,
            "title": "IPC Section 47: Animal",
            "content": "The word 'animal' denotes any living creature, other than a human being."
        },
        {
            "id": 48,
            "title": "IPC Section 48: Vessel",
            "content": "The word 'vessel' denotes anything made for the conveyance by water of human beings or of property."
        },
        {
            "id": 49,
            "title": "IPC Section 49: Year and Month",
            "content": "Wherever the word 'year' or the word 'month' is used, it is to be understood that the year or the month is to be reckoned according to the British calendar."
        },
        {
            "id": 50,
            "title": "IPC Section 50: Section",
            "content": "The word 'section' denotes one of those portions of a Chapter of this Code which are distinguished by prefixed numeral figures."
        },
        {
            "id": 51,
            "title": "IPC Section 51: Oath",
            "content": "The word 'oath' includes a solemn affirmation substituted by law for an oath, and any declaration required or authorised by law to be made before a public servant or to be used for the purpose of proof, whether in a Court of Justice or not."
        },
        {
            "id": 52,
            "title": "IPC Section 52: Good faith",
            "content": "Nothing is said to be done or believed in 'good faith' which is done or believed without due care and attention."
        },
        {
            "id": 52.1,
            "title": "IPC Section 52A: Harbour",
            "content": "Except in section 157, and in section 130 in the case in which the harbour is given by the wife or husband of the person harboured, the word 'harbour' includes the supplying a person with shelter, food, drink, money, clothes, arms, ammunition or means of conveyance, or the assisting a person by any means, whether of the same kind as those enumerated in this section or not, to evade apprehension.",
            "relatedSections": [
                "Section 157: Harbouring offender",
                "Section 130: Aiding escape of, rescuing or harbouring such prisoner",
                "Section 2: Punishment of offences committed within India"
            ]
        },
        {
            "id": 54,
            "title": "IPC Section 54: Commutation of sentence of death",
            "content": "In every case in which sentence of death shall have been passed, the appropriate Government may, without the consent of the offender, commute the punishment for any other punishment provided by this Code.",
            "notes": "Substituted by the A.O. 1950, for the Central Government or the Provincial Government of the Province within which the offender shall have been sentenced. The words in italics were substituted by the A.O. 1937, for the Government of India or the Government of the place."
        },
        {
            "id": 55,
            "title": "IPC Section 55: Commutation of sentence of imprisonment for life",
            "content": "In every case in which sentence of imprisonment for life shall have been passed, the appropriate Government may, without the consent of the offender, commute the punishment for imprisonment of either description for a term not exceeding fourteen years.",
            "relatedSections": [
                "Related Section 1: Commutation of sentence of death (IPC Section 54)"
            ],
            "notes": "Substituted by Act 26 of 1955, s. 117 and the Sch., for transportation (w.e.f. 1-1-1956). Substituted by the A.O. 1950, for the Provincial Government of the Province within which the offender shall have been sentenced. The words in italics were substituted by the A.O. 1937, for the Government of India or the Government of the place."
        },
        {
            "id": 55.1,
            "title": "IPC Section 55A: Definition of \"appropriate Government\"",
            "content": "In sections fifty-four and fifty-five the expression \"appropriate Government\" means:\n(a) in cases where the sentence is a sentence of death or is for an offence against any law relating to a matter to which the executive power of the Union extends, the Central Government; and\n(b) in cases where the sentence (whether of death or not) is for an offence against any law relating to a matter to which the executive power of the State extends, the Government of the State within which the offender is sentenced.",
            "notes": "Substituted by the A. O 1950. Earlier inserted by the A. O. 1937."
        },
        {
            "id": 56,
            "title": "IPC Section 56: [Repealed.]",
            "content": "[Sentence of Europeans and Americans to penal servitude. Proviso as to sentence for term exceeding ten years but not for life.] Rep. by the Criminal Law (Removal of Racial Discriminations) Act, 1949 (17 of 1949) (w. e. f. 6-4-1949).",
            "notes": "Rep. by the Criminal Law (Removal of Racial Discriminations) Act, 1949 (17 of 1949) (w. e. f. 6-4-1949)"
        },
        {
            "id": 57,
            "title": "IPC Section 57: Fractions of terms of punishment",
            "content": "In calculating fractions of terms of punishment, imprisonment for life shall be reckoned as equivalent to imprisonment for twenty years.",
            "relatedSections": [
                "Related Section 1: Section 57A: Fractions of terms of punishment"
            ],
            "notes": "Subs. by Act 26 of 1955, s. 117 and the Sch., for \"transportation\" (w.e.f. 1-1-1956)."
        },
        {
            "id": 58,
            "title": "IPC Section 58: [Repealed.]",
            "content": "[Offenders sentenced to transportation how dealt with until transported. Rep.] by the Code of Criminal Procedure (Amendment) Act, 1955 (26 of 1955), s. 117 and the Sch. (w.e.f. 1-1-1956)."
        },
        {
            "id": 59,
            "title": "IPC Section 59: [Repealed.]",
            "content": "[Transportation instead of imprisonment. Rep.] by s.117 and the Sch., ibid. (w.e.f. 1-1-1956)."
        },
        {
            "id": 60,
            "title": "IPC Section 60: Sentence may be (in certain cases of imprisonment) wholly or partly rigorous of simple.",
            "content": "In every case in which an offender is punishable with imprisonment which may be of either description, it shall be competent to the Court which sentences such offender to direct in the sentence that such imprisonment shall be wholly rigorous, or that such imprisonment shall be wholly simple, or that any part of such imprisonment shall be rigorous and the rest simple."
        },
        {
            "id": 61,
            "title": "IPC Section 61: [Repealed.]",
            "content": "[Sentence of forfeiture of property. Rep.] by the Indian Penal Code (Amendment) Act, 1921 (16 of 1921), s. 4."
        },
        {
            "id": 62,
            "title": "IPC Section 62: [Repealed.]",
            "content": "[Forfeiture of property, in respect of offenders punishable with death, transportation or imprisonment. Rep.] by s. 4 ibid."
        },
        {
            "id": 63,
            "title": "IPC Section 63: Amount of fine",
            "content": "Where no sum is expressed to which a fine may extend, the amount of fine to which the offender is liable is unlimited, but shall not be excessive."
        },
        {
            "id": 64,
            "title": "IPC Section 64: Sentence of imprisonment for non-payment of fine",
            "content": "In every case of an offence punishable with imprisonment as well as fine, in which the offender is sentenced to a fine, whether with or without imprisonment, and in every case of an offence punishable with imprisonment or fine, or with fine only, in which the offender is sentenced to a fine, it shall be competent to the Court which sentences such offender to direct by the sentence that, in default of payment of the fine, the offender shall suffer imprisonment for a certain term, which imprisonment shall be in excess of any other imprisonment to which he may have been sentenced or to which he may be liable under a commutation of a sentence.",
            "relatedSections": [
                "Related Section 1: Substituted by Act 8 of 1882, s. 2, for 'In every case in which an offender is sentenced to a fine'.",
                "Related Section 2: Inserted by Act 10 of 1886, s. 21 (2)."
            ]
        },
        {
            "id": 65,
            "title": "IPC Section 65: Limit to imprisonment for non-payment of fine, when imprisonment and fine awardable",
            "content": "The term for which the Court directs the offender to be imprisoned in default of payment of a fine shall not exceed one-fourth of the term of imprisonment which is the maximum fixed for the offence, if the offence be punishable with imprisonment as well as fine."
        },
        {
            "id": 66,
            "title": "IPC Section 66: Description of imprisonment for non-payment of fine",
            "content": "The imprisonment which the Court imposes in default of payment of a fine may be of any description to which the offender might have been sentenced for the offence."
        },
        {
            "id": 67,
            "title": "IPC Section 67: Imprisonment for non-payment of fine, when offence punishable with fine only",
            "content": "If the offence be punishable with fine only, the imprisonment which the Court imposes in default of payment of the fine shall be simple, and the term for which the Court directs the offender to be imprisoned, in default of payment of fine, shall not exceed the following scale, that is to say, for any term not exceeding two months when the amount of the fine shall not exceed fifty rupees, and for any term not exceeding four months when the amount shall not exceed one hundred rupees, and for any term not exceeding six months in any other case.",
            "relatedSections": [
                "Related Section 64: Sentence of imprisonment for non-payment of fine"
            ]
        },
        {
            "id": 68,
            "title": "IPC Section 68: Imprisonment to terminate on payment of fine",
            "content": "The imprisonment which is imposed in default of payment of a fine shall terminate whenever that fine is either paid or levied by process of law."
        },
        {
            "id": 69,
            "title": "IPC Section 69: Termination of imprisonment on payment of proportional part of fine",
            "content": "If, before the expiration of the term of imprisonment fixed in default of payment, such a proportion of the fine be paid or levied that the term of imprisonment suffered in default of payment is not less than proportional to the part of the fine still unpaid, the imprisonment shall terminate.",
            "illustration": {
                "scenario": "A is sentenced to a fine of one hundred rupees and to four months' imprisonment in default of payment.",
                "example": [
                    "If seventy-five rupees of the fine be paid or levied before the expiration of one month of the imprisonment, A will be discharged as soon as the first month has expired.",
                    "If seventy-five rupees be paid or levied at the time of the expiration of the first month, or at any later time while A continues in imprisonment, A will be immediately discharged.",
                    "If fifty rupees of the fine be paid or levied before the expiration of two months of the imprisonment, A will be discharged as soon as the two months are completed.",
                    "If fifty rupees be paid or levied at the time of the expiration of those two months, or at any later time while A continues in imprisonment, A will be immediately discharged."
                ]
            }
        },
        {
            "id": 70,
            "title": "IPC Section 70: Fine leviable within six years, or during imprisonment; Death not to discharge property from liability",
            "content": "The fine, or any part thereof which remains unpaid, may be levied at any time within six years after the passing of the sentence, and if, under the sentence, the offender be liable to imprisonment for a longer period than six years, then at any time previous to the expiration of that period; and the death of the offender does not discharge from the liability any property which would, after his death, be legally liable for his debts."
        },
        {
            "id": 71,
            "title": "IPC Section 71: Limit of punishment of offence made up of several offences",
            "content": "Where anything which is an offence is made up of parts, any of which parts is itself an offence, the offender shall not be punished with the punishment of more than one of such his offences, unless it be so expressly provided.\nWhere anything is an offence falling within two or more separate definitions of any law in force for the time being by which offences are defined or punished, or where several acts, of which one or more than one would by itself or themselves constitute an offence, constitute, when combined, a different offence, the offender shall not be punished with a more severe punishment than the Court which tries him could award for any one of such offences.",
            "illustrations": [
                {
                    "text": "(a) A gives Z fifty strokes with a stick. Here A may have committed the offence of voluntarily causing hurt to Z by the whole beating, and also by each of the blows which make up the whole beating. If A were liable to punishment for every blow, he might be imprisoned for fifty years, one for each blow. But he is liable only to one punishment for the whole beating.",
                    "explanation": ""
                },
                {
                    "text": "(b) But, if, while A is beating Z, Y interferes, and A intentionally strikes Y, here, as the blow given to Y is no part of the act whereby A voluntarily causes hurt to Z, A is liable to one punishment for voluntarily causing hurt to Z, and to another for the blow given to Y."
                },
                {
                    "notes": "1. Added by s. 4, ibid."
                }
            ]
        },
        {
            "id": 72,
            "title": "IPC Section 72: Punishment of person guilty of one of several offences, the judgment stating that is doubtful of which",
            "content": "In all cases in which judgment is given that a person is guilty of one of several offences specified in the judgment, but that it is doubtful of which of these offences he is guilty, the offender shall be punished for the offence for which the lowest punishment is provided if the same punishment is not provided for all."
        },
        {
            "id": 73,
            "title": "IPC Section 73: Solitary confinement",
            "content": "Whenever any person is convicted of an offence for which under this Code the Court has power to sentence him to rigorous imprisonment, the Court may, by its sentence, order that the offender shall be kept in solitary confinement for any portion or portions of the imprisonment to which he is sentenced, not exceeding three months in the whole, according to the following scale, that is to say— a time not exceeding one month if the term of imprisonment shall not exceed six months; a time not exceeding two months if the term of imprisonment shall exceed six months and shall not exceed one year; a time not exceeding three months if the term of imprisonment shall exceed one year.",
            "notes": "1. Subs. by Act 8 of 1862, s. 5, for 'be less than a'."
        },
        {
            "id": 74,
            "title": "IPC Section 74: Limit of solitary confinement",
            "content": "In executing a sentence of solitary confinement, such confinement shall in no case exceed fourteen days at a time, with intervals between the periods of solitary confinement of not less duration than such periods; and when the imprisonment awarded shall exceed three months, the solitary confinement shall not exceed seven days in any one month of the whole imprisonment awarded, with intervals between the periods of solitary confinement of not less duration than such periods."
        },
        {
            "id": 75,
            "title": "IPC Section 75: Enhanced punishment for certain offences under Chapter XII or Chapter XVII after previous conviction",
            "content": "Whoever, having been convicted,--(a) by a Court in India, of an offence punishable under Chapter XII or Chapter XVII of this Code with imprisonment of either description for a term of three years or upwards, shall be guilty of any offence punishable under either of those Chapters with like imprisonment for the like term, shall be subject for every such subsequent offence to imprisonment for life, or to imprisonment of either description for a term which may extend to ten years.",
            "relatedSections": [],
            "notes": [
                "The words \"British India\" have successively been substituted by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above.",
                "The word \"or\" omitted by Act 3 of 1951, s. 3 and the Sch.",
                "Clause (b) omitted by s. 3 and the Sch., ibid.",
                "Subs. by Act 26 of 1955, s. 117 and the Sch., for \"transportation for life\" (w.e.f. 1-1-1956)."
            ]
        },
        {
            "id": 76,
            "title": "IPC Section 76: Act done by a person bound, or by mistake of fact believing himself bound, by law",
            "content": "Nothing is an offence which is done by a person who is, or who by reason of a mistake of fact and not by reason of a mistake of law in good faith believes himself to be, bound by law to do it.",
            "illustrations": [
                "A, a soldier, fires on a mob by the order of his superior officer, in conformity with the commands of the law. A has committed no offence.",
                "A, an officer of a Court of Justice, being ordered by that Court to arrest Y, and after due enquiry, believing Z to be Y, arrests Z. A has committed no offence."
            ]
        },
        {
            "id": 77,
            "title": "IPC Section 77: Act of Judge when acting judicially",
            "content": "Nothing is an offence which is done by a Judge when acting judicially in the exercise of any power which is, or which in good faith he believes to be, given to him by law."
        },
        {
            "id": 78,
            "title": "IPC Section 78: Act done pursuant to the judgment or order of Court",
            "content": "Nothing which is done in pursuance of, or which is warranted by the judgment or order of, a Court of Justice; if done whilst such judgment or order remains in force, is an offence, notwithstanding the Court may have had no jurisdiction to pass such judgment or order, provided the person doing the act in good faith believes that the Court had such jurisdiction."
        },
        {
            "id": 79,
            "title": "IPC Section 79: Act done by a person justified, or by mistake of fact believing himself justified, by law",
            "content": "Nothing is an offence which is done by any person who is justified by law, or who by reason of a mistake of fact and not by reason of a mistake of law in good faith, believes himself to be justified by law, in doing it.",
            "illustration": "A sees Z commit what appears to A to be a murder. A, in the exercise, to the best of his judgment exerted in good faith, of the power which the law gives to all persons of apprehending murderers in the fact, seizes Z, in order to bring Z before the proper authorities. A has committed no offence, though it may turn out that Z was acting in self-defence."
        },
        {
            "id": 80,
            "title": "IPC Section 80: Accident in doing a lawful act",
            "content": "Nothing is an offence which is done by accident or misfortune, and without any criminal intention or knowledge in the doing of a lawful act in a lawful manner by lawful means and with proper care and caution.",
            "illustration": "A is at work with a hatchet; the head flies off and kills a man who is standing by. Here, if there was no want of proper caution on the part of A, his act is excusable and not an offence."
        },
        {
            "id": 81,
            "title": "IPC Section 81: Act likely to cause harm, but done without criminal intent, and to prevent other harm",
            "content": "Nothing is an offence merely by reason of its being done with the knowledge that it is likely to cause harm, if it be done without any criminal intention to cause harm, and in good faith for the purpose of preventing or avoiding other harm to person or property.",
            "explanation": "It is a question of fact in such a case whether the harm to be prevented or avoided was of such a nature and so imminent as to justify or excuse the risk of doing the act with the knowledge that it was likely to cause harm.",
            "illustrations": [
                {
                    "example": "A, the captain of a steam vessel, suddenly, and without any fault or negligence on his part, finds himself in such a position that, before he can stop his vessel, he must inevitably run down a boat B, with twenty or thirty passengers on board, unless he changes the course of his vessel, and that, by changing his course, he must incur risk of running down a boat C with only two passengers on board, which he may possibly clear. Here, if A alters his course without any intention to run down the boat C and in good faith for the purpose of avoiding the danger to the passengers in the boat B, he is not guilty of an offence, though he may run down the boat C by doing an act which he knew was likely to cause that effect, if it be found as a matter of fact that the danger which he intended to avoid was such as to excuse him in incurring the risk of running down C."
                },
                {
                    "example": "A, in a great fire, pulls down houses in order to prevent the conflagration from spreading. He does this with the intention in good faith of saving human life or property. Here, if it be found that the harm to be prevented was of such a nature and so imminent as to excuse A's act, A is not guilty of the offence"
                }
            ]
        },
        {
            "id": 82,
            "title": "IPC Section 82: Act of a child under seven years of age",
            "content": "Nothing is an offence which is done by a child under seven years of age."
        },
        {
            "id": 83,
            "title": "IPC Section 83: Act of a child above seven and under twelve of immature understanding",
            "content": "Nothing is an offence which is done by a child above seven years of age and under twelve, who has not attained sufficient maturity of understanding to judge of the nature and consequences of his conduct on that occasion."
        },
        {
            "id": 84,
            "title": "IPC Section 84: Act of a person of unsound mind",
            "content": "Nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing the nature of the act, or that he is doing what is either wrong or contrary to law."
        },
        {
            "id": 85,
            "title": "IPC Section 85: Act of a person incapable of judgment by reason of intoxication caused against his will",
            "content": "Nothing is an offence which is done by a person who, at the time of doing it, is, by reason of intoxication, incapable of knowing the nature of the act, or that he is doing what is either wrong, or contrary to law: provided that the thing which intoxicated him was administered to him without his knowledge or against his will."
        },
        {
            "id": 86,
            "title": "IPC Section 86: Offence requiring a particular intent or knowledge committed by one who is intoxicated",
            "content": "In cases where an act done is not an offence unless done with a particular knowledge or intent, a person who does the act in a state of intoxication shall be liable to be dealt with as if he had the same knowledge as he would have had if he had not been intoxicated, unless the thing which intoxicated him was administered to him without his knowledge or against his will."
        },
        {
            "id": 87,
            "title": "IPC Section 87: Act not intended and not known to be likely to cause death or grievous hurt, done by consent",
            "content": "Nothing which is not intended to cause death, or grievous hurt, and which is not known by the doer to be likely to cause death or grievous hurt, is an offence by reason of any harm which it may cause, or be intended by the doer to cause, to any person, above eighteen years of age, who has given consent, whether express or implied, to suffer that harm; or by reason of any harm which it may be known by the doer to be likely to cause to any such person who has consented to take the risk of that harm.",
            "illustration": "A and Z agree to fence with each other for amusement. This agreement implies the consent of each to suffer any harm which, in the course of such fencing, may be caused without foul play; and if A, while playing fairly, hurts Z, A commits no offence."
        },
        {
            "id": 88,
            "title": "IPC Section 88: Act not intended to cause death, done by consent in good faith for person's benefit",
            "content": "Nothing, which is not intended to cause death, is an offence by reason of any harm which it may cause, or be intended by the doer to cause, or be known by the doer to be likely to cause, to any person for whose benefit it is done in good faith, and who has given a consent, whether express or implied, to suffer that harm, or to take the risk of that harm.",
            "illustration": "A, a surgeon, knowing that a particular operation is likely to cause the death of Z, who suffers under the painful complaint, but not intending to cause Z's death, and intending, in good faith, Z's benefit, performs that operation on Z, with Z's consent. A has committed no offence."
        },
        {
            "id": 89,
            "title": "IPC Section 89: Act done in good faith for benefit of child or insane person, by or by consent of guardian",
            "content": "Nothing which is done in good faith for the benefit of a person under twelve years of age, or of unsound mind, by or by consent, either express or implied, of the guardian or other person having lawful charge of that person, is an offence by reason of any harm which it may cause, or be intended by the doer to cause or be known by the doer to be likely to cause to that person: Provided— Provisos. First.—That this exception shall not extend to the intentional causing of death, or to the attempting to cause death; Secondly.—That this exception shall not extend to the doing of anything which the person doing it knows to be likely to cause death, for any purpose other than the preventing of death or grievous hurt, or the curing of any grievous disease or infirmity; Thirdly.—That this exception shall not extend to the voluntary causing of grievous hurt, or to the attempting to cause grievous hurt, unless it be for the purpose of preventing death or grievous hurt, or the curing of any grievous disease or infirmity; Fourthly.—That this exception shall not extend to the abetment of any offence, to the committing of which offence it would not extend.",
            "illustration": "A, in good faith, for his child's benefit without his child's consent, has his child cut for the stone by a surgeon knowing it to be likely that the operation will cause the child's death, but not intending to cause the child's death. A is within the exception, inasmuch as his object was the cure of the child."
        },
        {
            "id": 90,
            "title": "IPC Section 90: Consent known to be given under fear or misconception",
            "content": "A consent is not such a consent as is intended by any section of this Code, if the consent is given by a person under fear of injury, or under a misconception of fact, and if the person doing the act knows, or has reason to believe, that the consent was given in consequence of such fear or misconception; or Consent of insane person.—if the consent is given by a person who, from unsoundness of mind, or intoxication, is unable to understand the nature and consequence of that to which he gives his consent; or Consent of child.—unless the contrary appears from the context, if the consent is given by a person who is under twelve years of age."
        },
        {
            "id": 91,
            "title": "IPC Section 91: Exclusion of acts which are offences independently of harm caused",
            "content": "The exceptions in sections 87, 88 and 89 do not extend to acts which are offences independently of any harm which they may cause, or be intended to cause, or be known to be likely to cause, to the person giving the consent, or on whose behalf the consent is given.",
            "illustration":"Causing miscarriage (unless caused in good faith for the purpose of saving the life of the woman) is offence independently of any harm which it may cause or be intended to cause to the woman. Therefore, it is not an offence by reason of such harm and the consent of the woman or of her guardian to the causing of such miscarriage does not justify the act."
        },
        {
            "id": 92,
            "title": "IPC Section 92: Act done in good faith for benefit of a person without consent",
            "content": "Nothing is an offence by reason of any harm which it may cause to a person for whose benefit it is done in good faith, even without that person's consent, if the circumstances are such that it is impossible for that person to signify consent, or if that person is incapable of giving consent, and has no guardian or other person in lawful charge of him from whom it is possible to obtain consent in time for the thing to be done with benefit.",
            "provisos": [
              "This exception shall not extend to the intentional causing of death, or the attempting to cause death.",
              "This exception shall not extend to the doing of anything which the person doing it knows to be likely to cause death, for any purpose other than the preventing of death or grievous hurt, or the curing of any grievous disease or infirmity.",
              "This exception shall not extend to the voluntary causing of hurt, or to the attempting to cause hurt, for any purpose other than the preventing of death or hurt.",
              "This exception shall not extend to the abetment of any offence, to the committing of which offence it would not extend."
            ],
            "illustrations": [
              {
                "id": "a",
                "description": "Z is thrown from his horse, and is insensible. A, a surgeon, finds that Z requires to be trepanned. A, not intending Z's death, but in good faith, for Z's benefit, performs the trepan before Z recovers his power of judging for himself. A has committed no offence."
              },
              {
                "id": "b",
                "description": "Z is carried off by a tiger. A fires at the tiger knowing it to be likely that the shot may kill Z, but not intending to kill Z, and in good faith intending Z's benefit. A's ball gives Z a mortal wound. A has committed no offence."
              },
              {
                "id": "c",
                "description": "A, a surgeon, sees a child suffer an accident which is likely to prove fatal unless an operation be immediately performed. There is not time to apply to the child's guardian. A performs the operation in spite of the entreaties of the child, intending, in good faith, the child's benefit. A has committed no offence."
              },
              {
                "id": "d",
                "description": "A is in a house which is on fire, with Z, a child. People below hold out a blanket. A drops the child from the housestop, knowing it to be likely that the fall may kill the child, but not intending to kill the child, and intending, in good faith, the child's benefit. Here, even if the child is killed by the fall, A has committed no offence."
              }
            ],
            "explanation": "Mere pecuniary benefit is not benefit within the meaning of sections 88, 89 and 92."
          },
          {
            "id": 93,
            "title": "IPC Section 93: Communication made in good faith",
            "content": "No communication made in good faith is an offence by reason of any harm to the person to whom it is made, if it is made for the benefit of that person.",
            "illustration": {
              "description": "A, a surgeon, in good faith, communicates to a patient his opinion that he cannot live. The patient dies in consequence of the shock. A has committed no offence, though he knew it to be likely that the communication might cause the patient's death."
            }
          },
          {
            "id": 94,
            "title": "IPC Section 94: Act to which a person is compelled by threats",
            "content": "Except murder, and offences against the State punishable with death, nothing is an offence which is done by a person who is compelled to do it by threats, which, at the time of doing it, reasonably cause the apprehension that instant death to that person will otherwise be the consequence: Provided the person doing the act did not of his own accord, or from a reasonable apprehension of harm to himself short of instant death, place himself in the situation by which he became subject to such constraint.",
            "explanations": [
              "A person who, of his own accord, or by reason of a threat of being beaten, joins a gang of dacoits, knowing their character, is not entitled to the benefit of this exception, on the ground of his having been compelled by his associates to do anything that is an offence by law.",
              "A person seized by a gang of dacoits, and forced, by threat of instant death, to do a thing which is an offence by law; for example, a smith compelled to take his tools and to force the door of a house for the dacoits to enter and plunder it, is entitled to the benefit of this exception."
            ]
          },
          {
            "id": 95,
            "title": "IPC Section 95: Act causing slight harm",
            "content": "Nothing is an offence by reason that it causes, or that it is intended to cause, or that it is known to be likely to cause, any harm, if that harm is so slight that no person of ordinary sense and temper would complain of such harm."
          },
          {
            "id": 96,
            "title": "IPC Section 96: Things done in private defence",
            "content": "Nothing is an offence which is done in the exercise of the right of private defence."
          },
          {
            "id": 97,
            "title": "IPC Section 97: Right of private defence of the body and of property",
            "content": "Every person has a right, subject to the restrictions contained in section 99, to defend— First.—His own body, and the body of any other person, against any offence affecting the human body; Secondly.—The property, whether movable or immovable, of himself or of any other person, against any act which is an offence falling under the definition of theft, robbery, mischief or criminal trespass, or which is an attempt to commit theft, robbery, mischief or criminal trespass."
          },
          {
            "id": 98,
            "title": "IPC Section 98: Right of private defence against the act of a person of unsound mind, etc.",
            "content": "When an act, which would otherwise be a certain offence, is not that offence, by reason of the youth, the want of maturity of understanding, the unsoundness of mind or the intoxication of the person doing that act, or by reason of any misconception on the part of that person, every person has the same right of private defence against that act which he would have if the act were that offence.",
            "illustrations": [
              {
                "id": "a",
                "content": "Z, under the influence of madness, attempts to kill A; Z is guilty of no offence. But A has the same right of private defence which he would have if Z were sane."
              },
              {
                "id": "b",
                "content": "A enters by night a house which he is legally entitled to enter. Z, in good faith, taking A for a house-breaker, attacks A. Here Z, by attacking A under this misconception, commits no offence. But A has the same right of private defence against Z, which he would have if Z were not acting under that misconception."
              }
            ]
          },
          {
            "id": 99,
            "title": "IPC Section 99: Acts against which there is no right of private defence",
            "content": "There is no right of private defence against an act which does not reasonably cause the apprehension of death or of grievous hurt, if done, or attempted to be done, by a public servant acting in good faith under colour of his office, though that act, may not be strictly justifiable by law.\nThere is no right of private defence against an act which does not reasonably cause the apprehension of death or of grievous hurt, if done, or attempted to be done, by the direction of a public servant acting in good faith under colour of his office, though that direction may not be strictly justifiable by law.\nThere is no right of private defence in cases in which there is time to have recourse to protection of the public authorities.\nExtent to which the right may be exercised.—The right of private defence in no case extends to the inflicting of more harm than it is necessary to inflict for the purpose of defence.\nExplanation 1.—A person is not deprived of the right of private defence against an act done, or attempted to be done, by a public servant, as such, unless he knows or has reason to believe, that the person doing the act is such public servant.\nExplanation 2.—A person is not deprived of the right of private defence against an act done, or attempted to be done, by the direction of a public servant, unless he knows, or has reason to believe, that the person doing the act is acting by such direction, or unless such person states the authority under which he acts, or if he has authority in writing, unless he produces such authority, if demanded."
          },
          {
            "id": 100,
            "title": "IPC Section 100: When the right of private defence of the body extends to causing death",
            "content": "The right of private defence of the body extends, under the restrictions mentioned in the last preceding section, to the voluntary causing of death or of any other harm to the assailant, if the offence which occasions the exercise of the right be of any of the descriptions hereinafter enumerated, namely:\nFirst.—Such an assault as may reasonably cause the apprehension that death will otherwise be the consequence of such assault;\nSecondly.—Such an assault as may reasonably cause the apprehension that grievous hurt will otherwise be the consequence of such assault;\nThirdly.—An assault with the intention of committing rape;\nFourthly.—An assault with the intention of gratifying unnatural lust;\nFifthly.—An assault with the intention of kidnapping or abducting;\nSixthly.—An assault with the intention of wrongfully confining a person, under circumstances which may reasonably cause him to apprehend that he will be unable to have recourse to the public authorities for his release.\nSeventhly.—An act of throwing or administering acid or an attempt to throw or administer acid which may reasonably cause the apprehension that grievous hurt will otherwise be the consequence of such act.",
            "relatedSections": "[1. Ins. by Act 13 of 2013, s. 2 (w.e.f. 3-2-2013).]",
            "notes": "This section outlines the circumstances under which the right of private defence of the body extends to causing death or harm to the assailant. It specifies various types of assaults and criminal acts where such a response is deemed justifiable under the law."
          },
          {
            "id": 101,
            "title": "IPC Section 101: When such right extends to causing any harm other than death",
            "content": "If the offence be not of any of the descriptions enumerated in the last preceding section, the right of private defence of the body does not extend to the voluntary causing of death to the assailant, but does extend, under the restrictions mentioned in section 99, to the voluntary causing to the assailant of any harm other than death.",
            "relatedSections": [
              99
            ],
            "notes": "This section specifies that if the offence does not fall under the categories listed in the preceding section (Section 100), the right of private defence does not extend to causing death to the assailant. However, it does allow for causing any other harm to the assailant, provided it is within the restrictions mentioned in Section 99."
          },
          {
            "id": 102,
            "title": "IPC Section 102: Commencement and continuance of the right of private defence of the body",
            "content": "The right of private defence of the body commences as soon as a reasonable apprehension of danger to the body arises from an attempt or threat to commit the offence though the offence may not have been committed; and it continues as long as such apprehension of danger to the body continues.",
            "notes": "This section outlines when the right of private defence of the body begins and how long it lasts. It states that the right starts as soon as there is a reasonable apprehension of danger to the body, even if the offence has not yet been committed. The right persists as long as the danger to the body persists."
          },
          {
            "id": 103,
            "title": "IPC Section 103: When the right of private defence of property extends to causing death",
            "content": "The right of private defence of property extends, under the restrictions mentioned in section 99, to the voluntary causing of death or of any other harm to the wrong-doer, if the offence, the committing of which, or the attempting to commit which, occasions the exercise of the right, be an offence of any of the descriptions hereinafter enumerated, namely:--\nFirst.--Robbery;\nSecondly.-- House-breaking by night;\nThirdly.Mischief by fire committed on any building, tent or vessel, which building, tent or vessel is used as a human dwelling, or as a place for the custody of property;\nFourthly.--Theft, mischief, or house-trespass, under such circumstances as may reasonably cause apprehension that death or grievous hurt will be the consequence, if such right of private defence is not exercised.",
            "amendments": {
              "Karnataka": {
                "changes": [
                  {
                    "location": "In section 103, in clause Thirdly",
                    "amendment": "after the words \"mischief by fire\", the words \"or any explosive substance\" Shall be inserted; after the words \"as a human dwelling, or\" the words \"as a place of worship, or\" shall be inserted."
                  },
                  {
                    "location": "After clause Fourthly",
                    "amendment": "the following clause shall be inserted, namely:--\"Fifthly.-- Mischief by fire or any explosive substance committed on any property used or intended to be used for the purpose of Government or any local authority, statutory body or company owned or controlled by Government or railway or any vehicle used or adapted to be used for the carriage of passengers for hire or reward\"."
                  }
                ],
                "act": "Karnataka Act 8 of 1972, sec. 2"
              }
            }
          },
          {
            "id": 104,
            "title": "IPC Section 104: When such right extends to causing any harm other than death",
            "content": "If the offence, the committing of which, or the attempting to commit which occasions the exercise of the right of private defence, be theft, mischief, or criminal trespass, not of any of the descriptions enumerated in the last preceding section, that right does not extend to the voluntary causing of death, but does extend, subject to the restrictions mentioned in section 99, to the voluntary causing to the wrong-doer of any harm other than death."
          },
          {
            "id": 105,
            "title": "IPC Section 105: Commencement and continuance of the right of private defence of property",
            "content": "The right of private defence of property commences when a reasonable apprehension of danger to the property commences. The right of private defence of property against theft continues till the offender has effected his retreat with the property or either the assistance of the public authorities is obtained, or the property has been recovered. The right of private defence of property against robbery continues as long as the offender causes or attempts to cause to any person death or hurt or wrongful restraint or as long as the fear of instant death or of instant hurt or of instant personal restraint continues. The right of private defence of property against criminal trespass or mischief continues as long as the offender continues in the commission of criminal trespass or mischief. The right of private defence of property against house-breaking by night continues as long as the house-trespass which has been begun by such house-breaking continues."
          },
          {
            "id": 106,
            "title": "IPC Section 106: Right of private defence against deadly assault when there is risk of harm to innocent person",
            "content": "If in the exercise of the right of private defence against an assault which reasonably causes the apprehension of death, the defender be so situated that he cannot effectually exercise that right without risk of harm to an innocent person, his right of private defence extends to the running of that risk.",
            "illustration": "A is attacked by a mob who attempt to murder him. He cannot effectually exercise his right of private defence without firing on the mob, and he cannot fire without risk of harming young children who are mingled with the mob. A commits no offence if by so firing he harms any of the children."
          },
          {
            "id": 107,
            "title": "IPC Section 107: Abetment of a thing",
            "content": "A person abets the doing of a thing, who—\nFirst.—Instigates any person to do that thing; or\nSecondly.—Engages with one or more other person or persons in any conspiracy for the doing of that thing, if an act or illegal omission takes place in pursuance of that conspiracy, and in order to the doing of that thing; or\nThirdly.—Intentionally aids, by any act or illegal omission, the doing of that thing.",
            "explanation": "Explanation 1.—A person who, by wilful misrepresentation, or by wilful concealment of a material fact which he is bound to disclose, voluntarily causes or procures, or attempts to cause or procure, a thing to be done, is said to instigate the doing of that thing.",
            "illustration": "A, a public officer, is authorised by a warrant from a Court of Justice to apprehend Z, B, knowing that fact and also that C is not Z, wilfully represents to A that C is Z, and thereby intentionally causes A to apprehend C. Here B abets by instigation the apprehension of C.",
            "explanation_2": "Explanation 2.—Whoever, either prior to or at the time of the commission of an act, does anything in order to facilitate the commission of that act, and thereby facilitates the commission thereof, is said to aid the doing of that act."
          },
          {
            "id": 108,
            "title": "IPC Section 108: Abettor",
            "content": "A person abets an offence, who abets either the commission of an offence, or the commission of an act which would be an offence, if committed by a person capable by law of committing an offence with the same intention or knowledge as that of the abettor.",
            "explanation_1": "Explanation 1.—The abetment of the illegal omission of an act may amount to an offence although the abettor may not himself be bound to do that act.",
            "explanation_2": "Explanation 2.—To constitute the offence of abetment it is not necessary that the act abetted should be committed, or that the effect requisite to constitute the offence should be caused.",
            "illustrations": [
              {
                "content": "(a) A instigates B to murder C. B refuses to do so. A is guilty of abetting B to commit murder."
              },
              {
                "content": "(b) A instigates B to murder D. B in pursuance of the instigation stabs D. D recovers from the wound. A is guilty of instigating B to commit murder."
              }
            ],
            "explanation_3": "Explanation 3.—It is not necessary that the person abetted should be capable by law of committing an offence, or that he should have the same guilty intention or knowledge as that of the abettor, or any guilty intention or knowledge.",
            "illustrations_3": [
              {
                "content": "(a) A, with a guilty intention, abets a child or a lunatic to commit an act which would be an offence, if committed by a person capable by law of committing an offence, and having the same intention as A. Here A, whether the act be committed or not, is guilty of abetting an offence."
              },
              {
                "content": "(b) A, with the intention of murdering Z, instigates B, a child under seven years of age, to do an act which causes Z's death. B, in consequence of the abetment, does the act in the absence of A and thereby causes Z's death. Here, though B was not capable by law of committing an offence, A is liable to be punished in the same manner as if B had been capable by law of committing an offence, and had committed murder, and he is therefore subject to the punishment of death."
              },
              {
                "content": "(c) A instigates B to set fire to a dwelling-house. B, in consequence of the unsoundness of his mind, being incapable of knowing the nature of the act, or that he is doing what is wrong or contrary to law, sets fire to the house in consequence of A's instigation. B has committed no offence, but A is guilty of abetting the offence of setting fire to a dwelling-house, and is liable to the punishment provided for that offence."
              },
              {
                "content": "(d) A, intending to cause a theft to be committed, instigates B to take property belonging to Z out of Z's possession. A induces B to believe that the property belongs to A. B takes the property out of Z's possession, in good faith, believing it to be A's property. B, acting under this misconception, does not take dishonestly, and therefore does not commit theft. But A is guilty of abetting theft, and is liable to the same punishment as if B had committed theft."
              }
            ],
            "explanation_4": "Explanation 4.—The abetment of an offence being an offence, the abetment of such an abetment is also an offence.",
            "illustration_4": {
              "content": "A instigates B to instigate C to murder Z. B accordingly instigates C to murder Z, and C commits that offence in consequence of B's instigation. B is liable to be punished for his offence with the punishment for murder; and, as A instigated B to commit the offence, A is also liable to the same punishment."
            },
            "explanation_5": "Explanation 5.—It is not necessary to the commission of the offence of abetment by conspiracy that the abettor should concert the offence with the person who commits it. It is sufficient if he engages in the conspiracy in pursuance of which the offence is committed.",
            "illustration_5": {
              "content": "A concerts with B a plan for poisoning Z. It is agreed that A shall administer the poison. B then explains the plan to C mentioning that a third person is to administer the poison, but without mentioning A's name. C agrees to procure the poison, and procures and delivers it to B for the purpose of its being used in the manner explained. A administers the poison; Z dies in consequence. Here, though A and C have not conspired together, yet C has been engaged in the conspiracy in pursuance of which Z has been murdered. C has therefore committed the offence defined in this section and is liable to the punishment for murder."
            }
          },
          {
            "id": 108.1,
            "title": "IPC Section 108A: Abetment in India of offences outside India",
            "content": "A person abets an offence within the meaning of this Code who, in India, abets the commission of any act without and beyond India which would constitute an offence if committed in India.",
            "illustration": "Illustration: A, in India, instigates B, a foreigner in Goa, to commit a murder in Goa, A is guilty of abetting murder.",
            "notes" : "1. Added by Act 4 of 1898, s. 3.",
            " 2. The words 'British India' have successively been subs. by the A.O. 1948, the A.O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above.",
        },
        {
            "id": 109,
            "title": "IPC Section 109: Punishment of abetment if the act abetted is committed in consequence and when no express provision is made for its punishment",
            "content": "Whoever abets any offence shall, if the act abetted is committed in consequence of the abetment, and no express provision is made by this Code for the punishment of such abetment, be punished with the punishment provided for the offence.",
            "explanation": "Explanation: An act or offence is said to be committed in consequence of abetment, when it is committed in consequence of the instigation, or in pursuance of the conspiracy, or with the aid which constitutes the abetment.",
            "illustrations": [
              {
                "example": "(a) A offers a bribe to B, a public servant, as a reward for showing A some favour in the exercise of B's official functions. B accepts the bribe. A has abetted the offence defined in section 161.",
                "explanation": ""
              },
              {
                "example": "(b) A instigates B to give false evidence. B, in consequence of the instigation, commits that offence. A is guilty of abetting that offence, and is liable to the same punishment as B.",
                "explanation": ""
              },
              {
                "example": "(c) A and B conspire to poison Z. A, in pursuance of the conspiracy, procures the poison and delivers it to B in order that he may administer it to Z. B, in pursuance of the conspiracy, administers the poison to Z in A's absence and thereby causes Z's death. Here B is guilty of murder. A is guilty of abetting that offence by conspiracy, and is liable to the punishment for murder.",
                "explanation": ""
              }
            ]
          },
          {
            "id": 110,
            "title": "IPC Section 110: Punishment of abetment if person abetted does act with different intention from that of abettor",
            "content": "Whoever abets the commission of an offence shall, if the person abetted does the act with a different intention or knowledge from that of the abettor, be punished with the punishment provided for the offence which would have been committed if the act had been done with the intention or knowledge of the abettor and with no other.",
          },
          {
            "id": 111,
            "title": "IPC Section 111: Liability of abettor when one act abetted and different act done",
            "content": "When an Act is abetted and a different act is done, the abettor is liable for the act done, in the same manner and to the same extent as if he had directly abetted it: Provided the act done was a probable consequence of the abetment, and was committed under the influence of the instigation, or with the aid or in pursuance of the conspiracy which constituted the abetment.",
            "illustrations": [
              {
                "id": "a",
                "content": "A instigates a child to put poison into the food of Z, and gives him poison for that purpose. The child, in consequence of the instigation, by mistake puts the poison into the food of Y, which is by the side of that of Z. Here, if the child was acting under the influence of A's instigation, and the act done was under the circumstances a probable consequence of the abetment, A is liable in the same manner and to the same extent as if he had instigated the child to put the poison into the food of Y."
              },
              {
                "id": "b",
                "content": "A instigates B to burn Z's house. B sets fire to the house and at the same time commits theft of property there. A, though guilty of abetting the burning of the house, is not guilty of abetting the theft; for the theft was a distinct act, and not a probable consequence of the burning."
              },
              {
                "id": "c",
                "content": "A instigates B and C to break into an inhabited house at midnight for the purpose of robbery, and provides them with arms for that purpose. B and C break into the house, and being resisted by Z, one of the inmates, murder Z. Here, if that murder was the probable consequence of the abetment, A is liable to the punishment provided for murder."
              }
            ]
          },
          {
            "id": 112,
            "title": "IPC Section 112: Abettor when liable to cumulative punishment for act abetted and for act done",
            "content": "If the act for which the abettor is liable under the last preceding section is committed in addition to the act abetted, and constitute a distinct offence, the abettor is liable to punishment for each of the offences.",
            "illustration": {
              "id": "a",
              "content": "A instigates B to resist by force a distress made by a public servant. B, in consequence, resists that distress. In offering the resistance, B voluntarily causes grievous hurt to the officer executing the distress. As B has committed both the offence of resisting the distress, and the offence of voluntarily causing grievous hurt, B is liable to punishment for both these offences; and, if A knew that B was likely voluntarily to cause grievous hurt in resisting the distress A will also be liable to punishment for each of the offences."
            }
          },
          {
            "id": 113,
            "title": "IPC Section 113: Liability of abettor for an effect caused by the act abetted different from that intended by the abettor",
            "content": "When an act is abetted with the intention on the part of the abettor of causing a particular effect, and an act for which the abettor is liable in consequence of the abetment, causes a different effect from that intended by the abettor, the abettor is liable for the effect caused, in the same manner and to the same extent as if he had abetted the act with the intention of causing that effect, provided he knew that the act abetted was likely to cause that effect.",
            "illustration": {
              "id": "a",
              "content": "A instigates B to cause grievous hurt to Z. B, in consequence of the instigation, causes grievous hurt to Z. Z dies in consequence. Here, if A knew that the grievous hurt abetted was likely to cause death, A is liable to be punished with the punishment provided for murder."
            }
          },
          {
            "id": 114,
            "title": "IPC Section 114: Abettor present when offence is committed",
            "content": "Whenever any person, who is absent would be liable to be punished as an abettor, is present when the act or offence for which he would be punishable in consequence of the abetment is committed, he shall be deemed to have committed such act or offence."
          },
          {
            "id": 115,
            "title": "IPC Section 115: Abetment of offence punishable with death or imprisonment for life, if offence not committed, if act causing harm be done in consequence",
            "content": "Whoever abets the commission of an offence punishable with death or imprisonment for life, shall, if that offence be not committed in consequence of the abetment, and no express provision is made by this Code for the punishment of such abetment, be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine; if act causing harm be done in consequence.--and if any act for which the abettor is liable in consequence of the abetment, and which causes hurt to any person, is done, the abettor shall be liable to imprisonment of either description for a term which may extend to fourteen years, and shall also be liable to fine.",
            "illustration": "A instigates B to murder Z. The offence is not committed. If B had murdered Z, he would have been subject to the punishment of death or imprisonment for life. Therefore A is liable to imprisonment for a term which may extend to seven years and also to a fine; and if any hurt be done to Z in consequence of the abetment, he will be liable to imprisonment for a term which may extend to fourteen years, and to fine.",
            "notes" : "1. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956). ",
          },
          {
            "id": 116,
            "title": "IPC Section 116: Abetment of offence punishable with imprisonment, if offence be not committed, if abettor or person abetted be a public servant whose duty it is to prevent offence",
            "content": "Whoever abets an offence punishable with imprisonment shall, if that offence be not committed in consequence of the abetment, and no express provision is made by this Code for the punishment of such abetment, be punished with imprisonment of any description provided for that offence for a term which may extend to one-fourth part of the longest term provided for that offence; or with such fine as is provided for that offence, or with both; if abettor or person abetted be a public servant whose duty it is to prevent offence.—and if the abettor or the person abetted is a public servant, whose duty it is to prevent the commission of such offence, the abettor shall be punished with imprisonment of any description provided for that offence, for a term which may extend to one-half of the longest term provided for that offence, or with such fine as is provided for the offence, or with both.",
            "illustrations": [
              {
                "id": "a",
                "content": "A offers a bribe to B, a public servant, as a reward for showing A some favour in the exercise of B's official functions. B refuses to accept the bribe. A is punishable under this section."
              },
              {
                "id": "b",
                "content": "A instigates B to give false evidence. Here, if B does not give false evidence, A has nevertheless committed the offence defined in this section, and is punishable accordingly."
              },
              {
                "id": "c",
                "content": "A, a police-officer, whose duty it is to prevent robbery, abets the commission of robbery. Here, though the robbery be not committed, A is liable to one-half of the longest term of imprisonment provided for that offence, and also to fine."
              },
              {
                "id": "d",
                "content": "B abets the commission of a robbery by A, a police-officer, whose duty it is to prevent that offence. Here, though the robbery be not committed, B is liable to one-half of the longest term of imprisonment provided for the offence of robbery, and also to fine."
              }
            ]
          },
          {
            "id": 117,
            "title": "IPC Section 117: Abetting commission of offence by the public or by more than ten persons",
            "content": "Whoever abets the commission of an offence by the public generally or by any number or class of persons exceeding ten, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
            "illustrations": [
              {
                "id": null,
                "content": "A affixes in a public place a placard instigating a sect consisting of more than ten members to meet at a certain time and place, for the purpose of attacking the members of an adverse sect, while engaged in a procession. A has committed the offence defined in this section."
              }
            ]
          },
          {
            "id": 118,
            "title": "IPC Section 118: Concealing design to commit offence punishable with death or imprisonment for life",
            "content": "Whoever intending to facilitate or knowing it to be likely that he will thereby facilitate the commission of an offence punishable with death or imprisonment for life, voluntarily conceals by any act or illegal omission, or by the use of encryption or any other information hiding tool, the existence of a design to commit such offence or makes any representation which he knows to be false respecting such design, if offence be committed; if offence be not committed.—shall, if that offence be committed, be punished with imprisonment of either description for a term which may extend to seven years, or, if the offence be not committed, with imprisonment of either description, for a term which may extend to three years; and in either case shall also be liable to fine.",
            "illustrations": [
              {
                "id": null,
                "content": "A, knowing that dacoity is about to be committed at B, falsely informs the Magistrate that a dacoity is about to be committed at C, a place in an opposite direction, and thereby misleads the Magistrate with intent to facilitate the commission of the offence. The dacoity is committed at B in pursuance of the design. A is punishable under this section." 
              }
            ],
            "notes":"1. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956).",
                     "2. Subs. by Act 10 of 2009, s. 51, for 'voluntarily conceals, by any act or illegal omission, the existence of a design' (w.e.f. 27-10-2009).",
          },
          {
            "id": 119,
            "title": "IPC Section 119: Public servant concealing design to commit offence which it is his duty to prevent",
            "content": "Whoever, being a public servant intending to facilitate or knowing it to be likely that he will thereby facilitate the commission of an offence which it is his duty as such public servant to prevent, voluntarily conceals, by any act or illegal omission or by the use of encryption or any other information hiding tool, the existence of a design to commit such offence, or makes any representation which he knows to be false respecting such design, if offence be committed.-- shall, if the offence be committed, be punished with imprisonment of any description provided for the offence, for a term which may extend to one-half of the longest term of such imprisonment, or with such fine as is provided for that offence, or with both; if offence be punishable with death, etc.or, if the offence be punishable with death or imprisonment for life, with imprisonment of either description for a term which may extend to ten years; if offence be not committed.--or, if the offence be not committed, shall be punished with imprisonment of any description provided for the offence for a term which may extend to one-fourth part of the longest term of such imprisonment or with such fine as is provided for the offence, or with both.",
            "illustrations": [
              {
                "id": null,
                "content": "A, an officer of police, being legally bound to give information of all designs to commit robbery which may come to his knowledge, and knowing that B designs to commit robbery, omits to give such information, with intent to facilitate the commission of that offence. Here A has by an illegal omission concealed the existence of B's design, and is liable to punishment according to the provision of this section."
              }
            ],
            "notes" : "1. Subs. by Act 10 of 2009, s. 51, for 'voluntarily conceals, by any act or illegal omission, the existence of a design' (w.e.f. 27-10-2009)." ,
                     "2. Subs. by Act 26 of 1955, s. 117 and the Sch., 'for transportation for life' (w.e.f. 1-1-1956).", 
        },
        {
            "id": 120,
            "title": "IPC Section 120: Concealing design to commit offence punishable with imprisonment",
            "content": "Whoever, intending to facilitate or knowing it to be likely that he will thereby facilitate the commission of an offence punishable with imprisonment, voluntarily conceals, by any act or illegal omission, the existence of a design to commit such offence, or makes any representation which he knows to be false respecting such design, if offence be committed; if offence be not committed.—shall, if the offence be committed, be punished with imprisonment of the description provided for the offence, for a term which may extend to one-fourth, and, if the offence be not committed, to one-eight, of the longest term of such imprisonment, or with such fine as is provided for the offence, or with both."
          },
          {
            "id": 121,
            "title": "IPC Section 121: Waging, or attempting to wage war, or abetting waging of war, against the Government of India",
            "content": "Whoever wages war against the Government of India, or attempts to wage such war, or abets the waging of such war, shall be punished with death, or imprisonment for life and shall also be liable to fine.",
            "notes": [
              {
                "id": 1,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              },
              {
                "id": 2,
                "content": "Subs. by 26 of 1955, s. 117 and the Sch., 'for transportation for life' (w.e.f. 1-1-1956)."
              },
              {
                "id": 3,
                "content": "Subs. by Act 16 of 1921, s. 2, for 'and shall forfeit all his property'."
              }
            ],
            "relatedSections": []
          },
          {
            "id": 121.1,
            "title": "IPC Section 121A: Conspiracy to commit offences punishable by section 121",
            "content": "Whoever within or without India conspires to commit any of the offences punishable by section 121, or conspires to overawe, by means of criminal force or the show of criminal force, the Central Government or any State Government, shall be punished with imprisonment for life, or with imprisonment of either description which may extend to ten years, and shall also be liable to fine. Explanation.To constitute a conspiracy under this section, it is not necessary that any act or illegal omission shall take place in pursuance thereof.",
            "notes": [
              {
                "id": 1,
                "content": "Ins. by Act 27 of 1870, s. 4."
              },
              {
                "id": 2,
                "content": "The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above."
              },
              {
                "id": 3,
                "content": "The words 'or to deprive the Queen of the sovereignty of the Provinces or of any part thereof' omitted by the A. O. 1950."
              },
              {
                "id": 4,
                "content": "Subs. by the A. O. 1937, for 'the G. of I, or any l. G'."
              },
              {
                "id": 5,
                "content": "Subs. by the A. O. 1950, for 'Provincial'."
              },
              {
                "id": 6,
                "content": "The words 'or the Government of Burma' omitted by the A. O. 1948."
              },
              {
                "id": 7,
                "content": "Subs. by Act 26 of 1955, s. 117 and the Sch., 'for transportation for life or any shorter term' (w.e.f. 1-1-1956)."
              },
              {
                "id": 8,
                "content": "Ins. by Act 16 of 1921, s. 3."
              }
            ],
            "relatedSections": []
          },
          {
            "id": 122,
            "title": "IPC Section 122: Collecting arms, etc., with intention of waging war against the Government of India",
            "content": "Whoever collects men, arms or ammunition or otherwise prepares to wage war with the intention of either waging or being prepared to wage war against the Government of India, shall be punished with imprisonment for life or imprisonment of either description for a term not exceeding ten years, and shall also be liable to fine.",
            "notes": [
              {
                "id": 1,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              },
              {
                "id": 2,
                "content": "Subs. by Act 26 of 1955, s. 117 and the Sch., 'for transportation for life' (w.e.f. 1-1-1956)."
              },
              {
                "id": 3,
                "content": "Subs. by Act 16 of 1921, s. 2, for 'and shall forfeit all his property'."
              }
            ],
            "relatedSections": []
          },
          {
            "id": 123,
            "title": "IPC Section 123: Concealing with intent to facilitate design to wage war",
            "content": "Whoever by any act, or by any illegal omission, conceals the existence of a design to wage war against the Government of India, intending by such concealment to facilitate, or knowing it to be likely that such concealment will facilitate, the waging of such war, shall be punished with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine.",
            "notes": [
              {
                "id": 1,
                "content": "Subs. by the A. O 1950, for 'Queen'."
              }
            ],
            "relatedSections": []
          },
          {
            "id": 124,
            "title": "IPC Section 124: Assaulting President, Governor, etc., with intent to compel or restrain the exercise of any lawful power",
            "content": "Whoever, with the intention of inducing or compelling the President of India, or Governor of any State, to exercise or refrain from exercising in any manner any of the lawful powers of such President or Governor, assaults or wrongfully restrains, or attempts wrongfully to restrain, or overawes, by means of criminal force or the show of criminal force, or attempts so to overawe, such President or Governor, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
            "notes": [
              {
                "id": 1,
                "content": "Subs. by the ibid., for “Governor General”."
              },
              {
                "id": 2,
                "content": "Subs. by Act 3 of 1951, s. 3 and the Sch., for “Governor”."
              },
              {
                "id": 3,
                "content": "The words “or Rajpramukh” omitted by the A. O. 1956."
              },
              {
                "id": 4,
                "content": "Subs. by the A. O. 1950, for “Province” which had been subs. by the A. O. 1937, for “Presidency”."
              },
              {
                "id": 5,
                "content": "The words “or a Lieutenant-Governor” omitted by the A. O. 1937."
              },
              {
                "id": 6,
                "content": "The words “or a Member of the Council of the Governor General of India” omitted by the A.O. 1948."
              },
              {
                "id": 7,
                "content": "The words “or of the Council of any Presidency” omitted by the A. O. 1937."
              },
              {
                "id": 8,
                "content": "The words “Governor General, Governor, Lieutenant-Governor or Member of Council” have successively been amended by the A.O. 1937, the A. O. 1948 and the A. O. 1950 to read as above."
              }
            ],
            "relatedSections": []
          },
          {
            "id": 124.1,
            "title": "IPC Section 124A: Sedition",
            "content": "Whoever by words, either spoken or written, or by signs, or by visible representation, or otherwise, brings or attempts to bring into hatred or contempt, or excites or attempts to excite disaffection towards, the Government established by law in India, shall be punished with imprisonment for life, to which fine may be added, or with imprisonment which may extend to three years, to which fine may be added, or with fine.\nExplanation 1.-- The expression \"disaffection\" includes disloyalty and all feelings of enmity.\nExplanation 2.--Comments expressing disapprobation of the measures of the Government with a view to obtain their alteration by lawful means, without exciting or attempting to excite hatred, contempt or disaffection, do not constitute an offence under this section.\nExplanation 3.--Comments expressing disapprobation of the administrative or other action of the Government without exciting or attempting to excite hatred, contempt or disaffection, do not constitute an offence under this section.",
            "notes": [
              {
                "id": 1,
                "content": "Ins. by Act 27 of 1870, s. 5 and subs. by Act 4 of 1898, s. 4, for s. 124A."
              },
              {
                "id": 2,
                "content": "The words \"Her Majesty or\" omitted by the A.O. 1950. The words or the Crown Representative ins. after the word \"Majesty\" by the A. O. 1937 were omitted by the A. O. 1948."
              },
              {
                "id": 3,
                "content": "The words British India have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above."
              },
              {
                "id": 4,
                "content": "The words or British Burma ins. by the A. O. 1937 and omitted by the A. O 1948."
              },
              {
                "id": 5,
                "content": "Subs. by Act 26 of 1955, s. 117 and the Sch., for transportation for life or any shorter term (w.e.f. 1-1-1956)."
              }
            ],
            "relatedSections": []
          },
          {
            "id": 125,
            "title": "IPC Section 125: Waging war against any Asiatic power in alliance with the Government of India",
            "content": "Whoever wages war against the Government of any Asiatic Power in alliance or at peace with the Government of India or attempts to wage such war, or abets the waging of such war, shall be punished with imprisonment for life, to which fine may be added, or with imprisonment of either description for a term which may extend to seven years, to which fine may be added, or with fine.",
            "notes": [
              {
                "id": 1,
                "content": "Subs. by Act 26 of 1955, s. 117 and the Sch., \"for transportation for life\" (w.e.f. 1-1-1956)."
              },
              {
                "id": 2,
                "content": "Subs. by the A. O 1950, for \"Queen\"."
              }
            ],
            "relatedSections": []
          },
          {
            "id": 126,
            "title": "IPC Section 126: Committing depredation on territories of power at peace with the Government of India",
            "content": "Whoever commits depredation, or makes preparations to commit depredation, on the territories of any Power in alliance or at peace with the Government of India, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine and to forfeiture of any property used or intended to be used in committing such depredation, or acquired by such depredation.",
            "notes": [
              {
                "id": 1,
                "content": "Subs. by the A. O. 1950, for \"Queen\"."
              }
            ],
            "relatedSections": []
          },
          {
            "id": 127,
            "title": "IPC Section 127: Receiving property taken by war or depredation mentioned in sections 125 and 126",
            "content": "Whoever receives any property knowing the same to have been taken in the commission of any of the offences mentioned in sections 125 and 126, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine and to forfeiture of the property so received."
          },
          {
            "id": 128,
            "title": "IPC Section 128: Public servant voluntarily allowing prisoner of State or war to escape",
            "content": "Whoever, being a public servant and having the custody of any State prisoner or prisoner of war, voluntarily allows such prisoner to escape from any place in which such prisoner is confined, shall be punished with imprisonment for life, or imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine.",
            "notes": [
              "Substituted by Act 26 of 1955, s. 117 and the Sch., for \"transportation for life\" (w.e.f. 1-1-1956)"
            ],
            "relatedSections": []
          },
          {
            "id": 129,
            "title": "IPC Section 129: Public servant negligently suffering such prisoner to escape",
            "content": "Whoever, being a public servant and having the custody of any State prisoner or prisoner of war, negligently suffers such prisoner to escape from any place of confinement in which such prisoner is confined, shall be punished with simple imprisonment for a term which may extend to three years, and shall also be liable to fine.",
            "relatedSections": []
          },
          {
            "id": 130,
            "title": "IPC Section 130: Aiding escape of, rescuing or harbouring such prisoner",
            "content": "Whoever knowingly aids or assists any State prisoner or prisoner of war in escaping from lawful custody, or rescues or attempts to rescue any such prisoner, or harbours or conceals any such prisoner who has escaped from lawful custody, or offers or attempts to offer any resistance to the recapture of such prisoner, shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine. Explanation.—A State prisoner or prisoner of war, who is permitted to be at large on his parole within certain limits in India, is said to escape from lawful custody if he goes beyond the limits within which he is allowed to be at large.",
            "relatedSections": [
                " 1. Subs. by Act 26 of 1955, s. 117 and the Sch., 'for transportation for life' (w.e.f. 1-1-1956).",
                " 2. The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above."     
                ]
          },
          {
            "id": 131,
            "title": "IPC Section 131: Abetting mutiny, or attempting to seduce a soldier, sailor or airman from his duty",
            "content": "Whoever abets the committing of mutiny by an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India or attempts to seduce any such officer, soldier, sailor or airman from his allegiance or his duty, shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine. Explanation.—In this section the words 'officer', 'soldier', 'sailor', and 'airman' include any person subject to the Army Act, the Navy Act, the Indian Navy (Discipline) Act, 1934, the Air Force Act, or the Indian Air Force Act, 1950, as the case may be.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              },
              {
                "number": 2,
                "content": "Subs. by Act 26 of 1955, s. 117 and the Sch., 'for transportation for life' (w.e.f. 1-1-1956)."
              },
              {
                "number": 3,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'and Navy'."
              },
              {
                "number": 4,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or sailor'."
              },
              {
                "number": 5,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or Navy'."
              },
              {
                "number": 6,
                "content": "Ins. by Act 27 of 1870, s. 6."
              },
              {
                "number": 7,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'and soldier'."
              },
              {
                "number": 8,
                "content": "Ins. by Act 35 of 1934, s. 2 and Sch."
              },
              {
                "number": 9,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'Articles or War for the better government of Her Majesty's Army, or to the Articles of War contained in Act No. 5 of 1869'."
              },
              {
                "number": 10,
                "content": "Subs. by Act 3 of 1951, s. 3 and the Sch., for 'the Indian Army Act, 1911'."
              },
              {
                "number": 11,
                "content": "Ins. by Act 35 of 1934, s. 2 and the Sch."
              },
              {
                "number": 12,
                "content": "The words 'or that Act as modified' by omitted by the A. O. 1950."
              },
              {
                "number": 13,
                "content": "Now see the Navy Act, 1957 (62 of 1957)."
              },
              {
                "number": 14,
                "content": "Subs. by Act 14 of 1932, s. 130 and the Sch., for 'or the Air Force Act'."
              },
              {
                "number": 15,
                "content": "Subs. by Act 3 of 1951, s. 3 and the Sch., for 'the Indian Air Force Act, 1932'."
              }
            ]
          },
          {
            "id": 132,
            "title": "IPC Section 132: Abetment of mutiny, if mutiny is committed in consequence thereof",
            "content": "Whoever abets the committing of mutiny by an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, shall, if mutiny be committed in consequence of that abetment, be punished with death or with imprisonment for life, or imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'or sailor'."
              },
              {
                "number": 2,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or Navy'."
              },
              {
                "number": 3,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              },
              {
                "number": 4,
                "content": "Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956)."
              }
            ]
          },
          {
            "id": 133,
            "title": "IPC Section 133: Abetment of assault by soldier, sailor or airman on his superior officer, when in execution of his office",
            "content": "Whoever abets an assault by an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, on any superior officer being in the execution of his office, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'or sailor'."
              },
              {
                "number": 2,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or Navy'."
              },
              {
                "number": 3,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              }
            ]
          },
          {
            "id": 134,
            "title": "IPC Section 134: Abetment of such assault, if the assault is committed",
            "content": "Whoever abets an assault by an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, on any superior officer being in the execution of his office, shall, if such assault be committed in consequence of that abetment be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'or sailor'."
              },
              {
                "number": 2,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or Navy'."
              },
              {
                "number": 3,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              }
            ]
          },
          {
            "id": 135,
            "title": "IPC Section 135: Abetment of desertion of soldier, sailor or airman",
            "content": "Whoever abets the desertion of any officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'or sailor'."
              },
              {
                "number": 2,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or Navy'."
              },
              {
                "number": 3,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              }
            ]
          },
          {
            "id": 136,
            "title": "IPC Section 136: Harbouring deserter",
            "content": "Whoever, except as hereinafter excepted, knowing or having reason to believe that an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, has deserted, harbours such officer, soldier, sailor or airman, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine or with both. Exception: This provision does not extend to the case in which the harbour is given by a wife to her husband.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'or sailor'."
              },
              {
                "number": 2,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or Navy'."
              },
              {
                "number": 3,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              }
            ]
          },
          {
            "id": 137,
            "title": "IPC Section 137: Deserter concealed on board merchant vessel through negligence of master",
            "content": "The master or person in charge of a merchant vessel, on board of which any deserter from the Army, Navy or Air Force of the Government of India is concealed, shall, though ignorant of such concealment, be liable to a penalty not exceeding five hundred rupees, if he might have known of such concealment but for some neglect of his duty as such master or person in charge, or but for some want of discipline on board of the vessel.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or Navy'."
              },
              {
                "number": 2,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              }
            ]
          },
          {
            "id": 138,
            "title": "IPC Section 138: Abetment of act of insubordination by soldier, sailor or airman",
            "content": "Whoever abets what he knows to be an act of insubordination by an officer, soldier, sailor or airman, in the Army, Navy or Air Force, of the Government of India, shall, if such act of insubordination be committed in consequence of that abetment, be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'or sailor'."
              },
              {
                "number": 2,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or Navy'."
              },
              {
                "number": 3,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              }
            ]
          },
          {
            "id": 138.1,
            "title": "IPC Section 138A: [Repealed.]",
            "content": "Application of foregoing sections to the Indian Marine Service. Rep. by the Amending Act, 1934 (35 of 1934), s. 2 and Sch.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Ins. by Act 14 of 1887, s. 79."
              }
            ]
          },
          {
            "id": 139,
            "title": "IPC Section 139: Persons subject to certain Acts",
            "content": "No person subject to the Army Act, the Army Act, 1950 (46 of 1950), the Naval Discipline Act, the Indian Navy (Discipline) Act, 1934 (34 of 1934), the Air Force Act or the Air Force Act, 1950 (45 of 1950), is subject to punishment under this Code for any of the offences defined in this Chapter.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'any Articles of War for the Army of Navy of the Queen, or for any part of such Army or Navy'."
              },
              {
                "number": 2,
                "content": "Subs. by Act 3 of 1951, s. 3 and the Sch., for 'the Indian Army Act, 1911'."
              },
              {
                "number": 3,
                "content": "Ins. by Act 35 of 1934, s. 2 and the Sch."
              },
              {
                "number": 4,
                "content": "The words 'or that Act as modified' by omitted by the A. O. 1950."
              },
              {
                "number": 5,
                "content": "Now see the Navy Act, 1957 (62 of 1957)."
              },
              {
                "number": 6,
                "content": "Subs. by Act 14 of 1932, s. 130 and Sch., for 'or the Air Force Act'."
              },
              {
                "number": 7,
                "content": "Subs. by Act 3 of 1951, s. 3 and the Sch., for 'the Indian Air Force Act, 1932'."
              }
            ]
          },
          {
            "id": 140,
            "title": "IPC Section 140: Wearing garb or carrying token used by soldier, sailor or airman",
            "content": "Whoever, not being a soldier, sailor or airman in the Military, Naval or Air service of the Government of India, wears any garb or carries any token resembling any garb or token used by such a soldier, sailor or airman with the intention that it may be believed that he is such a soldier, sailor or airman, shall be punished with imprisonment of either description for a term which may extend to three months, or with fine which may extend to five hundred rupees, or with both.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs. by Act 10 of 1927, s. 2 and the First Sch., for 'or sailor'."
              },
              {
                "number": 2,
                "content": "Subs. by s. 2 and the First Sch., ibid., for 'or Naval'."
              },
              {
                "number": 3,
                "content": "Subs. by the A. O. 1950, for 'Queen'."
              }
            ]
          },
          {
            "id": 141,
            "title": "IPC Section 141: Unlawful assembly",
            "content": "An assembly of five or more persons is designated an 'unlawful assembly', if the common object of the persons composing that assembly is— First.—To overawe by criminal force, or show of criminal force, the Central or any State Government or Parliament or the Legislature of any State, or any public servant in the exercise of the lawful power of such public servant; or Second.—To resist the execution of any law, or of any legal process; or Third.—To commit any mischief or criminal trespass, or other offence; or Fourth.—By means of criminal force, or show of criminal force, to any person, to take or obtain possession of any property, or to deprive any person of the enjoyment of a right of way, or of the use of water or other incorporeal right of which he is in possession or enjoyment, or to enforce any right or supposed right; or Fifth.—By means of criminal force, or show of criminal force, to compel any person to do what he is not legally bound to do, or to omit to do what he is legally entitled to do. Explanation.—An assembly which was not unlawful when it assembled, may subsequently become an unlawful assembly.",
            "relatedSections": [],
            "notes": [
              {
                "number": 1,
                "content": "Subs., ibid., for 'the Central or any Provincial Government or Legislature'."
              }
            ]
          },
          {
            "id": 142,
            "title": "IPC Section 142: Being member of unlawful assembly",
            "content": "Whoever, being aware of facts which render any assembly an unlawful assembly, intentionally joins that assembly, or continues in it, is said to be a member of an unlawful assembly.",
            "relatedSections": []
          },
          {
            "id": 143,
            "title": "IPC Section 143: Punishment",
            "content": "Whoever is a member of an unlawful assembly, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both.",
            "relatedSections": []
          },
          {
            "id": 144,
            "title": "IPC Section 144: Joining unlawful assembly armed with deadly weapon",
            "content": "Whoever, being armed with any deadly weapon, or with anything which, used as a weapon of offence, is likely to cause death, is a member of an unlawful assembly, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
            "relatedSections": []
          },
          {
            "id": 145,
            "title": "IPC Section 145: Joining or continuing in unlawful assembly, knowing it has been commanded to disperse",
            "content": "Whoever joins or continues in an unlawful assembly, knowing that such unlawful assembly has been commanded in the manner prescribed by law to disperse, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
            "relatedSections": []
          },
          {
            "id": 146,
            "title": "IPC Section 146: Rioting",
            "content": "Whenever force or violence is used by an unlawful assembly, or by any member thereof, in prosecution of the common object of such assembly, every member of such assembly is guilty of the offence of rioting.",
            "relatedSections": []
          },
          {
            "id": 147,
            "title": "IPC Section 147: Punishment for rioting",
            "content": "Whoever is guilty of rioting, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
            "relatedSections": []
          },
          {
            "id": 148,
            "title": "IPC Section 148: Rioting, armed with deadly weapon",
            "content": "Whoever is guilty of rioting, being armed with a deadly weapon or with anything which, used as a weapon of offence, is likely to cause death, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
            "relatedSections": []
          },
          {
            "id": 149,
            "title": "IPC Section 149: Every member of unlawful assembly guilty of offence committed in prosecution of common object",
            "content": "If an offence is committed by any member of an unlawful assembly in prosecution of the common object of that assembly, or such as the members of that assembly knew to be likely to be committed in prosecution of that object, every person who, at the time of the committing of that offence, is a member of the same assembly, is guilty of that offence.",
            "relatedSections": []
          },
          {
            "id": 150,
            "title": "IPC Section 150: Hiring, or conniving at hiring, of persons to join unlawful assembly",
            "content": "Whoever hires or engages, or employs, or promotes, or connives at the hiring, engagement or employment of any person to join or become a member of any unlawful assembly, shall be punishable as a member of such unlawful assembly, and for any offence which may be committed by any such person as a member of such unlawful assembly in pursuance of such hiring, engagement or employment, in the same manner as if he had been a member of such unlawful assembly, or himself had committed such offence.",
            "relatedSections": []
          },
          {
            "id": 151,
            "title": "IPC Section 151: Knowingly joining or continuing in assembly of five or more persons after it has been commanded to disperse",
            "content": "Whoever knowingly joins or continues in any assembly of five or more persons likely to cause a disturbance of the public peace, after such assembly has been lawfully commanded to disperse, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both. Explanation.—If the assembly is an unlawful assembly within the meaning of section 141, the offender will be punishable under section 145.",
            "relatedSections": [
              141,
              145
            ]
          },
          {
            "id": 152,
            "title": "IPC Section 152: Assaulting or obstructing public servant when suppressing riot, etc.",
            "content": "Whoever assaults or threatens to assault, or obstructs or attempts to obstruct, any public servant in the discharge of his duty as such public servant, in endeavoring to disperse an unlawful assembly, or to suppress a riot or affray, or uses, or threatens, or attempts to use criminal force to such public servant, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both."
          },
          {
            "id": 153,
            "title": "IPC Section 153: Wantonly giving provocation, with intent to cause riot",
            "content": "Whoever malignantly, or wantonly by doing anything which is illegal, gives provocation to any person intending or knowing it to be likely that such provocation will cause the offence of rioting to be committed, shall, if the offence of rioting be committed in consequence of such provocation, be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both; and if the offence of rioting be not committed, with imprisonment of either description for a term which may extend to six months, or with fine, or with both."
          },
          {
            "id": 153.1,
            "title": "IPC Section 153A: Promoting enmity between different groups on grounds of religion, race, place of birth, residence",
            "content": "153A. Promoting enmity between different groups on ground of religion, race, place of birth, residence, language, etc., and doing acts prejudicial to maintenance of harmony.-- (1) Whoever--\n(a) by words, either spoken or written, or by signs or by visible representations or otherwise, promotes or attempts to promote, on grounds of religion, race, place of birth, residence, language, caste or community or any other ground whatsoever, disharmony or feelings of enmity, hatred or illwill between different religious, racials, language or regional groups or castes or communities, or\n(b) commits any act which is prejudicial to the maintenance of harmony between different religious, racial, language or regional groups or castes or communities, and which disturbs or is likely to disturb the public tranquillity, 2[or]\n2[(c) organizes any exercise, movement, drill or other similar activity intending that the participants in such activity shall use or be trained to use criminal force or violence or knowing it to be likely that the participants in such activity will use or be trained to use criminal force or violence, or participates in such activity intending to use or be trained to use criminal force or violence or knowing it to be likely that the participants in such activity will use or be trained to use criminal force or violence, against any religious, racial, language or regional group or caste or community and such activity for any reason whatsoever causes or is likely to cause fear or alarm or a feeling of insecurity amongst members of such religious, racial, language or regional group or caste or community,]\nshall be punished with imprisonment which may extend to three years, or with fine, or with both.\n(2) Offence committed in place of worship, etc.--Whoever commits an offence specified in sub-section (1) in any place of worship or in any assembly engaged in the performance of religious worship or religious ceremonies, shall be punished with imprisonment which may extend to five years and shall also be liable to fine.",
            "notes": [
              "Substituted by Act 35 of 1969, s. 2, for section 153A.",
              "Inserted by Act 31 of 1972, s. 2"
            ]
          },
          {
            "id": 153.11,
            "title": "IPC Section 153AA: Punishment for knowingly carrying arms in any procession or organizing, or holding or taking part in any mass drill or mass training with arms",
            "content": "153AA. Punishment for knowingly carrying arms in any procession or organising, or holding or taking part in any mass drill or mass training with arms.-- Whoever knowingly carries arms in any procession or organizes or holds or takes part in any mass drill or mass training with arms in any public place in contravention of any public notice or order issued or made under section 144A of the Code of Criminal Procedure, 1973 (2 of 1974) shall be punished with imprisonment for a term which may extend to six months and with fine which may extend to two thousand rupees.\nExplanation.--\"Arms\" means articles of any description designed or adapted as weapons for offence or defence and includes firearms, sharp edged weapons, lathis, dandas and sticks.",
            "notes": [
              "Inserted by Act 25 of 2005, s. 44 (w.e.f. 23-6-2005)."
            ]
          },
          {
            "id": 153.2,
            "title": "IPC Section 153B: Imputation, assertions prejudicial to national integration",
            "content": "153B. Imputations, assertions prejudicial to national integration.-- (1) Whoever, by words either spoken or written or by signs or by visible representations or otherwise,--\n(a) makes or publishes any imputation that any class of persons cannot, by reason of their being members of any religious, racial, language or regional group or caste or community, bear true faith and allegiance to the Constitution of India as by law established or uphold the sovereignty and integrity of India, or\n(b) asserts, counsels, advises, propagates or publishes that any class of persons shall, by reason of their being members of any religious, racial, language or regional group or caste or community, be denied, or deprived of their rights as citizens of India, or\n(c) makes or publishes and assertion, counsel, plea or appeal concerning the obligation of any class of persons, by reason of their being members of any religious, racial, language or regional group or caste or community, and such assertion, counsel, plea or appeal causes or is likely to cause disharmony or feelings of enmity or hatred or ill-will between such members and other persons,\nshall be punished with imprisonment which may extend to three years, or with fine, or with both.\n(2) Whoever commits an offence specified in sub-section (1) in any place of worship or in any assembly engaged in the performance of religious worship or religious ceremonies, shall be punished with imprisonment which may extend to five years and shall also be liable to fine.",
            "notes": [
              "Inserted by Act 31 of 1972, s. 2."
            ]
          },
          {
            "id": 154,
            "title": "IPC Section 154: Owner or occupier of land on which an unlawful assembly is held",
            "content": "Whenever any unlawful assembly or riot takes place, the owner or occupier of the land upon which such unlawful assembly is held, or such riot is committed, and any person having or claiming an interest in such land, shall be punishable with fine not exceeding one thousand rupees, if he or his agent or manager, knowing that such offence is being or has been committed, or having reason to believe it is likely to be committed, do not give the earliest notice thereof in his or their power to the principal officer at the nearest police-station, and do not, in the case of his or their having reason to believe that it was about to be committed, use all lawful means in his or their power to prevent it and, in the event of its taking place, do not use all lawful means in his or their power to disperse or suppress the riot or unlawful assembly."
          },
          {
            "id": 155,
            "title": "IPC Section 155: Liability of person for whose benefit riot is committed",
            "content": "Whenever a riot is committed for the benefit or on behalf of any person who is the owner or occupier of any land respecting which such riot takes place or who claims any interest in such land, or in the subject of any dispute which gave rise to the riot, or who has accepted or derived any benefit therefrom, such person shall be punishable with fine, if he or his agent or manager, having reason to believe that such riot was likely to be committed or that the unlawful assembly by which such riot was committed was likely to be held, shall not respectively use all lawful means in his or their power to prevent such assembly or riot from taking place, and for suppressing and dispersing the same."
          },
          {
            "id": 156,
            "title": "IPC Section 156: Liability of agent of owner or occupier for whose benefit riot is committed",
            "content": "Whenever a riot is committed for the benefit or on behalf of any person who is the owner or occupier of any land respecting which such riot takes place, or who claims any interest in such land, or in the subject of any dispute which gave rise to the riot, or who has accepted or derived any benefit therefrom, the agent or manager of such person shall be punishable with fine, if such agent or manager, having reason to believe that such riot was likely to be committed, or that the unlawful assembly by which such riot was committed was likely to be held, shall not use all lawful means in his power to prevent such riot or assembly from taking place and for suppressing and dispersing the same."
          },
          {
            "id": 157,
            "title": "IPC Section 157: Harbouring persons hired for an unlawful assembly",
            "content": "Whoever harbours, receives or assembles, in any house or premises in his occupation or charge, or under his control any persons knowing that such persons have been hired, engaged or employed, or are about to be hired, engaged or employed, to join or become members of an unlawful assembly, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both."
          },
          {
            "id": 158,
            "title": "IPC Section 158: Being hired to take part in an unlawful assembly or riot; or to go armed",
            "content": "Whoever is engaged, or hired, or offers or attempts to be hired or engaged, to do or assist in doing any of the acts specified in section 141, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both, or to go armed.—and whoever, being so engaged or hired as aforesaid, goes armed, or engages or offers to go armed, with any deadly weapon or with anything which used as a weapon of offence is likely to cause death, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
          },
          {
            "id": 159,
            "title": "IPC Section 159: Affray",
            "content": "When two or more persons, by fighting in a public place, disturb the public peace, they are said to 'commit an affray'."
          },
          {
            "id": 160,
            "title": "IPC Section 160: Punishment for committing affray",
            "content": "Whoever commits an affray, shall be punished with imprisonment of either description for a term which may extend to one month, or with fine which may extend to one hundred rupees, or with both.",
            "stateAmendment": {
              "Uttar Pradesh": {
                "amendment": "Abatement of certain trials.-- Notwithstanding anything contained in any other law for the time being in force, -- (1) the trial of an accused for -- (a) an offence punishable under -- '(i) the Motor Vehicles Act, 1988; or ' (ii) the Public Gambling Act, 1867, not being an offence punishable under section 3 of that Act or an offence in respect of wagering punishable under section 13 of that Act; or (iii) section 34 of the Police Act, 1861; or (iv) section 160 of the Indian Penal Code, 1860; or (b) any other offence punishable with fine only, or (2) a procedure, under section 107 or section 109 of the Code of Criminal Procedure, 1973, pending before a Magistrate on the date of commencement of this Act from before “December 31, 2015” shall abate. [Vide the Uttar Pradesh Act 35 of 1979, s. 9, and amended by Uttar Pradesh Act 29 of 2016 and 9 of 2018]."
              }
            }
          },
          {
            "id": 161,
            "title": "IPC Section 161: [Repealed.]",
            "content": "[Public servant taking a gratification other than legal remuneration, in respect of an official act.] Rep. by the Prevention of Corruption Act, 1988 (49 of 1988), s. 31.",
            "stateAmendment": {
              "Kerala": {
                "amendment": "Amendment of section 161, Central Act 45 of 1860--In section 161 of the Indian Penal Code (Central Act 45 of 1860), after the explanation relating to A motive or reward for doing, the following explanation shall be inserted, namely:-- 'Public Servant'.-- For purposes of this section and sections 162, 163, 164, 165 and 165A, the words public servant shall denote, besides those who are public servants under section 21 or who are deemed to be public servants within the meaning of that section under any law for the time being in force, persons falling under any of the descriptions hereinafter following, namely:--- (i) Every officer in the service or pay of the Travancore Devaswom Board or the Cochin Devaswom Board or the Cochin Devaswom Board; (ii) Every officer in the service or pay and every member of the Wakfs Board constituted under the Wakfs Act, 1954 (Central Act 29 of 1954); (iii) The President and every member of a Village Court or Village Panchayat Court; (iv) Every member of the Board of Directors or of the executive or managing committee and every officer or servant of a co-operative society registered or deemed to be registered under the law relating to co-operative societies for the time being in force. (v) Every member of the governing body and every officer or servant in the service or pay of a society registered under the Travancore-Cochin Literary, Scientific and Charitable Societies Registration Act, 1955 or the Societies Registration Act, 1860, and receiving aid or grant from the Government; (vi) Every teacher or other officer or servant of the University of Kerala; (vii) Every examiner of a University Examination or a Government Examination; (viii) Every Manager, or teacher or servant of an educational institution which receives or has received aid or grant from the Government or the University of kerala.'. [Vide Kerala Act 27 of 1962, sec. 2]."
              }
            }
          },
          {
            "id": 162,
            "title": "IPC Section 162: [Repealed.]",
            "content": "[Taking a gratification, in order, by corrupt or illegal means, to influence a public servant.] Rep. by s. 31, ibid."
          },
          {
            "id": 163,
            "title": "IPC Section 163: [Repealed.]",
            "content": "[Taking a gratification for the exercise of personal influence with a public servant.] Rep. by s. 31, ibid."
          },
          {
            "id": 164,
            "title": "IPC Section 164: [Repealed.]",
            "content": "[Punishment for abetment by public servant of the offences above defined.] Rep. by s. 31, ibid."
          },
          {
            "id": 165.1,
            "title": "IPC Section 165A: [Repealed.]",
            "content": "[Punishment for abetment of offences defined in section 161 or section 165.] Rep. by the Prevention of Corruption Act, 1988 (49 of 1988), s. 31."
          },
          {
            "id": 166,
            "title": "IPC Section 166: Public servant disobeying law, with intent to cause injury to any person",
            "content": "Whoever, being a public servant, knowingly disobeys any direction of the law as to the way in which he is to conduct himself as such public servant, intending to cause, or knowing it to be likely that he will by such disobedience, cause injury to any person, shall be punished with simple imprisonment for a term which may extend to one year, or with fine, or with both.",
            "illustration": "A, being an officer directed by law to take property in execution, in order to satisfy a decree pronounced in Z's favour by a Court of Justice, knowingly disobeys that direction of law, with the knowledge that he is likely thereby to cause injury to Z. A has committed the offence defined in this section."
          },
          {
            "id": 166.1,
            "title": "IPC Section 166A: Public servant disobeying direction under law",
            "content": "Whoever, being a public servant,--\n(a) knowingly disobeys any direction of the law which prohibits him from requiring the attendance at any place of any person for the purpose of investigation into an offence or any other matter, or\n(b) knowingly disobeys, to the prejudice of any person, any other direction of the law regulating the manner in which he shall conduct such investigation, or\n(c) fails to record any information given to him under sub-section (1) of section 154 of the Code of Criminal Procedure, 1973 (2 of 1974), in relation to cognizable offence punishable under section 326A, section 326B, section 354, section 354B, section 370, section 370A, section 376, section 376A, section 376AB, section 376B, section 376C, section 376D, section 376DA, section 376DB, section 376E or section 509,\nshall be punished with rigorous imprisonment for a term which shall not be less than six months but which may extend to two years, and shall also be liable to fine.",
            "state_amendment": {
              "Arunachal Pradesh": {
                "content": "In section 166A of the principal Act, in clause (c), for the words, figures and letters 'section 326A, section 326B, section 354, section 354A, section 370, section 370A, section 376, section 376A, section 376B, section 376C, section 376D, section 376E or section 509' the words, figures and letters 'section 326A, section 326B, section 354, sub-sections (2) and (3) of section 354A, section 354B, section 354C, sub-sections (2) of section 354D, section 370, section 370A, section 376, section 376A, section 376AA, section 376B, section 376C, section 376D, section 376DA, section 376E or section 509' shall be substituted.",
                "reference": "Vide Arunachal Pradesh Act 3 of 2019, s. 3"
              }
            },
            "notes": [
              "Inserted by Act 13 of 2013, s. 3 (w.e.f. 03-02-2013).",
              "Substituted by Act 22 of 2018, s. 2, for 'section 376B, section 376C, section 376D' (w.e.f. 21-4-2018)."
            ]
          },
          {
            "id": 166.2,
            "title": "IPC Section 166B: Punishment for non-treatment of victim",
            "content": "Whoever, being in charge of a hospital, public or private, whether run by the Central Government, the State Government, local bodies or any other person, contravenes the provisions of section 357C of the Code of Criminal Procedure, 1973 (2 of 1974), shall be punished with imprisonment for a term which may extend to one year or with fine or with both."
          },
          {
            "id": 167,
            "title": "IPC Section 167: Public servant framing an incorrect document with intent to cause injury",
            "content": "Whoever, being a public servant, and being, as such public servant, charged with the preparation or translation of any document or electronic record, frames, prepares or translates that document or electronic record in a manner which he knows or believes to be incorrect, intending thereby to cause or knowing it to be likely that he may thereby cause injury to any person, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.",
            "notes": "This section deals with the criminal act of a public servant framing an incorrect document with the intent to cause injury. It specifies the punishment for such an offense, which may include imprisonment, fine, or both.",
            "expand": "1. Subs. by Act 21 of 2000, s. 91 and the First Sch., for certain words (w.e.f. 17-10-2000)."
        },
        {
            "id": 168,
            "title": "IPC Section 168: Public servant unlawfully engaging in trade",
            "content": "Whoever, being a public servant, and being legally bound as such public servant not to engage in trade, engages in trade, shall be punished with simple imprisonment for a term which may extend to one year, or with fine, or with both."
          },
          {
            "id": 169,
            "title": "IPC Section 169: Public servant unlawfully buying or bidding for property",
            "content": "Whoever, being a public servant, and being legally bound as such public servant, not to purchase or bid for certain property, purchases or bids for that property, either in his own name or in the name of another, or jointly, or in shares with others, shall be punished with simple imprisonment for a term which may extend to two years, or with fine, or with both; and the property, if purchased, shall be confiscated."
          },
          {
            "id": 170,
            "title": "IPC Section 170: Personating a public servant",
            "content": "Whoever pretends to hold any particular office as a public servant, knowing that he does not hold such office or falsely personates any other person holding such office, and in such assumed character does or attempts to do any act under colour of such office, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
          },
          {
            "id": 171,
            "title": "IPC Section 171: Wearing garb or carrying token used by public servant with fraudulent intent",
            "content": "Whoever, not belonging to a certain class of public servants, wears any garb or carries any token resembling any garb or token used by that class of public servants, with the intention that it may be believed, or with the knowledge that it is likely to be believed, that he belongs to that class of public servants, shall be punished with imprisonment of either description for a term which may extend to three months, or with fine which may extend to two hundred rupees, or with both."
          },
          {
            "id": 172,
            "title": "IPC Section 172: Absconding to avoid service of summons or other proceeding",
            "content": "Whoever absconds in order to avoid being served with a summons, notice, or order proceeding from any public servant legally competent, as such public servant, to issue such summons, notice, or order, shall be punished with simple imprisonment for a term which may extend to one month, or with a fine which may extend to five hundred rupees, or with both; or, if the summons, notice, or order is to attend in person or by agent, or to produce a document or an electronic record in a Court of Justice, with simple imprisonment for a term which may extend to six months, or with a fine which may extend to one thousand rupees, or with both.",
            "notes": "This section deals with the punishment for absconding to avoid being served with a summons, notice, or order issued by a public servant. The punishment varies depending on the nature of the summons, notice, or order.",
            "expand":"1. Subs. by Act 21 of 2000, s. 91 and the First Sch., for 'produce a document in a Court of Justice' (w.e.f. 17-10-2000)."
        },
        {
            "id": 173,
            "title": "IPC Section 173: Preventing service of summons or other proceeding, or preventing publication thereof",
            "content": "Whoever in any manner intentionally prevents the serving on himself, or on any other person, of any summons, notice, or order proceeding from any public servant legally competent, as such public servant, to issue such summons, notice, or order, or intentionally prevents the lawful affixing to any place of any such summons, notice, or order, or intentionally removes any such summons, notice, or order from any place to which it is lawfully affixed, or intentionally prevents the lawful making of any proclamation, under the authority of any public servant legally competent, as such public servant, to direct such proclamation to be made, shall be punished with simple imprisonment for a term which may extend to one month, or with a fine which may extend to five hundred rupees, or with both; or, if the summons, notice, order, or proclamation is to attend in person or by agent, or to produce a document or electronic record in a Court of Justice, with simple imprisonment for a term which may extend to six months, or with a fine which may extend to one thousand rupees, or with both.",
            "notes": "This section deals with the punishment for intentionally preventing the service of summons or other proceedings, or preventing the publication thereof, issued by a public servant. The punishment varies depending on the nature of the summons, notice, order, or proclamation.",
            "expand": "1. Subs. by Act 21 of 2000, s. 91 and the First Sch., for to 'produce a document in a Court of Justice' (w.e.f. 17-10-2000)."
        },
        {
            "id": 174,
            "title": "IPC Section 174: Non-attendance in obedience to an order from public servant",
            "content": "Whoever, being legally bound to attend in person or by an agent at a certain place and time in obedience to a summons, notice, order, or proclamation proceeding from any public servant legally competent, as such public servant, to issue the same, intentionally omits to attend at that place or time, or departs from the place where he is bound to attend before the time at which it is lawful for him to depart, shall be punished with simple imprisonment for a term which may extend to one month, or with fine which may extend to five hundred rupees, or with both; or, if the summons, notice, order, or proclamation is to attend in person or by agent in a Court of Justice, with simple imprisonment for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both.",
            "notes": "This section pertains to the offense of non-attendance in obedience to an order from a public servant. It specifies the punishment for intentionally failing to attend at the specified place and time, or departing from the place of attendance before the lawful time to depart.",
            "illustrations": [
                  {
                    "title": "Illustration (a)",
                    "content": "A, being legally bound to appear before the High Court at Calcutta, in obedience to a subpoena issuing from that Court, intentionally omits to appear. A has committed the offence defined in this section."
                  },
                  {
                    "title": "Illustration (b)",
                    "content": "A, being legally bound to appear before a District Judge, as a witness, in obedience to a summons issued by that District Judge intentionally omits to appear. A has committed the offence defined in this section."
                  }
                ],
                "expand" : "1. Subs. by the A. O. 1950, for 'Supreme Court'. 2. Subs. ibid., for 'Zila Judge'."
              },
              {
                "id": 175,
                "title": "IPC Section 175: Omission to produce document to public servant by person legally bound to produce it",
                "content": "Whoever, being legally bound to produce or deliver up any document or electronic record to any public servant, as such, intentionally omits so to produce or deliver up the same, shall be punished with simple imprisonment for a term which may extend to one month, or with fine which may extend to five hundred rupees, or with both; or, if the document or electronic record is to be produced or delivered up to a Court of Justice, with simple imprisonment for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both.",
                "notes": "This section addresses the offense of failing to produce or deliver up a document or electronic record to a public servant when legally bound to do so. It outlines the punishment for intentionally omitting to produce or deliver the document, including imprisonment and/or fine.",
                "exand" : "1. Ins. by Act 25 of 2005, s. 44 (w.e.f. 23-6-2005).2. Subs. by Act 21 of 2000, s. 91 and the First Sch., for 'document' (w.e.f. 17-10-2000).3. Subs. by the A.O. 1950, for 'Zila Court'.",
                "illustrations": [
                  {
                    "title": "Illustration",
                    "content": "A, being legally bound to produce a document before a District Court, intentionally omits to produce the same. A has committed the offence defined in this section."
                  }
                ]
              },
              {
                "id": 176,
                "title": "IPC Section 176: Omission to give notice or information to public servant by person legally bound to give it",
                "content": "Whoever, being legally bound to give any notice or to furnish information on any subject to any public servant, as such, intentionally omits to give such notice or to furnish such information in the manner and at the time required by law, shall be punished with simple imprisonment for a term which may extend to one month, or with fine which may extend to five hundred rupees, or with both; or, if the notice or information required to be given respects the commission of an offence, or is required for the purpose of preventing the commission of an offence, or in order to the apprehension of an offender, with simple imprisonment for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both; or, if the notice or information required to be given is required by an order passed under sub-section (1) of section 565 of the Code of Criminal Procedure, 1898 (5 of 1898), with imprisonment of either description for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both.",
                "notes": "This section pertains to the failure to give notice or furnish information to a public servant when legally obligated to do so. It outlines the punishment for intentionally omitting to provide such notice or information, including imprisonment and/or fine.",
                "amendments": [
                  {
                    "date": "Added by Act 22 of 1939, s. 2."
                  }
                ]
              },
              {
                "id": 177,
                "title": "IPC Section 177: Furnishing false information",
                "content": "Whoever, being legally bound to furnish information on any subject to any public servant, as such, furnishes, as true, information on the subject which he knows or has reason to believe to be false shall be punished with simple imprisonment for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both; or, if the information which he is legally bound to give respects the commission of an offence, or is required for the purpose of preventing the commission of an offence, or in order to the apprehension of an offender, with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
                "illustrations": [
                  {
                    "scenario": "A, a landholder, knowing of the commission of a murder within the limits of his estate, wilfully misinforms the Magistrate of the district that the death has occurred by accident in consequence of the bite of a snake. A is guilty of the offence defined in this section."
                  },
                  {
                    "scenario": "A, a village watchman, knowing that a considerable body of strangers has passed through his village in order to commit a dacoity in the house of Z, a wealthy merchant residing in a neighbouring place, and being bound under clause 5, section VII, 1Regulation III, 1821, of the Bengal Code, to give early and punctual information of the above fact to the officer of the nearest police-station, wilfully misinforms the police officer that a body of suspicious characters passed through the village with a view to commit dacoity in a certain distant place in a different direction. Here A is guilty of the offence defined in the latter part of this section."
                  }
                ],
                "explanation": "In section 176 and in this section the word 'offence' includes any act committed at any place out of India, which, if committed in India, would be punishable under any of the following sections, namely, 302, 304, 382, 392, 393, 394, 395, 396, 397, 398, 399, 402, 435, 436, 449, 450, 457, 458, 459 and 460; and the word offender includes any person who is alleged to have been guilty of any such act.",
                "amendments": [
                  {
                    "date": "Added by Act 3 of 1894, s. 5."
                  }
                ]
              },
              {
                "id": 178,
                "title": "IPC Section 178: Refusing oath or affirmation when duly required by public servant to make it",
                "content": "Whoever refuses to bind himself by an oath or affirmation to state the truth, when required so to bind himself by a public servant legally competent to require that he shall so bind himself, shall be punished with simple imprisonment for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both.",
                "amendments": [
                  {
                    "date": "Inserted by Act 10 of 1873, s. 15."
                  }
                ]
              },
              {
                "id": 179,
                "title": "IPC Section 179: Refusing to answer public servant authorised to question",
                "content": "Whoever, being legally bound to state the truth on any subject to any public servant, refuses to answer any question demanded of him touching that subject by such public servant in the exercise of the legal powers of such public servant, shall be punished with simple imprisonment for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both."
              },
              {
                "id": 180,
                "title": "IPC Section 180: Refusing to sign statement",
                "content": "Whoever refuses to sign any statement made by him, when required to sign that statement by a public servant legally competent to require that he shall sign that statement, shall be punished with simple imprisonment for a term which may extend to three months, or with fine which may extend to five hundred rupees, or with both."
              },
              {
                "id": 181,
                "title": "IPC Section 181: False statement on oath or affirmation to public servant or person authorised to administer an oath or affirmation",
                "content": "Whoever, being legally bound by an oath or affirmation to state the truth on any subject to any public servant or other person authorized by law to administer such oath or affirmation, makes, to such public servant or other person as aforesaid, touching that subject, any statement which is false, and which he either knows or believes to be false or does not believe to be true, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine.",
                "notes": [
                  "The words 'British India' have successively been substituted by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above.",
                  "The words 'British India' have successively been substituted by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above."
                ]
              },
              {
                "id": 182,
                "title": "IPC Section 182: False information, with intent to cause public servant to use his lawful power to the injury of another person",
                "content": "Whoever gives to any public servant any information which he knows or believes to be false, intending thereby to cause, or knowing it to be likely that he will thereby cause, such public servant (a) to do or omit anything which such public servant ought not to do or omit if the true state of facts respecting which such information is given were known by him, or (b) to use the lawful power of such public servant to the injury or annoyance of any person, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both.",
                "notes": [
                  "Substituted by Act 3 of 1895, s. 1, for section 182."
                ],
                "expand" : "1. Subs. by Act 3 of 1895, s. 1, for section 182.",
                "illustrations": [
                  {
                    "content": "A informs a Magistrate that Z, a police-officer, subordinate to such Magistrate, has been guilty of neglect of duty or misconduct, knowing such information to be false, and knowing it to be likely that the information will cause the Magistrate to dismiss Z. A has committed the offence defined in this section.",
                    "example_number": "a"
                  },
                  {
                    "content": "A falsely informs a public servant that Z has contraband salt in a secret place, knowing such information to be false, and knowing that it is likely that the consequence of the information will be a search of Z's premises, attended with annoyance to Z. A has committed the offence defined in this section.",
                    "example_number": "b"
                  },
                  {
                    "content": "A falsely informs a policeman that he has been assaulted and robbed in the neighbourhood of a particular village. He does not mention the name of any person as one of his assailants, but knows it to be likely that in consequence of this information the police will make enquiries and institute searches in the village to the annoyance of the villagers or some of them. A has committed an offence under this section.",
                    "example_number": "c"
                  }
                ]
              },
              {
                "id": 183,
                "title": "IPC Section 183: Resistance to the taking of property by the lawful authority of a public servant",
                "content": "Whoever offers any resistance to the taking of any property by the lawful authority of any public servant, knowing or having reason to believe that he is such public servant, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both."
              },
              {
                "id": 184,
                "title": "IPC Section 184: Obstructing sale of property offered for sale by authority of public servant",
                "content": "Whoever intentionally obstructs any sale of property offered for sale by the lawful authority of any public servant, as such, shall be punished with imprisonment of either description for a term which may extend to one month, or with fine which may extend to five hundred rupees, or with both."
              },
              {
                "id": 185,
                "title": "IPC Section 185: Illegal purchase or bid for property offered for sale by authority of public servant",
                "content": "Whoever, at any sale of property held by the lawful authority of a public servant, as such, purchases or bids for any property on account of any person, whether himself or any other, whom he knows to be under a legal incapacity to purchase that property at that sale, or bids for such property not intending to perform the obligations under which he lays himself by such bidding, shall be punished with imprisonment of either description for a term which may extend to one month, or with fine which may extend to two hundred rupees, or with both."
              },
              {
                "id": 186,
                "title": "IPC Section 186: Obstructing public servant in discharge of public functions",
                "content": "Whoever voluntarily obstructs any public servant in the discharge of his public functions, shall be punished with imprisonment of either description for a term which may extend to three months, or with fine which may extend to five hundred rupees, or with both."
              },
              {
                "id": 187,
                "title": "IPC Section 187: Omission to assist public servant when bound by law to give assistance",
                "content": "Whoever, being bound by law to render or furnish assistance to any public servant in the execution of his public duty, intentionally omits to give such assistance, shall be punished with simple imprisonment for a term which may extend to one month, or with fine which may extend to two hundred rupees, or with both; and if such assistance be demanded of him by a public servant legally competent to make such demand for the purposes of executing any process lawfully issued by a Court of Justice, or of preventing the commission of an offence, or suppressing a riot, or affray, or of apprehending a person charged with or guilty of an offence, or of having escaped from lawful custody, shall be punished with simple imprisonment for a term which may extend to six months, or with fine which may extend to five hundred rupees, or with both."
              },
              {
                "id": 188,
                "title": "IPC Section 188: Disobedience to order duly promulgated by public servant",
                "content": "Whoever, knowing that, by an order promulgated by a public servant lawfully empowered to promulgate such order, he is directed to abstain from a certain act, or to take certain order with certain property in his possession or under his management, disobeys such direction, shall, if such disobedience causes or tends to cause obstruction, annoyance or injury, or risk of obstruction, annoyance or injury, to any persons lawfully employed, be punished with simple imprisonment for a term which may extend to one month or with fine which may extend to two hundred rupees, or with both; and if such disobedience causes or tends to cause danger to human life, health or safety, or causes or tends to cause a riot or affray, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both.",
                "explanation": "It is not necessary that the offender should intend to produce harm, or contemplate his disobedience as likely to produce harm. It is sufficient that he knows of the order which he disobeys, and that his disobedience produces, or is likely to produce, harm.",
                "illustration": {
                  "description": "An order is promulgated by a public servant lawfully empowered to promulgate such order, directing that a religious procession shall not pass down a certain street. A knowingly disobeys the order, and thereby causes danger of riot.",
                  "interpretation": "A has committed the offence defined in this section."
                }
              },
              {
                "id": 189,
                "title": "IPC Section 189: Threat of injury to public servant",
                "content": "Whoever holds out any threat of injury to any public servant, or to any person in whom he believes that public servant to be interested, for the purpose of inducing that public servant to do any act, or to forbear or delay to do any act, connected with the exercise of the public functions of such public servant, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
              },
              {
                "id": 190,
                "title": "IPC Section 190: Threat of injury to induce person to refrain from applying for protection to public servant",
                "content": "Whoever holds out any threat of injury to any person for the purpose of inducing that person to refrain or desist from making a legal application for protection against any injury to any public servant legally empowered as such to give such protection, or to cause such protection to be given, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both."
              },
              {
                "id": 191,
                "title": "IPC Section 191: Giving false evidence",
                "content": "Whoever, being legally bound by an oath or by an express provision of law to state the truth, or being bound by law to make a declaration upon any subject, makes any statement which is false, and which he either knows or believes to be false or does not believe to be true, is said to give false evidence.",
                "explanation": [
                  {
                    "text": "A statement is within the meaning of this section, whether it is made verbally or otherwise."
                  },
                  {
                    "text": "A false statement as to the belief of the person attesting is within the meaning of this section, and a person may be guilty of giving false evidence by stating that he believes a thing which he does not believe, as well as by stating that he knows a thing which he does not know."
                  }
                ],
                "illustrations": [
                  {
                    "description": "A, in support of a just claim which B has against Z for one thousand rupees, falsely swears on a trial that he heard Z admit the justice of B's claim. A has given false evidence."
                  },
                  {
                    "description": "A, being bound by an oath to state the truth, states that he believes a certain signature to be the handwriting of Z, when he does not believe it to be the handwriting of Z. Here A states that which he knows to be false, and therefore gives false evidence."
                  },
                  {
                    "description": "A, knowing the general character of Z's handwriting, states that he believes a certain signature to be the handwriting of Z; A in good faith believing it to be so. Here A's statement is merely as to his belief, and is true as to his belief, and therefore, although the signature may not be the handwriting of Z, A has not given false evidence."
                  },
                  {
                    "description": "A, being bound by an oath to state the truth, states that he knows that Z was at a particular place on a particular day, not knowing anything upon the subject. A gives false evidence whether Z was at that place on the day named or not."
                  },
                  {
                    "description": "A, an interpreter or translator, gives or certifies as a true interpretation or translation of a statement or document which he is bound by oath to interpret or translate truly, that which is not and which he does not believe to be a true interpretation or translation. A has given false evidence."
                  }
                ]
              },
              {
                "id": 192,
                "title": "IPC Section 192: Fabricating false evidence",
                "content": "Whoever causes any circumstance to exist or makes any false entry in any book or record, or electronic record or makes any document or electronic record containing a false statement, intending that such circumstance, false entry or false statement may appear in evidence in a judicial proceeding, or in a proceeding taken by law before a public servant as such, or before an arbitrator, and that such circumstance, false entry or false statement, so appearing in evidence, may cause any person who in such proceeding is to form an opinion upon the evidence, to entertain an erroneous opinion touching any point material to the result of such proceeding is said to fabricate false evidence.",
                "illustrations": [
                  {
                    "description": "A puts jewels into a box belonging to Z, with the intention that they may be found in that box, and that this circumstance may cause Z to be convicted of theft. A has fabricated false evidence."
                  },
                  {
                    "description": "A makes a false entry in his shop-book for the purpose of using it as corroborative evidence in a Court of Justice. A has fabricated false evidence."
                  },
                  {
                    "description": "A, with the intention of causing Z to be convicted of a criminal conspiracy, writes a letter in imitation of Z's handwriting, purporting to be addressed to an accomplice in such criminal conspiracy, and puts the letter in a place which he knows that the officers of the police are likely to search. A has fabricated false evidence."
                  }
                ],
                "notes" : "1. Subs. by Act 21 of 2000, s. 91 and the First Sch., for certain words (w.e.f. 17-10-2000)."
              },
              {
                "id": 193,
                "title": "IPC Section 193: Punishment for false evidence",
                "content": "Whoever intentionally gives false evidence in any of a judicial proceeding, or fabricates false evidence for the purpose of being used in any stage of a judicial proceeding, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine; and whoever intentionally gives or fabricates false evidence in any other case, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine.",
                "explanations": [
                  {
                    "id": 1,
                    "content": "A trial before a Court-martial is a judicial proceeding."
                  },
                  {
                    "id": 2,
                    "content": "An investigation directed by law preliminary to a proceeding before a Court of Justice, is a stage of a judicial proceeding, though that investigation may not take place before a Court of Justice."
                  },
                  {
                    "id": 3,
                    "content": "An investigation directed by a Court of Justice according to law, and conducted under the authority of a Court of Justice, is a stage of a judicial proceeding, though that investigation may not take place before a Court of Justice."
                  }
                ],
                "illustration": [
                  {
                    "description": "A, in an enquiry before a Magistrate for the purpose of ascertaining whether Z ought to be committed for trial, makes on oath a statement which he knows to be false. As this enquiry is a stage of a judicial proceeding, A as given false evidence."
                  },
                  {
                    "description": "A, in an enquiry before an officer deputed by a Court of Justice to ascertain on the spot the boundaries of land, makes on oath a statement which he knows to be false. As this enquiry is a stage of a judicial proceeding, A has given false evidence."
                  }
                ],
                "notes" : "1. The words 'or before a Military Court of Request' rep. by Act 13 of 1889, s. 2 and Sch."
              },
              {
                "id": 194,
                "title": "IPC Section 194: Giving or fabricating false evidence with intent to procure conviction of capital offence",
                "content": "Whoever gives or fabricates false evidence, intending thereby to cause, or knowing it to be likely that he will thereby cause, any person to be convicted of an offence which is capital by the law for the time being in force in India shall be punished with imprisonment for life, or with rigorous imprisonment for a term which may extend to ten years, and shall also be liable to fine;",
                "notes": "If innocent person be thereby convicted and executed.—and if an innocent person be convicted and executed in consequence of such false evidence, the person who gives such false evidence shall be punished either with death or the punishment hereinbefore described.",
                "expand": "1. Subs. by the A.O. 1948, for 'by the law of British India or England'.2. Subs. by Act 3 of 1951, s. 3 and the Sch., for 'the States'.3. Subs. by Act 26 of 1955, s. 117 and the Sch., 'for transportation for life' (w.e.f. 1-1-1956)."
              },
              {
                "id": 195,
                "title": "IPC Section 195: Giving or fabricating false evidence with intent to procure conviction of offence punishable with imprisonment for life or imprisonment",
                "content": "Whoever gives or fabricates false evidence intending thereby to cause, or knowing it to be likely that he will thereby cause, any person to be convicted of an offence which by the law for the time being in force in India is not capital, but punishable with imprisonment for life, or imprisonment for a term of seven years or upwards, shall be punished as a person convicted of that offence would be liable to be punished.",
                "illustration": "A gives false evidence before a Court of Justice, intending thereby to cause Z to be convicted of a dacoity. The punishment of dacoity is imprisonment for life, or rigorous imprisonment for a term which may extend to ten years, with or without fine. A, therefore, is liable to imprisonment for life or imprisonment, with or without fine.",
                "notes": {
                  "1": "Subs. by the A.O. 1948, for 'by the law of British India or England'.",
                  "2": "Subs.by Act 3 of 1951, s. 3 and Schedule, for 'the States'.",
                  "3": "Subs. by Act 26 of 1955, s. 117 and Schedule, for 'transportation for life' (w.e.f. 1-1-1956).",
                  "4": "Subs. by s. 117 and the Schedule, ibid., for 'transportation for life' (w.e.f. 1-1-1956).",
                  "5": "Subs. by s. 117 and the Schedule, ibid., for 'such transportation' (w.e.f. 1-1-1956)."
                }
              },
              {
                "id": 195.1,
                "title": "IPC Section 195A: Threatening any person to give false evidence",
                "content": "Whoever threatens another with any injury to his person, reputation or property or to the person or reputation of any one in whom that person is interested, with intent to cause that person to give false evidence shall be punished with imprisonment of either description for a term which may extend to seven years, or with fine, or with both; and if an innocent person is convicted and sentenced in consequence of such false evidence, with death or imprisonment for more than seven years, the person who threatens shall be punished with the same punishment and sentence in the same manner and to the same extent such innocent person is punished and sentenced.",
                "notes": {
                  "1": "Inserted by Act 2 of 2006, s. 2 (w.e.f. 16-4-2006)."
                }
              },
              {
                "id": 196,
                "title": "IPC Section 196: Using evidence known to be false",
                "content": "Whoever corruptly uses or attempts to use as true or genuine evidence any evidence which he knows to be false or fabricated, shall be punished in the same manner as if he gave or fabricated false evidence."
              },
              {
                "id": 197,
                "title": "IPC Section 197: Issuing or signing false certificate",
                "content": "Whoever issues or signs any certificate required by law to be given or signed, or relating to any fact of which such certificate is by law admissible in evidence, knowing or believing that such certificate is false in any material point, shall be punished in the same manner as if he gave false evidence."
              },
              {
                "id": 198,
                "title": "IPC Section 198: Using as true a certificate known to be false",
                "content": "Whoever corruptly uses or attempts to use any such certificate as a true certificate, knowing the same to be false in any material point, shall be punished in the same manner as if he gave false evidence."
              },
              {
                "id": 199,
                "title": "IPC Section 199: False statement made in declaration which is by law receivable as evidence",
                "content": "Whoever, in any declaration made or subscribed by him, which declaration any Court of Justice, or any public servant or other person, is bound or authorised by law to receive as evidence of any fact, makes any statement which is false, and which he either knows or believes to be false or does not believe to be true, touching any point material to the object for which the declaration is made or used, shall be punished in the same manner as if he gave false evidence."
              },
              {
                "id": 200,
                "title": "IPC Section 200: Using as true such declaration knowing it to be false",
                "content": "Whoever corruptly uses or attempts to use as true any such declaration, knowing the same to be false in any material point, shall be punished in the same manner as if he gave false evidence.\nExplanation: A declaration which is inadmissible merely upon the ground of some informality, is a declaration within the meaning of sections 199 and 200."
              },
              {
                "id": 201,
                "title": "Section 201: Causing disappearance of evidence of offence, or giving false information, to screen offender",
                "content": "Whoever, knowing or having reason to believe that an offence has been committed, causes any evidence of the commission of that offence to disappear, with the intention of screening the offender from legal punishment, or with that intention gives any information respecting the offence which he knows or believes to be false,\nif a capital offence.—shall, if the offence which he knows or believes to have been committed is punishable with death be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine;\nif punishable with imprisonment for life.—and if the offence is punishable with 1 [imprisonment for life], or with imprisonment which may extend to ten years, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine;\nif punishable with less than ten years imprisonment.—and if the offence is punishable with imprisonment for any term not extending to ten years, shall be punished with imprisonment of the description provided for the offence, for a term which may extend to one-fourth part of the longest term of the imprisonment provided for the offence, or with fine, or with both.",
                "illustration": {
                  "scenario": "A, knowing that B has murdered Z, assists B to hide the body with the intention of screening B from punishment.",
                  "consequence": "A is liable to imprisonment of either description for seven years, and also to fine."
                },
                 "note": "1. Added by Act 3 of 1894, s. 6."
                  
              },
              {
                "id": 202,
                "title": "Section 202: Intentional omission to give information of offence by person bound to inform",
                "content": "Whoever, knowing or having reason to believe that an offence has been committed, intentionally omits to give any information respecting that offence which he is legally bound to give, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both."
              },
              {
                "id": 203,
                "title": "Section 203: Giving false information respecting an offence committed",
                "content": "Whoever, knowing or having reason to believe that an offence has been committed, gives any information respecting that offence which he knows or believes to be false, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
                "explanation": "In sections 201 and 202 and in this section the word 'offence' includes any act committed at any place out of India, which, if committed in India, would be punishable under any of the following sections, namely, 302, 304, 382, 392, 393, 394, 395, 396, 397, 398, 399, 402, 435, 436, 449, 450, 457, 458, 459 and 460.",
                 "note":["1. Added by Act 3 of 1894, s. 6.",
                       "2. The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above."]
        },
        {
            "id": 204,
            "title": "Section 204: Destruction of document to prevent its production as evidence",
            "content": "Whoever secretes or destroys any document and electronic record which he may be lawfully compelled to produce as evidence in a Court of Justice, or in any proceeding lawfully held before a public servant, as such, or obliterates or renders illegible the whole or any part of such document or electronic record with the intention of preventing the same from being produced or used as evidence before such Court or public servant as aforesaid, or after he shall have been lawfully summoned or required to produce the same for that purpose, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
            "note" :"1. Subs. by Act 21 of 2000, s. 91 and the First Sch., for 'document' (w.e.f. 17-10-2000)."
          },
          {
            "id": 205,
            "title": "Section 205: False personation for purpose of act or proceeding in suit or prosecution",
            "content": "Whoever falsely personates another, and in such assumed character makes any admission or statement, or confesses judgment, or causes any process to be issued or becomes bail or security, or does any other act in any suit or criminal prosecution, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both."
          },
          {
            "id": 206,
            "title": "Section 206: Fraudulent removal or concealment of property to prevent its seizure as forfeited or in execution",
            "content": "Whoever fraudulently removes, conceals, transfers or delivers to any person any property or any interest therein, intending thereby to prevent that property or interest therein from being taken as a forfeiture or in satisfaction of a fine, under a sentence which has been pronounced, or which he knows to be likely to be pronounced, by a Court of Justice or other competent authority, or from being taken in execution of a decree or order which has been made, or which he knows to be likely to be made by a Court of Justice in a civil suit, shall be punished with imprisonment of either description for a term which may extend to two years or with fine, or with both."
          },
          {
            "id": 207,
            "title": "Section 207: Fraudulent claim to property to prevent its seizure as forfeited or in execution",
            "content": "Whoever fraudulently accepts, receives or claims any property or any interest therein, knowing that he has no right or rightful claim to such property or interest, or practices any deception touching any right to any property or any interest therein, intending thereby to prevent that property or interest therein from being taken as a forfeiture or in satisfaction of a fine, under a sentence which has been pronounced, or which he knows to be likely to be pronounced by a Court of Justice or other competent authority, or from being taken in execution of a decree or order which has been made, or which he knows to be likely to be made by a Court of Justice in a civil suit, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
          },
          {
            "id": 208,
            "title": "Section 208: Fraudulently suffering decree for sum not due",
            "content": "Whoever fraudulently causes or suffers a decree or order to be passed against him at the suit of any person for a sum not due or for a larger sum than is due to such person or for any property or interest in property to which such person is not entitled, or fraudulently causes or suffers a decree or order to be executed against him after it has been satisfied, or for anything in respect of which it has been satisfied, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
            "illustration": "A institutes a suit against Z. Z, knowing that A is likely to obtain a decree against him, fraudulently suffers a judgment to pass against him for a larger amount at the suit of B, who has no just claim against him, in order that B, either on his own account or for the benefit of Z, may share in the proceeds of any sale of Z's property which may be made under A's decree. Z has committed an offence under this section."  
        },
        {
            "id": 209,
            "title": "Section 209: Dishonestly making false claim in Court",
            "content": "Whoever fraudulently or dishonestly, or with intent to injure or annoy any person, makes in a Court of Justice any claim which he knows to be false, shall be punished with imprisonment of either description for a term which may extend to two years, and shall also be liable to fine."
          },
          {
            "id": 210,
            "title": "Section 210: Fraudulently obtaining decree for sum not due",
            "content": "Whoever fraudulently obtains a decree or order against any person for a sum not due, or for a larger sum than is due or for any property or interest in property to which he is not entitled, or fraudulently causes a decree or order to be executed against any person after it has been satisfied or for anything in respect of which it has been satisfied, or fraudulently suffers or permits any such act to be done in his name, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
          },
          {
            "id": 211,
            "title": "Section 211: False charge of offence made with intent to injure",
            "content": [
            {
            "heading": "Description of Offence",
            "text": "Whoever, with intent to cause injury to any person, institutes or causes to be instituted any criminal proceeding against that person, or falsely charges any person with having committed an offence, knowing that there is no just or lawful ground for such proceeding or charge against that person, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
            },
            {
            "heading": "Enhanced Punishment",
            "text": "If such criminal proceeding be instituted on a false charge of an offence punishable with death, imprisonment for life, or imprisonment for seven years or upwards, shall be punishable with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
            },
            {
            "heading": "State Amendment (Chhattisgarh)",
            "text": "In Section 211 of the Indian Penal Code, 1860, the following proviso has been inserted: Provided that, if such criminal proceeding be instituted on a false charge, of an offence punishable under section 354, section 354A, section 354B, section 354C, section 354D, section 354E, section 376B, section 376C, section 376F, section 509, section 509A or section 509B shall be punishable with imprisonment of either description which shall not be less than three years but which may extend to five years and shall also be liable to fine. This amendment is vide Chhattisgarh Act 25 of 2015, sec. 2."
            }
            ],
            "note" : "1. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956)"
            },
            
{
    "id": 212,
    "title": "Section 212: Harbouring offender",
    "content": [
    {
    "heading": "Description of Offence",
    "text": "Whenever an offence has been committed, whoever harbours or conceals a person whom he knows or has reason to believe to be the offender, with the intention of screening him from legal punishment,"
    },
    {
    "heading": "Punishment",
    "text": "If the offence is punishable with death, the offender shall be punished with imprisonment of either description for a term which may extend to five years, and shall also be liable to fine;"
    },
    {
    "heading": "",
    "text": "If the offence is punishable with imprisonment for life, or with imprisonment which may extend to ten years, the offender shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine;"
    },
    {
    "heading": "",
    "text": "If the offence is punishable with imprisonment which may extend to one year, and not to ten years, the offender shall be punished with imprisonment of the description provided for the offence for a term which may extend to one-fourth part of the longest term of imprisonment provided for the offence, or with fine, or with both."
    },
    {
    "heading": "Interpretation",
    "text": "'Offence' in this section includes any act committed at any place out of India, which, if committed in India, would be punishable under any of the following sections, namely, 302, 304, 382, 392, 393, 394, 395, 396, 397, 398, 399, 402, 435, 436, 449, 450, 457, 458, 459 and 460; and every such act shall, for the purposes of this section, be deemed to be punishable as if the accused person had been guilty of it in India."
    },
    {
    "heading": "Exception",
    "text": "This provision shall not extend to any case in which the harbour or concealment is by the husband or wife of the offender."
    },
    {
    "heading": "Illustration",
    "text": "A, knowing that B has committed dacoity, knowingly conceals B in order to screen him from legal punishment. Here, as B is liable to imprisonment for life, A is liable to imprisonment of either description for a term not exceeding three years, and is also liable to fine."
    }
    ],
    "note" :["1. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956).",
             "2. Ins. by Act 3 of 1894, s. 7.",
             "3. The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951 s. 3 and the Sch., to read as above.",
             "4. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956)."] 
    },
      
{
    "id": 213,
    "title": "Section 213: Taking gift, etc., to screen an offender from punishment",
    "content": [
    {
    "heading": "Description of Offence",
    "text": "Whoever accepts or attempts to obtain, or agrees to accept, any gratification for himself or any other person, or any restitution of property to himself or any other person, in consideration of his concealing an offence or of his screening any person from legal punishment for any offence, or of his not proceeding against any person for the purpose of bringing him to legal punishment,"
    },
    {
    "heading": "Punishment",
    "text": "If the offence is punishable with death, the offender shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine;"
    },
    {
    "heading": "",
    "text": "If the offence is punishable with imprisonment for life, or with imprisonment which may extend to ten years, the offender shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine;"
    },
    {
    "heading": "",
    "text": "If the offence is punishable with imprisonment not extending to ten years, the offender shall be punished with imprisonment of the description provided for the offence for a term which may extend to one fourth part of the longest term of imprisonment provided for the offence, or with fine, or with both."
    }
    ],
    "note" : "1. Ins. by Act 3 of 1894, s. 7."
    },
    {
        "id": 214,
        "title": "Section 214: Offering gift or restoration of property in consideration of screening offender",
        "content": [
        {
        "heading": "Description of Offence",
        "text": "Whoever gives or causes, or offers or agrees to give or cause, any gratification to any person, or restores or causes the restoration of any property to any person, in consideration of that person's concealing an offence, or of his screening any person from legal punishment for any offence, or of his not proceeding against any person for the purpose of bringing him to legal punishment,"
        },
        {
        "heading": "Punishment",
        "text": "If the offence is punishable with death, the offender shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine;"
        },
        {
        "heading": "",
        "text": "If the offence is punishable with imprisonment for life, or with imprisonment which may extend to ten years, the offender shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine;"
        },
        {
        "heading": "",
        "text": "If the offence is punishable with imprisonment not extending to ten years, the offender shall be punished with imprisonment of the description provided for the offence for a term which may extend to one-fourth part of the longest term of imprisonment provided for the offence, or with fine, or with both."
        },
        {
        "heading": "Exception",
        "text": "The provisions of sections 213 and 214 do not extend to any case in which the offence may lawfully be compounded."
        }
        ],
        "note":["1. Ins. by Act 3 of 1894, s. 7.",
                "2. Subs. by Act 42 of 1953, s. 4 and the Third Sch., for to restore or cause the restoration of",
                "3. Subs. by Act 8 of 1882, s. 6, for the original exception.",
                "4. Illustrations rep. by Act 10 of 1882, s. 2 and the First Sch."]
        },
        {
            "id": 215,
            "title": "Section 215: Taking gift to help to recover stolen property, etc.",
            "content": "Whoever takes or agrees or consents to take any gratification under pretence or on account of helping any person to recover any movable property of which he shall have been deprived by any offence punishable under this Code, shall, unless he uses all means in his power to cause the offender to be apprehended and convicted of the offence, be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
            "relatedSections": [
            "Related Section 214: Offering gift or restoration of property in consideration of screening offender"
            ]
            },
            {
                "id": 216,
                "title": "Section 216: Harbouring offender who has escaped from custody or whose apprehension has been ordered",
                "content": "Whenever any person convicted of a charged with an offence, being in lawful custody for that offence, escapes from such custody, or whenever a public servant, in the exercise of the lawful powers of such public servant, orders a certain person to be apprehended for an offence, whoever, knowing of such escape or order for apprehension, harbours or conceals that person with the intention of preventing him from being apprehended, shall be punished in the manner following, that is to say, if the offence for which the person was in custody or is ordered to be apprehended is punishable with death, he shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine; if the offence is punishable with imprisonment for life, or with imprisonment, and if the offence is punishable with imprisonment for life or imprisonment for ten years, he shall be punished with imprisonment of either description for a term which may extend to three years, with or without fine; and if the offence is punishable with imprisonment which may extend to one year and not to ten years, he shall be punished with imprisonment of the description provided for the offence for a term which may extend to one-fourth part of the longest term of the imprisonment provided for such offence, or with fine, or with both.",
                "offence": "Offence in this section includes also any act or omission of which a person is alleged to have been guilty out of India, which, if he had been guilty of it in India, would have been punishable as an offence, and for which he is, under any law relating to extradition or otherwise, liable to be apprehended or detained in custody in India, and every such act or omission shall, for the purposes of this section, be deemed to be punishable as if the accused person had been guilty of it in India.",
                "exceptions": [
                    "The provision does not extend to the case in which the harbour or concealment is by the husband or wife of the person to be apprehended."
                ],
                "notes" : ["1. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956).",
                           "2. Ins. by Act 10 of 1886, s. 23.",
                           "3. The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above.",
                           "4. The words 'or under the Fugitive Offenders Act, 1881', omitted by Act 3 of 1951, s. 3 and the Sch."]
            },
            {
                "id": 216.1,
                "title": "Section 216A: Penalty for harbouring robbers or dacoits",
                "content": "Whoever, knowing or having reason to believe that any persons are about to commit or have recently committed robbery or dacoity, harbours them or any of them, with the intention of facilitating the commission of such robbery or dacoity, or of screening them or any of them from punishment, shall be punished with rigorous imprisonment for a term which may extend to seven years, and shall also be liable to fine.",
                "explanation": "For the purposes of this section it is immaterial whether the robbery or dacoity is intended to be committed, or has been committed, within or without India.",
                "exceptions": [
                    "This provision does not extend to the case in which the harbour is by the husband or wife of the offender."
                ],
                "notes" :["1. Ins. by Act 10 of 1886, s. 23.",
                          "2. Ins. by Act 3 of 1894, s. 8."]
            },
            {
                "id": 216.2,
                "title": "Section 216B: Repealed",
                "repealed": true,
                "repealingAct": {
                    "name": "Indian Penal Code (Amendment) Act, 1942",
                    "number": "8 of 1942",
                    "section": "s. 3"
                },
                "notes": "Definition of 'harbour' in sections 212, 216 and 216A."
            },
            {
                "id": 217,
                "title": "Section 217: Public servant disobeying direction of law with intent to save person from punishment or property from forfeiture",
                "content": "Whoever, being a public servant, knowingly disobeys any direction of the law as to the way in which he is to conduct himself as such public servant, intending thereby to save, or knowing it to be likely that he will thereby save, any person from legal punishment, or subject him to a less punishment than that to which he is liable, or with intent to save, or knowing that he is likely thereby to save, any property from forfeiture or any charge to which it is liable by law, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
            },
            {
                "id": 218,
                "title": "Section 218: Public servant framing incorrect record or writing with intent to save person from punishment or property from forfeiture",
                "content": "Whoever, being a public servant, and being as such public servant, charged with the preparation of any record or other writing, frames that record or writing in a manner which he knows to be incorrect, with intent to cause, or knowing it to be likely that he will thereby cause, loss or injury to the public or to any person, or with intent thereby to save, or knowing it to be likely that he will thereby save, any person from legal punishment, or with intent to save, or knowing that he is likely thereby to save, any property from forfeiture or other charge to which it is liable by law, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both."
            },
            {
                "id": 219,
                "title": "Section 219: Public servant in judicial proceeding corruptly making report, etc., contrary to law",
                "content": "Whoever, being a public servant, corruptly or maliciously makes or pronounces in any stage of a judicial proceeding, any report, order, verdict, or decision which he knows to be contrary to law, shall be punished with imprisonment of either description for a term which may extend to seven years, or with fine, or with both."
            },
            {
                "id": 220,
                "title": "Section 220: Commitment for trial or confinement by person having authority who knows that he is acting contrary to law",
                "content": "Whoever, being in any office which gives him legal authority to commit persons for trial or to confinement, or to keep persons in confinement, corruptly or maliciously commits any person for trial or to confinement, or keeps any person in confinement, in the exercise of that authority knowing that in so doing he is acting contrary to law, shall be punished with imprisonment of either description for a term which may extend to seven years, or with fine, or with both."
            },
            {
                "id": 221,
                "title": "Section 221: Intentional omission to apprehend on the part of public servant bound to apprehend",
                "content": "Whoever, being a public servant, legally bound as such public servant to apprehend or to keep in confinement any person charged with or liable to be apprehended for an offence, intentionally omits to apprehend such person, or intentionally suffers such person to escape, or intentionally aids such person in escaping or attempting to escape from such confinement, shall be punished as follows, that is to say:-- with imprisonment of either description for a term which may extend to seven years, with or without fine, if the person in confinement, or who ought to have been apprehended, was charged with, or liable to be apprehended for, an offence punishable with death; or with imprisonment of either description for a term which may extend to three years, with or without fine, if the person in confinement, or who ought to have been apprehended, was charged with, or liable to be apprehended for, an offence punishable with imprisonment for life or imprisonment for a term which may extend to ten years; or with imprisonment of either description for a term which may extend to two years, with or without fine, if the person in confinement, or who ought to have been apprehended, was charged with, or liable to be apprehended for, an offence punishable with imprisonment for a term less than ten years.",
                "notes": "1. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956)."
            },
            {
                "id": 222,
                "title": "Section 222: Intentional omission to apprehend on the part of public servant bound to apprehend person under sentence or lawfully committed",
                "content": "Whoever, being a public servant, legally bound as such public servant to apprehend or to keep in confinement any person under sentence of a Court of Justice for any offence or lawfully committed to custody, intentionally omits to apprehend such person, or intentionally suffers such person to escape or intentionally aids such person in escaping or attempting to escape from such confinement, shall be punished as follows, that is to say:— with imprisonment for life or with imprisonment of either description for a term which may extend to fourteen years, with or without fine, if the person in confinement, or who ought to have been apprehended, is under sentence of death; or with imprisonment of either description for a term which may extend to seven years, with or without fine, if the person in confinement or who ought to have been apprehended, is subject, by a sentence of a Court of Justice, or by virtue of a commutation of such sentence, to imprisonment for life or imprisonment for a term of ten years, or upwards; or with imprisonment of either description for a term which may extend to three years, or with fine, or with both, if the person in confinement or who ought to have been apprehended is subject by a sentence of a Court of Justice, to imprisonment for a term not extending to ten years or if the person was lawfully committed to custody.",
                "notes":["1. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956).",
                         "2. Ins. by Act 27 of 1870, s. 8".,
                         "3. The words 'or penal servitude for life' omitted by Act 17 of 1949, s. 2 (w.e.f. 6-4-1949).",
                         "4. The words 'or to' omitted by Act 36 of 1957, s. 3 and the Second Sch.",
                         "5. The word 'transportation' omitted by Act 26 of 1955, s. 117 and the Sch. (w.e.f. 1-1-1956).",
                         "6. The words 'or penal servitude' omitted by Act 17 of 1949, s. 2 (w.e.f. 6-4-1949)."]
          },
          {
            "id": 223,
            "title": "Section 223: Escape from confinement or custody negligently suffered by public servant",
            "content": "Whoever, being a public servant legally bound as such public servant to keep in confinement any person charged with or convicted of any offence or lawfully committed to custody, negligently suffers such person to escape from confinement, shall be punished with simple imprisonment for a term which may extend to two years, or with fine, or with both.",
            "notes" : "1. Ins. by Act 27 of 1870, s. 8."
        },
        {
            "id": 224,
            "title": "Section 224: Resistance or obstruction by a person to his lawful apprehension",
            "content": [
                {
                    "heading": "Resistance or Obstruction",
                    "text": "Whoever intentionally offers any resistance or illegal obstruction to the lawful apprehension of himself for any offence with which he is charged or of which he has been convicted, or escapes or attempts to escape from any custody in which he is lawfully detained for any such offence, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
                },
                {
                    "heading": "Explanation",
                    "text": "The punishment in this section is in addition to the punishment for which the person to be apprehended or detained in custody was liable for the offence with which he was charged, or of which he was convicted."
                }
            ]
        },
        {
            "id": 225,
            "title": "Section 225: Resistance or obstruction to lawful apprehension of another person",
            "content": [
                {
                    "heading": "Resistance or Obstruction",
                    "text": "Whoever intentionally offers any resistance or illegal obstruction to the lawful apprehension of any other person for an offence, or rescues or attempts to rescue any other person from any custody in which that person is lawfully detained for an offence, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
                },
                {
                    "heading": "Additional Penalties",
                    "text": "Additionally, if the person to be apprehended, or the person rescued or attempted to be rescued, is charged with or liable to be apprehended for an offence punishable with imprisonment for life or imprisonment for a term which may extend to ten years, the offender shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine."
                },
                {
                    "heading": "Further Penalties",
                    "text": "Furthermore, if the person to be apprehended or rescued, or attempted to be rescued, is charged with or liable to be apprehended for an offence punishable with death, imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine shall be imposed."
                },
                {
                    "heading": "Additional Conditions",
                    "text": "In case the person to be apprehended or rescued, or attempted to be rescued, is liable under the sentence of a Court of Justice, or by virtue of a commutation of such a sentence, to imprisonment for life, or imprisonment for a term of ten years or upwards, the offender shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
                },
                {
                    "heading": "Death Sentence",
                    "text": "Finally, if the person to be apprehended or rescued, or attempted to be rescued, is under sentence of death, the offender shall be punished with imprisonment for life or imprisonment of either description for a term not exceeding ten years, and shall also be liable to fine."
                }
            ],
            "notes" : ["1. The words 'or to' omitted by Act 36 of 1957, s. 3 and the Second Sch.",
                       "2. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956).",
                       "3. The words 'or to' omitted by Act 36 of 1957, s. 3 and the Second Sch.",
                       "4. The word 'transportation' omitted by Act 26 of 1955, s. 117 and the Sch. (w.e.f. 1-1-1956).",
                       "5. The words 'penal servitude' omitted by Act 17 of 1949, s. 2 (w.e.f. 6-4-1949)."]
        },
        {
            "id": 225.1,
            "title": "Section 225A: Omission to apprehend, or sufferance of escape, on part of public servant, in cases not otherwise provided for",
            "content": [
                {
                    "heading": "Intentional Omission",
                    "text": "Whoever, being a public servant legally bound as such public servant to apprehend, or to keep in confinement, any person in any case not provided for in section 221, section 222 or section 223, or in any other law for the time being in force, omits to apprehend that person or suffers him to escape from confinement intentionally, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine or with both."
                },
                {
                    "heading": "Negligent Omission",
                    "text": "Additionally, if he does so negligently, the offender shall be punished with simple imprisonment for a term which may extend to two years, or with fine, or with both."
                }
            ],
            "notes":"1. Subs. by Act 10 of 1886, s. 24(1), for section 225A which had been ins. by Act 27 of 1870, s. 9"
        },
        {
            "id": 225.2,
            "title": "Section 225B: Resistance or obstruction to lawful apprehension, or escape or rescue in cases not otherwise provided for",
            "content": [
                {
                    "heading": "Offences Covered",
                    "text": "This section applies to cases not provided for in section 224 or section 225 or in any other law for the time being in force."
                },
                {
                    "heading": "Resistance or Obstruction",
                    "text": "Whoever, intentionally offers any resistance or illegal obstruction to the lawful apprehension of himself or of any other person, or escapes or attempts to escape from any custody in which he is lawfully detained, or rescues or attempts to rescue any other person from any custody in which that person is lawfully detained, shall be punished with imprisonment of either description for a term which may extend to six months, or with fine, or with both."
                }
            ]
        },
        {
            "id": 226,
            "title": "Section 226: Repealed",
            "content": "Section 226, regarding unlawful return from transportation, has been repealed by the Code of Criminal Procedure (Amendment) Act, 1955 (26 of 1955), s. 117 and the Sch (w.e.f. 1-1-1956)."
        },
        {
            "id": 227,
            "title": "Section 227: Violation of condition of remission of punishment",
            "content": "Whoever, having accepted any conditional remission of punishment, knowingly violates any condition on which such remission was granted, shall be punished with the punishment to which he was originally sentenced, if he has already suffered no part of that punishment, and if he has suffered any part of that punishment, then with so much of that punishment as he has not already suffered."
        },
        {
            "id": 228,
            "title": "Section 228: Intentional insult or interruption to public servant sitting in judicial proceeding",
            "content": "Whoever intentionally offers any insult, or causes any interruption to any public servant, while such public servant is sitting in any stage of a judicial proceeding, shall be punished with simple imprisonment for a term which may extend to six months, or with fine which may extend to one thousand rupees, or with both."
        },
        {
            "id": 228.1,
            "title": "Section 228A: Disclosure of identity of the victim of certain offences, etc.",
            "content": [
                {
                    "heading": "Print or publication of victim's identity",
                    "text": "Whoever prints or publishes the name or any matter which may make known the identity of any person against whom an offence under section 376, section 376A, section 376AA, section 376B, section 376C, section 376D, section 376DA, section 376DB or section 376E is alleged or found to have been committed (hereafter in this section referred to as the victim) shall be punished with imprisonment of either description for a term which may extend to two years and shall also be liable to fine."
                },
                {
                    "heading": "Exceptions to printing or publication",
                    "text": "Nothing in sub-section (1) extends to any printing or publication of the name or any matter which may make known the identity of the victim if such printing or publication:\n(a) by or under the order in writing of the officer-in-charge of the police station or the police officer making the investigation into such offence acting in good faith for the purposes of such investigation; or\n(b) by, or with the authorisation in writing of, the victim; or\n(c) where the victim is dead or minor or of unsound mind, by, or with the authorisation in writing of, the next of kin of the victim:\nProvided that no such authorisation shall be given by the next of kin to anybody other than the chairman or the secretary, by whatever name called, of any recognised welfare institution or organisation.\n\nExplanation.--For the purposes of this sub-section, \"recognised welfare institution or organisation\" means a social welfare institution or organisation recognised in this behalf by the Central or State Government."
                },
                {
                    "heading": "Printing or publication of court proceedings",
                    "text": "Whoever prints or publishes any matter in relation to any proceeding before a court with respect to an offence referred to in sub-section (1) without the previous permission of such court shall be punished with imprisonment of either description for a term which may extend to two years and shall also be liable to fine.\n\nExplanation.--The printing or publication of the judgment of any High Court or the Supreme Court does not amount to an offence within the meaning of this section."
                },
                {
                    "heading": "State Amendment (Arunachal Pradesh)",
                    "text": "Amendment of section 228A.--In section 228A of the Penal Code, in sub-section (1), for the words, figure and letters \"offence under section 376, section 376A, section 376B, section 376C or section 376D or section 376E\" the words, figure and letters \"offence under section 376, section 376A, section 376AA, section 376B, section 376C, section 376D, section 376DA or section 376E\" shall be substituted.\n\n[Vide Arunachal Pradesh Act 3 of 2019, s. 4]."
                }
            ],
             "notes" : ["1. Ins. by Act 43 of 1983, s. 2.",
                       "2. Subs. by Act 13 of 2013, s. 4, for 'offence under section 376, section 376A, section 376B, section 376C or section 376D' (w.e.f. 3-2-2013).",
                       "3. Subs. by Act 22 of 2018, s. 3, for 'section 376A, section 376B, section 376C, section 376D' (w.e.f. 21-4-2018)."]
        },
        {
            "id": 229,
            "title": "Section 229: Personation of a juror or assessor",
            "content": [
                {
                    "heading": "Offence",
                    "text": "Whoever, by personation or otherwise, shall intentionally cause, or knowingly suffer himself to be returned, empanelled or sworn as a juryman or assessor in any case in which he knows that he is not entitled by law to be so returned, empanelled or sworn, or knowing himself to have been so returned, empanelled or sworn contrary to law, shall voluntarily serve on such jury or as such assessor, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both."
                }
            ]
        },
        {
            "id": 229.1,
            "title": "Section 229A: Failure by person released on bail or bond to appear in Court",
            "content": [
                {
                    "heading": "Offence",
                    "text": "Whoever having been charged with an offence and released on bail or on bond without sureties, fails without sufficient cause (the burden of proving which shall lie upon him), to appear in court in accordance with the terms of the bail or bond, shall be punished with imprisonment of either description for a term which may extend to one year, or with fine, or with both."
                },
                {
                    "heading": "Explanation",
                    "text": "The punishment under this section is:\n(a) in addition to the punishment to which the offender would be liable on a conviction for the offence with which he has been charged; and\n(b) without prejudice to the power of the court to order forfeiture of the bond."
                }
            ],
            "notes" : "1. Ins. by Act 25 of 2005, s. 44 (w.e.f. 23-6-2005)."
        },
        {
            "id": 230,
            "title": "Section 230: 'Coin' defined",
            "content": [
                {
                    "heading": "Coin defined",
                    "text": "Coin is metal used for the time being as money, and stamped and issued by the authority of some State or Sovereign Power in order to be so used."
                },
                {
                    "heading": "Indian coin",
                    "text": "Indian coin is metal stamped and issued by the authority of the Government of India in order to be used as money; and metal which has been so stamped and issued shall continue to be Indian coin for the purposes of this Chapter, notwithstanding that it may have ceased to be used as money."
                },
                {
                    "heading": "Illustrations",
                    "content": [
                        "(a) Cowries are not coin.",
                        "(b) Lumps of unstamped copper, though used as money, are not coin.",
                        "(c) Medals are not coin, inasmuch as they are not intended to be used as money.",
                        "(d) The coin denominated as the Company's rupee is Indian coin.",
                        "(e) The 'Farukhabad rupee', which was formerly used as money under the authority of the Government of India, is Indian coin although it is no longer so used."
                    ]
                }
            ],
            "notes" : ["1. Subs. by Act 19 of 1872, s. 1, for the first paragraph.",
                       "2. Subs. by the A. O. 1950, for the second paragraph.",
                       "3. Subs., ibid., for 'the Queens coin'.",
                       "4. Added by Act 6 of 1896, s. 1(2).",
                       "5. Subs. by the A. O. 1950, for 'Queens coin'."]
        },
        {
            "id": 231,
            "title": "Section 231: Counterfeiting coin",
            "content": [
                {
                    "heading": "Counterfeiting coin",
                    "text": "Whoever counterfeits or knowingly performs any part of the process of counterfeiting coin, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
                },
                {
                    "heading": "Explanation",
                    "text": "A person commits this offence who intending to practise deception, or knowing it to be likely that deception will thereby be practised, causes a genuine coin to appear like a different coin."
                }
            ]
        },
        {
            "id": 232,
            "title": "Section 232: Counterfeiting Indian coin",
            "content": [
                {
                    "heading": "Counterfeiting Indian coin",
                    "text": "Whoever counterfeits, or knowingly performs any part of the process of counterfeiting Indian coin, shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine."
                }
            ],
            "notes":["1. Subs., ibid., for 'the Queens coin.",
                     "2. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956)."]
        },
        {
            "id": 233,
            "title": "Section 233: Making or selling instrument for counterfeiting coin",
            "content": [
                {
                    "heading": "Making or selling instrument for counterfeiting coin",
                    "text": "Whoever makes or mends, or performs any part of the process of making or mending, or buys, sells or disposes of, any die or instrument, for the purpose of being used, or knowing or having reason to believe that it is intended to be used, for the purpose of counterfeiting coin, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine."
                }
            ]
        },
        {
            "id": 234,
            "title": "Section 234: Making or selling instrument for counterfeiting Indian coin",
            "content": [
                {
                    "heading": "Making or selling instrument for counterfeiting Indian coin",
                    "text": "Whoever makes or mends, or performs any part of the process of making or mending, or buys, sells or disposes of, any die or instrument, for the purpose of being used, or knowing or having reason to believe that it is intended to be used, for the purpose of counterfeiting Indian coin, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
                }
            ],
            "notes":"1. Subs. by the A. O. 1950, for 'the Queens coin'."
        },
        {
            "id": 235,
            "title": "Section 235: Possession of instrument or material for the purpose of using the same for counterfeiting coin: if Indian coin",
            "content": [
                {
                    "heading": "Possession of instrument or material for the purpose of using the same for counterfeiting coin: if Indian coin",
                    "text": "Whoever is in possession of any instrument or material, for the purpose of using the same for counterfeiting coin, or knowing or having reason to believe that the same is intended to be used for that purpose, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine; if the coin to be counterfeited is Indian coin, shall be punished with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine."
                }
            ],
            "notes": "1. Subs. by the A. O. 1950, for 'the Queens coin'."
        },
        {
            "id": 236,
            "title": "Section 236: Abetting in India the counterfeiting out of India of coin",
            "content": [
                {
                    "heading": "Abetting in India the counterfeiting out of India of coin",
                    "text": "Whoever, being within India abets the counterfeiting of coin out of India shall be punished in the same manner as if he abetted the counterfeiting of such coin within India."
                }
            ],
            "notes" : "1. The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above."
        },
        {
            "id": 237,
            "title": "Section 237: Import or export of counterfeit coin",
            "content": [
                {
                    "heading": "Import or export of counterfeit coin",
                    "text": "Whoever imports into India, or exports therefrom, any counterfeit coin, knowing or having reason to believe that the same is counterfeit, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine."
                }
            ],
            "notes":"1. The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above."
        },
        {
            "id": 238,
            "title": "Section 238: Import or export of counterfeits of the Indian coin",
            "content": [
                {
                    "heading": "Import or export of counterfeits of the Indian coin",
                    "text": "Whoever imports into India, or exports therefrom, any counterfeit coin, which he knows or has reason to believe to be a counterfeit of Indian coin, shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine."
                }
            ],
            "notes" : ["1. Subs. by the A. O. 1950, for 'the Queens coin'.",
                       "2. The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above.",
                       "3. Subs. by Act 26 of 1955, s. 117 and the Sch., for 'transportation for life' (w.e.f. 1-1-1956)."]
        },
        {
            "id": 239,
            "title": "Section 239: Delivery of coin, possessed with knowledge that it is counterfeit",
            "content": [
                {
                    "heading": "Delivery of coin, possessed with knowledge that it is counterfeit",
                    "text": "Whoever, having any counterfeit coin, which at the time when he became possessed of it, he knew to be counterfeit, fraudulently or with intent that fraud may be committed, delivers the same to any person or attempts to induce any person to receive it, shall be punished with imprisonment of either description for a term which may extend to five years, and shall also be liable to fine."
                }
            ]
        },
        {
            "id": 240,
            "title": "Section 240: Delivery of Indian coin, possessed with knowledge that it is counterfeit",
            "content": [
                {
                    "heading": "Delivery of Indian coin, possessed with knowledge that it is counterfeit",
                    "text": "Whoever, having any counterfeit coin which is a counterfeit of Indian coin, and which, at the time when he became possessed of it, he knew to be a counterfeit of Indian coin, fraudulently or with intent that fraud may be committed, delivers the same to any person, or attempts to induce any person to receive it, shall be punished with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine."
                }
            ],
            "notes":"1. Subs. by the A. O. 1950, for 'the Queens coin'."
        },
        {
            "id": 241,
            "title": "Section 241: Delivery of coin as genuine, which, when first possessed, the deliverer did not know to be counterfeit",
            "content": [
                {
                    "heading": "Delivery of coin as genuine, which, when first possessed, the deliverer did not know to be counterfeit",
                    "text": "Whoever delivers to any other person as genuine, or attempts to induce any other person to receive as genuine, any counterfeit coin which he knows to be counterfeit, but which he did not know to be counterfeit at the time when he took it into his possession, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine to an amount which may extend to ten times the value of the coin counterfeited, or with both."
                },
                {
                    "heading": "Illustration",
                    "text": "A, a coiner, delivers counterfeit Company's rupees to his accomplice B, for the purpose of uttering them. B sells the rupees to C, another utterer, who buys them knowing them to be counterfeit. C pays away the rupees for goods to D, who receives them, not knowing them to be counterfeit. D, after receiving the rupees, discovers that they are counterfeit and pays them away as if they were good. Here D is punishable only under this section, but B and C are punishable under section 239 or 240, as the case may be."
                }
            ]
        },
        {
            "id": 242,
            "title": "Section 242: Possession of counterfeit coin by person who knew it to be counterfeit when he became possessed thereof",
            "content": [
                {
                    "heading": "Possession of counterfeit coin by person who knew it to be counterfeit when he became possessed thereof",
                    "text": "Whoever, fraudulently or with intent that fraud may be committed, is in possession of counterfeit coin, having known at the time when he became possessed thereof that such coin was counterfeit, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine."
                }
            ]
        },
        {
            "id": 243,
            "title": "Section 243: Possession of Indian coin by person who knew it to be counterfeit when he became possessed thereof",
            "content": [
                {
                    "heading": "Possession of Indian coin by person who knew it to be counterfeit when he became possessed thereof",
                    "text": "Whoever, fraudulently or with intent that fraud may be committed, is in possession of counterfeit coin, which is a counterfeit of Indian coin, having known at the time when he became possessed of it that it was counterfeit, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
                }
            ],
            "notes" : "1. Subs. by the A. O. 1950, for 'the Queens coin'."
        },
        {
            "id": 244,
            "title": "Section 244: Person employed in mint causing coin to be of different weight or composition from that fixed by law",
            "content": [
                {
                    "heading": "Person employed in mint causing coin to be of different weight or composition from that fixed by law",
                    "text": "Whoever, being employed in any mint lawfully established in India, does any act, or omits what he is legally bound to do, with the intention of causing any coin issued from that mint to be of a different weight or composition from the weight or composition fixed by law, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
                }
            ],
            "notes": "1. The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above"
        },
        {
            "id": 245,
            "title": "Section 245: Unlawfully taking coining instrument from mint",
            "content": [
                {
                    "heading": "Unlawfully taking coining instrument from mint",
                    "text": "Whoever, without lawful authority, takes out of any mint, lawfully established in India, any coining tool or instrument, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
                }
            ],
            "notes": "1. The words 'British India' have successively been subs. by the A. O. 1948, the A. O. 1950 and Act 3 of 1951, s. 3 and the Sch., to read as above."
        },
        {
            "id": 246,
            "title": "Section 246: Fraudulently or dishonestly diminishing weight or altering composition of coin",
            "content": [
                {
                    "heading": "Fraudulently or dishonestly diminishing weight or altering composition of coin",
                    "text": "Whoever, fraudulently or dishonestly performs on any coin any operation which diminishes the weight or alters the composition of that coin, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine."
                },
                {
                    "heading": "Explanation",
                    "text": "A person who scoops out part of the coin and puts anything else into the cavity alters the composition of the coin."
                }
            ]
        },
        {
            "id": 247,
            "title": "Section 247: Fraudulently or dishonestly diminishing weight or altering composition of Indian coin",
            "content": [
                {
                    "heading": "Fraudulently or dishonestly diminishing weight or altering composition of Indian coin",
                    "text": "Whoever fraudulently or dishonestly performs on any Indian coin any operation which diminishes the weight or alters the composition of that coin, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
                }
            ],
            "notes" : "1. Subs. by the A. O. 1950, for any of 'the Queens coin'."
        },
        {
            "id": 248,
            "title": "Section 248: Altering appearance of coin with intent that it shall pass as coin of different description",
            "content": [
                {
                    "heading": "Altering appearance of coin with intent that it shall pass as coin of different description",
                    "text": "Whoever performs on any coin any operation which alters the appearance of that coin, with the intention that the said coin shall pass as a coin of a different description, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine."
                }
            ]
        },
        {
            "id": 249,
            "title": "Section 249: Altering appearance of Indian coin with intent that it shall pass as coin of different description",
            "content": [
                {
                    "heading": "Altering appearance of Indian coin with intent that it shall pass as coin of different description",
                    "text": "Whoever performs on any Indian coin any operation which alters the appearance of that coin, with the intention that the said coin shall pass as a coin of a different description, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
                }
            ],
            "notes" : "1. Subs. by the A. O. 1950, for any of 'the Queens coin'."
        },
        {
            "id": 250,
            "title": "Section 250: Delivery of coin, possessed with knowledge that it is altered",
            "content": [
                {
                    "heading": "Delivery of coin, possessed with knowledge that it is altered",
                    "text": "Whoever, having coin in his possession with respect to which the offence defined in section 246 or 248 has been committed, and having known at the time when he became possessed of such coin that such offence had been committed with respect to it, fraudulently or with intent that fraud may be committed, delivers such coin to any other person, or attempts to induce any other person to receive the same, shall be punished with imprisonment of either description for a term which may extend to five years, and shall also be liable to fine."
                }
            ]
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
