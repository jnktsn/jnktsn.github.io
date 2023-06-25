var rooms = [
    {
        "index": 3,
        "transition_text": {
            "13": "You squeeze between the icy slabs and through the ruined wall. The frigid wind is now only a dull whisper. A humid warmth envolops you. After only a few moments you find yourself having to unbutton your heavy coat.",
            "8": "You pass through the remnants of a long-rotted away wooden doorframe."
        },
        "doors": "There is an icy hole in the west wall. There is an open door in the south wall.",
        "north": 0,
        "east": 0,
        "south": 8,
        "west": 13,
        "key": false,
        "description": "Entering this room feels like stepping into a different world. The icy walls have been replaced with a thriving jungle, teeming with life. Tall trees reach for the ceiling, their branches intertwining to create a natural canopy. The air is thick with humidity, and the ground is carpeted with moss and ferns. The ambient sounds of chirping insects and distant waterfalls fill the room, transporting you far from the cold mountain range.",

    },

    {
        "index": 8,
        "transition_text": {
            "3": "You pass through the remnants of a long-rotted away wooden doorframe.",
            "5": "You pass through the remnants of a long-rotted away wooden doorframe."
        },
        "doors": "There are open doorways in the north and south walls.",
        "north": 3,
        "east": 0,
        "south": 5,
        "west": 0,
        "key": false,
        "description": "Stepping into this room, you are immediately surrounded by a vibrant, tropical jungle. The temperature rises to an uncomfortable level, and the air is thick with moisture. The walls are covered with tangled vines and exotic flowers, casting intriguing shadows. Strange animal noises can be heard in the distance, adding to the eerie ambiance.",

    },

    {
        "index": 5,
        "transition_text": {
            "8": "You pass through the remnants of a long-rotted away wooden doorframe.",
            "2": "You pass through the remnants of a long-rotted away wooden doorframe.",
            "7": "You pass through the remnants of a long-rotted away wooden doorframe."
        },
        "doors": "There are open doorways in the north, east, and south walls.",
        "north": 8,
        "east": 7,
        "south": 2,
        "west": 0,
        "key": false,
        "description": "A sense of enchantment fills the air as you step into this room. The frigid exterior has been replaced by a tropical microcosm, complete with swaying palm trees and exotic plants. Colorful birds flit through the foliage, their songs echoing in the chamber. The warmth and humidity are almost overwhelming, but the beauty of the transformed citadel captivates your senses.",

    },

    {
        "index": 2,
        "transition_text": {
            "5": "You pass through the remnants of a long-rotted away wooden doorframe.",
            "4": "You follow a long, twisting hallway until it opens into a room.",
            "9": "A short, straight hallway takes you to the next room."
        },
        "doors": "There is an open doorway in the north wall. Hallways lead off to the east and west.",
        "north": 5,
        "east": 4,
        "south": 0,
        "west": 9,
        "key": false,
        "description": "As you enter, the chilling air gradually transforms into a warm, humid atmosphere. The walls and ceiling are covered in thick vegetation, and rays of sunlight pierce through small gaps, casting a dappled glow. You feel a sense of serenity in this lush room, but an underlying unease lingers, reminding you of the unnatural nature of the citadel.",

    },

    {
        "index": 9,
        "transition_text": {
            "2": "A short, straight hallway takes you to the next room."
        },
        "doors": "A hallway leads off to the east.",
        "north": 0,
        "east": 2,
        "south": 0,
        "west": 0,
        "key": true,
        "description": "Stepping into this room is like stumbling upon a hidden oasis concealed within the heart of the citadel. The frigid stone walls have been replaced by a vibrant, living mural of towering trees and exotic plants. The air is thick with the scent of tropical blooms, their intoxicating fragrances mingling in a harmonious symphony. A gentle waterfall cascades down one side of the room, its crystal-clear waters forming a tranquil pool amidst the lush foliage.",

    },

    {
        "index": 4,
        "transition_text": {
            "7": "You pass through the remnants of a long-rotted away wooden doorframe.",
            "2": "You follow a long, twisting hallway until it opens into a room.",
            "5": "You pass through the remnants of a long-rotted away wooden doorframe."
        },
        "doors": "There is an open doorway to the north. A hallway opens to the east",
        "north": 7,
        "east": 2,
        "south": 0,
        "west": 0,
        "key": false,
        "description": "The room opens up to a stunning sight—a lush, overgrown paradise amidst the cold stronghold. The icy walls have given way to towering trees and dense foliage, creating a captivating green canopy above. Sunlight filters through the leaves, creating dancing patterns on the ground. The air is filled with the scent of flowers and the gentle rustling of leaves.",

    },

    {
        "index": 7,
        "transition_text": {
            "11": "A short, straight hallway takes you to the next room.",
            "4": "You pass through the remnants of a long-rotted away wooden doorframe.",
            "5": "You pass through the remnants of a long-rotted away wooden doorframe."
        },
        "doors": "There are open doorways to the east, south, and west.",
        "north": 0,
        "east": 11,
        "south": 4,
        "west": 5,
        "key": false,
        "description": "This room is a stark contrast to the frigid exterior. It has been transformed into a lush, tropical garden. Vibrant flowers bloom in every corner, and delicate orchids hang from the ceiling. The air is heavy with sweet floral scents, and a gentle breeze rustles the leaves. As you take in the beauty, a sense of tranquility washes over you, momentarily forgetting the strange circumstances that led to this transformation.",

    },

    {
        "index": 11,
        "transition_text": {
            "7": "A short, straight hallway takes you to the next room.",
            "1": "You pass through the remnants of a long-rotted away wooden doorframe.",
        },
        "doors": "There are open doorways to the north and west.",
        "north": 1,
        "east": 0,
        "south": 0,
        "west": 7,
        "key": false,
        "description": "Stepping into this room is like stumbling upon a hidden oasis concealed within the heart of the citadel. The frigid stone walls have been replaced by a vibrant, living mural of towering trees and exotic plants. The air is thick with the scent of tropical blooms, their intoxicating fragrances mingling in a harmonious symphony. A gentle waterfall cascades down one side of the room, its crystal-clear waters forming a tranquil pool amidst the lush foliage.",

    },

    {
        "index": 1,
        "transition_text": {
            "11": "You pass through the remnants of a long-rotted away wooden doorframe.",
            "12": "You pass through the remnants of a long-rotted away wooden doorframe.",
            "10": "You follow a long, twisting hallway until it opens into a room."
        },
        "doors": "There are open doorways to the north and south. A hallway opens to the east.",
        "north": 12,
        "east": 10,
        "south": 11,
        "west": 0,
        "key": false,
        "description": "The room is bathed in an unusual warmth that sharply contrasts with the frigid mountain range outside. The icy walls have transformed into lush vegetation, creating a small jungle. The air is heavy with moisture, and the sound of distant chirping fills the room. You can hardly believe this tropical oasis exists within the cold citadel.",

    },

    {
        "index": 10,
        "transition_text": {
            "1": "You follow a long, twisting hallway until it opens into a room."
        },
        "doors": "A hallway opens to the north.",
        "north": 1,
        "east": 0,
        "south": 0,
        "west": 0,
        "key": false,
        "description": "The moment you enter this room, you find yourself transported into a verdant sanctuary bursting with life. Thick vines hang from the ceiling, creating an intricate natural tapestry. Sunlight, filtered through the dense canopy above, casts dappled patterns on the lush undergrowth below. The air is alive with the sounds of chirping birds and buzzing insects. Amongst the wild splendor, remnants of forgotten artifacts peek through, a testament to the room's original purpose, now intertwined with nature's reclamation.",

    },

    {
        "index": 12,
        "transition_text": {
            "1": "You pass through the remnants of a long-rotted away wooden doorframe."
        },
        "doors": "There is an open doorway to the south. A heavy iron door is embbeded in the west wall. A large keyhole faintly glows in the center of the door.",
        "north": 0,
        "east": 6,
        "south": 1,
        "west": 0,
        "key": false,
        "description": "You step into a room that emanates an air of mystery and anticipation. The space is engulfed by a dense jungle, its vibrant foliage extending tendrils and tendrils, claiming every inch of the once grand chamber. The walls, once adorned with noble tapestries, are now obscured by a riotous growth of thick vines and hanging moss. Sunlight filters through the canopy, casting ephemeral rays that dance upon the verdant floor. Your attention is drawn to the western wall, where a towering iron door stands as a formidable barrier. Time and the relentless force of nature have not been kind to it. Heavy vines, imbued with a supernatural strength, have twisted and bent the edges of the door, their relentless grip a testament to their insidious power. The metal surface bears the marks of age and wear, but it also hints at something more. It becomes clear that whatever spell or magic item that has unleashed this jungle transformation lies on the other side of the door. The pulsating energy of the enchantment lingers in the air, almost palpable. The faint glow of an intricate keyhole at the center of the door catches your eye, its radiance calling out to be unlocked. A sense of anticipation surges within you, for beyond that locked door lies the heart of the enigma, the source of this extraordinary enchantment that has transformed the citadel into a jungle haven. The question of what secrets and dangers lie behind the impenetrable barrier intensifies your curiosity, beckoning you to find the key and unveil the truth that lies hidden within.",

    },

];