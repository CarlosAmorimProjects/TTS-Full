import React , { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import api from "../../services/api";
import ReactAudioPlayer from 'react-audio-player';
import Button from 'react-bootstrap/Button';
import { useAlert } from 'react-alert';
import "./normalize.css";
import "./styles.css";

import laptop from "../../images/backgroundgif.gif";

    let languages = [
        {id: 'af', name:'Afrikaans'},
        {id: 'sq', name:'Albanian'},
        {id: 'ar', name:'Arabic'},
        {id: 'hy', name:'Armenian'}, 
        {id: 'bn', name:'Bengali'},
        {id: 'ca', name:'Catalan'},
        {id: 'hr', name:'Croatian'},
        {id: 'cs', name:'Czech'},
        {id: 'da', name:'Danish'},
        {id: 'nl', name:'Dutch'},
        {id: 'en', name:'English'}, 
        {id: 'en-au', name:'English (Australia)'},
        {id: 'en-uk', name:'English (United Kingdom)'},
        {id: 'en-us', name:'English (United States)'},
        {id: 'eo', name:'Esperanto'},
        {id: 'fi', name:'Finnish'},
        {id: 'fr', name:'French'},
        {id: 'de', name:'German'},
        {id: 'el', name:'Greek'},
        {id: 'hi', name:'Hindi'},
        {id: 'hu', name:'Hungarian'},
        {id: 'is', name:'Icelandic'},
        {id: 'id', name:'Indonesian'},
        {id: 'it', name:'Italian'},
        {id: 'ja', name:'Japanese'},
        {id: 'km', name:'Khmer (Cambodian)'},
        {id: 'ko', name:'Korean'},
        {id: 'la', name:'Latin'},
        {id: 'lv', name:'Latvian'}, 
        {id: 'mk', name:'Macedonian'},
        {id: 'no', name:'Norwegian'},
        {id: 'pl', name:'Polish'},
        {id: 'pt', name:'Portuguese'},
        {id: 'ro', name:'Romanian'},
        {id: 'ru', name:'Russian'},
        {id: 'sr', name:'Serbian'},
        {id: 'si', name:'Sinhala'},
        {id: 'sk', name:'Slovak'},
        {id: 'es', name:'Spanish'},
        {id: 'es-es', name:'Spanish (Spain)' },
        {id: 'es-us', name:'Spanish (United States)'},
        {id: 'sw', name:'Swahili'},
        {id: 'sv', name:'Swedish'},
        {id: 'ta', name:'Tamil'},
        {id: 'th', name:'Thai'},
        {id: 'tr', name:'Turkish'},
        {id: 'uk', name:'Ukrainian'}, 
        {id: 'vi', name:'Vietnamese'},
        {id: 'cy', name:'Welsh'},
      ]
      

export default function Text ()  {

    const [text, setText] = useState("");
    const [lang, setLang] = useState("");
    const [audio, setAudio] = useState("");
    
    let languagesList = languages.length > 0 && languages.map ((item => {
      return (
        <option value={item.id}>{item.name}</option>
      )
    }))

    const alert = useAlert()


  async function handleNewTranslation(e) {
      e.preventDefault();

      if (text === '')
       {
        alert.show('Please, enter some text to translate!');
        return null;
       }

       const url = "/text/"+encodeURIComponent(text)+"/"+lang;

      api.get(url)
      .then((response) => {
        console.log(response.data);
        var data = response.data;
        setAudio (data);
        
      }, (error) => {
        alert(error);
      });
  }


    return (
      <div className="container">
        <div className="title">
          <h1>
            Text to Speech Translator
          </h1>
        </div>

      <form className="form" onSubmit={handleNewTranslation}>
        
      <div className="Textarea">
          <textarea maxlength="396" className="textarea"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
       
        <select className="dropMenu"
          value={lang}
          onChange={e => setLang(e.target.value)}
          >
          {languagesList}
        </select>

        <Button variant="warning" size="sm" type="submit" className="button" >Translate</Button>
        </form>

        <div className="player">
        <ReactAudioPlayer
        src={audio}
        autoPlay
        controls
        />
        </div>
        
        <div className="laptop">
          <img src={laptop} alt="laptop"/>
        </div>

        <div className="link">
        <Link to="/instru">
            <h2>Instructions</h2>
        </Link>
        </div>

      </div>

    );
}