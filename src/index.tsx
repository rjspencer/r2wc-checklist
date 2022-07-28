import React, { Requireable } from 'react';
import * as ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import reactToWebComponent from 'react-to-webcomponent';
import Checklist from './components/checklist/Checklist';
import { isChecklistItemType } from './types/checklistItem';

class WebComponentWrapper extends React.Component<{ items: string }, {}> {
  static propTypes: {
    items: Requireable<string>;
  };

  render() {
    let items;
    try {
      items = this.props.items ? JSON.parse(this.props.items) : undefined;
      if (!Array.isArray(items)) {
        items = undefined;
      } else if (items.length === 0) {
        items = undefined;
      } else if (items?.some(item => !isChecklistItemType(item))) {
        items = undefined;
      }
    } catch {
      items = undefined
    }

    return <Checklist items={items} />;
  }
}

WebComponentWrapper.propTypes = {
  items: PropTypes.string,
}

const wcChecklist = reactToWebComponent(WebComponentWrapper, React, ReactDOM, { dashStyleAttributes: true });

customElements.define("r2w-checklist", wcChecklist);