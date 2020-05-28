# utils.py
import uuid
import os
import glob
import re

def random_tts_filename ():
    filetext = str(uuid.uuid4())
    if not os.path.exists("build/static/audiofiles/"):
        os.makedirs("build/static/audiofiles/")
    filename = "build/static/audiofiles/" + filetext + ".mp3"
    return filename

def delete_all_tts_files (limit=50):
       files = glob.glob(os.path.join("build/static/audiofiles/", '*.mp3'))
       if len(files)>limit:
           for file in files:  
             os.remove(file)

