/*!
* Copyright 2017 by ChartIQ, Inc.
* All rights reserved.
*/

const React = require('react');

class FinsembleFontIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let classes = this.props.className || '';

        if (this.props.icon) {
            //If you're unfamiliar with this syntax, it's equivalent to
		    //classes+=' ' + this.props.icon;
            classes+= ` ${this.props.icon}`;
        } else {
            throw new Error('No icon prop for FontIcon Component.')
        }

        return (<i {...this.props} className={classes}></i>);
    }
}
module.exports = FinsembleFontIcon;