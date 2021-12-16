import React from 'react';
import { Chat } from './Components/Chat';
import { Dialog } from './Components/Dialog';
import './index.scss';

const App: React.FC = () => (
  <div
    className="center"
  >
    <span>Hello World</span>
    <Chat tooltip="Tooltip Chat" comments={['hello', 'bue']} />
    <Dialog />
  </div>
);

export { App };
