import React from 'react';
import { withToolTip, WithToolTip } from '../HOC/withToolTip';

interface Chat extends WithToolTip{
  comments: string[] | [];
}

export const Chat:React.FC<Chat> = withToolTip(({ comments }) => (
  <div className="chat">
    <h1>Chat Header Here</h1>
    <div className="chat__content">
    {comments && comments.map((comment:string) => <p className="comments"><strong>{comment}</strong></p>)}
    </div>
  </div>
));
