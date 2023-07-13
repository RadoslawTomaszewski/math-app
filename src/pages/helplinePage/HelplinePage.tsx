import React from "react";
import { MathComponent } from "mathjax-react";

export default function HelplinePage() {
  return (
    <div className="flex justify-center">
      <MathComponent tex={`cm^2`} />
    </div>
  );
}
