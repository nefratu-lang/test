import { Question, QuestionType, WorkbookSection } from "../types";

// DAMYO Naval English & General English Question Bank (100 Questions)
const QUESTION_BANK: Question[] = [
  // --- PART 1: GENERAL ENGLISH (Questions 1-50) ---
  
  // Topic: Past Simple
  {
    id: 1,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "Where ______ you yesterday afternoon?",
    options: [ { id: "a", text: "was" }, { id: "b", text: "were" }, { id: "c", text: "did" }, { id: "d", text: "are" } ],
    correctAnswer: "b",
    explanation: "You -> were."
  },
  {
    id: 2,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "The weather ______ very stormy last night.",
    options: [ { id: "a", text: "is" }, { id: "b", text: "were" }, { id: "c", text: "was" }, { id: "d", text: "did" } ],
    correctAnswer: "c",
    explanation: "Weather (it) -> was."
  },
  {
    id: 3,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "I ______ my uniform two hours ago.",
    options: [ { id: "a", text: "iron" }, { id: "b", text: "ironed" }, { id: "c", text: "ironing" }, { id: "d", text: "irons" } ],
    correctAnswer: "b",
    explanation: "Regular verb + ed (iron -> ironed)."
  },
  {
    id: 4,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "We ______ the Admiral at the ceremony yesterday.",
    options: [ { id: "a", text: "see" }, { id: "b", text: "saw" }, { id: "c", text: "seen" }, { id: "d", text: "seeing" } ],
    correctAnswer: "b",
    explanation: "Irregular verb: See -> Saw."
  },
  {
    id: 5,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "______ you on duty last weekend?",
    options: [ { id: "a", text: "Did" }, { id: "b", text: "Was" }, { id: "c", text: "Were" }, { id: "d", text: "Are" } ],
    correctAnswer: "c",
    explanation: "You -> Were."
  },
  {
    id: 6,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "They ______ come to the morning roll call (içtima) because they were sick.",
    options: [ { id: "a", text: "didn't" }, { id: "b", text: "weren't" }, { id: "c", text: "don't" }, { id: "d", text: "wasn't" } ],
    correctAnswer: "a",
    explanation: "Negative action -> didn't + verb."
  },
  {
    id: 7,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "Mustafa Kemal Atatürk ______ in 1881.",
    options: [ { id: "a", text: "born" }, { id: "b", text: "was born" }, { id: "c", text: "is born" }, { id: "d", text: "were born" } ],
    correctAnswer: "b",
    explanation: "Passive past -> was born."
  },
  {
    id: 8,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "I ______ a big ship on the horizon five minutes ago.",
    options: [ { id: "a", text: "spot" }, { id: "b", text: "spotted" }, { id: "c", text: "spots" }, { id: "d", text: "spotting" } ],
    correctAnswer: "b",
    explanation: "Regular verb -> spotted."
  },
  {
    id: 9,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "What time ______ the ship leave the port?",
    options: [ { id: "a", text: "was" }, { id: "b", text: "were" }, { id: "c", text: "did" }, { id: "d", text: "is" } ],
    correctAnswer: "c",
    explanation: "Question with verb -> did."
  },
  {
    id: 10,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Past Simple",
    text: "We ______ very tired after the sports training.",
    options: [ { id: "a", text: "was" }, { id: "b", text: "did" }, { id: "c", text: "were" }, { id: "d", text: "had" } ],
    correctAnswer: "c",
    explanation: "We -> were."
  },

  // Topic: Present Continuous & Simple
  {
    id: 11,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Present Tense",
    text: "Look! The Captain ______ on the bridge.",
    options: [ { id: "a", text: "stands" }, { id: "b", text: "stood" }, { id: "c", text: "is standing" }, { id: "d", text: "stand" } ],
    correctAnswer: "c",
    explanation: "Happening now (Look!) -> is standing."
  },
  {
    id: 12,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Present Simple",
    text: "Sailors usually ______ up at 06:00.",
    options: [ { id: "a", text: "get" }, { id: "b", text: "gets" }, { id: "c", text: "is getting" }, { id: "d", text: "got" } ],
    correctAnswer: "a",
    explanation: "Routine (usually) -> get."
  },
  {
    id: 13,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Present Continuous",
    text: "______ it raining outside right now?",
    options: [ { id: "a", text: "Do" }, { id: "b", text: "Does" }, { id: "c", text: "Is" }, { id: "d", text: "Are" } ],
    correctAnswer: "c",
    explanation: "Is it raining..."
  },
  {
    id: 14,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Present Continuous",
    text: "We ______ cleaning the deck at the moment.",
    options: [ { id: "a", text: "are" }, { id: "b", text: "do" }, { id: "c", text: "is" }, { id: "d", text: "have" } ],
    correctAnswer: "a",
    explanation: "We are cleaning..."
  },
  {
    id: 15,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Present Simple",
    text: "He never ______ alcohol on duty.",
    options: [ { id: "a", text: "drink" }, { id: "b", text: "drinks" }, { id: "c", text: "is drinking" }, { id: "d", text: "drank" } ],
    correctAnswer: "b",
    explanation: "He -> drinks."
  },
  {
    id: 16,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Present Continuous",
    text: "Listen! The alarm ______.",
    options: [ { id: "a", text: "ring" }, { id: "b", text: "rings" }, { id: "c", text: "is ringing" }, { id: "d", text: "rang" } ],
    correctAnswer: "c",
    explanation: "Happening now -> is ringing."
  },
  {
    id: 17,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Present Simple",
    text: "I ______ English exams. They are difficult.",
    options: [ { id: "a", text: "doesn't like" }, { id: "b", text: "don't like" }, { id: "c", text: "am not liking" }, { id: "d", text: "not like" } ],
    correctAnswer: "b",
    explanation: "Stative verb/Opinion -> don't like."
  },
  {
    id: 18,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Present Continuous",
    text: "What ______ you doing in the engine room?",
    options: [ { id: "a", text: "do" }, { id: "b", text: "are" }, { id: "c", text: "did" }, { id: "d", text: "have" } ],
    correctAnswer: "b",
    explanation: "What are you doing..."
  },

  // Topic: Modals
  {
    id: 19,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Modals",
    text: "It is raining. You ______ wear your raincoat.",
    options: [ { id: "a", text: "should" }, { id: "b", text: "shouldn't" }, { id: "c", text: "can't" }, { id: "d", text: "don't" } ],
    correctAnswer: "a",
    explanation: "Advice -> should."
  },
  {
    id: 20,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Modals",
    text: "Cadets ______ respect their commanders. It is a rule.",
    options: [ { id: "a", text: "can" }, { id: "b", text: "must" }, { id: "c", text: "shouldn't" }, { id: "d", text: "doesn't" } ],
    correctAnswer: "b",
    explanation: "Obligation/Rule -> must."
  },
  {
    id: 21,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Modals",
    text: "You ______ smoke in the ammunition depot! It is forbidden.",
    options: [ { id: "a", text: "must" }, { id: "b", text: "should" }, { id: "c", text: "mustn't" }, { id: "d", text: "don't" } ],
    correctAnswer: "c",
    explanation: "Prohibition -> mustn't."
  },
  {
    id: 22,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Modals",
    text: "I have a headache. – You ______ go to the infirmary.",
    options: [ { id: "a", text: "should" }, { id: "b", text: "shouldn't" }, { id: "c", text: "mustn't" }, { id: "d", text: "don't" } ],
    correctAnswer: "a",
    explanation: "Advice -> should."
  },
  {
    id: 23,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Modals",
    text: "______ you swim well?",
    options: [ { id: "a", text: "Should" }, { id: "b", text: "Must" }, { id: "c", text: "Can" }, { id: "d", text: "Are" } ],
    correctAnswer: "c",
    explanation: "Ability -> Can."
  },
  {
    id: 24,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Modals",
    text: "We are late. We ______ run to the muster station.",
    options: [ { id: "a", text: "shouldn't" }, { id: "b", text: "must" }, { id: "c", text: "can't" }, { id: "d", text: "don't" } ],
    correctAnswer: "b",
    explanation: "Strong necessity -> must."
  },

  // Topic: Prepositions & Places
  {
    id: 25,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Prepositions",
    text: "The helicopter flew ______ the ship.",
    options: [ { id: "a", text: "under" }, { id: "b", text: "over" }, { id: "c", text: "in" }, { id: "d", text: "between" } ],
    correctAnswer: "b",
    explanation: "Above -> over."
  },
  {
    id: 26,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Prepositions",
    text: "To go to the cafeteria, walk ______ this corridor.",
    options: [ { id: "a", text: "up" }, { id: "b", text: "down" }, { id: "c", text: "through" }, { id: "d", text: "on" } ],
    correctAnswer: "b",
    explanation: "Walk down the corridor."
  },
  {
    id: 27,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Prepositions",
    text: "The submarine went ______ the water.",
    options: [ { id: "a", text: "over" }, { id: "b", text: "under" }, { id: "c", text: "across" }, { id: "d", text: "on" } ],
    correctAnswer: "b",
    explanation: "Submarines go under water."
  },
  {
    id: 28,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Prepositions",
    text: "The cadets are running ______ the hill.",
    options: [ { id: "a", text: "up" }, { id: "b", text: "in" }, { id: "c", text: "between" }, { id: "d", text: "at" } ],
    correctAnswer: "a",
    explanation: "Running up the hill."
  },
  {
    id: 29,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Prepositions",
    text: "My cabin is ______ the engine room and the kitchen.",
    options: [ { id: "a", text: "next" }, { id: "b", text: "between" }, { id: "c", text: "under" }, { id: "d", text: "in front" } ],
    correctAnswer: "b",
    explanation: "Between A and B."
  },
  {
    id: 30,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Prepositions",
    text: "Don't walk ______ the propeller area!",
    options: [ { id: "a", text: "towards" }, { id: "b", text: "out" }, { id: "c", text: "from" }, { id: "d", text: "off" } ],
    correctAnswer: "a",
    explanation: "In direction of -> towards."
  },

  // Topic: Comparison
  {
    id: 31,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Comparison",
    text: "The TCG Anadolu is ______ than a frigate.",
    options: [ { id: "a", text: "big" }, { id: "b", text: "bigger" }, { id: "c", text: "biggest" }, { id: "d", text: "more big" } ],
    correctAnswer: "b",
    explanation: "Big -> Bigger."
  },
  {
    id: 32,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Comparison",
    text: "This is the ______ gun on the ship.",
    options: [ { id: "a", text: "heavy" }, { id: "b", text: "heavier" }, { id: "c", text: "heaviest" }, { id: "d", text: "most heavy" } ],
    correctAnswer: "c",
    explanation: "Superlative -> Heaviest."
  },
  {
    id: 33,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Comparison",
    text: "An admiral is ______ important than a sergeant.",
    options: [ { id: "a", text: "more" }, { id: "b", text: "most" }, { id: "c", text: "as" }, { id: "d", text: "much" } ],
    correctAnswer: "a",
    explanation: "More important than."
  },
  {
    id: 34,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Comparison",
    text: "Today the sea is ______ than yesterday.",
    options: [ { id: "a", text: "bad" }, { id: "b", text: "worst" }, { id: "c", text: "worse" }, { id: "d", text: "baddest" } ],
    correctAnswer: "c",
    explanation: "Bad -> Worse."
  },
  {
    id: 35,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Comparison",
    text: "Summer is the ______ season for sailing.",
    options: [ { id: "a", text: "good" }, { id: "b", text: "better" }, { id: "c", text: "best" }, { id: "d", text: "goodest" } ],
    correctAnswer: "c",
    explanation: "Good -> Best."
  },

  // Topic: Vocab & Functional
  {
    id: 36,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "I want to ______ a room for two nights.",
    options: [ { id: "a", text: "buy" }, { id: "b", text: "book" }, { id: "c", text: "stay" }, { id: "d", text: "sleep" } ],
    correctAnswer: "b",
    explanation: "Book a room (reserve)."
  },
  {
    id: 37,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "Can you ______ the radio? It is too loud.",
    options: [ { id: "a", text: "turn on" }, { id: "b", text: "turn off" }, { id: "c", text: "open" }, { id: "d", text: "close" } ],
    correctAnswer: "b",
    explanation: "Turn off (reduce volume or stop)."
  },
  {
    id: 38,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "I need to ______ some money from the bank.",
    options: [ { id: "a", text: "give" }, { id: "b", text: "take" }, { id: "c", text: "withdraw" }, { id: "d", text: "put" } ],
    correctAnswer: "c",
    explanation: "Withdraw money."
  },
  {
    id: 39,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Functional",
    text: "______ I help you, sir?",
    options: [ { id: "a", text: "Do" }, { id: "b", text: "Can" }, { id: "c", text: "Am" }, { id: "d", text: "Have" } ],
    correctAnswer: "b",
    explanation: "Can I help you?"
  },
  {
    id: 40,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "Sorry, I ______ the bus. I am late.",
    options: [ { id: "a", text: "lost" }, { id: "b", text: "left" }, { id: "c", text: "missed" }, { id: "d", text: "dropped" } ],
    correctAnswer: "c",
    explanation: "Miss the bus."
  },
  {
    id: 41,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "What is your ______? – I am Turkish.",
    options: [ { id: "a", text: "job" }, { id: "b", text: "rank" }, { id: "c", text: "nationality" }, { id: "d", text: "name" } ],
    correctAnswer: "c",
    explanation: "Nationality (Turkish)."
  },
  {
    id: 42,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "How ______ does this uniform cost?",
    options: [ { id: "a", text: "many" }, { id: "b", text: "much" }, { id: "c", text: "any" }, { id: "d", text: "some" } ],
    correctAnswer: "b",
    explanation: "How much (cost)."
  },
  {
    id: 43,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "There are ______ sailors on the deck.",
    options: [ { id: "a", text: "much" }, { id: "b", text: "a little" }, { id: "c", text: "many" }, { id: "d", text: "any" } ],
    correctAnswer: "c",
    explanation: "Many sailors (countable)."
  },
  {
    id: 44,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "Is there ______ water in the bottle?",
    options: [ { id: "a", text: "any" }, { id: "b", text: "many" }, { id: "c", text: "a few" }, { id: "d", text: "big" } ],
    correctAnswer: "a",
    explanation: "Any water (question)."
  },
  {
    id: 45,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "Please ______ quiet. The commander is speaking.",
    options: [ { id: "a", text: "do" }, { id: "b", text: "be" }, { id: "c", text: "make" }, { id: "d", text: "stay" } ],
    correctAnswer: "b",
    explanation: "Be quiet."
  },
  {
    id: 46,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "I'm afraid I can't ______ to the party. I have duty.",
    options: [ { id: "a", text: "come" }, { id: "b", text: "go" }, { id: "c", text: "visit" }, { id: "d", text: "stay" } ],
    correctAnswer: "a",
    explanation: "Come to the party."
  },
  {
    id: 47,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "______ don't we go to the cinema?",
    options: [ { id: "a", text: "How" }, { id: "b", text: "What" }, { id: "c", text: "Why" }, { id: "d", text: "Where" } ],
    correctAnswer: "c",
    explanation: "Why don't we... (suggestion)."
  },
  {
    id: 48,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "This soup tastes ______. I don't like it.",
    options: [ { id: "a", text: "good" }, { id: "b", text: "delicious" }, { id: "c", text: "awful" }, { id: "d", text: "nice" } ],
    correctAnswer: "c",
    explanation: "Awful (bad taste)."
  },
  {
    id: 49,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "My roommate is very ______. He never cleans his bed.",
    options: [ { id: "a", text: "tidy" }, { id: "b", text: "messy" }, { id: "c", text: "clean" }, { id: "d", text: "organized" } ],
    correctAnswer: "b",
    explanation: "Messy (not tidy)."
  },
  {
    id: 50,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART1",
    instruction: "Vocabulary",
    text: "Don't ______ up! Keep trying.",
    options: [ { id: "a", text: "get" }, { id: "b", text: "stand" }, { id: "c", text: "give" }, { id: "d", text: "look" } ],
    correctAnswer: "c",
    explanation: "Give up."
  },

  // --- PART 2: NAVAL CUSTOMS & MARITIME ENGLISH (Questions 51-100) ---
  {
    id: 51,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "The front part of a ship is called the ______.",
    options: [ { id: "a", text: "Stern" }, { id: "b", text: "Bow" }, { id: "c", text: "Port" }, { id: "d", text: "Bridge" } ],
    correctAnswer: "b",
    explanation: "Front = Bow."
  },
  {
    id: 52,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "The back part of a ship is called the ______.",
    options: [ { id: "a", text: "Stern" }, { id: "b", text: "Bow" }, { id: "c", text: "Deck" }, { id: "d", text: "Mast" } ],
    correctAnswer: "a",
    explanation: "Back = Stern."
  },
  {
    id: 53,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "The left side of a ship is called ______.",
    options: [ { id: "a", text: "Starboard" }, { id: "b", text: "Port" }, { id: "c", text: "Left" }, { id: "d", text: "West" } ],
    correctAnswer: "b",
    explanation: "Left = Port."
  },
  {
    id: 54,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "The right side of a ship is called ______.",
    options: [ { id: "a", text: "Starboard" }, { id: "b", text: "Port" }, { id: "c", text: "Right" }, { id: "d", text: "East" } ],
    correctAnswer: "a",
    explanation: "Right = Starboard."
  },
  {
    id: 55,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "The Captain controls the ship from the ______.",
    options: [ { id: "a", text: "Engine Room" }, { id: "b", text: "Galley" }, { id: "c", text: "Bridge" }, { id: "d", text: "Cabin" } ],
    correctAnswer: "c",
    explanation: "Control center = Bridge."
  },
  {
    id: 56,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "Sailors sleep in a ______.",
    options: [ { id: "a", text: "Kitchen" }, { id: "b", text: "Cabin / Dormitory" }, { id: "c", text: "Deck" }, { id: "d", text: "Store" } ],
    correctAnswer: "b",
    explanation: "Sleeping area = Cabin/Dorm."
  },
  {
    id: 57,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "Food is cooked in the ______.",
    options: [ { id: "a", text: "Galley" }, { id: "b", text: "Bridge" }, { id: "c", text: "Toilet" }, { id: "d", text: "Mast" } ],
    correctAnswer: "a",
    explanation: "Kitchen = Galley."
  },
  {
    id: 58,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "The floor of a ship is called the ______.",
    options: [ { id: "a", text: "Ground" }, { id: "b", text: "Floor" }, { id: "c", text: "Deck" }, { id: "d", text: "Base" } ],
    correctAnswer: "c",
    explanation: "Floor = Deck."
  },
  {
    id: 59,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "The window of a ship is called a ______.",
    options: [ { id: "a", text: "Porthole" }, { id: "b", text: "Glass" }, { id: "c", text: "Door" }, { id: "d", text: "Hatch" } ],
    correctAnswer: "a",
    explanation: "Window = Porthole."
  },
  {
    id: 60,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "We eat our meals in the ______ hall.",
    options: [ { id: "a", text: "Sleep" }, { id: "b", text: "Mess" }, { id: "c", text: "Sport" }, { id: "d", text: "Work" } ],
    correctAnswer: "b",
    explanation: "Eating area = Mess hall."
  },
  {
    id: 61,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ranks",
    text: "Who is the highest-ranking person on a ship?",
    options: [ { id: "a", text: "Petty Officer" }, { id: "b", text: "Captain" }, { id: "c", text: "Ensign" }, { id: "d", text: "Sergeant" } ],
    correctAnswer: "b",
    explanation: "Highest rank = Captain (CO)."
  },
  {
    id: 62,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ranks",
    text: "'Astsubay' in English is closest to:",
    options: [ { id: "a", text: "Officer" }, { id: "b", text: "Petty Officer" }, { id: "c", text: "Admiral" }, { id: "d", text: "Private" } ],
    correctAnswer: "b",
    explanation: "Astsubay = Petty Officer."
  },
  {
    id: 63,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Roles",
    text: "A sailor who works with engines is an ______.",
    options: [ { id: "a", text: "Engineer" }, { id: "b", text: "Gunner" }, { id: "c", text: "Cook" }, { id: "d", text: "Diver" } ],
    correctAnswer: "a",
    explanation: "Engine worker = Engineer."
  },
  {
    id: 64,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Roles",
    text: "______ is a student at a military school.",
    options: [ { id: "a", text: "Captain" }, { id: "b", text: "Cadet" }, { id: "c", text: "Veteran" }, { id: "d", text: "Pilot" } ],
    correctAnswer: "b",
    explanation: "Student = Cadet."
  },
  {
    id: 65,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Vocab",
    text: "'Deniz Kuvvetleri' means ______.",
    options: [ { id: "a", text: "Army" }, { id: "b", text: "Air Force" }, { id: "c", text: "Navy" }, { id: "d", text: "Police" } ],
    correctAnswer: "c",
    explanation: "Sea forces = Navy."
  },
  {
    id: 66,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Customs",
    text: "When you see a superior officer, you must ______.",
    options: [ { id: "a", text: "Run away" }, { id: "b", text: "Salute" }, { id: "c", text: "Sit down" }, { id: "d", text: "Sleep" } ],
    correctAnswer: "b",
    explanation: "Respect gesture = Salute."
  },
  {
    id: 67,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Customs",
    text: "To clean the deck with water and brushes is called ______.",
    options: [ { id: "a", text: "Painting" }, { id: "b", text: "Scrubbing" }, { id: "c", text: "Sleeping" }, { id: "d", text: "Eating" } ],
    correctAnswer: "b",
    explanation: "Cleaning hard = Scrubbing."
  },
  {
    id: 68,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Customs",
    text: "'Aye Aye, Sir' means:",
    options: [ { id: "a", text: "No" }, { id: "b", text: "I understand and I will obey" }, { id: "c", text: "I don't know" }, { id: "d", text: "Hello" } ],
    correctAnswer: "b",
    explanation: "Confirmation = Aye Aye."
  },
  {
    id: 69,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Customs",
    text: "When you enter the Captain's cabin, you must ______ first.",
    options: [ { id: "a", text: "Shout" }, { id: "b", text: "Knock" }, { id: "c", text: "Kick" }, { id: "d", text: "Jump" } ],
    correctAnswer: "b",
    explanation: "Polite entry = Knock."
  },
  {
    id: 70,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "The flag of a ship is called the ______.",
    options: [ { id: "a", text: "Ensign / Flag" }, { id: "b", text: "Carpet" }, { id: "c", text: "Blanket" }, { id: "d", text: "Sail" } ],
    correctAnswer: "a",
    explanation: "Flag = Ensign."
  },
  {
    id: 71,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Phrases",
    text: "'All hands on deck!' means:",
    options: [ { id: "a", text: "Put your hands up" }, { id: "b", text: "Everyone must go to the deck immediately" }, { id: "c", text: "Go to sleep" }, { id: "d", text: "Wash your hands" } ],
    correctAnswer: "b",
    explanation: "Emergency gathering = All hands on deck."
  },
  {
    id: 72,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Vocab",
    text: "A 'drill' (tatbikat) is for ______.",
    options: [ { id: "a", text: "Fun" }, { id: "b", text: "Training and practice" }, { id: "c", text: "Eating" }, { id: "d", text: "Sleeping" } ],
    correctAnswer: "b",
    explanation: "Drill = Training."
  },
  {
    id: 73,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Vocab",
    text: "When the ship arrives at a port, we ______ the ship.",
    options: [ { id: "a", text: "Drive" }, { id: "b", text: "Fly" }, { id: "c", text: "Dock / Moor" }, { id: "d", text: "Sink" } ],
    correctAnswer: "c",
    explanation: "Parking a ship = Dock/Moor."
  },
  {
    id: 74,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Phrases",
    text: "If a man falls into the water, we shout: '______ overboard!'",
    options: [ { id: "a", text: "Ship" }, { id: "b", text: "Man" }, { id: "c", text: "Fish" }, { id: "d", text: "Captain" } ],
    correctAnswer: "b",
    explanation: "Man overboard!"
  },
  {
    id: 75,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Radio",
    text: "'Roger that' in radio communication means:",
    options: [ { id: "a", text: "I don't understand" }, { id: "b", text: "Message received and understood" }, { id: "c", text: "Who are you?" }, { id: "d", text: "Please repeat" } ],
    correctAnswer: "b",
    explanation: "Roger that = Received."
  },
  {
    id: 76,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Uniform",
    text: "You must polish your ______ every morning.",
    options: [ { id: "a", text: "Hat" }, { id: "b", text: "Boots" }, { id: "c", text: "Bed" }, { id: "d", text: "Gun" } ],
    correctAnswer: "b",
    explanation: "Polish boots."
  },
  {
    id: 77,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Uniform",
    text: "Your uniform must be clean and ______.",
    options: [ { id: "a", text: "Dirty" }, { id: "b", text: "Ironed" }, { id: "c", text: "Wet" }, { id: "d", text: "Torn" } ],
    correctAnswer: "b",
    explanation: "Clean and Ironed (ütülenmiş)."
  },
  {
    id: 78,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Duty",
    text: "'Nöbet' in English is:",
    options: [ { id: "a", text: "Duty / Watch" }, { id: "b", text: "Sleep" }, { id: "c", text: "Game" }, { id: "d", text: "Holiday" } ],
    correctAnswer: "a",
    explanation: "Nöbet = Watch/Duty."
  },
  {
    id: 79,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Duty",
    text: "A sailor on duty at night is a ______.",
    options: [ { id: "a", text: "Watchman / Sentry" }, { id: "b", text: "Sleeper" }, { id: "c", text: "Cook" }, { id: "d", text: "Driver" } ],
    correctAnswer: "a",
    explanation: "Night guard = Watchman/Sentry."
  },
  {
    id: 80,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Duty",
    text: "'İçtima' (gathering for roll call) is called:",
    options: [ { id: "a", text: "Party" }, { id: "b", text: "Muster / Roll Call" }, { id: "c", text: "Dinner" }, { id: "d", text: "Break" } ],
    correctAnswer: "b",
    explanation: "İçtima = Muster."
  },
  {
    id: 81,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Navigation",
    text: "A ______ shows the direction (North, South, East, West).",
    options: [ { id: "a", text: "Radar" }, { id: "b", text: "Compass" }, { id: "c", text: "Radio" }, { id: "d", text: "Engine" } ],
    correctAnswer: "b",
    explanation: "Direction tool = Compass."
  },
  {
    id: 82,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Navigation",
    text: "The speed of a ship is measured in ______.",
    options: [ { id: "a", text: "Km/h" }, { id: "b", text: "Miles" }, { id: "c", text: "Knots" }, { id: "d", text: "Meters" } ],
    correctAnswer: "c",
    explanation: "Sea speed = Knots."
  },
  {
    id: 83,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Navigation",
    text: "'Starboard 10' means:",
    options: [ { id: "a", text: "Turn right 10 degrees" }, { id: "b", text: "Turn left 10 degrees" }, { id: "c", text: "Stop the ship" }, { id: "d", text: "Go back" } ],
    correctAnswer: "a",
    explanation: "Starboard is right."
  },
  {
    id: 84,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "______ is a heavy metal object to stop the ship.",
    options: [ { id: "a", text: "Engine" }, { id: "b", text: "Anchor (Çıpa)" }, { id: "c", text: "Flag" }, { id: "d", text: "Radar" } ],
    correctAnswer: "b",
    explanation: "Stop ship = Anchor."
  },
  {
    id: 85,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Navigation",
    text: "A map for the sea is called a ______.",
    options: [ { id: "a", text: "Map" }, { id: "b", text: "Chart" }, { id: "c", text: "Picture" }, { id: "d", text: "Book" } ],
    correctAnswer: "b",
    explanation: "Sea map = Chart."
  },
  {
    id: 86,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Phrases",
    text: "Officer: 'Permission to enter, Sir?' Captain: '______.'",
    options: [ { id: "a", text: "No" }, { id: "b", text: "Granted / Enter" }, { id: "c", text: "Go away" }, { id: "d", text: "Stop" } ],
    correctAnswer: "b",
    explanation: "Permission allowed = Granted."
  },
  {
    id: 87,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Parts",
    text: "Sailor A: 'Where is the fire extinguisher?' Sailor B: 'It is on the ______ (duvar).'",
    options: [ { id: "a", text: "Floor" }, { id: "b", text: "Bulkhead (Wall)" }, { id: "c", text: "Ceiling" }, { id: "d", text: "Table" } ],
    correctAnswer: "b",
    explanation: "Wall on ship = Bulkhead."
  },
  {
    id: 88,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Emergency",
    text: "'Abandon ship!' means:",
    options: [ { id: "a", text: "Clean the ship" }, { id: "b", text: "Everyone leave the ship immediately" }, { id: "c", text: "Buy a new ship" }, { id: "d", text: "Paint the ship" } ],
    correctAnswer: "b",
    explanation: "Leave ship = Abandon."
  },
  {
    id: 89,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Phrases",
    text: "'Stand by' means:",
    options: [ { id: "a", text: "Sit down" }, { id: "b", text: "Be ready / Wait" }, { id: "c", text: "Go home" }, { id: "d", text: "Run" } ],
    correctAnswer: "b",
    explanation: "Stand by = Be ready."
  },
  {
    id: 90,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Phrases",
    text: "Captain: 'Carry on.' Sailor: This means I should ______.",
    options: [ { id: "a", text: "Stop working" }, { id: "b", text: "Continue what I was doing" }, { id: "c", text: "Sleep" }, { id: "d", text: "Eat" } ],
    correctAnswer: "b",
    explanation: "Carry on = Continue."
  },
  {
    id: 91,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Types",
    text: "A ship that goes underwater is a ______.",
    options: [ { id: "a", text: "Frigate" }, { id: "b", text: "Submarine" }, { id: "c", text: "Tanker" }, { id: "d", text: "Ferry" } ],
    correctAnswer: "b",
    explanation: "Underwater = Submarine."
  },
  {
    id: 92,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Types",
    text: "A ship that carries airplanes is an ______.",
    options: [ { id: "a", text: "Aircraft Carrier" }, { id: "b", text: "Destroyer" }, { id: "c", text: "Boat" }, { id: "d", text: "Yacht" } ],
    correctAnswer: "a",
    explanation: "Carries planes = Aircraft Carrier."
  },
  {
    id: 93,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Types",
    text: "A small boat for saving lives is a ______.",
    options: [ { id: "a", text: "Lifeboat" }, { id: "b", text: "Toy boat" }, { id: "c", text: "Ship" }, { id: "d", text: "Canoe" } ],
    correctAnswer: "a",
    explanation: "Saving lives = Lifeboat."
  },
  {
    id: 94,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Vocab",
    text: "TCG stands for:",
    options: [ { id: "a", text: "The Coast Guard" }, { id: "b", text: "Türkiye Cumhuriyeti Gemisi" }, { id: "c", text: "Turkish Cargo Group" }, { id: "d", text: "The Cool Guys" } ],
    correctAnswer: "b",
    explanation: "TCG = Türkiye Cumhuriyeti Gemisi."
  },
  {
    id: 95,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Ship Types",
    text: "A 'Frigate' (Fırkateyn) is a type of ______.",
    options: [ { id: "a", text: "Car" }, { id: "b", text: "Warship" }, { id: "c", text: "Plane" }, { id: "d", text: "Train" } ],
    correctAnswer: "b",
    explanation: "Frigate = Warship."
  },
  {
    id: 96,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Adjectives",
    text: "The sea is very ______ (dalgalı) today.",
    options: [ { id: "a", text: "Calm" }, { id: "b", text: "Flat" }, { id: "c", text: "Rough" }, { id: "d", text: "Dry" } ],
    correctAnswer: "c",
    explanation: "Dalgalı = Rough."
  },
  {
    id: 97,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Adjectives",
    text: "The deck is ______ (kaygan). Watch your step!",
    options: [ { id: "a", text: "Dry" }, { id: "b", text: "Slippery" }, { id: "c", text: "Hard" }, { id: "d", text: "Soft" } ],
    correctAnswer: "b",
    explanation: "Kaygan = Slippery."
  },
  {
    id: 98,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Adjectives",
    text: "This mission is very ______. (Gizli)",
    options: [ { id: "a", text: "Open" }, { id: "b", text: "Public" }, { id: "c", text: "Secret / Classified" }, { id: "d", text: "Easy" } ],
    correctAnswer: "c",
    explanation: "Gizli = Classified/Secret."
  },
  {
    id: 99,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Adjectives",
    text: "A 'lethal' weapon is ______.",
    options: [ { id: "a", text: "Safe" }, { id: "b", text: "Deadly" }, { id: "c", text: "Toy" }, { id: "d", text: "Broken" } ],
    correctAnswer: "b",
    explanation: "Lethal = Deadly."
  },
  {
    id: 100,
    type: QuestionType.MULTIPLE_CHOICE,
    unit: "PART2",
    instruction: "Adjectives",
    text: "'Maritime' means related to the ______.",
    options: [ { id: "a", text: "Air" }, { id: "b", text: "Sea" }, { id: "c", text: "Land" }, { id: "d", text: "Space" } ],
    correctAnswer: "b",
    explanation: "Maritime = Sea."
  }
];

export const generateQuiz = async (selectedSections: WorkbookSection[]): Promise<Question[]> => {
  // Simulate network delay for effect
  await new Promise(resolve => setTimeout(resolve, 800));

  let pool: Question[] = [];
  
  // Filter questions based on selected sections
  const sectionIds = selectedSections.map(s => s.id);
  
  pool = QUESTION_BANK.filter(q => sectionIds.includes(q.unit));

  // If pool is empty or small, return all (for testing)
  if (pool.length === 0) return QUESTION_BANK;

  // Shuffle questions
  pool = pool.sort(() => Math.random() - 0.5);

  // Return all selected questions (up to 100)
  return pool.slice(0, 100);
};