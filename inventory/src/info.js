import React from "react";

class Info extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        const showTitle = true;
    return (
      <div>
        <h1> {this.props.title} </h1>
        <p>Manage your stuff.</p>
      </div>
    );
    }
}

Info.defaultProps = {
    title: "No title",
}
export default Info;