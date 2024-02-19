//Styles functions
export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};


//String Functions
export const joinUniqueWithEquals = (...expressions: string[]) => {
  const uniqueExpressions = Array.from(new Set(expressions));
  return uniqueExpressions.join("=");
};

export const joinUniqueWithApproximations = (...expressions: string[]) => {
  const uniqueExpressions = Array.from(new Set(expressions));
  return uniqueExpressions.join("≈");
};


