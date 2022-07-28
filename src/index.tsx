import React, { Requireable } from 'react';
import * as ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import reactToWebComponent from 'react-to-webcomponent';
import Checklist from './components/checklist/Checklist';

class WebComponentWrapper extends React.Component<{ items: string }, {}> {
  static propTypes: {
    items: Requireable<string>;
  };

  render() {
    const items = JSON.parse(this.props.items);
    return <Checklist items={items} />;
  }
}

WebComponentWrapper.propTypes = {
  items: PropTypes.string,
}

const wcChecklist = reactToWebComponent(WebComponentWrapper, React, ReactDOM, { dashStyleAttributes: true });

customElements.define("r2w-checklist", wcChecklist);