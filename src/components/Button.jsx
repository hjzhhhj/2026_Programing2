export default function Button(props) {
  // children <= props.children, rest <= pros.type, props.className
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
}
