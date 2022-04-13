export interface PreviewProps {
  content: string
}

export default function Preview(props: PreviewProps) {
  const { content } = props;

  return (
    <>
      <div className='preview-container'>
        {content}
      </div>
    </>
  )
}
