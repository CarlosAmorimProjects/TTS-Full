# speak.py
from gtts import gTTS
import os
import utils

def get_speak (text, lang):
    filename = utils.random_tts_filename()
    utils.delete_all_tts_files()
    tts = gTTS(text=text, lang=lang, slow=False)
    tts.save(filename)
    return filename

