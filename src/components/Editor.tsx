import ReactCodeMirror from '@uiw/react-codemirror'
import { markdown } from '@codemirror/lang-markdown'

export interface EditorProps {
  content: string,
  onContentChange: (value: string) => void
}

export default function Editor(props: EditorProps) {
  const { content, onContentChange } = props;

  return (
    <>
      <div className='editor-container'>
        <ReactCodeMirror
          value={content}
          theme="dark"
          extensions={[markdown()]}
          onChange={onContentChange}
        />
      </div>
    </>
  )
}
