import { MathComponent } from "mathjax-react";

export default function HelplinePage() {
  return (
    <div className="flex justify-center">
      <MathComponent tex={`(b^2-4ac)/2a`} />
    </div>
  );
}
