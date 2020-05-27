# utils.py
import uuid
import os
import glob

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

def remove_pontuation (text):
        res_text = text.replace('?','')
        res_text_2 = res_text.replace('!','')
        return res_text_2
        