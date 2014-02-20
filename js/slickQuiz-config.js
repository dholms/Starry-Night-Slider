// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "",
        "results": "<h2>Sources</h2><br><p>http://www.artble.com/artists/vincent_van_gogh/paintings/starry_night/more_information/analysis</p><br><p>http://www.vangoghgallery.com/painting/starry-night.html</p><br><p>http://www.vggallery.com/visitors/002.htm</p>",
        "level1":  "Wow! Great Job!",
        "level2":  "Good Job!",
        "level3":  "You could use some improvement.",
        "level4":  "You might want to look over the slides again.",
        "level5":  "Looks like you need to review!" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Van Gogh learned his art skills at one of best schools in Europe.",
            "a": [
                {"option": "True",      "correct": false},
                {"option": "False",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Van Gogh a self-taught painter.</p>",
            "incorrect": "<p><span>Oops!</span> Van Gogh was actually a self-taught painter.</p>" // no comma here
        },
        { // Question 2
            "q": "Which professions had Van Gogh previously worked before becoming a painter?",
            "a": [
                {"option": "Art Dealer",    "correct": true},
                {"option": "Blacksmith",     "correct": false},
                {"option": "Teacher",      "correct": false},
                {"option": "Clergyman",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Before becoming a painter, Van Gogh worked as an Art Dealer and Clergyman.</p>",
            "incorrect": "<p><span>Oops!</span> Before becoming a painter, Van Gogh worked as an Art Dealer and Clergyman.</p>" // no comma here
        },
        { // Question 3
            "q": "Which of these is not a prominent aspect of \"Stary Night\"",
            "a": [
                {"option": "The Cypress Tree",        "correct": false},
                {"option": "The Sun",           "correct": false},
                {"option": "The Town",  "correct": false},
                {"option": "The Lake",   "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> There is no lake in Van Gogh's Painting.</p>",
            "incorrect": "<p><span>Oops!</span> There is no lake in Van Gogh's Painting.</p>" // no comma here
        },
        { // Question 4
            "q": "What is the Cypress Tree typically associated with?",
            "a": [
                {"option": "Life",    "correct": false},
                {"option": "Mourning",    "correct": true},
                {"option": "Youth",    "correct": false},
                {"option": "Heaven",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's Right!</span> The Cypress Tree is commonly associated with mourning.</p>",
            "incorrect": "<p><span>Oops!</span> The Cypress Tree is commonly associated with mourning.</p>" // no comma here
        },
        { // Question 5
            "q": "Which two things jut up into the sky?",
            "a": [
                {"option": "A Mountain",   "correct": false},
                {"option": "A Church Spire",          "correct": true},
                {"option": "A Cypress Tree",  "correct": true},
                {"option": "A Statue",  "correct": false} // no comma here
            ],
            "correct": "<p><span>That's Right!</span> There are no mountains or statues in the painting, just rolling hills.</p>",
            "incorrect": "<p><span>Oops!</span> There are no mountains or statues in the painting, just rolling hills.</p>" // no comma here
        } // no comma here
    ]
};