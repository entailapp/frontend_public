import React from 'react';
import {Collapse} from '@material-ui/core';

export interface ExpandableViewProps {
  header: (expanded: boolean) => React.ReactNode;
  body: (expanded: boolean) => React.ReactNode;
  className?: string;
}

/**
 * An expandable view is an element which can be contracted or expanded by clicking
 * on its header.
 * It is similar to an Accordion, but provides much more flexibility in terms of
 * theming, allowing any element to act as the header or body.
 *
 * Example usage:
 * ```jsx
 * return (
 *   <ExpandableView
 *     header={open => <h1>Header!</h1>}
 *     body={open => <p>Body!</p>}
 *   />
 * );
 * ```
 */
export function ExpandableView(props: ExpandableViewProps) {
  const {header, body, ...rest} = props;

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div {...rest}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full text-left"
      >
        {header(isOpen)}
      </button>
      <Collapse in={isOpen}>{body(isOpen)}</Collapse>
    </div>
  );
}

export default ExpandableView;
