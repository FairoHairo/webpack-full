/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from 'react';
import { withToolTip, WithToolTip } from '../HOC/withToolTip';

interface Chat extends WithToolTip {
  comments: string[] | [];
}

export const Chat: React.FC<any> = withToolTip(({ comments }: any) => (
  <div className="chat">
    <h1>Chat Header Here</h1>
    <div className="chat__content">
      {comments &&
        comments.map((comment: string, idx: number) => (
          <p key={idx} className="comments">
            Paragrapg:
            <strong>{comment}</strong>
          </p>
        ))}
    </div>
  </div>
));
