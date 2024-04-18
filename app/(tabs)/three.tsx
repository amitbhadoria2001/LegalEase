import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View, TextInput } from 'react-native';

export default function TabThreeScreen({ navigation }) {
  const dummyData = [
    {
      "id": 1,
      "title": "Section 436 - Bail in Non-Bailable Offences",
      "data": {
        "summary": "Bail in non-bailable offences allows accused individuals to be released from custody pending trial, despite the severity of the alleged crime. This overview outlines the steps involved in seeking bail for such offences.",
        "steps": [
          {
            "step_number": 1,
            "description": "Definition: Non-bailable offences are serious crimes for which the accused is not automatically entitled to bail. These offences typically carry significant penalties upon conviction."
          },
          {
            "step_number": 2,
            "description": "Bail Application: Accused individuals must apply for bail before the appropriate court, which can be done at any stage of the investigation or trial."
          },
          {
            "step_number": 3,
            "description": "Factors Considered: Courts assess various factors when deciding whether to grant bail in non-bailable offences. These include the gravity of the offence, the risk of the accused fleeing, the strength of evidence, criminal history, and potential threat to society or witnesses."
          },
          {
            "step_number": 4,
            "description": "Bail Hearing: A bail hearing is conducted where both prosecution and defence present arguments. Prosecution may oppose bail, citing factors like the offence's seriousness or risk of evidence tampering."
          },
          {
            "step_number": 5,
            "description": "Conditions of Bail: If bail is granted, the court may impose conditions such as surrendering passports, regular reporting to police, refraining from contacting witnesses, or other measures to ensure the accused's presence at trial and prevent interference with justice."
          },
          {
            "step_number": 6,
            "description": "Appeal: Denied bail applications can be appealed to higher courts for review."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Understanding Bail in Non-Bailable Offences",
          "content": "Bail in non-bailable offences allows accused individuals to be released from custody pending trial, despite the severity of the alleged crime. This overview outlines the steps involved in seeking bail for such offences."
        }
      ]
    },
    {
      "id": 2,
      "title": "Section 437 - Bail in Special Cases",
      "data": {
        "summary": "Bail in special cases involves unique circumstances that may warrant bail despite the nature of the offence. This section provides an overview of the specific conditions and considerations for granting bail in such cases.",
        "steps": [
          {
            "step_number": 1,
            "description": "Definition: Special cases may include situations where the accused is suffering from a medical condition, is a juvenile, or has other mitigating factors that justify bail despite the seriousness of the offence."
          },
          {
            "step_number": 2,
            "description": "Application Process: The accused or their legal representative must submit a bail application detailing the specific circumstances and reasons why bail should be granted."
          },
          {
            "step_number": 3,
            "description": "Court Assessment: The court will carefully assess the application, considering factors such as the accused's health condition, age, criminal record, and the nature of the offence."
          },
          {
            "step_number": 4,
            "description": "Conditions Imposed: If bail is granted, the court may impose specific conditions to ensure the accused's compliance and mitigate any potential risks, such as regular reporting to authorities or restrictions on travel."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Understanding Bail in Special Cases",
          "content": "Bail in special cases involves unique circumstances that may warrant bail despite the nature of the offence. This overview provides insights into the application process, court assessment, and conditions imposed for granting bail in such cases."
        }
      ]
    },
    {
      "id": 3,
      "title": "Section 438 - Anticipatory Bail",
      "data": {
        "summary": "Section 438 of the CrPC deals with anticipatory bail, allowing a person to seek bail in anticipation of arrest to prevent unjust detention.",
        "steps": [
          {
            "step_number": 1,
            "description": "Overview: Anticipatory bail allows individuals to seek bail before actual arrest, providing protection against arbitrary detention."
          },
          {
            "step_number": 2,
            "description": "Application Process: The accused or their legal representative files an application before the appropriate court detailing reasons for seeking anticipatory bail."
          },
          {
            "step_number": 3,
            "description": "Court Hearing: The court conducts a hearing to evaluate the application and may grant anticipatory bail based on factors such as the merit of the case and likelihood of arrest."
          },
          {
            "step_number": 4,
            "description": "Conditions Imposed: If anticipatory bail is granted, the court may impose conditions to ensure the accused's cooperation with the investigation and appearance in court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Understanding Anticipatory Bail",
          "content": "Anticipatory bail, governed by Section 438 of the CrPC, allows individuals to seek bail in anticipation of arrest to prevent unjust detention. This section provides an overview of the application process, court hearing, and conditions imposed for granting anticipatory bail."
        }
      ]
    },
    {
      "id": 4,
      "title": "Section 439 - Special Powers of High Court or Court of Session regarding Bail",
      "data": {
        "summary": "Section 439 grants the High Court or Court of Session the authority to grant bail in cases where the accused has been arrested without a warrant.",
        "steps": [
          {
            "step_number": 1,
            "description": "Scope: This section empowers the High Court or Court of Session to grant bail in cases where the accused has been arrested without a warrant."
          },
          {
            "step_number": 2,
            "description": "Considerations: The court considers factors such as the nature of the offence, the accused's background, and the likelihood of the accused fleeing or tampering with evidence before granting bail."
          },
          {
            "step_number": 3,
            "description": "Conditions Imposed: If bail is granted, the court may impose conditions to ensure the accused's compliance with legal proceedings and prevent any interference with justice."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Understanding Special Powers of High Court or Court of Session regarding Bail",
          "content": "Section 439 of the CrPC grants the High Court or Court of Session special powers to grant bail in cases where the accused has been arrested without a warrant. This section provides an overview of the considerations and conditions imposed for granting bail under this provision."
        }
      ]
    },
    {
      "id": 5,
      "title": "Section 437A - Bail to Offenders on Probation of Good Conduct",
      "data": {
        "summary": "Section 437A deals with the granting of bail to offenders who are on probation of good conduct.",
        "steps": [
          {
            "step_number": 1,
            "description": "Overview: This section allows offenders on probation of good conduct to seek bail under certain circumstances."
          },
          {
            "step_number": 2,
            "description": "Eligibility Criteria: Offenders must meet specific criteria to be eligible for bail under this section, including demonstrating good conduct during probation."
          },
          {
            "step_number": 3,
            "description": "Court Assessment: The court assesses the application for bail, considering factors such as the nature of the offence, the offender's compliance with probation requirements, and the likelihood of re-offending."
          },
          {
            "step_number": 4,
            "description": "Conditions Imposed: If bail is granted, the court may impose conditions to ensure the offender's continued good conduct and compliance with legal obligations."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Understanding Bail to Offenders on Probation of Good Conduct",
          "content": "Section 437A of the CrPC allows offenders on probation of good conduct to seek bail under certain circumstances. This section provides an overview of the eligibility criteria, court assessment process, and conditions imposed for granting bail under this provision."
        }
      ]
    },
    {
      "id": 6,
      "title": "Regular Bail",
      "data": {
        "summary": "Regular bail is the most common type of bail granted during the pendency of the trial. The court considers factors such as the seriousness of the offence, the likelihood of the accused fleeing, and the need to ensure the accused's presence during the trial before granting regular bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Application Filing: The accused or their legal representative files a bail application before the appropriate court, stating reasons for seeking regular bail."
          },
          {
            "step_number": 2,
            "description": "Court Hearing: The court conducts a hearing to evaluate the bail application, considering factors such as the nature of the offence, the accused's background, and the likelihood of the accused fleeing."
          },
          {
            "step_number": 3,
            "description": "Bail Granting: If satisfied, the court grants regular bail, imposing necessary conditions to ensure the accused's appearance in court and prevent any interference with justice."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Regular Bail",
          "content": "Regular bail is granted through a set of procedures involving application filing, court hearing, and bail granting. This section provides insights into the procedural aspects of regular bail."
        }
      ]
    },
    {
      "id": 7,
      "title": "Interim Bail",
      "data": {
        "summary": "Interim bail is a temporary or provisional bail granted by the court until a final decision is made on the regular bail application. It is usually granted for a short period and may be extended based on the circumstances of the case.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Application Submission: The accused or their legal representative submits an application for interim bail before the court."
          },
          {
            "step_number": 2,
            "description": "Immediate Relief: The court reviews the application and, if urgent relief is warranted, grants interim bail for a short duration until the regular bail application is decided."
          },
          {
            "step_number": 3,
            "description": "Regular Bail Decision: The court later hears the regular bail application and makes a final decision. The interim bail may be extended or modified based on the outcome of the regular bail hearing."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Interim Bail",
          "content": "Interim bail involves a set of procedures including application submission, immediate relief, and regular bail decision. This section provides insights into the procedural aspects of interim bail."
        }
      ]
    },
    {
      "id": 8,
      "title": "Emergency Bail",
      "data": {
        "summary": "Emergency bail is granted in urgent situations where the accused needs immediate release from custody due to reasons such as medical emergencies or humanitarian grounds. This type of bail is typically granted by duty magistrates or judges.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Application Submission: The accused or their representative files an emergency bail application before the duty magistrate or judge, stating the urgent reasons for seeking bail."
          },
          {
            "step_number": 2,
            "description": "Immediate Hearing: The duty magistrate or judge promptly conducts a hearing to assess the emergency bail application and decides whether immediate relief is warranted."
          },
          {
            "step_number": 3,
            "description": "Bail Granting: If satisfied with the reasons presented, the duty magistrate or judge grants emergency bail, allowing the accused immediate release from custody."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Emergency Bail",
          "content": "Emergency bail involves submitting an application, immediate hearing, and bail granting. This section provides insights into the procedural aspects of emergency bail."
        }
      ]
    },
    {
      "id": 9,
      "title": "Default Bail",
      "data": {
        "summary": "If the investigating agency fails to file chargesheet within the stipulated period, the accused is entitled to default bail. This provision is intended to prevent undue detention of the accused pending trial.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Eligibility Assessment: The court assesses whether the investigating agency has filed the chargesheet within the prescribed period as per the relevant law."
          },
          {
            "step_number": 2,
            "description": "Bail Granting: If the chargesheet is not filed within the stipulated period, the court grants default bail to the accused, ensuring their release from custody pending trial."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Default Bail",
          "content": "Default bail is granted based on the eligibility assessment and bail granting. This section provides insights into the procedural aspects of default bail."
        }
      ]
    },
    {
      "id": 10,
      "title": "Bail on Execution of Bond with Sureties",
      "data": {
        "summary": "Bail may be granted on the execution of a bond with sureties, where the accused or their sureties undertake to pay a certain amount of money in case the accused fails to appear in court when required.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Bond Preparation: The accused or their legal representative prepares a bond document outlining the terms and conditions of bail, including the amount of surety and other relevant details."
          },
          {
            "step_number": 2,
            "description": "Surety Arrangement: The accused arranges for sureties who are willing to guarantee their appearance in court and undertake to pay the specified amount if the accused fails to comply with bail conditions."
          },
          {
            "step_number": 3,
            "description": "Bond Submission: The bond document, along with surety details, is submitted before the court for approval and execution."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail on Execution of Bond with Sureties",
          "content": "Bail on execution of bond with sureties involves bond preparation, surety arrangement, and bond submission. This section provides insights into the procedural aspects of bail on execution of bond with sureties."
        }
      ]
    },
    {
      "id": 11,
      "title": "Bail by Deposit of Cash or Security",
      "data": {
        "summary": "In certain cases, the court may allow the accused to be released on bail by depositing a specified amount of cash or providing security in the form of movable or immovable property.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Cash or Security Arrangement: The accused arranges for the specified amount of cash or provides security in the form of movable or immovable property as directed by the court."
          },
          {
            "step_number": 2,
            "description": "Deposit Submission: The accused submits the cash or security before the court as per the prescribed procedure."
          },
          {
            "step_number": 3,
            "description": "Court Approval: The court reviews the cash or security deposit and approves the bail, ensuring the accused's release from custody."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail by Deposit of Cash or Security",
          "content": "Bail by deposit of cash or security involves cash or security arrangement, deposit submission, and court approval. This section provides insights into the procedural aspects of bail by deposit of cash or security."
        }
      ]
    },
    {
      "id": 12,
      "title": "Bail in Juvenile Cases",
      "data": {
        "summary": "Special provisions exist under the Juvenile Justice (Care and Protection of Children) Act, 2015 for bail in cases involving juveniles (persons below 18 years of age).",
        "procedures": [
          {
            "step_number": 1,
            "description": "Juvenile Assessment: The court assesses whether the accused is a juvenile as per the Juvenile Justice (Care and Protection of Children) Act, 2015."
          },
          {
            "step_number": 2,
            "description": "Bail Consideration: If the accused is found to be a juvenile, the court considers factors such as the nature of the offence and the best interests of the juvenile before granting bail."
          },
          {
            "step_number": 3,
            "description": "Special Conditions: The court may impose special conditions to ensure the juvenile's welfare and rehabilitation while on bail, such as supervision or counseling."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail in Juvenile Cases",
          "content": "Bail in juvenile cases involves juvenile assessment, bail consideration, and special conditions imposition. This section provides insights into the procedural aspects of bail in juvenile cases."
        }
      ]
    },
    {
      "id": 13,
      "title": "Conditional Bail",
      "data": {
        "summary": "Bail may be granted with certain conditions attached, such as surrendering passport, regular reporting to a police station, refraining from contacting certain individuals, or abstaining from certain activities (like consuming alcohol or visiting specific locations).",
        "procedures": [
          {
            "step_number": 1,
            "description": "Condition Assessment: The court assesses the circumstances of the case and determines whether imposing conditions on bail is necessary to ensure the accused's compliance with legal obligations and prevent interference with justice."
          },
          {
            "step_number": 2,
            "description": "Condition Specification: If deemed necessary, the court specifies the conditions attached to bail, which may include surrendering passport, reporting to a police station, refraining from contacting certain individuals, or abstaining from certain activities."
          },
          {
            "step_number": 3,
            "description": "Condition Compliance Monitoring: Throughout the bail period, authorities monitor the accused's compliance with the specified conditions. Any violation may lead to the revocation of bail."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Bail",
          "content": "Conditional bail involves condition assessment, specification, and compliance monitoring. This section provides insights into the procedural aspects of conditional bail."
        }
      ]
    },
    {
      "id": 14,
      "title": "Personal Recognizance",
      "data": {
        "summary": "Also known as Personal Bond or Signature Bond, this type of bail allows the defendant to be released based solely on their promise to appear in court for all proceedings. No cash or property is required as collateral.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Promise to Appear: The defendant makes a solemn promise to appear in court for all scheduled proceedings related to their case."
          },
          {
            "step_number": 2,
            "description": "No Collateral Requirement: Unlike other types of bail, no cash or property is required as collateral for personal recognizance bail."
          },
          {
            "step_number": 3,
            "description": "Court Approval: The court reviews the defendant's promise and approves their release on personal recognizance, trusting that they will honor their commitment to appear in court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Personal Recognizance",
          "content": "Personal recognizance bail involves a promise to appear, no collateral requirement, and court approval. This section provides insights into the procedural aspects of personal recognizance bail."
        }
      ]
    },
    {
      "id": 15,
      "title": "Immigration Bail",
      "data": {
        "summary": "In cases involving immigration violations, individuals may be granted bail by immigration authorities, allowing them to be released from detention while their immigration case is pending.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Immigration Assessment: Immigration authorities assess the individual's immigration status and the circumstances of the case to determine eligibility for bail."
          },
          {
            "step_number": 2,
            "description": "Bail Conditions: If deemed eligible, immigration authorities may impose certain conditions on bail, such as reporting requirements or restrictions on travel."
          },
          {
            "step_number": 3,
            "description": "Release Approval: Upon satisfaction with the assessment and conditions, immigration authorities approve the individual's release on immigration bail, allowing them to remain free while their immigration case is pending."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Immigration Bail",
          "content": "Immigration bail involves immigration assessment, bail conditions, and release approval. This section provides insights into the procedural aspects of immigration bail."
        }
      ]
    },
    {
      "id": 16,
      "title": "Federal Bail",
      "data": {
        "summary": "In the United States, federal bail applies to cases involving federal offenses. Federal bail may involve stricter conditions and procedures compared to bail in state courts.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Federal Offense Determination: The court determines whether the case involves a federal offense, which may include crimes such as drug trafficking, terrorism, or white-collar crimes."
          },
          {
            "step_number": 2,
            "description": "Stricter Conditions Application: Due to the seriousness of federal offenses, federal bail may involve stricter conditions compared to bail in state courts, such as electronic monitoring or travel restrictions."
          },
          {
            "step_number": 3,
            "description": "Specialized Process: Federal bail procedures may be more complex and specialized, involving federal authorities and adherence to federal laws and regulations."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Federal Bail",
          "content": "Federal bail involves federal offense determination, stricter conditions application, and specialized process. This section provides insights into the procedural aspects of federal bail."
        }
      ]
    },
    {
      "id": 17,
      "title": "Military Bail",
      "data": {
        "summary": "In military justice systems, bail may be granted to military personnel accused of offenses under military law. The procedures for military bail may differ from civilian bail processes.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Military Jurisdiction Assessment: The military court determines whether the case falls under military jurisdiction and whether bail is applicable in accordance with military laws and regulations."
          },
          {
            "step_number": 2,
            "description": "Military Bail Conditions: If bail is deemed appropriate, the military court may impose specific conditions tailored to military circumstances, such as restrictions on deployment or access to classified information."
          },
          {
            "step_number": 3,
            "description": "Military Authorization: Bail decisions in military cases may require authorization from military authorities or commanders, in addition to judicial approval."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Military Bail",
          "content": "Military bail involves military jurisdiction assessment, military bail conditions, and military authorization. This section provides insights into the procedural aspects of military bail."
        }
      ]
    },
    {
      "id": 18,
      "title": "Extradition Bail",
      "data": {
        "summary": "When a person faces extradition to another jurisdiction, they may be granted bail to remain free pending extradition proceedings. This ensures they do not remain in custody unnecessarily if extradition is not certain.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Extradition Assessment: The court assesses the extradition request and the individual's eligibility for bail while extradition proceedings are pending."
          },
          {
            "step_number": 2,
            "description": "Bail Conditions: If deemed eligible, the court may impose conditions on bail to ensure the individual's cooperation with extradition proceedings and compliance with legal obligations."
          },
          {
            "step_number": 3,
            "description": "Extradition Hearing: The individual remains free on bail while extradition hearings take place. If extradition is granted, the individual may be required to surrender to authorities."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Extradition Bail",
          "content": "Extradition bail involves extradition assessment, bail conditions, and extradition hearing. This section provides insights into the procedural aspects of extradition bail."
        }
      ]
    },
    {
      "id": 19,
      "title": "Post-Conviction Bail",
      "data": {
        "summary": "In some cases, individuals who have been convicted of a crime may be granted bail while they appeal their conviction or sentence. This is often referred to as appeal or post-conviction bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Appeal Filing: The convicted individual or their legal representative files an appeal against the conviction or sentence, requesting bail pending appeal."
          },
          {
            "step_number": 2,
            "description": "Bail Hearing: The court conducts a hearing to consider the appeal and whether bail should be granted pending the appeal process."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on the merits of the appeal and other relevant factors, the court decides whether to grant bail pending appeal."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Post-Conviction Bail",
          "content": "Post-conviction bail involves appeal filing, bail hearing, and bail decision. This section provides insights into the procedural aspects of post-conviction bail."
        }
      ]
    },
    {
      "id": 20,
      "title": "Cash-Only Bail",
      "data": {
        "summary": "In some cases, the court may require the full bail amount to be paid in cash, without the option for a bail bond or other forms of collateral. This is typically reserved for cases where the court considers the defendant to be a flight risk or when there are concerns about the source of funds for the bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Cash Payment: The defendant or their representative pays the full bail amount in cash directly to the court or designated authority."
          },
          {
            "step_number": 2,
            "description": "Receipt Issuance: Upon receiving the cash payment, the court issues a receipt acknowledging the bail payment."
          },
          {
            "step_number": 3,
            "description": "Bail Approval: Once the cash payment is verified, the court approves the bail and allows the defendant's release from custody."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Cash-Only Bail",
          "content": "Cash-only bail involves cash payment, receipt issuance, and bail approval. This section provides insights into the procedural aspects of cash-only bail."
        }
      ]
    },
    {
      "id": 21,
      "title": "Release on Own Recognizance (ROR)",
      "data": {
        "summary": "Similar to Personal Recognizance, ROR allows the defendant to be released without posting bail or paying any money. Instead, the defendant signs a document promising to appear in court as required. ROR is often granted for minor offenses and to individuals with strong community ties and no history of failing to appear in court.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Own Recognizance Agreement: The defendant signs a document, known as an own recognizance agreement, promising to appear in court as required."
          },
          {
            "step_number": 2,
            "description": "Court Approval: The court reviews the defendant's background, the nature of the offense, and other relevant factors to determine eligibility for release on own recognizance."
          },
          {
            "step_number": 3,
            "description": "Release Decision: If satisfied with the assessment, the court approves the defendant's release on own recognizance, allowing them to remain free without posting bail or paying any money."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Release on Own Recognizance (ROR)",
          "content": "Release on Own Recognizance involves own recognizance agreement, court approval, and release decision. This section provides insights into the procedural aspects of release on own recognizance."
        }
      ]
    },
    {
      "id": 22,
      "title": "Federal Bail Bond",
      "data": {
        "summary": "In cases involving federal offenses in the United States, federal bail bonds may be used. These bonds are issued by companies authorized to provide bail bonds for federal cases and are subject to federal regulations and procedures.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Bail Bond Application: The defendant or their representative applies for a federal bail bond through a licensed bonding company authorized to provide bonds for federal cases."
          },
          {
            "step_number": 2,
            "description": "Bond Issuance: Upon approval of the application, the bonding company issues a federal bail bond, guaranteeing the defendant's appearance in court for all scheduled proceedings."
          },
          {
            "step_number": 3,
            "description": "Bond Agreement: The defendant or their representative signs a bond agreement, agreeing to comply with all bail conditions and appear in court as required."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Federal Bail Bond",
          "content": "Federal bail bond involves bail bond application, bond issuance, and bond agreement. This section provides insights into the procedural aspects of federal bail bond."
        }
      ]
    },
    {
      "id": 23,
      "title": "Conditional Bail with Electronic Monitoring",
      "data": {
        "summary": "In some jurisdictions, defendants may be granted bail with the condition that they wear an electronic monitoring device, such as an ankle bracelet, to track their location and ensure compliance with bail conditions.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Electronic Monitoring Order: The court issues an order requiring the defendant to wear an electronic monitoring device as a condition of bail."
          },
          {
            "step_number": 2,
            "description": "Device Installation: The defendant reports to the designated authority for the installation of the electronic monitoring device, which tracks their location and movements."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Throughout the bail period, authorities monitor the defendant's compliance with bail conditions, including their adherence to electronic monitoring requirements."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Bail with Electronic Monitoring",
          "content": "Conditional bail with electronic monitoring involves electronic monitoring order, device installation, and compliance monitoring. This section provides insights into the procedural aspects of conditional bail with electronic monitoring."
        }
      ]
    },
    {
      "id": 24,
      "title": "Bail with Substance Abuse Treatment Conditions",
      "data": {
        "summary": "In cases where substance abuse is a factor, the court may grant bail with conditions requiring the defendant to undergo substance abuse treatment or counseling as a condition of release.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Treatment Assessment: The court assesses the defendant's substance abuse issues and determines the need for treatment or counseling as a condition of bail."
          },
          {
            "step_number": 2,
            "description": "Treatment Plan Approval: If deemed necessary, the court approves a treatment plan tailored to the defendant's needs, which may include counseling, rehabilitation, or other interventions."
          },
          {
            "step_number": 3,
            "description": "Treatment Compliance Monitoring: Throughout the bail period, authorities monitor the defendant's compliance with the treatment plan, ensuring they attend sessions and follow recommendations."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Substance Abuse Treatment Conditions",
          "content": "Bail with substance abuse treatment conditions involves treatment assessment, treatment plan approval, and treatment compliance monitoring. This section provides insights into the procedural aspects of bail with substance abuse treatment conditions."
        }
      ]
    },
    {
      "id": 25,
      "title": "Victim Impact Bail",
      "data": {
        "summary": "In certain jurisdictions, the court may consider the impact of the alleged offense on the victim when determining bail. Bail conditions may include provisions to protect the victim's safety or well-being.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Victim Impact Assessment: The court assesses the impact of the alleged offense on the victim, considering factors such as physical harm, emotional distress, and financial losses."
          },
          {
            "step_number": 2,
            "description": "Bail Conditions Determination: Based on the victim impact assessment, the court determines appropriate bail conditions to protect the victim's safety and well-being, which may include no-contact orders or restraining orders."
          },
          {
            "step_number": 3,
            "description": "Bail Approval: Once bail conditions are determined, the court approves the defendant's release with the specified conditions in place."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Victim Impact Bail",
          "content": "Victim impact bail involves victim impact assessment, bail conditions determination, and bail approval. This section provides insights into the procedural aspects of victim impact bail."
        }
      ]
    },
    {
      "id": 26,
      "title": "Corporate Surety Bond",
      "data": {
        "summary": "In cases where a corporation or business entity is involved, a corporate surety bond may be used as bail. This involves a licensed bonding company providing a bond on behalf of the corporation, with the corporation paying a premium for the bond.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Bond Application: The corporation or its representative applies for a corporate surety bond through a licensed bonding company authorized to provide bonds for corporate entities."
          },
          {
            "step_number": 2,
            "description": "Bond Issuance: Upon approval of the application, the bonding company issues a corporate surety bond, guaranteeing the corporation's compliance with bail conditions and appearance in court as required."
          },
          {
            "step_number": 3,
            "description": "Premium Payment: The corporation pays a premium to the bonding company for the issuance of the corporate surety bond, which serves as collateral for the bail amount."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Corporate Surety Bond",
          "content": "Corporate surety bond involves bond application, bond issuance, and premium payment. This section provides insights into the procedural aspects of corporate surety bond."
        }
      ]
    },
    {
      "id": 27,
      "title": "Property Bail Bond",
      "data": {
        "summary": "Instead of using cash or a surety bond, property can be used as collateral for bail. The value of the property must typically exceed the bail amount, and if the defendant fails to appear in court, the property may be forfeited.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Property Evaluation: The court assesses the value of the property offered as collateral to ensure it meets or exceeds the bail amount."
          },
          {
            "step_number": 2,
            "description": "Property Documentation: The defendant provides documentation proving ownership or legal right to use the property offered as collateral."
          },
          {
            "step_number": 3,
            "description": "Property Lien: A lien or legal claim is placed on the property to secure the bail amount. If the defendant fails to appear in court, the property may be seized and sold to cover the bail."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Property Bail Bond",
          "content": "Property bail bond involves property evaluation, documentation, and lien. This section provides insights into the procedural aspects of property bail bond."
        }
      ]
    },
    {
      "id": 28,
      "title": "Signature Bond",
      "data": {
        "summary": "Similar to Personal Recognizance, a signature bond allows the defendant to be released based on their written promise to appear in court. No cash or property is required as collateral, but the defendant signs a document agreeing to appear.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Signature Agreement: The defendant signs a document, known as a signature bond agreement, promising to appear in court for all scheduled proceedings."
          },
          {
            "step_number": 2,
            "description": "Court Approval: The court reviews the defendant's background, the nature of the offense, and other relevant factors to determine eligibility for release on signature bond."
          },
          {
            "step_number": 3,
            "description": "Release Decision: If satisfied with the assessment, the court approves the defendant's release on signature bond, allowing them to remain free without posting bail or paying any money."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Signature Bond",
          "content": "Signature bond involves signature agreement, court approval, and release decision. This section provides insights into the procedural aspects of signature bond."
        }
      ]
    },
    {
      "id": 29,
      "title": "Unsecured Bail Bond",
      "data": {
        "summary": "In this type of bond, the defendant is released without having to pay any money upfront, but they agree to pay a specified amount if they fail to appear in court. Failure to pay this amount can result in legal consequences.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Bail Agreement: The defendant signs a bail agreement, agreeing to appear in court as required and pay a specified amount if they fail to appear."
          },
          {
            "step_number": 2,
            "description": "Court Approval: The court reviews the defendant's background and the nature of the offense to determine eligibility for release on unsecured bail bond."
          },
          {
            "step_number": 3,
            "description": "Release Decision: If satisfied with the assessment, the court approves the defendant's release on unsecured bail bond, allowing them to remain free without upfront payment."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Unsecured Bail Bond",
          "content": "Unsecured bail bond involves bail agreement, court approval, and release decision. This section provides insights into the procedural aspects of unsecured bail bond."
        }
      ]
    },
    {
      "id": 30,
      "title": "Release on Citation",
      "data": {
        "summary": "For minor offenses, law enforcement officers may issue a citation rather than making an arrest. The defendant is released from custody and given a notice to appear in court at a later date.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Citation Issuance: Law enforcement officers issue a citation to the defendant, informing them of the offense alleged and the requirement to appear in court at a specified date and time."
          },
          {
            "step_number": 2,
            "description": "Defendant Acknowledgment: The defendant acknowledges receipt of the citation and agrees to appear in court as required."
          },
          {
            "step_number": 3,
            "description": "Court Appearance: The defendant appears in court at the scheduled date and time to address the alleged offense."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Release on Citation",
          "content": "Release on citation involves citation issuance, defendant acknowledgment, and court appearance. This section provides insights into the procedural aspects of release on citation."
        }
      ]
    },
    {
      "id": 31,
      "title": "Preventive Bail",
      "data": {
        "summary": "In some legal systems, preventive bail may be granted to prevent the arrest of a person who anticipates being accused of an offense. This type of bail is granted to prevent harassment or unnecessary arrest.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Anticipatory Application: The defendant or their legal representative files an anticipatory bail application, anticipating arrest in connection with an alleged offense."
          },
          {
            "step_number": 2,
            "description": "Court Hearing: The court conducts a hearing to consider the anticipatory bail application and the grounds for granting preventive bail."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on the merits of the application and other relevant factors, the court decides whether to grant preventive bail, allowing the defendant to avoid arrest."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Preventive Bail",
          "content": "Preventive bail involves anticipatory application, court hearing, and bail decision. This section provides insights into the procedural aspects of preventive bail."
        }
      ]
    },
    {
      "id": 32,
      "title": "Special Bail Conditions",
      "data": {
        "summary": "Courts may impose special conditions as part of the bail agreement, such as surrendering firearms, staying away from certain individuals or locations, or attending counseling or rehabilitation programs.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Conditions Determination: The court assesses the circumstances of the case and determines appropriate special conditions to be included in the bail agreement."
          },
          {
            "step_number": 2,
            "description": "Defendant Acknowledgment: The defendant acknowledges the special conditions and agrees to comply with them as part of the bail agreement."
          },
          {
            "step_number": 3,
            "description": "Court Approval: The court approves the bail agreement with the specified special conditions, allowing the defendant's release with those conditions in place."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Special Bail Conditions",
          "content": "Special bail conditions involve conditions determination, defendant acknowledgment, and court approval. This section provides insights into the procedural aspects of special bail conditions."
        }
      ]
    },
    {
      "id": 33,
      "title": "Consent Bail",
      "data": {
        "summary": "This type of bail requires the consent of the victim or complainant before the defendant can be released. It is often used in cases where the victim's safety or well-being is a concern.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Victim Consent: The victim or complainant provides consent for the defendant's release on bail, acknowledging the conditions of release."
          },
          {
            "step_number": 2,
            "description": "Court Approval: The court reviews the victim's consent and other relevant factors to determine whether to grant consent bail."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on the victim's consent and other considerations, the court decides whether to grant bail, taking into account the victim's safety and well-being."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Consent Bail",
          "content": "Consent bail involves victim consent, court approval, and bail decision. This section provides insights into the procedural aspects of consent bail."
        }
      ]
    },
    {
      "id": 34,
      "title": "Nominal Bail",
      "data": {
        "summary": "Sometimes, a very small amount of bail, known as nominal bail, is set by the court. This symbolic amount is set more as a formality than as a financial guarantee and is often used in minor cases.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Bail Amount Determination: The court sets a nominal amount of bail, usually a token amount, to fulfill procedural requirements."
          },
          {
            "step_number": 2,
            "description": "Bail Payment: The defendant pays the nominal bail amount, if required, as a formality to comply with bail procedures."
          },
          {
            "step_number": 3,
            "description": "Release: Upon payment of nominal bail, the defendant is released from custody, pending further proceedings in the case."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Nominal Bail",
          "content": "Nominal bail involves bail amount determination, bail payment, and release. This section provides insights into the procedural aspects of nominal bail."
        }
      ]
    },
    {
      "id": 35,
      "title": "Discretionary Bail",
      "data": {
        "summary": "In cases where the law allows discretion, judges may have the authority to grant bail based on their judgment of the individual circumstances of the case. This allows for flexibility in bail decisions.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Judicial Discretion: The judge exercises discretion in considering whether to grant bail, taking into account factors such as the nature of the offense, the defendant's criminal history, and the likelihood of flight."
          },
          {
            "step_number": 2,
            "description": "Case Assessment: The judge assesses the individual circumstances of the case and determines whether granting bail is appropriate and in the interests of justice."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on the assessment, the judge makes a decision on whether to grant bail and, if so, the conditions under which bail will be granted."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Discretionary Bail",
          "content": "Discretionary bail involves judicial discretion, case assessment, and bail decision. This section provides insights into the procedural aspects of discretionary bail."
        }
      ]
    },
    {
      "id": 36,
      "title": "Transnational Bail",
      "data": {
        "summary": "In cases involving extradition or cross-border crimes, transnational bail may be considered. This involves bail arrangements that span multiple jurisdictions and may require cooperation between different legal systems.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Jurisdiction Assessment: The courts assess the jurisdictional complexities involved in the case, considering the laws and procedures of multiple jurisdictions."
          },
          {
            "step_number": 2,
            "description": "Legal Cooperation: Legal authorities coordinate with their counterparts in other jurisdictions to facilitate transnational bail arrangements."
          },
          {
            "step_number": 3,
            "description": "Bail Grant: Upon satisfactory assessment and legal cooperation, the court may grant transnational bail, allowing the defendant's release across borders."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Transnational Bail",
          "content": "Transnational bail involves jurisdiction assessment, legal cooperation, and bail grant. This section provides insights into the procedural aspects of transnational bail."
        }
      ]
    },
    {
      "id": 37,
      "title": "Military Bail Bond",
      "data": {
        "summary": "In cases involving military personnel, military bail bonds may be utilized. These bonds are specifically tailored to the unique circumstances of military law and justice systems.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Military Protocols: The military justice system follows its own protocols and procedures for granting bail to military personnel accused of offenses under military law."
          },
          {
            "step_number": 2,
            "description": "Command Review: The defendant's commanding officer or military authority may review the case and make recommendations regarding bail."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on military protocols and command review, the military court or authority makes a decision on whether to grant bail to the accused."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Military Bail Bond",
          "content": "Military bail bond involves military protocols, command review, and bail decision. This section provides insights into the procedural aspects of military bail bond."
        }
      ]
    },
    {
      "id": 38,
      "title": "Conditional Cash Bail",
      "data": {
        "summary": "This type of bail requires the defendant to pay a certain amount of cash upfront, but additional conditions may be imposed, such as regular reporting to authorities, attending counseling or rehabilitation programs, or refraining from certain activities.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Cash Payment: The defendant pays a specified amount of cash upfront as bail, as determined by the court."
          },
          {
            "step_number": 2,
            "description": "Condition Imposition: The court imposes additional conditions on the defendant's release, such as reporting to authorities, attending counseling, or refraining from certain activities."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the bail conditions, ensuring adherence to the specified requirements."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Cash Bail",
          "content": "Conditional cash bail involves cash payment, condition imposition, and compliance monitoring. This section provides insights into the procedural aspects of conditional cash bail."
        }
      ]
    },
    {
      "id": 39,
      "title": "Bail Reduction or Modification",
      "data": {
        "summary": "In some cases, the court may reduce the amount of bail or modify the bail conditions based on changed circumstances or new information presented by the defendant or their legal counsel.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Petition Submission: The defendant or their legal counsel submits a petition to the court requesting bail reduction or modification, citing relevant reasons and evidence."
          },
          {
            "step_number": 2,
            "description": "Hearing Conduct: The court conducts a hearing to consider the petition and any opposing arguments presented by the prosecution or other parties."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on the hearing and the merits of the petition, the court decides whether to grant bail reduction or modification, adjusting the bail amount or conditions accordingly."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail Reduction or Modification",
          "content": "Bail reduction or modification involves petition submission, hearing conduct, and bail decision. This section provides insights into the procedural aspects of bail reduction or modification."
        }
      ]
    },
    {
      "id": 40,
      "title": "Bail for Immigration Detainees",
      "data": {
        "summary": "In cases where individuals are detained due to immigration violations, immigration bail may be granted, allowing them to be released from detention while their immigration case is pending.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Immigration Review: Immigration authorities review the case to determine the eligibility of the detainee for immigration bail."
          },
          {
            "step_number": 2,
            "description": "Bail Conditions: If eligible, immigration authorities impose specific conditions for the detainee's release on immigration bail, such as reporting requirements or travel restrictions."
          },
          {
            "step_number": 3,
            "description": "Release Decision: Based on the review and conditions, immigration authorities decide whether to grant immigration bail, allowing the detainee's release from detention."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail for Immigration Detainees",
          "content": "Bail for immigration detainees involves immigration review, bail conditions, and release decision. This section provides insights into the procedural aspects of bail for immigration detainees."
        }
      ]
    },
    {
      "id": 41,
      "title": "Conditional Release Bail",
      "data": {
        "summary": "This type of bail is granted with specific conditions set by the court. Conditions may include restrictions on travel, curfews, or requirements to report regularly to authorities.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Conditional Bail Conditions: The court imposes specific conditions upon granting conditional release bail, tailored to the circumstances of the case and the defendant's situation."
          },
          {
            "step_number": 2,
            "description": "Defendant Acknowledgment: The defendant acknowledges the conditions set by the court and agrees to comply with them as a condition of their release."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the conditions of release, ensuring adherence to the specified requirements."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Release Bail",
          "content": "Conditional release bail involves conditional bail conditions, defendant acknowledgment, and compliance monitoring. This section provides insights into the procedural aspects of conditional release bail."
        }
      ]
    },
    {
      "id": 42,
      "title": "Detention Bail",
      "data": {
        "summary": "In some cases, the court may grant bail but still order the defendant to be detained for a certain period, often for administrative reasons or to ensure compliance with bail conditions.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Bail Grant: The court grants bail to the defendant, allowing their release from custody pending trial or further proceedings."
          },
          {
            "step_number": 2,
            "description": "Detention Order: Despite granting bail, the court orders the defendant to be detained for a specified period, either for administrative reasons or to ensure compliance with bail conditions."
          },
          {
            "step_number": 3,
            "description": "Release Determination: After the detention period expires or upon satisfaction of bail conditions, the court determines whether to release the defendant from detention."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Detention Bail",
          "content": "Detention bail involves bail grant, detention order, and release determination. This section provides insights into the procedural aspects of detention bail."
        }
      ]
    },
    {
      "id": 43,
      "title": "Extradition Bail Bond",
      "data": {
        "summary": "When a person is detained for extradition to another jurisdiction, an extradition bail bond may be used to secure their release pending extradition proceedings.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Bail Application: The defendant applies for bail specifically for extradition purposes, seeking release from custody pending extradition proceedings."
          },
          {
            "step_number": 2,
            "description": "Extradition Bond Execution: The defendant or their representative executes an extradition bail bond, providing assurance of the defendant's appearance in court for extradition proceedings."
          },
          {
            "step_number": 3,
            "description": "Release Decision: Based on the bail application and execution of the extradition bond, the court decides whether to grant bail for extradition purposes, allowing the defendant's release from custody."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Extradition Bail Bond",
          "content": "Extradition bail bond involves bail application, extradition bond execution, and release decision. This section provides insights into the procedural aspects of extradition bail bond."
        }
      ]
    },
    {
      "id": 44,
      "title": "Third-Party Custodian Bail",
      "data": {
        "summary": "Instead of posting cash or property, a defendant may be released into the custody of a third-party custodian who agrees to ensure their appearance in court.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Third-Party Custodian Agreement: The defendant arranges for a third-party custodian who agrees to take responsibility for ensuring the defendant's appearance in court."
          },
          {
            "step_number": 2,
            "description": "Court Approval: The court reviews and approves the third-party custodian agreement, ensuring that the custodian is suitable and able to fulfill their responsibilities."
          },
          {
            "step_number": 3,
            "description": "Release Arrangement: Upon approval, the defendant is released into the custody of the third-party custodian, who assumes responsibility for ensuring the defendant's compliance with bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Third-Party Custodian Bail",
          "content": "Third-party custodian bail involves third-party custodian agreement, court approval, and release arrangement. This section provides insights into the procedural aspects of third-party custodian bail."
        }
      ]
    },
    {
      "id": 45,
      "title": "Youth Bail",
      "data": {
        "summary": "Special provisions exist in many legal systems for bail granted to young offenders, often involving considerations such as the best interests of the child and rehabilitation efforts.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Youth Assessment: Courts assess the age and circumstances of the young offender to determine their eligibility for youth bail."
          },
          {
            "step_number": 2,
            "description": "Best Interests Evaluation: The court considers the best interests of the child, including factors such as education, family support, and rehabilitation opportunities."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on the youth assessment and best interests evaluation, the court decides whether to grant bail to the young offender, with appropriate conditions to support their well-being and rehabilitation."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Youth Bail",
          "content": "Youth bail involves youth assessment, best interests evaluation, and bail decision. This section provides insights into the procedural aspects of youth bail."
        }
      ]
    },
    {
      "id": 46,
      "title": "Special Bail for Vulnerable Individuals",
      "data": {
        "summary": "Courts may take into account factors such as age, health, mental capacity, or other vulnerabilities when granting bail, ensuring that conditions are appropriate and supportive.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Vulnerability Assessment: The court assesses the individual circumstances and vulnerabilities of the defendant, including factors such as age, health, and mental capacity."
          },
          {
            "step_number": 2,
            "description": "Condition Tailoring: Based on the vulnerability assessment, the court tailors bail conditions to provide appropriate support and accommodation for the defendant's needs."
          },
          {
            "step_number": 3,
            "description": "Supportive Measures: The court may implement additional supportive measures, such as access to medical care, counseling, or community support services, to assist the defendant during the bail period."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Special Bail for Vulnerable Individuals",
          "content": "Special bail for vulnerable individuals involves vulnerability assessment, condition tailoring, and supportive measures. This section provides insights into the procedural aspects of special bail for vulnerable individuals."
        }
      ]
    },
    {
      "id": 47,
      "title": "Post-Conviction Bail Pending Appeal",
      "data": {
        "summary": "In cases where a person has been convicted and sentenced, they may be granted bail pending appeal of their conviction or sentence.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Appeal Filing: The defendant files an appeal challenging their conviction or sentence, seeking bail pending appeal."
          },
          {
            "step_number": 2,
            "description": "Bail Application: The defendant submits a bail application to the appropriate court, requesting release pending the outcome of the appeal."
          },
          {
            "step_number": 3,
            "description": "Appeal Consideration: The court considers the appeal, including the merits of the case, the likelihood of success on appeal, and any relevant factors, before deciding whether to grant bail pending appeal."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Post-Conviction Bail Pending Appeal",
          "content": "Post-conviction bail pending appeal involves appeal filing, bail application, and appeal consideration. This section provides insights into the procedural aspects of post-conviction bail pending appeal."
        }
      ]
    },
    {
      "id": 48,
      "title": "Bail with GPS Monitoring",
      "data": {
        "summary": "In cases where there are concerns about the defendant's location or movements, the court may order GPS monitoring as a condition of bail. This involves the defendant wearing an electronic ankle monitor that tracks their movements in real-time.",
        "procedures": [
          {
            "step_number": 1,
            "description": "GPS Monitoring Order: The court orders GPS monitoring as a condition of bail, requiring the defendant to wear an electronic ankle monitor."
          },
          {
            "step_number": 2,
            "description": "Monitoring Setup: Authorities set up the GPS monitoring system and fit the defendant with the electronic ankle monitor, ensuring proper functionality."
          },
          {
            "step_number": 3,
            "description": "Monitoring Compliance: The defendant is required to comply with the GPS monitoring conditions, including staying within approved locations and adhering to any movement restrictions imposed by the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with GPS Monitoring",
          "content": "Bail with GPS monitoring involves GPS monitoring order, monitoring setup, and monitoring compliance. This section provides insights into the procedural aspects of bail with GPS monitoring."
        }
      ]
    },
    {
      "id": 49,
      "title": "Traffic Bail",
      "data": {
        "summary": "In some jurisdictions, traffic violations may result in arrest, and bail may be required for release. Traffic bail is typically applicable for minor traffic offenses.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Traffic Offense Arrest: The defendant is arrested for a traffic violation that requires bail for release."
          },
          {
            "step_number": 2,
            "description": "Bail Application: The defendant or their legal representative submits a bail application to the appropriate court, requesting release on traffic bail."
          },
          {
            "step_number": 3,
            "description": "Bail Hearing: The court conducts a bail hearing to review the application and determine whether to grant traffic bail based on the nature of the offense and the defendant's circumstances."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Traffic Bail",
          "content": "Traffic bail involves traffic offense arrest, bail application, and bail hearing. This section provides insights into the procedural aspects of traffic bail."
        }
      ]
    },
    {
      "id": 50,
      "title": "Medical Bail",
      "data": {
        "summary": "In cases where the defendant has serious health issues or medical needs that cannot be adequately addressed in custody, the court may grant medical bail, allowing the defendant to receive necessary medical treatment outside of jail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Medical Assessment: The court assesses the defendant's medical condition and the necessity of medical treatment outside of jail."
          },
          {
            "step_number": 2,
            "description": "Bail Application: The defendant or their legal representative submits a bail application specifically requesting medical bail, supported by medical documentation."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on the medical assessment and bail application, the court decides whether to grant medical bail, ensuring that the defendant receives necessary medical treatment while awaiting trial."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Medical Bail",
          "content": "Medical bail involves medical assessment, bail application, and bail decision. This section provides insights into the procedural aspects of medical bail."
        }
      ]
    },
    {
      "id": 51,
      "title": "Special Bail for Minors",
      "data": {
        "summary": "Minors accused of crimes may be granted special bail arrangements, taking into account their age, maturity level, and best interests. These arrangements may involve parental supervision or placement in a juvenile detention facility.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Minor Assessment: The court assesses the age, maturity level, and best interests of the minor defendant."
          },
          {
            "step_number": 2,
            "description": "Parental Involvement: The court considers the involvement of the minor's parents or legal guardians in the bail process, including their ability to provide supervision and support."
          },
          {
            "step_number": 3,
            "description": "Bail Arrangement: Based on the minor assessment and parental involvement, the court determines appropriate bail arrangements that prioritize the minor's well-being and rehabilitation."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Special Bail for Minors",
          "content": "Special bail for minors involves minor assessment, parental involvement, and bail arrangement. This section provides insights into the procedural aspects of special bail for minors."
        }
      ]
    },
    {
      "id": 52,
      "title": "Conditional Bail with Financial Penalty",
      "data": {
        "summary": "In addition to standard bail conditions, the court may impose a financial penalty that the defendant must pay if they fail to comply with bail conditions or appear in court as required.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Bail Conditions and Penalty Imposition: The court sets standard bail conditions and imposes a financial penalty as an additional condition of bail."
          },
          {
            "step_number": 2,
            "description": "Defendant Acknowledgment: The defendant acknowledges the bail conditions, including the financial penalty, and agrees to comply with them."
          },
          {
            "step_number": 3,
            "description": "Penalty Enforcement: If the defendant fails to comply with bail conditions or appear in court, the court enforces the financial penalty through legal proceedings."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Bail with Financial Penalty",
          "content": "Conditional bail with financial penalty involves setting standard bail conditions and imposing a financial penalty as an additional condition of bail. The defendant acknowledges these conditions and agrees to comply with them. If the defendant fails to comply with bail conditions or appear in court, the court enforces the financial penalty through legal proceedings."
        }
      ]
    },
    {
      "id": 53,
      "title": "Family or Community Bail",
      "data": {
        "summary": "In close-knit communities or cultures where community ties are strong, family members or community leaders may provide assurances to the court that the defendant will comply with bail conditions, allowing for the defendant's release.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Community Assurance: Family members or community leaders provide assurances to the court regarding the defendant's compliance with bail conditions."
          },
          {
            "step_number": 2,
            "description": "Bail Approval: Based on the community's assurances and the defendant's ties to the community, the court approves bail with family or community support."
          },
          {
            "step_number": 3,
            "description": "Community Oversight: Family members or community leaders monitor the defendant's adherence to bail conditions and report any violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Family or Community Bail",
          "content": "Family or community bail involves community assurance, bail approval, and community oversight. Family members or community leaders provide assurances to the court regarding the defendant's compliance with bail conditions. Based on these assurances and the defendant's ties to the community, the court approves bail with family or community support. Family members or community leaders then monitor the defendant's adherence to bail conditions and report any violations to the court."
        }
      ]
    },
    {
      "id": 54,
      "title": "Bail Review or Reconsideration",
      "data": {
        "summary": "If circumstances change after bail has been initially denied or granted, the defendant or their legal counsel may request a bail review or reconsideration hearing to present new evidence or arguments in support of a different bail decision.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Change in Circumstances: The defendant or their legal counsel identifies significant changes in circumstances warranting a reevaluation of bail."
          },
          {
            "step_number": 2,
            "description": "Bail Review Request: A formal request for bail review or reconsideration is submitted to the court, outlining the reasons for the request and providing supporting evidence."
          },
          {
            "step_number": 3,
            "description": "Review Hearing: The court schedules a hearing to review the request, allowing the defendant or their legal counsel to present new evidence or arguments."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail Review or Reconsideration",
          "content": "Bail review or reconsideration involves a change in circumstances, a formal request for review, and a review hearing. The defendant or their legal counsel identifies significant changes in circumstances warranting a reevaluation of bail and submits a formal request to the court, outlining the reasons and providing supporting evidence. The court then schedules a hearing to review the request, allowing the defendant or their legal counsel to present new evidence or arguments."
        }
      ]
    },
    {
      "id": 55,
      "title": "Appeal Bail",
      "data": {
        "summary": "In cases where the defendant is appealing a conviction or sentence, they may be granted bail during the appeal process, allowing them to remain out of custody while the appeal is pending.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Appeal Filing: The defendant files an appeal against their conviction or sentence with the appropriate appellate court."
          },
          {
            "step_number": 2,
            "description": "Bail Application: The defendant or their legal representative submits a bail application specifically requesting bail during the appeal process."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: The appellate court reviews the bail application and makes a decision based on factors such as the merits of the appeal, the risk of flight, and public safety concerns."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Appeal Bail",
          "content": "Appeal bail involves appeal filing, bail application, and bail decision. This section provides insights into the procedural aspects of appeal bail."
        }
      ]
    },
    {
      "id": 56,
      "title": "Combination Bail",
      "data": {
        "summary": "This involves a combination of different types of bail, such as a mixture of cash, property, and surety bonds, to meet the bail requirements set by the court.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Bail Types Assessment: The court assesses the defendant's financial resources and determines the combination of bail types required to meet the bail requirements."
          },
          {
            "step_number": 2,
            "description": "Bail Arrangement: The defendant or their legal representative arranges for the combination of bail types, which may involve posting cash, providing property as collateral, and obtaining surety bonds."
          },
          {
            "step_number": 3,
            "description": "Court Approval: The court reviews the proposed combination bail arrangement and approves it if it meets the bail requirements and complies with relevant laws and regulations."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Combination Bail",
          "content": "Combination bail involves bail types assessment, bail arrangement, and court approval. This section provides insights into the procedural aspects of combination bail."
        }
      ]
    },
    {
      "id": 57,
      "title": "Foreigner Bail",
      "data": {
        "summary": "Bail granted to individuals who are not citizens of the country where the offense occurred, often involving additional considerations such as flight risk and ties to the country.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Foreign National Status Verification: The court verifies the defendant's foreign national status and citizenship through documentation and interviews."
          },
          {
            "step_number": 2,
            "description": "Bail Assessment: The court assesses factors such as the defendant's ties to the country, risk of flight, and likelihood of appearing for court proceedings."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on the assessment, the court decides whether to grant bail to the foreign national defendant, considering factors such as flight risk and public safety concerns."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Foreigner Bail",
          "content": "Foreigner bail involves foreign national status verification, bail assessment, and bail decision. This section provides insights into the procedural aspects of foreigner bail."
        }
      ]
    },
    {
      "id": 58,
      "title": "Home Detention Bail",
      "data": {
        "summary": "In some jurisdictions, defendants may be granted bail with the condition that they remain under house arrest, typically monitored through electronic monitoring devices, except for approved outings such as work or medical appointments.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Home Detention Conditions: The court imposes conditions of house arrest on the defendant, which may include wearing electronic monitoring devices and restricting movements outside approved locations."
          },
          {
            "step_number": 2,
            "description": "Monitoring Setup: Authorities set up electronic monitoring devices and ensure proper functionality to monitor the defendant's compliance with house arrest conditions."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with house arrest conditions, including location tracking and adherence to approved outing schedules."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Home Detention Bail",
          "content": "Home detention bail involves home detention conditions, monitoring setup, and compliance monitoring. This section provides insights into the procedural aspects of home detention bail."
        }
      ]
    },
    {
      "id": 59,
      "title": "Youthful Offender Bail",
      "data": {
        "summary": "Special bail provisions for youthful offenders, often with a focus on rehabilitation and support services tailored to their age and circumstances.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Youth Assessment: The court assesses the defendant's age, maturity level, and circumstances as a youthful offender."
          },
          {
            "step_number": 2,
            "description": "Bail Considerations: The court considers factors such as rehabilitation needs, family support, and educational or vocational opportunities for the youthful offender."
          },
          {
            "step_number": 3,
            "description": "Bail Decision: Based on the assessment and considerations, the court determines appropriate bail provisions that prioritize the youthful offender's rehabilitation and well-being."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Youthful Offender Bail",
          "content": "Youthful offender bail involves youth assessment, bail considerations, and bail decision. This section provides insights into the procedural aspects of youthful offender bail."
        }
      ]
    },
    {
      "id": 60,
      "title": "Delayed Bail Hearing",
      "data": {
        "summary": "In certain circumstances, such as during a state of emergency or when court resources are limited, bail hearings may be delayed, resulting in the defendant being held in custody for an extended period before a bail determination is made.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Court Assessment: The court assesses the circumstances necessitating the delay in scheduling bail hearings, such as emergencies or resource constraints."
          },
          {
            "step_number": 2,
            "description": "Notification: Defendants and their legal representatives are notified of the delay in scheduling bail hearings and the reasons for the delay."
          },
          {
            "step_number": 3,
            "description": "Rescheduling: The court works to reschedule bail hearings as soon as possible once the circumstances causing the delay have been addressed or resolved."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Delayed Bail Hearing",
          "content": "Delayed bail hearing involves court assessment, notification, and rescheduling. This section provides insights into the procedural aspects of delayed bail hearings."
        }
      ]
    },
    {
      "id": 61,
      "title": "Emergency Bail Relief",
      "data": {
        "summary": "In times of crisis, such as natural disasters or public health emergencies, special bail relief measures may be implemented to expedite bail processes or provide relief to defendants facing undue hardship.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Emergency Declaration: Authorities declare a state of emergency or crisis situation, triggering the need for special bail relief measures."
          },
          {
            "step_number": 2,
            "description": "Bail Relief Implementation: Courts and relevant authorities implement expedited bail processes or provide relief measures, such as waiving bail fees or adjusting bail conditions, to address the emergency situation."
          },
          {
            "step_number": 3,
            "description": "Review and Adjustment: As the emergency situation evolves, authorities regularly review and adjust bail relief measures to ensure they remain effective and responsive to changing circumstances."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Emergency Bail Relief",
          "content": "Emergency bail relief involves emergency declaration, bail relief implementation, and review and adjustment. This section provides insights into the procedural aspects of emergency bail relief."
        }
      ]
    },
    {
      "id": 62,
      "title": "Immigration Bail Bond",
      "data": {
        "summary": "In cases where individuals are detained due to immigration violations, an immigration bail bond may be used to secure their release from detention while their immigration case is pending. This bond is different from regular bail bonds and is specifically tailored to immigration proceedings.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Immigration Detention: The individual is detained by immigration authorities due to immigration violations."
          },
          {
            "step_number": 2,
            "description": "Bail Bond Application: The individual or their legal representative applies for an immigration bail bond to secure their release from detention."
          },
          {
            "step_number": 3,
            "description": "Bond Approval: Immigration authorities review the bail bond application and approve it if the criteria are met, allowing the individual's release from detention pending immigration proceedings."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Immigration Bail Bond",
          "content": "Immigration bail bond involves immigration detention, bail bond application, and bond approval. This section provides insights into the procedural aspects of immigration bail bonds."
        }
      ]
    },
    {
      "id": 63,
      "title": "Conditional Release Bail with Treatment Program",
      "data": {
        "summary": "In cases where the defendant has substance abuse issues or mental health concerns, the court may grant conditional release on bail with the requirement that the defendant undergo a treatment program as a condition of their release.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Treatment Assessment: The court assesses the defendant's substance abuse or mental health issues and determines the need for treatment."
          },
          {
            "step_number": 2,
            "description": "Conditional Release Conditions: The court imposes conditions of bail that include participation in a treatment program as a requirement for release."
          },
          {
            "step_number": 3,
            "description": "Treatment Program Enrollment: The defendant enrolls in the prescribed treatment program and complies with the program requirements as a condition of their release."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Release Bail with Treatment Program",
          "content": "Conditional release bail with a treatment program involves treatment assessment, conditional release conditions, and treatment program enrollment. This section provides insights into the procedural aspects of conditional release bail with a treatment program."
        }
      ]
    },
    {
      "id": 64,
      "title": "Conditional Bail with Travel Restrictions",
      "data": {
        "summary": "In cases where there is a risk that the defendant may flee the jurisdiction, the court may impose travel restrictions as a condition of bail, such as surrendering their passport or agreeing not to leave the country.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Assessment of Flight Risk: The court assesses the likelihood that the defendant may flee the jurisdiction if released on bail."
          },
          {
            "step_number": 2,
            "description": "Imposition of Travel Restrictions: If the court determines that there is a flight risk, it may impose travel restrictions as a condition of bail, such as surrendering the defendant's passport or agreeing not to leave the country without permission."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the travel restrictions to ensure they do not violate the conditions of bail."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Bail with Travel Restrictions",
          "content": "Conditional bail with travel restrictions involves assessment of flight risk, imposition of travel restrictions, and compliance monitoring. This section provides insights into the procedural aspects of conditional bail with travel restrictions."
        }
      ]
    },
    {
      "id": 65,
      "title": "Bail with No-Contact Orders",
      "data": {
        "summary": "In cases involving allegations of domestic violence or harassment, the court may grant bail with the condition that the defendant have no contact with the alleged victim or other specified individuals.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Assessment of Risk to Victim: The court assesses the risk posed by the defendant to the alleged victim or other specified individuals."
          },
          {
            "step_number": 2,
            "description": "Issuance of No-Contact Orders: If there is a risk of harm, the court may issue no-contact orders as a condition of bail, prohibiting the defendant from contacting the alleged victim or other specified individuals."
          },
          {
            "step_number": 3,
            "description": "Enforcement of Orders: Authorities enforce the no-contact orders to ensure the defendant complies with the conditions of bail and does not violate the terms of the orders."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with No-Contact Orders",
          "content": "Bail with no-contact orders involves assessment of risk to the victim, issuance of no-contact orders, and enforcement of orders. This section provides insights into the procedural aspects of bail with no-contact orders."
        }
      ]
    },
    {
      "id": 66,
      "title": "Special Bail for High-Profile Cases",
      "data": {
        "summary": "In cases that attract significant media attention or public interest, the court may impose special bail conditions to address security concerns or maintain order in the courtroom.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Security Assessment: The court assesses the security risks associated with the high-profile nature of the case, including potential threats to the safety of individuals involved."
          },
          {
            "step_number": 2,
            "description": "Imposition of Special Bail Conditions: Based on the security assessment, the court may impose special bail conditions to address security concerns or maintain order in the courtroom, such as restricted access or additional security measures."
          },
          {
            "step_number": 3,
            "description": "Implementation and Monitoring: Authorities implement and monitor the special bail conditions to ensure the safety and security of all parties involved in the case."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Special Bail for High-Profile Cases",
          "content": "Special bail for high-profile cases involves security assessment, imposition of special bail conditions, and implementation and monitoring. This section provides insights into the procedural aspects of special bail for high-profile cases."
        }
      ]
    },
    {
      "id": 67,
      "title": "Corporate Bail Bonds",
      "data": {
        "summary": "In some jurisdictions, corporations facing criminal charges may be granted bail using corporate assets or resources as collateral.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Financial Assessment: The court assesses the financial resources and assets of the corporation to determine its ability to post bail using corporate assets."
          },
          {
            "step_number": 2,
            "description": "Approval of Corporate Bail: If the court determines that the corporation has sufficient assets to meet bail requirements, it may approve the use of corporate bail bonds."
          },
          {
            "step_number": 3,
            "description": "Collateral Evaluation: The court evaluates the corporate assets provided as collateral to ensure they meet the value required for bail."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Corporate Bail Bonds",
          "content": "Corporate bail bonds involve financial assessment, approval of corporate bail, and collateral evaluation. This section provides insights into the procedural aspects of corporate bail bonds."
        }
      ]
    },
    {
      "id": 68,
      "title": "Public Safety Bail",
      "data": {
        "summary": "In cases where there are concerns about the defendant posing a danger to the community if released, the court may deny bail or impose stringent conditions to ensure public safety.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Risk Assessment: The court assesses the risk posed by the defendant to public safety if released on bail."
          },
          {
            "step_number": 2,
            "description": "Imposition of Bail Conditions: Based on the risk assessment, the court may impose stringent bail conditions or deny bail altogether to ensure public safety."
          },
          {
            "step_number": 3,
            "description": "Monitoring and Compliance: Authorities monitor the defendant's compliance with bail conditions to mitigate risks to public safety and take appropriate action if violations occur."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Public Safety Bail",
          "content": "Public safety bail involves risk assessment, imposition of bail conditions, and monitoring and compliance. This section provides insights into the procedural aspects of public safety bail."
        }
      ]
    },
    {
      "id": 69,
      "title": "Bail with Employment Verification",
      "data": {
        "summary": "In cases where the defendant is employed, the court may require verification of their employment status as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Verification Request: The court requests verification of the defendant's employment status from the defendant or their legal representative."
          },
          {
            "step_number": 2,
            "description": "Employment Verification: The defendant provides proof of employment, such as pay stubs, employment contracts, or a letter from the employer confirming their employment status."
          },
          {
            "step_number": 3,
            "description": "Verification Review: Court authorities review the submitted employment verification documents to ensure compliance with bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Employment Verification",
          "content": "Bail with employment verification involves verification request, employment verification, and verification review. This section provides insights into the procedural aspects of bail with employment verification."
        }
      ]
    },
    {
      "id": 70,
      "title": "Bail with Reporting Requirements",
      "data": {
        "summary": "The court may impose reporting requirements as a condition of bail, requiring the defendant to regularly check in with law enforcement or court authorities at specified intervals.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Reporting Schedule: The court establishes a reporting schedule specifying the frequency and location where the defendant must report to law enforcement or court authorities."
          },
          {
            "step_number": 2,
            "description": "Reporting Compliance: The defendant complies with the reporting requirements by appearing at the designated location and time to check in with authorities."
          },
          {
            "step_number": 3,
            "description": "Monitoring and Verification: Authorities monitor the defendant's compliance with reporting requirements and verify their attendance to ensure adherence to bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Reporting Requirements",
          "content": "Bail with reporting requirements involves establishing a reporting schedule, reporting compliance, and monitoring and verification. This section provides insights into the procedural aspects of bail with reporting requirements."
        }
      ]
    },
    {
      "id": 71,
      "title": "Bail with Community Service Obligations",
      "data": {
        "summary": "As a condition of bail, the court may require the defendant to perform community service hours within the community where the offense occurred.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Community Service Assignment: The court assigns the defendant a specified number of community service hours to complete within a designated timeframe."
          },
          {
            "step_number": 2,
            "description": "Service Completion Verification: The defendant completes the assigned community service hours and obtains verification of their completion from the supervising organization or individual."
          },
          {
            "step_number": 3,
            "description": "Verification Submission: The defendant submits the verification of completed community service hours to the court for review and verification of compliance with bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Community Service Obligations",
          "content": "Bail with community service obligations involves community service assignment, service completion verification, and verification submission. This section provides insights into the procedural aspects of bail with community service obligations."
        }
      ]
    },
    {
      "id": 72,
      "title": "Bail with Educational or Vocational Training Requirements",
      "data": {
        "summary": "In cases involving youthful offenders or individuals seeking rehabilitation, the court may require the defendant to enroll in educational or vocational training programs as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Program Enrollment: The court mandates the defendant to enroll in educational or vocational training programs approved by the court."
          },
          {
            "step_number": 2,
            "description": "Program Completion: The defendant completes the required educational or vocational training programs within the specified timeframe."
          },
          {
            "step_number": 3,
            "description": "Program Verification: The defendant provides documentation or verification of program completion to the court for review and compliance verification."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Educational or Vocational Training Requirements",
          "content": "Bail with educational or vocational training requirements involves program enrollment, program completion, and program verification. This section provides insights into the procedural aspects of bail with educational or vocational training requirements."
        }
      ]
    },
    {
      "id": 73,
      "title": "Bail with No-Drive Orders",
      "data": {
        "summary": "In cases involving traffic offenses or DUI charges, the court may impose a condition of bail prohibiting the defendant from driving a vehicle for a specified period.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Order Issuance: The court issues a no-drive order as a condition of bail, prohibiting the defendant from operating a motor vehicle for a specified period."
          },
          {
            "step_number": 2,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the no-drive order to ensure adherence to bail conditions."
          },
          {
            "step_number": 3,
            "description": "Violation Consequences: If the defendant violates the no-drive order, the court may impose additional penalties or modify bail conditions accordingly."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with No-Drive Orders",
          "content": "Bail with no-drive orders involves order issuance, compliance monitoring, and violation consequences. This section provides insights into the procedural aspects of bail with no-drive orders."
        }
      ]
    },
    {
      "id": 74,
      "title": "Bail with Asset Seizure",
      "data": {
        "summary": "In cases where the defendant is believed to have obtained assets through illegal means, the court may order the seizure of those assets as a condition of bail to ensure the defendant's compliance with bail conditions.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Asset Assessment: The court assesses the defendant's assets to determine if any were obtained through illegal means or are subject to seizure."
          },
          {
            "step_number": 2,
            "description": "Seizure Order: If the court determines that asset seizure is warranted, it issues an order for the seizure of identified assets as a condition of bail."
          },
          {
            "step_number": 3,
            "description": "Asset Management: Authorities manage the seized assets in accordance with court orders and oversee compliance with bail conditions related to asset seizure."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Asset Seizure",
          "content": "Bail with asset seizure involves asset assessment, seizure order issuance, and asset management. This section provides insights into the procedural aspects of bail with asset seizure."
        }
      ]
    },
    {
      "id": 75,
      "title": "Temporary Release Bail",
      "data": {
        "summary": "In some legal systems, temporary release bail may be granted for specific purposes, such as attending a funeral or seeking medical treatment, with the requirement to return to custody after the specified period.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Release Approval: The court approves temporary release bail for the defendant for a specified purpose, such as attending a funeral or seeking medical treatment."
          },
          {
            "step_number": 2,
            "description": "Limited Duration: Temporary release bail is granted for a specific period, after which the defendant is required to return to custody as directed by the court."
          },
          {
            "step_number": 3,
            "description": "Return Compliance: The defendant complies with the requirement to return to custody at the specified time and date, as directed by the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Temporary Release Bail",
          "content": "Temporary release bail involves release approval, limited duration, and return compliance. This section provides insights into the procedural aspects of temporary release bail."
        }
      ]
    },
    {
      "id": 76,
      "title": "Bail with Electronic Monitoring and Curfew",
      "data": {
        "summary": "In addition to electronic monitoring, the court may impose a curfew as a condition of bail, requiring the defendant to remain at home during specified hours.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Electronic Monitoring Setup: The court arranges for the installation of an electronic monitoring device, such as an ankle bracelet, to track the defendant's movements."
          },
          {
            "step_number": 2,
            "description": "Curfew Imposition: The court specifies the hours during which the defendant must remain at home and may not leave except for authorized purposes, such as work or medical appointments."
          },
          {
            "step_number": 3,
            "description": "Monitoring Compliance: Authorities monitor the defendant's compliance with the curfew and electronic monitoring requirements to ensure adherence to bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Electronic Monitoring and Curfew",
          "content": "Bail with electronic monitoring and curfew involves setup of electronic monitoring, imposition of curfew, and monitoring compliance. This section provides insights into the procedural aspects of bail with electronic monitoring and curfew."
        }
      ]
    },
    {
      "id": 77,
      "title": "Conditional Bail with Surrender of Firearms",
      "data": {
        "summary": "In cases involving allegations of violence or threats, the court may require the defendant to surrender any firearms or weapons in their possession as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Firearm Surrender Order: The court issues an order requiring the defendant to surrender any firearms or weapons in their possession to law enforcement authorities."
          },
          {
            "step_number": 2,
            "description": "Surrender Compliance: The defendant complies with the firearm surrender order by turning over all firearms and weapons to designated law enforcement officials within the specified timeframe."
          },
          {
            "step_number": 3,
            "description": "Verification: Law enforcement verifies the surrender of firearms and weapons and provides confirmation to the court to ensure compliance with bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Bail with Surrender of Firearms",
          "content": "Conditional bail with surrender of firearms involves firearm surrender order issuance, surrender compliance, and verification. This section provides insights into the procedural aspects of conditional bail with surrender of firearms."
        }
      ]
    },
    {
      "id": 78,
      "title": "Bail with Immigration Check-In Requirements",
      "data": {
        "summary": "In cases involving individuals with immigration status concerns, the court may require the defendant to check in with immigration authorities at specified intervals as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Check-In Schedule: The court establishes a schedule specifying the frequency and location where the defendant must check in with immigration authorities."
          },
          {
            "step_number": 2,
            "description": "Check-In Compliance: The defendant complies with the check-in requirements by appearing at the designated location and time to check in with immigration authorities."
          },
          {
            "step_number": 3,
            "description": "Reporting Verification: Immigration authorities verify the defendant's compliance with check-in requirements and provide confirmation to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Immigration Check-In Requirements",
          "content": "Bail with immigration check-in requirements involves check-in schedule establishment, check-in compliance, and reporting verification. This section provides insights into the procedural aspects of bail with immigration check-in requirements."
        }
      ]
    },
    {
      "id": 79,
      "title": "Bail with Travel Restrictions within the Country",
      "data": {
        "summary": "In cases where there is a risk that the defendant may flee to another part of the country, the court may impose travel restrictions within the country as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Travel Restriction Order: The court issues an order restricting the defendant's travel within the country, specifying prohibited areas or regions."
          },
          {
            "step_number": 2,
            "description": "Travel Notification: The defendant notifies the court and relevant authorities of any planned travel within the country, providing details of the intended destination and duration."
          },
          {
            "step_number": 3,
            "description": "Travel Compliance Monitoring: Authorities monitor the defendant's compliance with travel restrictions and verify travel notifications to ensure adherence to bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Travel Restrictions within the Country",
          "content": "Bail with travel restrictions within the country involves travel restriction order issuance, travel notification, and compliance monitoring. This section provides insights into the procedural aspects of bail with travel restrictions within the country."
        }
      ]
    },
    {
      "id": 80,
      "title": "Bail with Financial Surety from Family Members or Friends",
      "data": {
        "summary": "Instead of using a bail bond company, the defendant may seek financial surety from family members or friends who agree to guarantee the bail amount and ensure the defendant's compliance with bail conditions.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Surety Agreement: Family members or friends of the defendant sign a surety agreement, agreeing to guarantee the bail amount and ensure the defendant's compliance with bail conditions."
          },
          {
            "step_number": 2,
            "description": "Financial Verification: The court verifies the financial capacity and credibility of the family members or friends providing financial surety to ensure their ability to fulfill the obligations."
          },
          {
            "step_number": 3,
            "description": "Surety Acceptance: Upon verification of financial capability and credibility, the court accepts the surety agreement and allows the defendant's release on bail."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Financial Surety from Family Members or Friends",
          "content": "Bail with financial surety from family members or friends involves surety agreement, financial verification, and surety acceptance. This section provides insights into the procedural aspects of bail with financial surety from family members or friends."
        }
      ]
    },
    {
      "id": 81,
      "title": "Bail with Alcohol or Drug Testing Requirements",
      "data": {
        "summary": "In cases involving substance abuse issues, the court may require the defendant to undergo regular alcohol or drug testing as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Testing Schedule: The court establishes a schedule specifying the frequency and type of alcohol or drug testing required, such as urine tests or breathalyzer tests."
          },
          {
            "step_number": 2,
            "description": "Testing Compliance: The defendant complies with the testing requirements by submitting to alcohol or drug tests as scheduled and providing samples for analysis."
          },
          {
            "step_number": 3,
            "description": "Test Result Verification: Authorities verify the test results and report compliance or violations to the court for appropriate action."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Alcohol or Drug Testing Requirements",
          "content": "Bail with alcohol or drug testing requirements involves testing schedule establishment, testing compliance, and test result verification. This section provides insights into the procedural aspects of bail with alcohol or drug testing requirements."
        }
      ]
    },
    {
      "id": 82,
      "title": "Bail with Mental Health Treatment Requirements",
      "data": {
        "summary": "In cases where the defendant has mental health issues, the court may require the defendant to undergo mental health treatment or counseling as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Treatment Plan Approval: The court approves a mental health treatment plan or counseling program tailored to the defendant's needs and circumstances."
          },
          {
            "step_number": 2,
            "description": "Treatment Compliance: The defendant complies with the mental health treatment or counseling requirements by attending scheduled sessions and actively participating in the program."
          },
          {
            "step_number": 3,
            "description": "Progress Monitoring: Mental health professionals monitor the defendant's progress in treatment or counseling and provide reports to the court on compliance and any concerns."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Mental Health Treatment Requirements",
          "content": "Bail with mental health treatment requirements involves treatment plan approval, treatment compliance, and progress monitoring. This section provides insights into the procedural aspects of bail with mental health treatment requirements."
        }
      ]
    },
    {
      "id": 83,
      "title": "Work Release Bail",
      "data": {
        "summary": "In some jurisdictions, defendants may be granted work release bail, allowing them to continue working while awaiting trial. They are typically required to return to custody outside of their work hours.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Work Schedule Approval: The court approves the defendant's work schedule, specifying the hours during which they are permitted to work."
          },
          {
            "step_number": 2,
            "description": "Return to Custody: Outside of their approved work hours, the defendant is required to return to custody or a designated location."
          },
          {
            "step_number": 3,
            "description": "Monitoring Compliance: Authorities monitor the defendant's compliance with the work release conditions to ensure adherence to bail requirements."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Work Release Bail",
          "content": "Work release bail involves work schedule approval, return to custody, and monitoring compliance. This section provides insights into the procedural aspects of work release bail."
        }
      ]
    },
    {
      "id": 84,
      "title": "Conditional Bail with Restraining Orders",
      "data": {
        "summary": "In cases involving allegations of domestic violence or stalking, the court may impose restraining orders as a condition of bail, prohibiting the defendant from contacting the alleged victim or coming within a certain distance of them.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Restraining Order Issuance: The court issues a restraining order specifying the prohibited contact or proximity between the defendant and the alleged victim."
          },
          {
            "step_number": 2,
            "description": "Restraining Order Compliance: The defendant complies with the terms of the restraining order by refraining from contact with the alleged victim and adhering to specified distance requirements."
          },
          {
            "step_number": 3,
            "description": "Violation Reporting: Any violations of the restraining order are reported to the court for appropriate action, which may include bail revocation or additional penalties."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Bail with Restraining Orders",
          "content": "Conditional bail with restraining orders involves restraining order issuance, compliance, and violation reporting. This section provides insights into the procedural aspects of conditional bail with restraining orders."
        }
      ]
    },
    {
      "id": 85,
      "title": "Bail with Co-Signer Requirements",
      "data": {
        "summary": "In situations where the defendant may not meet the bail requirements on their own, the court may allow for a co-signer to assist in securing the bail, assuming responsibility for ensuring the defendant's compliance with bail conditions.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Co-Signer Agreement: A co-signer agrees to assume responsibility for the defendant's compliance with bail conditions and guarantees the bail amount."
          },
          {
            "step_number": 2,
            "description": "Financial Verification: The court verifies the financial capability and credibility of the co-signer to ensure their ability to fulfill the obligations."
          },
          {
            "step_number": 3,
            "description": "Co-Signer Acceptance: Upon verification, the court accepts the co-signer agreement and allows the defendant's release on bail."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Co-Signer Requirements",
          "content": "Bail with co-signer requirements involves co-signer agreement, financial verification, and acceptance. This section provides insights into the procedural aspects of bail with co-signer requirements."
        }
      ]
    },
    {
      "id": 86,
      "title": "Bail with Community Supervision",
      "data": {
        "summary": "Instead of or in addition to other conditions, the court may require community supervision as a condition of bail, with probation officers or other authorities overseeing the defendant's activities and ensuring compliance with bail conditions.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Supervision Assignment: The court assigns a probation officer or community supervision authority to oversee the defendant's activities and compliance with bail conditions."
          },
          {
            "step_number": 2,
            "description": "Reporting Requirements: The defendant is required to report to the assigned supervisor at specified intervals and provide updates on their activities and compliance with bail conditions."
          },
          {
            "step_number": 3,
            "description": "Monitoring and Compliance Verification: The assigned supervisor monitors the defendant's activities, conducts periodic checks, and verifies compliance with bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Community Supervision",
          "content": "Bail with community supervision involves supervision assignment, reporting requirements, and monitoring. This section provides insights into the procedural aspects of bail with community supervision."
        }
      ]
    },
    {
      "id": 87,
      "title": "Bail with Substance Abuse Treatment Mandates",
      "data": {
        "summary": "In cases where substance abuse is a factor, the court may mandate participation in substance abuse treatment programs as a condition of bail, with requirements for attendance and completion of the program.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Treatment Program Enrollment: The court mandates the defendant's enrollment in a substance abuse treatment program or counseling sessions tailored to their needs."
          },
          {
            "step_number": 2,
            "description": "Treatment Compliance: The defendant complies with the attendance and participation requirements of the substance abuse treatment program, including completing any assigned tasks or sessions."
          },
          {
            "step_number": 3,
            "description": "Progress Monitoring: Treatment providers monitor the defendant's progress in the program, report compliance to the court, and recommend further actions or adjustments as necessary."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Substance Abuse Treatment Mandates",
          "content": "Bail with substance abuse treatment mandates involves treatment program enrollment, compliance, and progress monitoring. This section provides insights into the procedural aspects of bail with substance abuse treatment mandates."
        }
      ]
    },
    {
      "id": 88,
      "title": "Bail with Mental Health Evaluation Requirements",
      "data": {
        "summary": "In cases where mental health issues are a concern, the court may require the defendant to undergo a mental health evaluation as a condition of bail, with recommendations for treatment or counseling as necessary.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Evaluation Order: The court orders a comprehensive mental health evaluation of the defendant by qualified professionals."
          },
          {
            "step_number": 2,
            "description": "Evaluation Compliance: The defendant undergoes the mental health evaluation as scheduled and provides all necessary information to the evaluating professionals."
          },
          {
            "step_number": 3,
            "description": "Recommendation Review: The court reviews the evaluation results and any recommendations for treatment or counseling, determining appropriate actions as necessary."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Mental Health Evaluation Requirements",
          "content": "Bail with mental health evaluation requirements involves evaluation order, compliance, and recommendation review. This section provides insights into the procedural aspects of bail with mental health evaluation requirements."
        }
      ]
    },
    {
      "id": 89,
      "title": "Bail with No-Contact Orders with Witnesses",
      "data": {
        "summary": "In cases where there are concerns about witness intimidation or tampering, the court may impose no-contact orders with witnesses as a condition of bail, prohibiting the defendant from contacting or communicating with them.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Order Issuance: The court issues no-contact orders specifying the witnesses with whom the defendant is prohibited from contacting or communicating."
          },
          {
            "step_number": 2,
            "description": "Compliance Acknowledgment: The defendant acknowledges the terms of the no-contact orders and agrees to comply with the restrictions imposed."
          },
          {
            "step_number": 3,
            "description": "Violation Reporting: Any violations of the no-contact orders by the defendant are reported to the court for appropriate action, which may include bail revocation or additional penalties."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with No-Contact Orders with Witnesses",
          "content": "Bail with no-contact orders with witnesses involves order issuance, compliance acknowledgment, and violation reporting. This section provides insights into the procedural aspects of bail with no-contact orders with witnesses."
        }
      ]
    },
    {
      "id": 90,
      "title": "Bail with Substance Abuse Monitoring",
      "data": {
        "summary": "In cases where substance abuse is a concern, the court may require the defendant to participate in a substance abuse monitoring program as a condition of bail. This could involve regular drug testing or participation in substance abuse treatment programs.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Program Enrollment: The defendant enrolls in a substance abuse monitoring program as directed by the court."
          },
          {
            "step_number": 2,
            "description": "Monitoring Compliance: The defendant complies with the requirements of the substance abuse monitoring program, which may include drug testing or attendance at treatment sessions."
          },
          {
            "step_number": 3,
            "description": "Progress Reporting: The program provides regular reports on the defendant's progress and compliance to the court or relevant authorities."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Substance Abuse Monitoring",
          "content": "Bail with substance abuse monitoring involves program enrollment, monitoring compliance, and progress reporting. This section provides insights into the procedural aspects of bail with substance abuse monitoring."
        }
      ]
    },
    {
      "id": 91,
      "title": "Bail with Anger Management Classes",
      "data": {
        "summary": "If the offense involves anger-related issues or violence, the court may require the defendant to attend anger management classes as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Class Enrollment: The defendant enrolls in anger management classes or counseling sessions as directed by the court."
          },
          {
            "step_number": 2,
            "description": "Attendance Compliance: The defendant attends all scheduled anger management classes and actively participates in the program."
          },
          {
            "step_number": 3,
            "description": "Completion Confirmation: The court receives confirmation of the defendant's completion of the anger management program from the program provider."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Anger Management Classes",
          "content": "Bail with anger management classes involves class enrollment, attendance compliance, and completion confirmation. This section provides insights into the procedural aspects of bail with anger management classes."
        }
      ]
    },
    {
      "id": 92,
      "title": "Bail with Restitution Requirements",
      "data": {
        "summary": "In cases where the defendant is accused of causing financial harm to the victim, the court may require the defendant to make restitution payments to the victim as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Restitution Determination: The court determines the amount of restitution owed to the victim based on the harm caused by the offense."
          },
          {
            "step_number": 2,
            "description": "Payment Plan Approval: The court approves a restitution payment plan outlining the schedule and method of restitution payments."
          },
          {
            "step_number": 3,
            "description": "Payment Verification: The defendant makes restitution payments as scheduled, and verification of payments is provided to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Restitution Requirements",
          "content": "Bail with restitution requirements involves restitution determination, payment plan approval, and payment verification. This section provides insights into the procedural aspects of bail with restitution requirements."
        }
      ]
    },
    {
      "id": 93,
      "title": "Bail with Parental Supervision",
      "data": {
        "summary": "For juvenile defendants or individuals with dependent children, the court may require parental supervision as a condition of bail, ensuring that there is adequate supervision and care for the children while the defendant is released.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Supervision Agreement: A responsible parent or guardian agrees to supervise the defendant and ensure compliance with bail conditions."
          },
          {
            "step_number": 2,
            "description": "Parental Verification: The court verifies the suitability of the parent or guardian to provide supervision and care for the defendant and any dependent children."
          },
          {
            "step_number": 3,
            "description": "Supervision Monitoring: The parent or guardian oversees the defendant's activities and compliance with bail conditions, reporting any violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Parental Supervision",
          "content": "Bail with parental supervision involves supervision agreement, parental verification, and supervision monitoring. This section provides insights into the procedural aspects of bail with parental supervision."
        }
      ]
    },
    {
      "id": 94,
      "title": "Bail with No-Internet Restrictions",
      "data": {
        "summary": "In cases involving cybercrimes or offenses related to the internet, the court may impose restrictions on the defendant's internet usage as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Internet Restriction Order: The court issues an order restricting the defendant's access to the internet or specific online activities."
          },
          {
            "step_number": 2,
            "description": "Monitoring Compliance: Authorities monitor the defendant's internet usage to ensure compliance with the court's restrictions."
          },
          {
            "step_number": 3,
            "description": "Violation Reporting: Any violations of the internet restrictions by the defendant are reported to the court for appropriate action."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with No-Internet Restrictions",
          "content": "Bail with no-internet restrictions involves internet restriction order, monitoring compliance, and violation reporting. This section provides insights into the procedural aspects of bail with no-internet restrictions."
        }
      ]
    },
    {
      "id": 95,
      "title": "Bail with Psychological Evaluation",
      "data": {
        "summary": "In cases where the defendant's mental health is in question, the court may require a psychological evaluation as a condition of bail to assess the defendant's mental state and determine appropriate treatment or monitoring.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Evaluation Order: The court orders a comprehensive psychological evaluation of the defendant by qualified mental health professionals."
          },
          {
            "step_number": 2,
            "description": "Evaluation Compliance: The defendant undergoes the psychological evaluation as scheduled and provides all necessary information to the evaluating professionals."
          },
          {
            "step_number": 3,
            "description": "Recommendation Review: The court reviews the evaluation results and any recommendations for treatment or monitoring, determining appropriate actions as necessary."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Psychological Evaluation",
          "content": "Bail with psychological evaluation involves evaluation order, compliance, and recommendation review. This section provides insights into the procedural aspects of bail with psychological evaluation."
        }
      ]
    },
    {
      "id": 96,
      "title": "Bail with Community Restorative Justice Programs",
      "data": {
        "summary": "In some jurisdictions, community restorative justice programs may be utilized as a condition of bail, allowing defendants to participate in community-based initiatives aimed at repairing harm caused by the offense and promoting rehabilitation.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Program Enrollment: The defendant enrolls in a community restorative justice program approved by the court."
          },
          {
            "step_number": 2,
            "description": "Participation Compliance: The defendant actively participates in the program, engaging in activities aimed at repairing harm caused by the offense and promoting community rehabilitation."
          },
          {
            "step_number": 3,
            "description": "Program Completion: The defendant completes all program requirements, and the program provides confirmation of completion to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Community Restorative Justice Programs",
          "content": "Bail with community restorative justice programs involves program enrollment, participation compliance, and program completion. This section provides insights into the procedural aspects of bail with community restorative justice programs."
        }
      ]
    },
    {
      "id": 97,
      "title": "Conditional Bail with Employment Verification",
      "data": {
        "summary": "In cases where the defendant is employed, the court may require verification of their employment status as a condition of bail. This may involve providing proof of employment, such as pay stubs or a letter from the employer.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Employment Verification Request: The court requests verification of the defendant's employment status from the defendant or their legal representative."
          },
          {
            "step_number": 2,
            "description": "Submission of Documents: The defendant provides relevant documents, such as pay stubs or a letter from the employer, to verify their employment status."
          },
          {
            "step_number": 3,
            "description": "Verification Confirmation: The court verifies the authenticity of the submitted documents to confirm the defendant's employment status."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Conditional Bail with Employment Verification",
          "content": "Conditional bail with employment verification involves an employment verification request, submission of documents, and verification confirmation. This section provides insights into the procedural aspects of conditional bail with employment verification."
        }
      ]
    },
    {
      "id": 98,
      "title": "Bail with Mental Health Treatment Mandates",
      "data": {
        "summary": "If the defendant has mental health issues, the court may mandate participation in mental health treatment programs as a condition of bail. This could include therapy sessions, medication management, or other forms of treatment.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Treatment Assessment: The court assesses the defendant's mental health status and treatment needs through evaluations by qualified mental health professionals."
          },
          {
            "step_number": 2,
            "description": "Treatment Plan Development: Based on the assessment results, a treatment plan is developed outlining the required mental health treatment, which may include therapy sessions, medication management, or other interventions."
          },
          {
            "step_number": 3,
            "description": "Treatment Compliance Monitoring: The defendant participates in the prescribed mental health treatment program, and their compliance is monitored by the court or relevant authorities."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Mental Health Treatment Mandates",
          "content": "Bail with mental health treatment mandates involves treatment assessment, treatment plan development, and treatment compliance monitoring. This section provides insights into the procedural aspects of bail with mental health treatment mandates."
        }
      ]
    },
    {
      "id": 99,
      "title": "Bail with Property Restriction Orders",
      "data": {
        "summary": "In cases where the offense involves the use of certain types of property (such as vehicles or weapons), the court may impose restrictions on the defendant's access to or use of such property as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Property Restriction Assessment: The court assesses the relevance of property restrictions based on the nature of the offense and the involvement of specific types of property."
          },
          {
            "step_number": 2,
            "description": "Property Restriction Order Issuance: If deemed necessary, the court issues orders restricting the defendant's access to or use of certain types of property involved in the offense."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the property restriction orders and report any violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Property Restriction Orders",
          "content": "Bail with property restriction orders involves property restriction assessment, order issuance, and compliance monitoring. This section provides insights into the procedural aspects of bail with property restriction orders."
        }
      ]
    },
    {
      "id": 100,
      "title": "Bail with Financial Disclosure Requirements",
      "data": {
        "summary": "The court may require the defendant to disclose their financial assets and liabilities as a condition of bail. This could help ensure that the defendant is able to meet any financial obligations associated with bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Financial Disclosure Request: The court requests the defendant to disclose their financial assets and liabilities, including income, assets, debts, and expenses."
          },
          {
            "step_number": 2,
            "description": "Submission of Financial Information: The defendant submits relevant financial documents, such as bank statements, tax returns, and investment records, to fulfill the disclosure requirements."
          },
          {
            "step_number": 3,
            "description": "Financial Verification: The court verifies the accuracy and completeness of the submitted financial information to ensure compliance with bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Financial Disclosure Requirements",
          "content": "Bail with financial disclosure requirements involves a financial disclosure request, submission of financial information, and financial verification. This section provides insights into the procedural aspects of bail with financial disclosure requirements."
        }
      ]
    },
    {
      "id": 101,
      "title": "Bail with No-Association Orders",
      "data": {
        "summary": "In cases where there is a risk of witness tampering or intimidation, the court may impose orders prohibiting the defendant from associating with certain individuals as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Association Restriction Order: The court issues orders prohibiting the defendant from associating with specific individuals identified as potential risks to the integrity of the legal process."
          },
          {
            "step_number": 2,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the no-association orders and report any violations to the court."
          },
          {
            "step_number": 3,
            "description": "Violation Consequences: Any violations of the no-association orders may result in additional legal consequences or modifications to bail conditions."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with No-Association Orders",
          "content": "Bail with no-association orders involves association restriction order issuance, compliance monitoring, and violation consequences. This section provides insights into the procedural aspects of bail with no-association orders."
        }
      ]
    },
    {
      "id": 102,
      "title": "Bail with Technology Monitoring",
      "data": {
        "summary": "The court may require the defendant to wear an electronic monitoring device, such as an ankle bracelet, as a condition of bail. This could help track the defendant's whereabouts and ensure compliance with bail conditions.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Technology Installation: The defendant is fitted with an electronic monitoring device, which may include an ankle bracelet or GPS tracker, as directed by the court."
          },
          {
            "step_number": 2,
            "description": "Monitoring Activation: The electronic monitoring device is activated to track the defendant's movements and locations in real-time."
          },
          {
            "step_number": 3,
            "description": "Monitoring Oversight: Authorities monitor the defendant's movements and activities through the electronic monitoring system, reporting any violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Technology Monitoring",
          "content": "Bail with technology monitoring involves technology installation, monitoring activation, and monitoring oversight. This section provides insights into the procedural aspects of bail with technology monitoring."
        }
      ]
    },
    {
      "id": 103,
      "title": "Bail with Travel Restrictions Outside the Jurisdiction",
      "data": {
        "summary": "In cases where there is a risk of flight, the court may impose restrictions on the defendant's ability to travel outside the jurisdiction as a condition of bail.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Travel Restriction Assessment: The court assesses the necessity of travel restrictions based on the defendant's flight risk and other relevant factors."
          },
          {
            "step_number": 2,
            "description": "Travel Restriction Order Issuance: If deemed necessary, the court issues orders restricting the defendant's ability to travel outside the jurisdiction."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the travel restrictions and report any violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Travel Restrictions Outside the Jurisdiction",
          "content": "Bail with travel restrictions outside the jurisdiction involves travel restriction assessment, order issuance, and compliance monitoring. This section provides insights into the procedural aspects of bail with travel restrictions outside the jurisdiction."
        }
      ]
    },
    {
      "id": 104,
      "title": "Bail with Community Service Requirements",
      "data": {
        "summary": "As a condition of bail, the court may require the defendant to perform a certain number of hours of community service. This could involve tasks such as cleaning up public spaces, assisting with charitable organizations, or other community-oriented activities.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Community Service Assessment: The court assesses the suitability of community service requirements based on the defendant's circumstances and the nature of the offense."
          },
          {
            "step_number": 2,
            "description": "Community Service Plan Development: A community service plan is developed outlining the tasks, duration, and location of community service activities to be completed by the defendant."
          },
          {
            "step_number": 3,
            "description": "Service Completion Monitoring: Authorities monitor the defendant's completion of the assigned community service tasks and report any issues or violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Community Service Requirements",
          "content": "Bail with community service requirements involves community service assessment, plan development, and service completion monitoring. This section provides insights into the procedural aspects of bail with community service requirements."
        }
      ]
    },
    {
      "id": 105,
      "title": "Bail with Educational Requirements",
      "data": {
        "summary": "In cases involving juvenile defendants or young adults, the court may require the defendant to attend school or participate in educational programs as a condition of bail. This could include completing high school coursework, attending vocational training, or pursuing higher education opportunities.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Educational Assessment: The court assesses the defendant's educational needs and opportunities for educational advancement."
          },
          {
            "step_number": 2,
            "description": "Education Plan Development: An education plan is developed outlining the educational requirements and goals to be achieved by the defendant."
          },
          {
            "step_number": 3,
            "description": "Education Compliance Monitoring: Authorities monitor the defendant's attendance and progress in educational programs, reporting any issues or violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Educational Requirements",
          "content": "Bail with educational requirements involves educational assessment, plan development, and compliance monitoring. This section provides insights into the procedural aspects of bail with educational requirements."
        }
      ]
    },
    {
      "id": 106,
      "title": "Bail with Housing Restrictions",
      "data": {
        "summary": "If the defendant's living situation is considered a factor in the case or if there are concerns about the defendant's housing stability, the court may impose restrictions on where the defendant can reside as a condition of bail. This could involve staying with specific family members, residing at a designated address, or avoiding certain types of housing arrangements.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Housing Assessment: The court assesses the defendant's current living situation and any relevant factors that may necessitate housing restrictions."
          },
          {
            "step_number": 2,
            "description": "Restriction Determination: Based on the assessment, the court determines the specific housing restrictions to be imposed, if any, to address concerns and ensure compliance with bail conditions."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the housing restrictions and report any violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Housing Restrictions",
          "content": "Bail with housing restrictions involves housing assessment, restriction determination, and compliance monitoring. This section provides insights into the procedural aspects of bail with housing restrictions."
        }
      ]
    },
    {
      "id": 107,
      "title": "Bail with Vehicle Restrictions",
      "data": {
        "summary": "In cases involving traffic offenses or DUI charges, the court may impose restrictions on the defendant's ability to operate a vehicle as a condition of bail. This could involve requiring the defendant to surrender their driver's license, refraining from driving altogether, or limiting the defendant's driving privileges to specific purposes or times.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Vehicle Use Assessment: The court assesses the necessity of vehicle restrictions based on the nature of the offense, the defendant's driving history, and other relevant factors."
          },
          {
            "step_number": 2,
            "description": "Restriction Determination: Based on the assessment, the court determines the specific vehicle restrictions to be imposed, if any, to address concerns and ensure compliance with bail conditions."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the vehicle restrictions and report any violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Vehicle Restrictions",
          "content": "Bail with vehicle restrictions involves vehicle use assessment, restriction determination, and compliance monitoring. This section provides insights into the procedural aspects of bail with vehicle restrictions."
        }
      ]
    },
    {
      "id": 108,
      "title": "Bail with Social Media Restrictions",
      "data": {
        "summary": "In cases where the defendant's social media activity is relevant to the case or if there are concerns about the defendant's online behavior, the court may impose restrictions on the defendant's use of social media platforms as a condition of bail. This could involve refraining from posting about the case, interacting with certain individuals online, or participating in specific types of online activities.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Social Media Activity Assessment: The court assesses the relevance of the defendant's social media activity to the case and any concerns about the defendant's online behavior."
          },
          {
            "step_number": 2,
            "description": "Restriction Determination: Based on the assessment, the court determines the specific social media restrictions to be imposed, if any, to address concerns and ensure compliance with bail conditions."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the social media restrictions and report any violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Social Media Restrictions",
          "content": "Bail with social media restrictions involves social media activity assessment, restriction determination, and compliance monitoring. This section provides insights into the procedural aspects of bail with social media restrictions."
        }
      ]
    },
    {
      "id": 109,
      "title": "Bail with Religious or Cultural Accommodations",
      "data": {
        "summary": "In cases where the defendant's religious or cultural beliefs are relevant to the case, the court may impose accommodations or restrictions based on those beliefs as a condition of bail. This could involve allowing for specific religious practices or rituals, providing access to religious leaders or counselors, or respecting cultural norms and traditions during the bail process.",
        "procedures": [
          {
            "step_number": 1,
            "description": "Belief Assessment: The court assesses the relevance of the defendant's religious or cultural beliefs to the case and any accommodations or restrictions needed to respect those beliefs."
          },
          {
            "step_number": 2,
            "description": "Accommodation Determination: Based on the assessment, the court determines the specific religious or cultural accommodations or restrictions to be imposed, if any, to address concerns and ensure compliance with bail conditions."
          },
          {
            "step_number": 3,
            "description": "Compliance Monitoring: Authorities monitor the defendant's compliance with the religious or cultural accommodations or restrictions and report any violations to the court."
          }
        ]
      },
      "dummyEntries": [
        {
          "title": "Procedures for Bail with Religious or Cultural Accommodations",
          "content": "Bail with religious or cultural accommodations involves belief assessment, accommodation determination, and compliance monitoring. This section provides insights into the procedural aspects of bail with religious or cultural accommodations."
        }
      ]
    }
  ];
  const [clickedBox, setClickedBox] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter the dummy data based on the search query
  const filteredData = dummyData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* Search bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search bails..."
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholderTextColor="#fff" // Set the placeholder text color to white
      />


      {/* Display filtered data */}
      {filteredData.map(item => (
        item && (
          // Inside the map function, where you render the TouchableOpacity for each item
          <TouchableOpacity
            key={item.id}
            style={[styles.box, clickedBox === item.id && styles.boxClicked]}
            onPress={() => setClickedBox(clickedBox === item.id ? null : item.id)}
          >
            <Text style={styles.boxTitle}>{item.title}</Text>
            {clickedBox === item.id && (
              <View style={styles.stepsContainer}>
                {item.data && (
                  <>
                    <Text style={styles.boxData}>{item.data.summary}</Text>
                    {item.data.steps && item.data.steps.map(step => (
                      <Text key={step.step_number} style={styles.stepText}>
                        {`${step.step_number}. ${step.description}`}
                      </Text>
                    ))}
                    {/* Add a new block to display procedures if they exist */}
                    {item.data.procedures && item.data.procedures.map(procedure => (
                      <Text key={procedure.step_number} style={styles.stepText}>
                        {`${procedure.step_number}. ${procedure.description}`}
                      </Text>
                    ))}
                  </>
                )}
              </View>
            )}
          </TouchableOpacity>
        )
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#000', // Set the screen background to black
  },
  searchInput: {
    height: 40,
    borderColor: '#444', // Dark gray border
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '90%',
    backgroundColor: '#333', // Dark gray background
    color: '#fff', // White text color for input
  },
  box: {
    backgroundColor: '#1a1a1a', // Dark gray background
    padding: 20,
    marginBottom: 20,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#fff', // White shadow for contrast
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#333', // Border to differentiate the boxes
  },
  boxClicked: {
    borderColor: '#4CAF50', // Green border when clicked
    borderWidth: 2,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // White text color for the title
  },
  boxData: {
    fontSize: 16,
    color: '#ccc', // Light gray text color for box data
    marginBottom: 10,
  },
  stepsContainer: {
    marginTop: 10,
  },
  stepText: {
    fontSize: 14,
    color: '#888', // Lighter gray text color for step text
    marginBottom: 5,
  },
});
