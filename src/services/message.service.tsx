import MessageModel from "../dto/MessageModel";

export const messages: MessageModel[] = [
    {
        id: 1,
        chatParticipantId: 2,
        messageText: [
            {
                timeStamp: 1643618899,
                text: 'text 1',
            },
            {
                timeStamp: 1643718899,
                text: 'text 2',
            },
            {
                timeStamp: 1643818899,
                text: 'text 3',
            },
            {
                timeStamp: 1643918899,
                text: 'text 4',
            },
        ],
        text: 'Год Тигра по китайскому календарю начнётся сегодня в полночь. FoxmindEd поздравляет всех сотрудников с наступающим Новым годом и желает тигриных успехов!',
        timeStamp: 1643618899,
        isEdited: false,
        isRead: false,
        chatChannelId: 1,
        isUnderReview: false,
        sentTimeStamp: 0,
        rejectedTimeStamp: 0
    },

    {
        id: 2,
        chatParticipantId: 3,
        text: 'Прошу направить комментарии к последнему запросу клиента.',
        messageText: [],
        timeStamp: 1643620519,
        isEdited: false,
        isRead: false,
        chatChannelId: 2,
        isUnderReview: false,
        sentTimeStamp: 0,
        rejectedTimeStamp: 0
    },

    {
        id: 3,
        chatParticipantId: 4,
        text: 'Да, тот самый, который мы обсуждали вчера вечером.',
        messageText: [],
        timeStamp: 1643622480,
        isEdited: false,
        isRead: false,
        chatChannelId: 2,
        isUnderReview: false,
        sentTimeStamp: 0,
        rejectedTimeStamp: 0
    },

    {
        id: 4,
        chatParticipantId: 1,
        text: 'Да, сейчас сделаю.',
        messageText: [],
        timeStamp: 1643622720,
        isEdited: false,
        isRead: true,
        chatChannelId: 2,
        isUnderReview: false,
        sentTimeStamp: 0,
        rejectedTimeStamp: 0
    },

    {
        id: 5,
        chatParticipantId: 8,
        text: '',
        messageText: [],
        timeStamp: 1643535780,
        isEdited: false,
        isRead: true,
        chatChannelId: 3,
        isUnderReview: false,
        sentTimeStamp: 0,
        rejectedTimeStamp: 1643536380
    },

    {
        id: 6,
        chatParticipantId: 8,
        text: '',
        messageText: [],
        timeStamp: 1643622780,
        isEdited: false,
        isRead: false,
        chatChannelId: 3,
        isUnderReview: true,
        sentTimeStamp: 0,
        rejectedTimeStamp: 0
    },

    {
        id: 7,
        chatParticipantId: 1,
        text: 'This is a test message...',
        messageText: [],
        timeStamp: 1643622720,
        isEdited: false,
        isRead: true,
        chatChannelId: 3,
        isUnderReview: true,
        sentTimeStamp: 0,
        rejectedTimeStamp: 0
    },

    {
        id: 8,
        chatParticipantId: 1,
        text: 'This is the second test message...',
        messageText: [],
        timeStamp: 1643622720,
        isEdited: false,
        isRead: false,
        chatChannelId: 4,
        isUnderReview: true,
        sentTimeStamp: 0,
        rejectedTimeStamp: 0
    }
];
