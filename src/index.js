import React from 'react';
import ReactDOM from 'react-dom';

import AuthorInfo from './components/author-info';
import ImageContent from './components/image-content';
import AdditionalBar from './components/additionalBar';

import './index.css';

const App = () => {
  const ANAKIN_IMAGE = 
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

  const RAY_IMAGE = 
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

  const postInfo  = {   authorInfo : {
                        name: "Anakin skywalker",
                        photo: ANAKIN_IMAGE,
                        nickname: "@dart_vader"
                    },
                    content : "WTF? Who is Ray? Why she is Skywalker? Luke...?",
                    image : RAY_IMAGE,
                    date :"26 февр."
                }
    
  return (
    <div className = "post">
      <AuthorInfo authorInfo = {postInfo}/>
      <ImageContent imageInfo = {postInfo}/>
      <AdditionalBar/>
    </div>
    );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


