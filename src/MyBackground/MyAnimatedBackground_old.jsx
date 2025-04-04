import React from "react";
import Vivus from "vivus";
import { nanoid } from "nanoid";

class MyAnimatedBackground extends React.Component {
  myIsMounted = false

  constructor() {
    super();
    this.id = "id_" + nanoid();
  }

  componentDidMount() {
    if (!this.myIsMounted) {
      this.myIsMounted = true
      this.animation = new Vivus(this.id, { duration: 200, file: this.props.svg, type: 'oneByOne', start: 'autostart' }, (vivus) => this.props.onAnimationEnd? this.props.onAnimationEnd(vivus): {});
    }
  }

  componentDidUpdate(previous) {    
    
    if (this.myIsMounted && previous.svg !== this.props.svg) {
      this.animation.play(-3, () => {
        this.animation.destroy()
        document.getElementById(this.id).innerHTML = ''
        this.animation = new Vivus(this.id, { duration: 200, file: this.props.svg, type: 'oneByOne', start: 'autostart' });
      })
    }
    
    
  }


  render() {
    return (
      <div>
        <style>{getPathCss(this.id)}</style>
        <div id={this.id}></div>
      </div>
    );
  }
}

function getPathCss(id) {
  return `
        #${id} path {
            stroke: var(--mui-palette-secondary-main);
        }
            `;
}

export default MyAnimatedBackground;
