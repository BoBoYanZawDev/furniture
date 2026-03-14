import DOMPurify from "dompurify";

interface richTextProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  content: string;
}

function RichTextRenderer({ content, className }: richTextProps) {
  const clean = DOMPurify.sanitize(content);
  return (
    <div dangerouslySetInnerHTML={{ __html: clean }} className={className} />
  );
}

export default RichTextRenderer;
