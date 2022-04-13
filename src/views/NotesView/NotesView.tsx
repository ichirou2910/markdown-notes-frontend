import Editor from "components/Editor";
import Preview from "components/Preview";
import React from "react";
import { io, Socket } from "socket.io-client";
import _ from 'lodash';

import './NotesView.scss';

export enum NotesLayoutEnum {
  EDITOR_ONLY,
  VERTICAL,
  HORIZONTAL
};

export default function NotesView() {
  const [socket, setSocket] = React.useState<Socket>();
  const [content, setContent] = React.useState("");
  const [layout, setLayout] = React.useState(NotesLayoutEnum.VERTICAL);

  const handleContentSync = (value: string) => {
    console.log(value);
  }

  const handleContentChange = React.useCallback((value: string) => {
    setContent(value)
    _.debounce(handleContentSync, 1000);
  }, []);

  React.useEffect(() => {
    const s = io("http://localhost:3001")
    setSocket(s);

    return () => {
      s.disconnect();
    }
  }, [])

  const notesStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: layout === NotesLayoutEnum.VERTICAL ? "row" : NotesLayoutEnum.HORIZONTAL ? "column" : "row"
  };

  return (
    <>
      <div style={notesStyle}>
        <Editor content={content} onContentChange={handleContentChange} />
        {layout !== NotesLayoutEnum.EDITOR_ONLY && (
          <Preview content={content} />
        )}
      </div>
    </>
  )
}
