import React , { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import api from "../../services/api";
import ReactAudioPlayer from 'react-audio-player';
import Button from 'react-bootstrap/Button';
import { useAlert } from 'react-alert'
import "./styles.css";

import laptop from "../../images/backgroundgif.gif";


export default function Text () {

    const [text, setText] = useState("");
    const [lang, setLang] = useState("");
    const [audio, setAudio] = useState("");

    const alert = useAlert()


  async function handleNewTranslation(e) {
      e.preventDefault();

      if (text === '')
       {
        alert.show('Please, enter some text to translate!');
        return null;
       }

      const url = "/text/"+text+"/"+lang;

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
          <option value='af'>Afrikaans</option>
          <option value='sq'>Albanian</option>
          <option value='ar'>Arabic</option>
          <option value='hy'>Armenian</option>
          <option value='bn'>Bengali</option> 
          <option value='ca'>Catalan</option>
          <option value='hr'>Croatian</option>
          <option value='cs'>Czech</option>
          <option value='da'>Danish</option>
          <option value='nl'>Dutch</option>
          <option value='en'>English</option>
          <option value='en-au'>English (Australia)</option>
          <option value='en-uk'>English (United Kingdom)</option>
          <option value='en-us'>English (United States)</option>
          <option value='eo'>Esperanto</option>
          <option value='fi'>Finnish</option>
          <option value='fr'>French</option>
          <option value='de'>German</option>
          <option value='el'>Greek</option>
          <option value='hi'>Hindi</option>
          <option value='hu'>Hungarian</option>
          <option value='is'>Icelandic</option>
          <option value='id'>Indonesian</option>
          <option value='it'>Italian</option>
          <option value='ja'>Japanese</option>
          <option value='km'>Khmer (Cambodian)</option>
          <option value='ko'>Korean</option>
          <option value='la'>Latin</option>
          <option value='lv'>Latvian</option>
          <option value='mk'>Macedonian</option>
          <option value='no'>Norwegian</option>
          <option value='pl'>Polish</option>
          <option value='pt'>Portuguese</option>
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