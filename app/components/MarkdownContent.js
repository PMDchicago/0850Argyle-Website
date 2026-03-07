export default function MarkdownContent({ html }) {
  return (
    <div className="markdown" dangerouslySetInnerHTML={{ __html: html || '' }} />
  );
}
