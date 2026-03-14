import { memo } from "react";
import { Link } from "react-router-dom";

type titleProps = {
  title: string;
  href: string;
  sideText: string;
};

function Title({ title, href, sideText }: titleProps) {
  return (
    <div className="mt-28 mb-10 flex flex-col md:flex-row  md:items-center  md:justify-between">
      <h2 className="text-2xl font-bold mb-4 md:mb-0">{title}</h2>
      <Link to={href} className="underline text-sm text-muted-foreground font-semibold hover:text-slate-800">{sideText}</Link>
    </div>
  );
}

export default memo(Title);
