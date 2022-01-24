import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = (props) => {
  useEffect(() => {
    // props.fetchUser(props.userID);
  }, []);
  return <div>{props.user && props.user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userID) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
