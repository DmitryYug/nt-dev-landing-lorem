import startPageCircle from '../images/start-page/circle.png'
import startPageEllipse from '../images/start-page/ellipse.png'
import startPageRectangle from '../images/start-page/rectangle.png'
import startPageEllipseSmall from '../images/start-page/ellipse-s.png'

import aboutCardsRound from '../images/about-block/cards/round.png'
import aboutCardsStraight from '../images/about-block/cards/straight.png'
import aboutCardsDigital from '../images/about-block/cards/digital-card/img.png'

import workFlowRoundedCenter from '../images/workflow-block/rounded-center.png'
import workFlowLeft from '../images/workflow-block/left.png'
import workFlowRoundedLeft from '../images/workflow-block/rounded-left.png'
import workFlowEllipseLeft from '../images/workflow-block/ellipse-left.png'
import workFlowRoundedRectangleCenter from '../images/workflow-block/rounded-rectangle-center.png'

import portfolioAutomationCircle from '../images/portfolio-block/cases-page/cards/automation-card/circle.png'
import portfolioAutomationEllipse from '../images/portfolio-block/cases-page/cards/automation-card/ellipse.png'
import portfolioIntegrationCircle from '../images/portfolio-block/cases-page/cards/integration-card/circle.png'
import portfolioIntegrationRectangle from '../images/portfolio-block/cases-page/cards/integration-card/rectangle.png'
import portfolioPreProjCircle from '../images/portfolio-block/cases-page/cards/pre-project-card/circle.png'
import portfolioPreProjRectangle from '../images/portfolio-block/cases-page/cards/pre-project-card/rectangle.png'
import portfolioServicesCircle from '../images/portfolio-block/cases-page/cards/online-services-card/circle.png'
import portfolioServicesRectangle from '../images/portfolio-block/cases-page/cards/online-services-card/rectangle.png'

import casesAutomationScheme1 from '../images/case-modal/schemes/automation/1.png'
import casesAutomationScheme2 from '../images/case-modal/schemes/automation/2.png'
import casesAutomationScheme3 from '../images/case-modal/schemes/automation/3.png'
import casesAutomationScheme4 from '../images/case-modal/schemes/automation/4.png'
import casesAutomationScheme5 from '../images/case-modal/schemes/automation/5.png'
import casesAutomationScheme6 from '../images/case-modal/schemes/automation/6.png'
import casesAutomationScheme7 from '../images/case-modal/schemes/automation/7.png'
import casesAutomationScheme8 from '../images/case-modal/schemes/automation/8.png'
import casesAutomationScheme9 from '../images/case-modal/schemes/automation/9.png'
import casesAutomationScheme10 from '../images/case-modal/schemes/automation/10.png'
import casesAutomationScheme11 from '../images/case-modal/schemes/automation/11.png'
import casesIntegrationScheme1 from '../images/case-modal/schemes/integration/1.png'
import casesServicesScheme1 from '../images/case-modal/schemes/online-services/1.png'
import casesAutomationBckgrEllipse from '../images/portfolio-block/cases-page/cards/automation-card/background-1/ellipse.png'
import casesAutomationBckgrRectangle from '../images/portfolio-block/cases-page/cards/automation-card/background-1/rectangle.png'
import casesAutomationBckgr11Ellipse from '../images/portfolio-block/cases-page/cards/automation-card/background-11/ellipse.png'
import casesAutomationBckgr11Rectangle from '../images/portfolio-block/cases-page/cards/automation-card/background-11/rectangle.png'
import casesAutomationBckgr11Circle from '../images/portfolio-block/cases-page/cards/automation-card/background-11/circle.png'
import casesAutomationBckgr7Ellipse from '../images/portfolio-block/cases-page/cards/automation-card/background-7/ellipse.png'
import casesAutomationBckgr7Rectangle from '../images/portfolio-block/cases-page/cards/automation-card/background-7/rectangle.png'
import casesAutomationBckgr7Cirlce from '../images/portfolio-block/cases-page/cards/automation-card/background-7/circle.png'



export const startPageIcons = [
    {
        path: [startPageCircle, startPageEllipse],
        text: 'Lorem ipsum dolor sit amet',
        iconId: 'hover-icon-first',
    },
    {
        path: [startPageEllipseSmall, startPageCircle, startPageEllipse],
        text: 'Lorem ipsum dolor',
        iconId: 'hover-icon-second',
    },
    {
        path: [startPageRectangle, startPageCircle],
        text: 'Lorem ipsum dolor sit amet, consectetur.',
        iconId: 'hover-icon-third',
    },

]

export const aboutBlockCards = [
    {
        imagePath: [aboutCardsRound, aboutCardsStraight],
        title: 'Consectetur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur ducimus qui quibusdam sapiente ut.',
        cardId: 'import-card'
    },
    {
        imagePath: [aboutCardsDigital, aboutCardsDigital, aboutCardsDigital, aboutCardsDigital],
        title: 'Ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda, atque dicta, dolor facilis in laborum maiores, quia quibusdam quis ratione tempore temporibus velit veniam voluptate! Commodi cumque debitis dolorem!',
        cardId: 'digital-card'
    },
    {
        imagePath: [
            aboutCardsStraight, aboutCardsRound, aboutCardsStraight,
            aboutCardsRound, aboutCardsStraight, aboutCardsStraight,
            aboutCardsRound, aboutCardsStraight, aboutCardsRound,
            aboutCardsStraight, aboutCardsRound, aboutCardsStraight,
            aboutCardsRound, aboutCardsRound, aboutCardsRound, aboutCardsRound
        ],
        title: 'Adipisci assumenda',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut ducimus labore libero maxime neque non omnis optio ut velit.',
        cardId: 'develop-card'
    }
]

export const workFlowCards = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        result: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut ducimus labore libero maxime ',
        descriptionList: [
            {
                icon: workFlowRoundedCenter,
                text: 'Lorem ipsum dolor sit amet.'
            },
            {
                icon: workFlowLeft,
                text: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'
            },
            {
                icon: workFlowRoundedLeft,
                text: 'Lorem ipsum dolor sit amet.'
            },
            {
                icon: workFlowEllipseLeft,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, nam!'
            }
        ]
    },
    {
        title: 'Adipisicing',
        result: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem hic inventore iure odit perferendis voluptatum!',
        descriptionList: [
            {
                icon: workFlowRoundedCenter,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {icon: workFlowLeft, text: 'Lorem ipsum dolor sit amet.'},
            {icon: workFlowRoundedLeft, text: 'Lorem ipsum dolor sit amet.'},
        ]
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        result: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam assumenda consectetur distinctio ducimus, esse eveniet excepturi facere id libero modi quae quia quisquam, quos saepe sequi, suscipit tenetur voluptatum.',
        descriptionList: [
            {icon: workFlowRoundedCenter, text: 'Tenetur voluptatum'},
            {icon: workFlowLeft, text: 'Lorem ipsum dolor'},
            {
                icon: workFlowRoundedLeft,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
            },
            {icon: workFlowEllipseLeft, text: 'Lorem ipsum dolor '},
            {
                icon: workFlowRoundedRectangleCenter,
                text: 'Lorem ipsum dolor sit amet'
            }
        ]
    },
    {
        title: 'Lorem ipsum dolor.',
        result: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        descriptionList: [
            {
                icon: workFlowRoundedCenter,
                text: 'Amet aperiam assumenda consectetur distinctio ducimus, esse eveniet excepturi facere id libero modi quae quia.'
            },
            {
                icon: workFlowLeft,
                text: 'Veniam voluptate! Commodi cumque debitis dolorem!'
            },
        ]
    },
    {
        title: 'Veniam voluptate',
        result: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        descriptionList: [
            {
                icon: workFlowRoundedCenter,
                text: 'Tempore temporibus velit veniam voluptate! Commodi cumque debitis dolorem!'
            },
            {icon: workFlowLeft, text: 'Veniam voluptate veniam voluptate'},
            {icon: workFlowRoundedLeft, text: 'Tenetur voluptatum veniam'},
        ]
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        result: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam assumenda consectetur distinctio ducimus, esse eveniet excepturi facere id libero modi quae quia quisquam, quos saepe sequi, suscipit tenetur voluptatum.',
        descriptionList: [
            {
                icon: workFlowRoundedCenter,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
            },
            {
                icon: workFlowLeft,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
            },
            {
                icon: workFlowRoundedLeft,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex optio reiciendis.'
            },
        ]
    },
]
export const portfolioCards = [
    {
        cardId: 'automation',
        title: ' Dolore ex optio reiciendis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam assumenda consectetur distinctio ducimus, esse eveniet excepturi facere id libero modi quae quia quisquam, quos saepe sequi, suscipit tenetur voluptatum.',
        backgroundIcons: [portfolioAutomationCircle, portfolioAutomationEllipse],
    },
    {
        cardId: 'integration',
        title: 'Tenetur voluptatum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex optio reiciendis.',
        backgroundIcons: [portfolioIntegrationCircle, portfolioIntegrationRectangle],
    },
    {
        cardId: 'pre-project',
        title: 'Veniam voluptate',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda, atque dicta, dolor facilis in laborum maiores, quia quibusdam quis ratione tempore temporibus velit veniam voluptate!',
        backgroundIcons: [portfolioPreProjCircle, portfolioPreProjRectangle],
    },
    {
        cardId: 'online-services',
        title: 'Commodi cumque',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda, atque dicta, dolor facilis in laborum maiores, quia quibusdam quis ratione tempore temporibus ',
        backgroundIcons: [portfolioServicesCircle, portfolioServicesRectangle],
    }

]

export const profileCases = {
    automation: [
        {
            id: 'card1',
            header: 'Commodi cumque debitis dolorem!',
            tags: ['Veniam voluptate', 'Veniam voluptate', 'SAS', 'Voluptate'],
            headerChip: 'Veniam',
            stack: ['Java,', 'Spring,', 'PostgreSQL,', 'Apache Kafka'],
            status: ['Commodi cumque debitis dolorem!'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme1,
            parentBackground: [casesAutomationBckgrEllipse, casesAutomationBckgrRectangle]
        },
        {
            id: 'card2',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Commodi cumque debitis', 'Dolorem!', 'SAS', 'Veniam voluptate', 'Veniam voluptate'],
            headerChip: 'Veniam voluptate',
            stack: ['Java,', 'Spring,', 'PostgreSQL,', 'Apache Kafka'],
            status: ['Quia recusandae voluptatum!', 'Maxime molestias nam nesciunt praesentium !'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit. Quia recusandae voluptatum',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme2,
            parentBackground: []
        },
        {
            id: 'card3',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Quia recusandae voluptatum', 'Veniam voluptate', 'Veniam', 'Tenetur voluptatum'],
            headerChip: 'Veniam',
            stack: ['Java,', 'Spring,', 'PostgreSQL,', 'Apache Kafka'],
            status: ['Voluptate'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme3,
            parentBackground: []
        },
        {
            id: 'card4',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Quia recusandae voluptatum', 'Lorem ipsum dolor sit amet, consectetur.', 'Commodi cumque'],
            headerChip: 'Debitis dolorem!',
            stack: ['Java,', 'Spring,', 'Kotlin,', 'Oracle'],
            status: ['Commodi cumque debitis dolorem!', 'Quia recusandae voluptatum'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme4,
            parentBackground: []
        },
        {
            id: 'card5',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Quia recusandae voluptatum', 'Lorem ipsum dolor sit amet, consectetur.', 'Commodi cumque'],
            headerChip: 'Debitis dolorem!',
            stack: ['Java,', 'Spring,', 'Kotlin,', 'Oracle'],
            status: ['Commodi cumque debitis dolorem!', 'Quia recusandae voluptatum'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme5,
            parentBackground: []
        },
        {
            id: 'card6',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Quia recusandae voluptatum', 'Lorem ipsum dolor sit amet, consectetur.', 'Commodi cumque'],
            headerChip: 'Debitis dolorem!',
            stack: ['Java,', 'Spring,', 'Kotlin,', 'Oracle'],
            status: ['Commodi cumque debitis dolorem!', 'Quia recusandae voluptatum'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme6,
            parentBackground: []
        },
        {
            id: 'card7',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Quia recusandae voluptatum', 'Lorem ipsum dolor sit amet, consectetur.', 'Commodi cumque'],
            headerChip: 'Debitis dolorem!',
            stack: ['Java,', 'Spring,', 'Kotlin,', 'Oracle'],
            status: ['Commodi cumque debitis dolorem!', 'Quia recusandae voluptatum'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme7,
            parentBackground: [casesAutomationBckgr7Ellipse, casesAutomationBckgr7Rectangle, casesAutomationBckgr7Cirlce]
        },
        {
            id: 'card8',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Quia recusandae voluptatum', 'Lorem ipsum dolor sit amet, consectetur.', 'Commodi cumque'],
            headerChip: 'Debitis dolorem!',
            stack: ['Java,', 'Spring,', 'Kotlin,', 'Oracle'],
            status: ['Commodi cumque debitis dolorem!', 'Quia recusandae voluptatum'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme8,
            parentBackground: []
        },
        {
            id: 'card9',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Quia recusandae voluptatum', 'Lorem ipsum dolor sit amet, consectetur.', 'Commodi cumque'],
            headerChip: 'Debitis dolorem!',
            stack: ['Java,', 'Spring,', 'Kotlin,', 'Oracle'],
            status: ['Commodi cumque debitis dolorem!', 'Quia recusandae voluptatum'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit .',
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme9,
            parentBackground: []
        },
        {
            id: 'card10',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Quia recusandae voluptatum', 'Lorem ipsum dolor sit amet, consectetur.', 'Commodi cumque'],
            headerChip: 'Debitis dolorem!',
            stack: ['Java,', 'Spring,', 'Kotlin,', 'Oracle'],
            status: ['Commodi cumque debitis dolorem!', 'Quia recusandae voluptatum'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme10,
            parentBackground: []
        },
        {
            id: 'card11',
            header: 'Lorem ipsum dolor sit amet, consectetur.',
            tags: ['Quia recusandae voluptatum', 'Lorem ipsum dolor sit amet, consectetur.', 'Commodi cumque'],
            headerChip: 'Debitis dolorem!',
            stack: ['Java,', 'Spring,', 'Kotlin,', 'Oracle'],
            status: ['Commodi cumque debitis dolorem!', 'Quia recusandae voluptatum'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo id itaque maxime molestias nam nesciunt praesentium quia recusandae voluptatum!',
            features: [
                'Lorem ipsum dolor sit amet, consectetur. Veniam voluptate',
                'Lorem ipsum dolor sit amet, consectetur.',
                'Lorem ipsum dolor sit.',
                'Lorem ipsum dolor sit amet, consectetur. Commodi cumque debitis dolorem!',
                'Lorem ipsum dolor sit amet, consectetur.'
            ],
            scheme: casesAutomationScheme11,
            parentBackground: [casesAutomationBckgr11Ellipse, casesAutomationBckgr11Rectangle, casesAutomationBckgr11Circle]
        }
    ],
    integration: [
        {
            id: 'card1',
            header: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, tempora.',
            tags: ['Ipsum dolor', 'Eaque, tempora'],
            headerChip: 'Eaque, tempora.',
            stack: ['Java,', 'Spring,', 'PostgreSQL,', 'Apache Kafka'],
            status: ['Lorem ipsum dolor sit amet'],
            caseDescription:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea enim reprehenderit. Animi architecto aspernatur beatae debitis, deserunt eius ex expedita, illo iste iure nihil pariatur repellendus veniam. Enim id itaque maxime perferendis quidem rem!",
            features: [],
            scheme: casesIntegrationScheme1,
            parentBackground: [casesAutomationBckgrEllipse, casesAutomationBckgrRectangle]
        }
    ],
    'pre-project': [
        {
            id: 'card1',
            header: 'Enim id itaque maxime perferendis quidem rem',
            tags: ['Quidem rem', 'Maxime'],
            headerChip: 'Ipsum dolor',
            stack: [],
            status: ['Enim id itaque maxime perferendis quidem rem'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea enim reprehenderit. Animi architecto aspernatur beatae debitis, deserunt eius ex expedita, illo iste iure nihil pariatur.',
            features: [
                'Lorem ipsum dolor',
                "Sit amet, consectetur adipisicing elit",
                'Aliquam',
                'Lorem ipsum dolor sit amet',
                'Consectetur adipisicing elit. Nam, optio'
            ],
            scheme: '',
            parentBackground: [casesAutomationBckgrEllipse, casesAutomationBckgrRectangle]
        }
    ],
    'online-services': [
        {
            id: 'card1',
            header: 'Enim id itaque maxime perferendis quidem rem',
            tags: ['Maxime'],
            headerChip: 'B2C',
            stack: ['PHP,', 'postgresql,', 'icast'],
            status: ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet, consectetur'],
            caseDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus illo laborum laudantium recusandae repudiandae? Accusamus inventore mollitia perferendis reprehenderit.',
            features: ['Lorem ipsum dolor sit amet', 'Eaque, tempora.', 'Enim id itaque maxime perferendis quidem rem', 'Quidem rem'],
            scheme: casesServicesScheme1,
            parentBackground: [casesAutomationBckgrEllipse, casesAutomationBckgrRectangle]
        }
    ]
}

export const policyData = [
    {
        id: 1,
        title: 'Quidem rem',
        list: [
            '1.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus illo laborum laudantium recusandae repudiandae? Accusamus inventore mollitia perferendis reprehenderit.',
            '1.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus illo laborum laudantium recusandae repudiandae? Accusamus inventore mollitia perferendis reprehenderit.'
        ]
    },
    {
        id: 2,
        title: 'Enim id itaque maxime perferendis quidem rem',
        list: [
            '2.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '2.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '2.3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '2.4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '2.5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '2.6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '2.7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '2.8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
        ]
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, tempora.',
        list: [
            '3.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '3.2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
        ]
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit amet.',
        list: [
            '4.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus illo laborum laudantium recusandae repudiandae? Accusamus inventore mollitia perferendis reprehenderit.',
            '4.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus illo laborum laudantium recusandae repudiandae? Accusamus inventore mollitia perferendis reprehenderit.'
        ]
    },
    {
        id: 5,
        title: 'Enim id itaque maxime perferendis quidem rem',
        list: [
            '5.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea enim reprehenderit. Animi architecto aspernatur beatae debitis, deserunt eius ex expedita, illo iste iure nihil pariatur repellendus veniam. Enim id itaque maxime perferendis quidem rem!',
            '5.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea enim reprehenderit. Animi architecto aspernatur beatae debitis, deserunt eius ex expedita, illo iste iure nihil pariatur repellendus veniam. Enim id itaque maxime perferendis quidem rem!'
        ]
    },
    {
        id: 6,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, tempora.',
        list: [
            '6.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '6.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '6.3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
            '6.3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, optio.',
        ]
    },
    {
        id: 7,
        title: 'Quidem rem',
        list: [
            '7.1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, tempora.',
            '7.2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, tempora.',
        ]
    },
]