# speak.py
from gtts import gTTS
import os
import utils

def get_speak (text, lang):
    filename = utils.random_tts_filename()
    utils.delete_all_tts_files()
    text_clean = utils.remove_pontuation(text)
    tts = gTTS(text=text_clean, lang=lang, slow=False)
    tts.save(filename)
    return filename

