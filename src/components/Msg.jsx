import React from "react";

class Msg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.msg == "") {
      return <p style={{ color: "red" }}>Please input some value</p>;
    } else if (this.props.msg >= 100) {
      return <p style={{ color: "green" }}>Water can be boil</p>;
    } else {
      return <p style={{ color: "red" }}>Water cannot boil</p>;
    }
    return;
  }
}

export default Msg;
