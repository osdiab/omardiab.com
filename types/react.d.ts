declare namespace React {
  // @ts-ignore
  interface IntrinsicElements extends preact.JSX.IntrinsicElements {}
  // @ts-ignore
  interface IntrinsicAttributes extends preact.JSX.IntrinsicAttributes {}
  // @ts-ignore
  interface Element extends preact.JSX.Element {}
  // @ts-ignore
  interface ElementClass extends preact.JSX.ElementClass {}
  interface ElementAttributesProperty
    extends preact.JSX.ElementAttributesProperty {}
  interface ElementChildrenAttribute
    extends preact.JSX.ElementChildrenAttribute {}
  interface CSSProperties extends preact.JSX.CSSProperties {}
  type SVGAttributes = preact.JSX.SVGAttributes;
  interface PathAttributes extends preact.JSX.PathAttributes {}
  interface TargetedEvent extends preact.JSX.TargetedEvent {}
  type DOMAttributes<Target extends EventTarget> =
    preact.JSX.DOMAttributes<Target>;
  type HTMLAttributes<RefType extends EventTarget = EventTarget> =
    preact.JSX.HTMLAttributes<RefType>;
}
