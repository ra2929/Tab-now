from flask import Flask
from flask import render_template
from flask import Response, request, jsonify

app = Flask(__name__)



#id for each guitar
#display guitar data
# quiz = [
    
#
guitar_quiz = [

	{
        "id": 1,
		"image": "https://guitarlessons-com.s3.amazonaws.com/media/blog/BGQS-string-numbers.png",
        "question": "What is the 6 string on the guitar called?" ,
        "choices": [
                     {
                        "a": "High C",
                        "b": "Low E",
                        "c": "Low B",
                        "d": "High G"
                     }
                   ],
        "answer": "Low E"

	},
    {
        "id": 2,
		"image": "https://usermanuals.finalemusic.com/Finale2012Win/Content/image/TutEx9-1_367x210.png",
        "question": "What do you call the 0 note in guitar tablature?" ,
        "choices": [
                     {
                        "a": "Tight note",
                        "b": "Closed note",
                        "c": "Open note",
                        "d": "Full note"
                     }
                   ],
        "answer": "Open note" 
    },
    {
        "id": 3,
		"image": "https://guitargearfinder.com/wp-content/uploads/2019/09/guitar-tab-chords.jpg",
        "question": "What are notes played together called?" ,
        "choices": [
                     {
                        "a": "Bar",
                        "b": "Chord",
                        "c": "Sequence",
                        "d": "Pattern"
                     }
                   ],
        "answer": "Chord" 
    },
    {
        "id": 4,
		"image": "https://guitarlessons-com.s3.amazonaws.com/media/blog/BGQS-string-numbers.png",
        "question": "Whats the name of the bottom thinnest string?" ,
        "choices": [
                     {
                        "a": "High E",
                        "b": "Low B",
                        "c": "Low G",
                        "d": "High C"
                     }
                   ],
        "answer": "High E" 
    },
    {
        "id": 5,
		"image": "https://www.guitarhabits.com/wp-content/uploads/Eminorpenta3octaves.jpg",
        "question": "Is this scale ascending or descending?",
        "choices": [
                     {
                        "a": "Descending",
                        "b": "Ascending",
                        "c": "Both",
                        "d": "Neither"
                     }
                   ],
        "answer": "Descending" 
    },
]

@app.route('/')
def home():
    return render_template('index.html')
#video page and the main content
@app.route('/tab_page')
def tab_page():
    return render_template('tab_page.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html', guitar_quiz=guitar_quiz)

if __name__ == '__main__':
   app.run(debug = True)