const jokes = [
    "Why don't scientists trust atoms? Because they make up everything! 😂",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 😄",
    "I'm reading a book about anti-gravity... it's impossible to put down! 😆"
];

const motivationalQuotes = [
    "Believe in yourself! You are capable of great things! 💪",
    "Every day is a new opportunity to be your best self. 🌟",
    "Difficult roads often lead to beautiful destinations. Keep going! 🚀"
];

const positiveAffirmations = [
    "You are strong, capable, and resilient. 💖",
    "You matter, and your feelings are valid. 🌼",
    "Take a deep breath. You are doing your best, and that's enough. 😊"
];

const lonelySuggestions = [
    "I'm here for you. Would you like to talk more? 💬",
    "Maybe reaching out to a friend could help. Or, how about doing something you enjoy? 🎨",
    "You could try writing down your thoughts, or even go for a walk to clear your mind. 🚶‍♂️"
];

const scaredSuggestions = [
    "It's okay to be scared sometimes. Take deep breaths and ground yourself. 🌿",
    "Would talking about what's making you scared help? I'm all ears. 👂",
    "Fear can pass. Remember, you're stronger than you think. 💪"
];

const missingSomeoneSuggestions = [
    "It’s hard when you miss someone. How about writing them a message? 📝",
    "Maybe you could look at some photos or memories you have with them. 😊",
    "Talking about them can help. Do you want to share a memory? 💖"
];

const frustratedSuggestions = [
    "Frustration can be overwhelming. How about taking a break for a moment? 🌸",
    "Sometimes venting can help! What exactly is making you frustrated? 🤔",
    "A quick distraction like listening to music or stretching can calm things down. 🎧"
];

const anxiousSuggestions = [
    "Try focusing on your breathing for a minute—inhale deeply, exhale slowly. 🌬️",
    "Anxiety can feel so heavy. Want to talk through what’s worrying you? 💬",
    "Maybe take things step by step. One thing at a time. You’ve got this! 💪"
];

const excitedResponses = [
    "That’s awesome! What’s got you so excited? 😄",
    "Excitement is such a great feeling! Share more about what’s making you happy! 🎉",
    "I love hearing good news! What’s on your mind? 🎊"
];

const gratitudeResponses = [
    "You're welcome! I'm glad I could help! 😊",
    "Anytime! Your well-being matters to me! 💖",
    "No problem at all! Just here to support you! 🌟"
];

function detectFeelings(inputText) {
    if (inputText.toLowerCase().includes("lonely")) {
        return lonelySuggestions[Math.floor(Math.random() * lonelySuggestions.length)];
    } else if (inputText.toLowerCase().includes("scared") || inputText.toLowerCase().includes("afraid")) {
        return scaredSuggestions[Math.floor(Math.random() * scaredSuggestions.length)];
    } else if (inputText.toLowerCase().includes("missing")) {
        return missingSomeoneSuggestions[Math.floor(Math.random() * missingSomeoneSuggestions.length)];
    } else if (inputText.toLowerCase().includes("frustrated") || inputText.toLowerCase().includes("angry")) {
        return frustratedSuggestions[Math.floor(Math.random() * frustratedSuggestions.length)];
    } else if (inputText.toLowerCase().includes("anxious") || inputText.toLowerCase().includes("worried")) {
        return anxiousSuggestions[Math.floor(Math.random() * anxiousSuggestions.length)];
    } else if (inputText.toLowerCase().includes("excited") || inputText.toLowerCase().includes("happy")) {
        return excitedResponses[Math.floor(Math.random() * excitedResponses.length)];
    }
    return null;
}

function detectSpecialRequest(inputText) {
    if (inputText.toLowerCase().includes("joke")) {
        return jokes[Math.floor(Math.random() * jokes.length)];
    } else if (inputText.toLowerCase().includes("motivate me") || inputText.toLowerCase().includes("inspire me")) {
        return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    } else if (inputText.toLowerCase().includes("affirm") || inputText.toLowerCase().includes("cheer me up")) {
        return positiveAffirmations[Math.floor(Math.random() * positiveAffirmations.length)];
    }
    return null;
}

const responsePatterns = {
    "hello|hi|hey": ["Hello! How are you feeling today? 😊", "Hi there! What's on your mind today?"],
    "i feel (.*)": ["Why do you feel like that? 😔", "Feeling like that can be tough. Want to talk more about it?"],
    "i am (.*)": ["Why do you say you're like that?", "How long have you been like that? Let's unpack that."],
    "(.*) sad (.*)|depressed|down": ["I'm really sorry you're feeling this way 😞. Would you like me to share something uplifting?", "It's okay to feel sad sometimes. Want to hear a joke to lighten the mood?"],
    "(.*) happy (.*)|good|great": ["That's awesome! 😄 Keep riding that wave of positivity!", "I'm so glad to hear that! What's making you feel so good today?"],
    "(.*) lonely (.*)": [lonelySuggestions[Math.floor(Math.random() * lonelySuggestions.length)], "Feeling lonely is tough. Maybe doing something you love could help. Want to talk more?"],
    "(.*) scared (.*)|afraid": [scaredSuggestions[Math.floor(Math.random() * scaredSuggestions.length)], "Feeling scared is okay. I’m here for you. Want to talk through it?"],
    "(.*) missing (.*)": [missingSomeoneSuggestions[Math.floor(Math.random() * missingSomeoneSuggestions.length)], "It’s really hard missing someone. Maybe sharing a memory of them could help?"],
    "(.*) frustrated (.*)": [frustratedSuggestions[Math.floor(Math.random() * frustratedSuggestions.length)], "Frustration happens. Venting could help, what's making you frustrated?"],
    "(.*) anxious (.*)|worried": [anxiousSuggestions[Math.floor(Math.random() * anxiousSuggestions.length)], "Anxiety can be so tough. Maybe breaking things down will help. Let’s talk through it."],
    "(.*) excited (.*)|happy|great": [excitedResponses[Math.floor(Math.random() * excitedResponses.length)], "Excitement is so infectious! What’s the big news?"],
    "(.*) thanks|thank you": [gratitudeResponses[Math.floor(Math.random() * gratitudeResponses.length)]],
    "bye|goodbye|exit": ["Goodbye! Hope you feel better soon! 😊", "Take care! I'm always here to chat when you need it."],
    "(.*)": ["I hear you. Could you tell me more?", "I'm all ears. What else is on your mind?", "Tell me how you're feeling."],
    "": ["I'm here for you. What would you like to talk about? 😊", "How are you feeling today?"]
};

function matchResponse(inputText) {
    const specialFeeling = detectFeelings(inputText);
    if (specialFeeling) return specialFeeling;

    const specialRequest = detectSpecialRequest(inputText);
    if (specialRequest) return specialRequest;

    for (const pattern in responsePatterns) {
        const regex = new RegExp(pattern);
        if (regex.test(inputText.toLowerCase())) {
            const responses = responsePatterns[pattern];
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return "I'm here for you, but I didn't quite understand that. Could you rephrase? 🤔";
}

// Function to simulate a conversation
function chatWithBot() {
    console.log("Welcome to the chatbot! Type 'exit' to end the conversation. 😊");
    let inputText;
    while (inputText !== "exit") {
        inputText = prompt("You: ");
        if (inputText === "exit") {
            console.log("Chatbot: Goodbye! Hope you feel better soon! 😊");
            break;
        }
        const response = matchResponse(inputText);
        console.log("Chatbot:", response);
    }
}
// Start the chat
chatWithBot();
