var cards = [
    {
      "index": 0,
      "name": "The Fool",
      "description": "An image prompt for The Fool card: A person standing at the edge of a cliff, holding a small bag, and looking towards the horizon with a sense of adventure.",
      "interpretation": "The Fool represents new beginnings, spontaneity, and embracing the unknown. It signifies taking risks and trusting in the journey ahead. This card encourages you to follow your instincts and explore uncharted territory.",
      "tags": ["tarot", "The Fool", "new beginnings", "risk-taking"]
    },
    {
      "index": 1,
      "name": "The Magician",
      "description": "An image prompt for The Magician card: A person in a robe standing behind a table adorned with various objects, one hand pointing towards the sky and the other towards the ground.",
      "interpretation": "The Magician symbolizes manifestation, creativity, and personal power. It signifies the ability to harness your skills and resources to bring about change. This card reminds you of your potential and encourages you to take action to achieve your goals.",
      "tags": ["tarot", "The Magician", "manifestation", "personal power"]
    },
    {
      "index": 2,
      "name": "The High Priestess",
      "description": "An image prompt for The High Priestess card: A woman seated on a throne, holding a book in her lap, and a crescent moon at her feet.",
      "interpretation": "The High Priestess represents intuition, mystery, and inner wisdom. It signifies a deep connection to your subconscious mind and the hidden aspects of life. This card encourages you to listen to your inner voice and trust your intuition in making decisions.",
      "tags": ["tarot", "The High Priestess", "intuition", "inner wisdom"]
    },
    {
      "index": 3,
      "name": "The Empress",
      "description": "An image prompt for The Empress card: A pregnant woman seated on a throne surrounded by lush vegetation and a flowing river.",
      "interpretation": "The Empress symbolizes abundance, nurturing, and creativity. It signifies the power of nature and the ability to create and nurture life. This card represents fertility, growth, and the flourishing of ideas and projects.",
      "tags": ["tarot", "The Empress", "abundance", "creativity"]
    },
    {
      "index": 4,
      "name": "The Emperor",
      "description": "An image prompt for The Emperor card: A person seated on a throne, wearing a crown and holding a scepter, representing authority and stability.",
      "interpretation": "The Emperor represents authority, structure, and leadership. It signifies the ability to take control of a situation and establish order. This card reminds you to assert yourself with confidence and take charge of your life.",
      "tags": ["tarot", "The Emperor", "authority", "leadership"]
    },
    {
      "index": 5,
      "name": "The Hierophant",
      "description": "An image prompt for The Hierophant card: A religious figure seated on a throne, holding a staff and a scroll, representing tradition and spirituality.",
      "interpretation": "The Hierophant symbolizes tradition, spirituality, and guidance. It signifies seeking wisdom from established institutions and adhering to conventional beliefs. This card encourages you to seek mentorship and spiritual guidance to find meaning and purpose.",
      "tags": ["tarot", "The Hierophant", "tradition", "spirituality"]
    },
    {
      "index": 6,
      "name": "The Lovers",
      "description": "An image prompt for The Lovers card: Two people standing together, surrounded by an angel above them, representing love, harmony, and choices.",
      "interpretation": "The Lovers represent love, harmony, and partnerships. It signifies choices and the need to align your values with your relationships. This card encourages you to make decisions from a place of love and deep connection.",
      "tags": ["tarot", "The Lovers", "love", "relationships"]
    },
    {
      "index": 7,
      "name": "The Chariot",
      "description": "An image prompt for The Chariot card: A person riding a chariot, pulled by two opposing forces, representing determination and willpower.",
      "interpretation": "The Chariot represents determination, willpower, and overcoming obstacles. It signifies a journey towards success and victory. This card reminds you to stay focused, take control of your life, and overcome challenges through sheer determination.",
      "tags": ["tarot", "The Chariot", "determination", "willpower"]
    },
    {
      "index": 8,
      "name": "Strength",
      "description": "An image prompt for the Strength card: A person holding open the jaws of a lion, representing courage and inner strength.",
      "interpretation": "Strength represents courage, resilience, and inner strength. It signifies the power to overcome challenges through compassion and self-control. This card reminds you to embrace your inner strength and face difficulties with grace.",
      "tags": ["tarot", "Strength", "courage", "inner strength"]
    },
    {
      "index": 9,
      "name": "The Hermit",
      "description": "An image prompt for The Hermit card: A person standing alone on a mountaintop, holding a lantern, symbolizing solitude and introspection.",
      "interpretation": "The Hermit represents solitude, introspection, and inner guidance. It signifies the need for introspection and seeking answers within yourself. This card encourages you to withdraw from the noise of the world and listen to your inner voice.",
      "tags": ["tarot", "The Hermit", "solitude", "introspection"]
    },
    {
      "index": 10,
      "name": "Wheel of Fortune",
      "description": "An image prompt for the Wheel of Fortune card: A large wheel turning with figures representing the cycle of life and destiny.",
      "interpretation": "The Wheel of Fortune symbolizes destiny, cycles, and change. It signifies the ups and downs of life and the ever-changing circumstances. This card reminds you that life is full of both good and bad times and encourages you to embrace the changes that come your way.",
      "tags": ["tarot", "Wheel of Fortune", "destiny", "change"]
    },
    {
      "index": 11,
      "name": "Justice",
      "description": "An image prompt for the Justice card: A person holding a scale, representing balance, fairness, and truth.",
      "interpretation": "Justice represents fairness, balance, and truth. It signifies the need to make decisions based on reason and fairness. This card reminds you to seek truth and consider the consequences of your actions before making judgments.",
      "tags": ["tarot", "Justice", "balance", "fairness"]
    },
    {
      "index": 12,
      "name": "The Hanged Man",
      "description": "An image prompt for The Hanged Man card: A person suspended upside down from a tree, symbolizing surrender and new perspectives.",
      "interpretation": "The Hanged Man represents surrender, letting go, and gaining new perspectives. It signifies a need to pause, reflect, and change your approach. This card encourages you to let go of control and find a fresh outlook on a situation.",
      "tags": ["tarot", "The Hanged Man", "surrender", "new perspectives"]
    },
    {
      "index": 13,
      "name": "Death",
      "description": "An image prompt for the Death card: A skeleton figure, often riding a horse, representing transformation and new beginnings.",
      "interpretation": "Death symbolizes transformation, endings, and new beginnings. It signifies the need to let go of the old to make way for the new. This card reminds you that change is inevitable and necessary for growth and renewal.",
      "tags": ["tarot", "Death", "transformation", "new beginnings"]
    },
    {
      "index": 14,
      "name": "Temperance",
      "description": "An image prompt for the Temperance card: A person pouring water between two cups, symbolizing balance, moderation, and harmony.",
      "interpretation": "Temperance represents balance, harmony, and moderation. It signifies the need to find a middle ground and integrate opposing forces. This card reminds you to seek balance in your life and maintain a harmonious approach to all aspects.",
      "tags": ["tarot", "Temperance", "balance", "harmony"]
    },
    {
      "index": 15,
      "name": "The Devil",
      "description": "An image prompt for The Devil card: A devil figure, often depicted with horns and chains, representing temptation, materialism, and unhealthy attachments.",
      "interpretation": "The Devil symbolizes temptation, materialism, and unhealthy attachments. It signifies the need to break free from limiting beliefs and destructive patterns. This card warns against giving in to negative influences and encourages you to reclaim your power.",
      "tags": ["tarot", "The Devil", "temptation", "attachments"]
    },
    {
      "index": 16,
      "name": "The Tower",
      "description": "An image prompt for The Tower card: A tower struck by lightning, often with people falling from it, representing sudden change and upheaval.",
      "interpretation": "The Tower represents sudden change, upheaval, and revelations. It signifies the breaking down of old structures and beliefs to make way for something new. This card reminds you that sometimes destruction is necessary for growth and transformation.",
      "tags": ["tarot", "The Tower", "sudden change", "upheaval"]
    },
    {
      "index": 17,
      "name": "The Star",
      "description": "An image prompt for The Star card: A person kneeling by a water source, often pouring water and surrounded by stars, symbolizing hope, inspiration, and guidance.",
      "interpretation": "The Star represents hope, inspiration, and guidance. It signifies a sense of renewal and the promise of a bright future. This card reminds you to trust in the universe and believe in your dreams.",
      "tags": ["tarot", "The Star", "hope", "guidance"]
    },
    {
      "index": 18,
      "name": "The Moon",
      "description": "An image prompt for The Moon card: A moon in the night sky with a dog and a wolf howling, symbolizing intuition, the subconscious mind, and illusions.",
      "interpretation": "The Moon represents intuition, the subconscious mind, and illusions. It signifies the need to trust your instincts and navigate the unknown. This card warns against being deceived by illusions and encourages you to explore your deepest desires and fears.",
      "tags": ["tarot", "The Moon", "intuition", "illusions"]
    },
    {
      "index": 19,
      "name": "The Sun",
      "description": "An image prompt for The Sun card: A radiant sun with a smiling face, often depicted above joyful figures, representing success, happiness, and vitality.",
      "interpretation": "The Sun represents success, happiness, and vitality. It signifies a period of joy, abundance, and optimism. This card reminds you to embrace the light within you and enjoy the blessings in your life.",
      "tags": ["tarot", "The Sun", "success", "happiness"]
    },
    {
      "index": 20,
      "name": "Judgment",
      "description": "An image prompt for the Judgment card: Angelic figures with trumpets, often emerging from graves or clouds, representing rebirth, awakening, and self-reflection.",
      "interpretation": "Judgment represents rebirth, awakening, and self-reflection. It signifies a call to evaluate your past actions and make amends. This card encourages you to release judgment and embrace forgiveness to move forward with clarity and renewal.",
      "tags": ["tarot", "Judgment", "rebirth", "self-reflection"]
    },
    {
      "index": 21,
      "name": "The World",
      "description": "An image prompt for The World card: A figure surrounded by a laurel wreath, often holding two wands, representing completion, fulfillment, and wholeness.",
      "interpretation": "The World represents completion, fulfillment, and wholeness. It signifies a sense of accomplishment and reaching a state of harmony. This card reminds you that you have come full circle and encourages you to celebrate your achievements.",
      "tags": ["tarot", "The World", "completion", "fulfillment"]
    },
    {
      "index": 22,
      "name": "Ace of Wands",
      "description": "An image prompt for the Ace of Wands card: A hand holding a wand emerging from clouds, representing inspiration, new opportunities, and potential.",
      "interpretation": "The Ace of Wands represents inspiration, new opportunities, and potential. It signifies the beginning of a creative or passionate endeavor. This card encourages you to seize the opportunities that come your way and channel your energy into fruitful ventures.",
      "tags": ["tarot", "Ace of Wands", "inspiration", "new opportunities"]
    },
    {
      "index": 23,
      "name": "Two of Wands",
      "description": "An image prompt for the Two of Wands card: A person holding a globe or a map, often looking out into the distance, representing planning, vision, and personal power.",
      "interpretation": "The Two of Wands represents planning, vision, and personal power. It signifies the need to make decisions and take action based on a long-term vision. This card reminds you to trust in your abilities and take charge of your own destiny.",
      "tags": ["tarot", "Two of Wands", "planning", "vision"]
    },
    {
      "index": 24,
      "name": "Three of Wands",
      "description": "An image prompt for the Three of Wands card: A person standing on a hill, looking out into the distance, often with ships or boats on the water, representing exploration, enterprise, and expansion.",
      "interpretation": "The Three of Wands represents exploration, enterprise, and expansion. It signifies the need to venture outside your comfort zone and embrace new opportunities. This card encourages you to have confidence in your abilities and explore uncharted territories.",
      "tags": ["tarot", "Three of Wands", "exploration", "expansion"]
    },
    {
      "index": 25,
      "name": "Four of Wands",
      "description": "An image prompt for the Four of Wands card: A celebratory scene with four wands or poles forming a canopy, often with people dancing or rejoicing, representing joy, harmony, and stability.",
      "interpretation": "The Four of Wands represents joy, harmony, and stability. It signifies a time of celebration and the fulfillment of goals. This card reminds you to appreciate the harmony and abundance in your life and celebrate your achievements.",
      "tags": ["tarot", "Four of Wands", "joy", "harmony"]
    },
    {
      "index": 26,
      "name": "Five of Wands",
      "description": "An image prompt for the Five of Wands card: A group of people engaged in a playful or competitive conflict, each holding a wand, representing competition, conflict, and challenges.",
      "interpretation": "The Five of Wands represents competition, conflict, and challenges. It signifies the need to overcome obstacles and find solutions in a situation of conflict. This card reminds you to embrace healthy competition and collaborate to find a way forward.",
      "tags": ["tarot", "Five of Wands", "competition", "conflict"]
    },
    {
      "index": 27,
      "name": "Six of Wands",
      "description": "An image prompt for the Six of Wands card: A person riding a horse or a chariot, often surrounded by people cheering, representing victory, recognition, and public acclaim.",
      "interpretation": "The Six of Wands represents victory, recognition, and public acclaim. It signifies a time of achievement and success. This card reminds you to take pride in your accomplishments and embrace the recognition you receive.",
      "tags": ["tarot", "Six of Wands", "victory", "recognition"]
    },
    {
      "index": 28,
      "name": "Seven of Wands",
      "description": "An image prompt for the Seven of Wands card: A person standing on higher ground, defending their position with a wand, often with others below challenging them, representing perseverance, defensiveness, and resilience.",
      "interpretation": "The Seven of Wands represents perseverance, defensiveness, and resilience. It signifies the need to stand your ground and protect your position. This card reminds you to have confidence in your abilities and face challenges with determination.",
      "tags": ["tarot", "Seven of Wands", "perseverance", "resilience"]
    },
    {
      "index": 29,
      "name": "Eight of Wands",
      "description": "An image prompt for the Eight of Wands card: Eight wands or arrows flying through the air, often against a clear sky, representing swift action, progress, and movement.",
      "interpretation": "The Eight of Wands represents swift action, progress, and movement. It signifies a period of rapid change and forward momentum. This card encourages you to seize the opportunities that come your way and take decisive action.",
      "tags": ["tarot", "Eight of Wands", "swift action", "progress"]
    },
    {
      "index": 30,
      "name": "Nine of Wands",
      "description": "An image prompt for the Nine of Wands card: A person standing with a wand, often bandaged or injured, representing resilience, courage, and persistence.",
      "interpretation": "The Nine of Wands represents resilience, courage, and persistence. It signifies the need to stay strong and resilient despite challenges. This card reminds you to keep pushing forward and trust in your abilities to overcome obstacles.",
      "tags": ["tarot", "Nine of Wands", "resilience", "courage"]
    },
    {
      "index": 31,
      "name": "Ten of Wands",
      "description": "An image prompt for the Ten of Wands card: A person carrying a heavy burden of ten wands, often depicted in a stooped or overwhelmed posture, representing responsibility, burdens, and hard work.",
      "interpretation": "The Ten of Wands represents responsibility, burdens, and hard work. It signifies a time of carrying heavy loads and feeling overwhelmed. This card reminds you to assess your responsibilities and seek support if needed to lighten your load.",
      "tags": ["tarot", "Ten of Wands", "responsibility", "burdens"]
    },
    {
      "index": 32,
      "name": "Page of Wands",
      "description": "An image prompt for the Page of Wands card: A youthful figure holding a wand, often with a curious or adventurous expression, representing enthusiasm, exploration, and new beginnings.",
      "interpretation": "The Page of Wands represents enthusiasm, exploration, and new beginnings. It signifies the arrival of exciting opportunities and the need to embrace a spirit of curiosity. This card encourages you to approach new ventures with a sense of adventure.",
      "tags": ["tarot", "Page of Wands", "enthusiasm", "exploration"]
    },
    {
      "index": 33,
      "name": "Knight of Wands",
      "description": "An image prompt for the Knight of Wands card: A knight figure on a horse, often with a wand, in a dynamic or charging pose, representing action, passion, and adventure.",
      "interpretation": "The Knight of Wands represents action, passion, and adventure. It signifies a period of dynamic energy and the pursuit of your goals with determination. This card encourages you to embrace your passions and take bold steps towards your dreams.",
      "tags": ["tarot", "Knight of Wands", "action", "passion"]
    },
    {
      "index": 34,
      "name": "Queen of Wands",
      "description": "An image prompt for the Queen of Wands card: A queen figure seated on a throne, often holding a wand, with a confident and charismatic presence, representing creativity, leadership, and confidence.",
      "interpretation": "The Queen of Wands represents creativity, leadership, and confidence. It signifies a time of self-assurance and the ability to inspire others. This card reminds you to trust your instincts and embrace your personal power.",
      "tags": ["tarot", "Queen of Wands", "creativity", "leadership"]
    },
    {
      "index": 35,
      "name": "King of Wands",
      "description": "An image prompt for the King of Wands card: A king figure seated on a throne, often holding a wand, with a commanding and authoritative presence, representing vision, strength, and charisma.",
      "interpretation": "The King of Wands represents vision, strength, and charisma. It signifies a time of confident leadership and the ability to bring your visions to life. This card reminds you to trust in your abilities and use your personal power wisely.",
      "tags": ["tarot", "King of Wands", "vision", "strength"]
    },
    {
      "index": 36,
      "name": "Ace of Cups",
      "description": "An image prompt for the Ace of Cups card: A hand holding a cup overflowing with water, often emerging from clouds, representing love, emotional abundance, and new beginnings.",
      "interpretation": "The Ace of Cups represents love, emotional abundance, and new beginnings. It signifies the start of a deep emotional connection or the awakening of love within you. This card encourages you to open your heart and embrace the love and compassion that surrounds you.",
      "tags": ["tarot", "Ace of Cups", "love", "emotional abundance"]
    },
    {
      "index": 37,
      "name": "Two of Cups",
      "description": "An image prompt for the Two of Cups card: Two figures standing or sitting together, often exchanging cups or holding hands, representing partnership, connection, and harmony.",
      "interpretation": "The Two of Cups represents partnership, connection, and harmony. It signifies the coming together of two souls in a deep and meaningful relationship. This card reminds you to embrace love, foster emotional connections, and nurture your relationships.",
      "tags": ["tarot", "Two of Cups", "partnership", "connection"]
    },
    {
      "index": 38,
      "name": "Three of Cups",
      "description": "An image prompt for the Three of Cups card: Three figures celebrating together, often raising their cups in joy, representing friendship, joy, and community.",
      "interpretation": "The Three of Cups represents friendship, joy, and community. It signifies a time of celebration and the nurturing of social connections. This card reminds you to appreciate the support and love of your friends and find joy in shared experiences.",
      "tags": ["tarot", "Three of Cups", "friendship", "joy"]
    },
    {
      "index": 39,
      "name": "Four of Cups",
      "description": "An image prompt for the Four of Cups card: A person seated or standing with crossed arms, often looking contemplative or disinterested, representing introspection, contemplation, and apathy.",
      "interpretation": "The Four of Cups represents introspection, contemplation, and apathy. It signifies a time of introspection and reevaluation of your emotional state. This card encourages you to examine your feelings and find new perspectives to overcome apathy or dissatisfaction.",
      "tags": ["tarot", "Four of Cups", "introspection", "apathy"]
    },
    {
      "index": 40,
      "name": "Five of Cups",
      "description": "An image prompt for the Five of Cups card: A person looking down at spilled or overturned cups, often with a sense of grief or regret, representing loss, disappointment, and emotional pain.",
      "interpretation": "The Five of Cups represents loss, disappointment, and emotional pain. It signifies a time of grief or regret over past experiences. This card reminds you to acknowledge your emotions, learn from your losses, and find the strength to move forward.",
      "tags": ["tarot", "Five of Cups", "loss", "disappointment"]
    },
    {
      "index": 41,
      "name": "Six of Cups",
      "description": "An image prompt for the Six of Cups card: Two figures, often a younger and an older person, exchanging or offering cups, representing nostalgia, innocence, and childhood memories.",
      "interpretation": "The Six of Cups represents nostalgia, innocence, and childhood memories. It signifies a time of revisiting the past or finding joy in simple pleasures. This card encourages you to connect with your inner child and find happiness in nostalgic memories.",
      "tags": ["tarot", "Six of Cups", "nostalgia", "innocence"]
    },
    {
      "index": 42,
      "name": "Seven of Cups",
      "description": "An image prompt for the Seven of Cups card: A person surrounded by seven cups, each containing a different symbol or fantasy, representing choices, illusions, and desires.",
      "interpretation": "The Seven of Cups represents choices, illusions, and desires. It signifies a time of decision-making and the need to discern between fantasy and reality. This card reminds you to prioritize your goals and make choices that align with your true desires.",
      "tags": ["tarot", "Seven of Cups", "choices", "illusions"]
    },
    {
      "index": 43,
      "name": "Eight of Cups",
      "description": "An image prompt for the Eight of Cups card: A person walking away from a stack of cups, often depicted in a desolate or moonlit landscape, representing introspection, seeking, and moving on.",
      "interpretation": "The Eight of Cups represents introspection, seeking, and moving on. It signifies a time of soul-searching and the need to let go of what no longer serves you. This card encourages you to embark on a spiritual journey and find fulfillment in new experiences.",
      "tags": ["tarot", "Eight of Cups", "introspection", "seeking"]
    },
    {
      "index": 44,
      "name": "Nine of Cups",
      "description": "An image prompt for the Nine of Cups card: A person seated with their arms crossed, often surrounded by nine cups in a state of contentment or satisfaction, representing fulfillment, emotional well-being, and wishes granted.",
      "interpretation": "The Nine of Cups represents fulfillment, emotional well-being, and wishes granted. It signifies a time of contentment and satisfaction with your current situation. This card reminds you to count your blessings and appreciate the abundance in your life.",
      "tags": ["tarot", "Nine of Cups", "fulfillment", "emotional well-being"]
    },
    {
      "index": 45,
      "name": "Ten of Cups",
      "description": "An image prompt for the Ten of Cups card: A joyful scene with a rainbow arching over a family or a couple, often in a harmonious and loving embrace, representing harmony, love, and emotional fulfillment.",
      "interpretation": "The Ten of Cups represents harmony, love, and emotional fulfillment. It signifies a time of deep emotional connection and domestic bliss. This card reminds you to nurture your relationships and create a harmonious and loving environment.",
      "tags": ["tarot", "Ten of Cups", "harmony", "love"]
    },
    {
      "index": 46,
      "name": "Page of Cups",
      "description": "An image prompt for the Page of Cups card: A youthful figure holding a cup, often with a dreamy or imaginative expression, representing creativity, intuition, and emotional exploration.",
      "interpretation": "The Page of Cups represents creativity, intuition, and emotional exploration. It signifies the emergence of artistic talents or the development of your intuition. This card encourages you to embrace your imagination and explore your emotions with curiosity.",
      "tags": ["tarot", "Page of Cups", "creativity", "intuition"]
    },
    {
      "index": 47,
      "name": "Knight of Cups",
      "description": "An image prompt for the Knight of Cups card: A knight figure on a horse, often with a cup, in a romantic or poetic pose, representing romance, passion, and idealism.",
      "interpretation": "The Knight of Cups represents romance, passion, and idealism. It signifies a time of emotional intensity and the pursuit of your dreams. This card encourages you to embrace your passions and express your emotions openly and authentically.",
      "tags": ["tarot", "Knight of Cups", "romance", "passion"]
    },
    {
      "index": 48,
      "name": "Queen of Cups",
      "description": "An image prompt for the Queen of Cups card: A queen figure seated on a throne, often holding a cup, with a serene and compassionate presence, representing empathy, intuition, and emotional maturity.",
      "interpretation": "The Queen of Cups represents empathy, intuition, and emotional maturity. It signifies a time of heightened emotional intelligence and the ability to connect deeply with others. This card reminds you to trust your intuition and lead with compassion in your relationships.",
      "tags": ["tarot", "Queen of Cups", "empathy", "intuition"]
    },
    {
      "index": 49,
      "name": "King of Cups",
      "description": "An image prompt for the King of Cups card: A king figure seated on a throne, often holding a cup, with a calm and compassionate presence, representing emotional balance, wisdom, and control.",
      "interpretation": "The King of Cups represents emotional balance, wisdom, and control. It signifies a time of emotional maturity and the ability to navigate complex feelings with grace. This card reminds you to maintain a sense of calm and emotional stability in your life.",
      "tags": ["tarot", "King of Cups", "emotional balance", "wisdom"]
    },
    {
      "index": 50,
      "name": "Ace of Swords",
      "description": "An image prompt for the Ace of Swords card: A hand emerging from clouds, holding a sword aloft, often with a crown or wreath, representing clarity, truth, and mental breakthroughs.",
      "interpretation": "The Ace of Swords represents clarity, truth, and mental breakthroughs. It signifies a new beginning in your intellectual or communication endeavors. This card encourages you to seek truth, speak your mind, and embrace mental clarity.",
      "tags": ["tarot", "Ace of Swords", "clarity", "truth"]
    },
    {
      "index": 51,
      "name": "Two of Swords",
      "description": "An image prompt for the Two of Swords card: A person seated, blindfolded, and holding two crossed swords, representing indecision, stalemate, and the need for balance.",
      "interpretation": "The Two of Swords represents indecision, stalemate, and the need for balance. It signifies a period of weighing options and finding a middle ground. This card reminds you to trust your intuition and seek a harmonious resolution.",
      "tags": ["tarot", "Two of Swords", "indecision", "balance"]
    },
    {
      "index": 52,
      "name": "Three of Swords",
      "description": "An image prompt for the Three of Swords card: Three swords piercing a heart, often depicted against a stormy background, representing heartbreak, sorrow, and emotional pain.",
      "interpretation": "The Three of Swords represents heartbreak, sorrow, and emotional pain. It signifies a time of grief and the need to process difficult emotions. This card reminds you to take time to heal and seek support from loved ones.",
      "tags": ["tarot", "Three of Swords", "heartbreak", "sorrow"]
    },
    {
      "index": 53,
      "name": "Four of Swords",
      "description": "An image prompt for the Four of Swords card: A person lying down or reclining, often in a state of rest or meditation, representing solitude, rest, and recuperation.",
      "interpretation": "The Four of Swords represents solitude, rest, and recuperation. It signifies a time of pause and self-reflection. This card encourages you to take a break, recharge your energy, and find inner peace.",
      "tags": ["tarot", "Four of Swords", "solitude", "rest"]
    },
    {
      "index": 54,
      "name": "Five of Swords",
      "description": "An image prompt for the Five of Swords card: A person holding three swords while two others lie on the ground, often depicting a scene of conflict or defeat, representing conflict, loss, and betrayal.",
      "interpretation": "The Five of Swords represents conflict, loss, and betrayal. It signifies a challenging situation where winning may come at a cost. This card reminds you to choose your battles wisely and consider the long-term consequences of your actions.",
      "tags": ["tarot", "Five of Swords", "conflict", "betrayal"]
    },
    {
      "index": 55,
      "name": "Six of Swords",
      "description": "An image prompt for the Six of Swords card: A person and sometimes others in a boat, often depicted traveling away from a turbulent or challenging situation, representing transition, healing, and moving on.",
      "interpretation": "The Six of Swords represents transition, healing, and moving on. It signifies a journey away from a difficult situation toward calmer waters. This card encourages you to embrace change, seek healing, and trust in the process of transformation.",
      "tags": ["tarot", "Six of Swords", "transition", "healing"]
    },
    {
      "index": 56,
      "name": "Seven of Swords",
      "description": "An image prompt for the Seven of Swords card: A person sneaking away or carrying stolen swords, often looking back with a sense of secrecy or guilt, representing deception, trickery, and stealth.",
      "interpretation": "The Seven of Swords represents deception, trickery, and stealth. It signifies a situation where someone may not have your best interests at heart. This card reminds you to be cautious and trust your instincts to protect yourself from potential harm.",
      "tags": ["tarot", "Seven of Swords", "deception", "trickery"]
    },
    {
      "index": 57,
      "name": "Eight of Swords",
      "description": "An image prompt for the Eight of Swords card: A person blindfolded and bound, surrounded by swords, often in a confined or restrictive space, representing self-imposed limitations, restriction, and powerlessness.",
      "interpretation": "The Eight of Swords represents self-imposed limitations, restriction, and powerlessness. It signifies a situation where you may feel trapped or unable to see the possibilities before you. This card reminds you to examine your beliefs and break free from self-imposed limitations.",
      "tags": ["tarot", "Eight of Swords", "limitations", "restriction"]
    },
    {
      "index": 58,
      "name": "Nine of Swords",
      "description": "An image prompt for the Nine of Swords card: A person sitting up in bed, often with a distressed expression, while nine swords hang on the wall behind them, representing anxiety, worry, and sleepless nights.",
      "interpretation": "The Nine of Swords represents anxiety, worry, and sleepless nights. It signifies a time of mental distress and overthinking. This card reminds you to seek support, practice self-care, and find healthy ways to cope with your worries.",
      "tags": ["tarot", "Nine of Swords", "anxiety", "worry"]
    },
    {
      "index": 59,
      "name": "Ten of Swords",
      "description": "An image prompt for the Ten of Swords card: A person lying face down with ten swords piercing their back, often depicted against a dramatic or desolate landscape, representing pain, betrayal, and the end of a difficult situation.",
      "interpretation": "The Ten of Swords represents pain, betrayal, and the end of a difficult situation. It signifies a time of deep wounds and the need to let go of past pain. This card reminds you that even in the darkest moments, there is always the potential for new beginnings.",
      "tags": ["tarot", "Ten of Swords", "pain", "betrayal"]
    },
    {
      "index": 60,
      "name": "Page of Swords",
      "description": "An image prompt for the Page of Swords card: A youthful figure holding a sword, often with an alert or inquisitive expression, representing curiosity, intellectual growth, and new ideas.",
      "interpretation": "The Page of Swords represents curiosity, intellectual growth, and new ideas. It signifies the emergence of fresh perspectives and the pursuit of knowledge. This card encourages you to be open-minded, embrace learning opportunities, and express your thoughts with confidence.",
      "tags": ["tarot", "Page of Swords", "curiosity", "intellectual growth"]
    },
    {
      "index": 61,
      "name": "Knight of Swords",
      "description": "An image prompt for the Knight of Swords card: A knight figure on a charging horse, often holding a sword aloft, in a dynamic or determined pose, representing ambition, action, and assertiveness.",
      "interpretation": "The Knight of Swords represents ambition, action, and assertiveness. It signifies a time of focused drive and the pursuit of your goals. This card encourages you to be bold, take decisive action, and overcome any obstacles that stand in your way.",
      "tags": ["tarot", "Knight of Swords", "ambition", "action"]
    },
    {
      "index": 62,
      "name": "Queen of Swords",
      "description": "An image prompt for the Queen of Swords card: A queen figure seated on a throne, often holding a sword, with a sharp and discerning presence, representing independence, truth, and mental clarity.",
      "interpretation": "The Queen of Swords represents independence, truth, and mental clarity. It signifies a time of sharp intellect and the ability to cut through illusions. This card reminds you to trust your intuition, speak your truth, and make decisions based on clear judgment.",
      "tags": ["tarot", "Queen of Swords", "independence", "truth"]
    },
    {
      "index": 63,
      "name": "King of Swords",
      "description": "An image prompt for the King of Swords card: A king figure seated on a throne, often holding a sword, with a commanding and authoritative presence, representing intellectual power, logic, and truth.",
      "interpretation": "The King of Swords represents intellectual power, logic, and truth. It signifies a time of mental clarity and the ability to make wise decisions. This card reminds you to approach situations with objectivity, use your intellect to solve problems, and uphold truth and justice.",
      "tags": ["tarot", "King of Swords", "intellectual power", "logic"]
    },
    {
      "index": 64,
      "name": "Ace of Pentacles",
      "description": "An image prompt for the Ace of Pentacles card: A hand emerging from clouds, holding a pentacle or coin, often with lush greenery or blossoming flowers, representing new beginnings, material abundance, and prosperity.",
      "interpretation": "The Ace of Pentacles represents new beginnings, material abundance, and prosperity. It signifies a fresh start in your financial or material pursuits. This card encourages you to seize opportunities, manifest your goals, and cultivate a prosperous mindset.",
      "tags": ["tarot", "Ace of Pentacles", "new beginnings", "abundance"]
    },
    {
      "index": 65,
      "name": "Two of Pentacles",
      "description": "An image prompt for the Two of Pentacles card: A person juggling or balancing two pentacles or coins, often depicted against a backdrop of turbulent waves, representing balance, adaptability, and priorities.",
      "interpretation": "The Two of Pentacles represents balance, adaptability, and priorities. It signifies the need to find harmony amidst life's demands and make practical choices. This card reminds you to stay flexible, manage your resources wisely, and prioritize your responsibilities.",
      "tags": ["tarot", "Two of Pentacles", "balance", "adaptability"]
    },
    {
      "index": 66,
      "name": "Three of Pentacles",
      "description": "An image prompt for the Three of Pentacles card: Three individuals working together on a project or building, often with tools or blueprints, representing collaboration, craftsmanship, and teamwork.",
      "interpretation": "The Three of Pentacles represents collaboration, craftsmanship, and teamwork. It signifies a time of collective effort and the need to work harmoniously towards a shared goal. This card encourages you to recognize the value of cooperation and utilize the skills of others to achieve success.",
      "tags": ["tarot", "Three of Pentacles", "collaboration", "teamwork"]
    },
    {
      "index": 67,
      "name": "Four of Pentacles",
      "description": "An image prompt for the Four of Pentacles card: A person holding onto four pentacles or coins tightly, often depicted in a defensive or possessive posture, representing stability, possession, and financial security.",
      "interpretation": "The Four of Pentacles represents stability, possession, and financial security. It signifies a time of holding onto your resources and creating a sense of stability in your life. This card reminds you to find a balance between saving and sharing your wealth and avoid becoming overly possessive or controlling.",
      "tags": ["tarot", "Four of Pentacles", "stability", "financial security"]
    },
    {
      "index": 68,
      "name": "Five of Pentacles",
      "description": "An image prompt for the Five of Pentacles card: Two individuals walking in the snow or cold, often passing by a church or shelter, representing poverty, isolation, and hardship.",
      "interpretation": "The Five of Pentacles represents poverty, isolation, and hardship. It signifies a challenging period where you may feel excluded or facing financial difficulties. This card reminds you to seek support, reach out for help when needed, and remember that tough times are temporary.",
      "tags": ["tarot", "Five of Pentacles", "poverty", "hardship"]
    },
    {
      "index": 69,
      "name": "Six of Pentacles",
      "description": "An image prompt for the Six of Pentacles card: A person giving or receiving coins or pentacles, often with a balance or scale, representing generosity, charity, and the flow of resources.",
      "interpretation": "The Six of Pentacles represents generosity, charity, and the flow of resources. It signifies a time of giving and receiving with an open heart. This card encourages you to share your abundance, be receptive to assistance, and recognize the interconnectedness of giving and receiving.",
      "tags": ["tarot", "Six of Pentacles", "generosity", "charity"]
    },
    {
      "index": 70,
      "name": "Seven of Pentacles",
      "description": "An image prompt for the Seven of Pentacles card: A person leaning on a gardening tool or standing amidst growing plants, often depicted in contemplation, representing patience, investment, and long-term rewards.",
      "interpretation": "The Seven of Pentacles represents patience, investment, and long-term rewards. It signifies a time of progress and waiting for your efforts to bear fruit. This card reminds you to trust in the process, be patient with your endeavors, and have faith in the potential for abundant outcomes.",
      "tags": ["tarot", "Seven of Pentacles", "patience", "investment"]
    },
    {
      "index": 71,
      "name": "Eight of Pentacles",
      "description": "An image prompt for the Eight of Pentacles card: A person diligently working on a craft or task, often with pentacles or coins in the background, representing dedication, skill development, and craftsmanship.",
      "interpretation": "The Eight of Pentacles represents dedication, skill development, and craftsmanship. It signifies a time of focused effort and honing your abilities. This card encourages you to commit yourself to mastery, invest in your skills, and take pride in the quality of your work.",
      "tags": ["tarot", "Eight of Pentacles", "dedication", "craftsmanship"]
    },
    {
      "index": 72,
      "name": "Nine of Pentacles",
      "description": "An image prompt for the Nine of Pentacles card: A person in a garden or vineyard, often surrounded by wealth or pentacles, representing abundance, luxury, and self-sufficiency.",
      "interpretation": "The Nine of Pentacles represents abundance, luxury, and self-sufficiency. It signifies a time of enjoying the fruits of your labor and embracing your independence. This card reminds you to celebrate your achievements, cultivate a sense of self-worth, and savor the pleasures of life.",
      "tags": ["tarot", "Nine of Pentacles", "abundance", "luxury"]
    },
    {
      "index": 73,
      "name": "Ten of Pentacles",
      "description": "An image prompt for the Ten of Pentacles card: A family or multi-generational group gathered together, often surrounded by wealth or pentacles, representing legacy, prosperity, and family bonds.",
      "interpretation": "The Ten of Pentacles represents legacy, prosperity, and family bonds. It signifies a time of generational wealth and the fulfillment of material and emotional abundance. This card encourages you to cherish your family connections, build a solid foundation for future generations, and find security in your heritage.",
      "tags": ["tarot", "Ten of Pentacles", "legacy", "prosperity"]
    },
    {
      "index": 74,
      "name": "Page of Pentacles",
      "description": "An image prompt for the Page of Pentacles card: A youthful figure holding a pentacle or coin, often surrounded by nature or engaged in a practical task, representing ambition, diligence, and the pursuit of earthly goals.",
      "interpretation": "The Page of Pentacles represents ambition, diligence, and the pursuit of earthly goals. It signifies a time of practicality and the willingness to put in the effort to achieve your aspirations. This card encourages you to embrace new opportunities, cultivate a strong work ethic, and be open to learning and growth.",
      "tags": ["tarot", "Page of Pentacles", "ambition", "diligence"]
    },
    {
      "index": 75,
      "name": "Knight of Pentacles",
      "description": "An image prompt for the Knight of Pentacles card: A knight figure on a stationary horse, often holding a pentacle or coin, with a steadfast or cautious expression, representing responsibility, reliability, and methodical progress.",
      "interpretation": "The Knight of Pentacles represents responsibility, reliability, and methodical progress. It signifies a time of diligent work and a steady approach to achieving your goals. This card reminds you to stay committed, take calculated risks, and embrace a patient and thorough mindset to achieve lasting success.",
      "tags": ["tarot", "Knight of Pentacles", "responsibility", "reliability"]
    },
    {
      "index": 76,
      "name": "Queen of Pentacles",
      "description": "An image prompt for the Queen of Pentacles card: A queen figure seated on a throne, often surrounded by nature or holding a pentacle or coin, representing abundance, nurturing, and practicality.",
      "interpretation": "The Queen of Pentacles represents abundance, nurturing, and practicality. It signifies a time of stability and nurturing others with a generous spirit. This card reminds you to create a harmonious home environment, cultivate self-care practices, and use your resources wisely to support those around you.",
      "tags": ["tarot", "Queen of Pentacles", "abundance", "nurturing"]
    },
    {
      "index": 77,
      "name": "King of Pentacles",
      "description": "An image prompt for the King of Pentacles card: A king figure seated on a throne, often surrounded by wealth or holding a pentacle or coin, representing abundance, financial mastery, and prosperity.",
      "interpretation": "The King of Pentacles represents abundance, financial mastery, and prosperity. It signifies a time of material success and the wise management of resources. This card reminds you to embrace your power as a provider and take a responsible and practical approach to your financial affairs.",
      "tags": ["tarot", "King of Pentacles", "abundance", "financial mastery"]
    }
  ];
