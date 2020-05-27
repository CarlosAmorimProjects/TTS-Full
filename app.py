# app.py
from flask import Flask, render_template, request, url_for, send_from_directory
import speak

app = Flask(__name__, static_folder="build/static", template_folder="build")
@app.route("/", methods=["GET","POST"])
def index():
    return render_template("index.html")

@app.route("/text/<text>/<lang>")
def text(text,lang):
    if request.method == "GET":
       mp3_path=speak.get_speak(text,lang)
       return url_for('static', filename=mp3_path.replace('build/static', ''))

if __name__ == "__main__":
    app.run()
