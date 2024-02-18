export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};


export const joinUniqueWithEquals = (...expressions: string[]) => {
  const uniqueExpressions = Array.from(new Set(expressions));
  return uniqueExpressions.join("=");
};

