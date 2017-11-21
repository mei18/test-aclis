import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game challengeSize={6} challengeRange={[2, 9]} initialSeconds={10} />, document.getElementById('root'));
registerServiceWorker();
