import React, { Component } from "react";
import SideBar from "../../Layout/SideBar/SideBar";
import { connect } from "react-redux";
// import fetchFiles from "../../../actions/files/fetchFiles";
import PropTypes from "prop-types";
import FilesList from "../../FilesList/FilesList";

class Home extends Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.fetchFiles();
  }

  render() {
    const files = this.props.files;

    return (
      <React.Fragment>
        <div id="page" className="d-flex flex-row w-100">
          <div className="flex-grow-1 d-flex flex-column pl-4 pr-4">
            <h1>Home</h1>

            <FilesList />
          </div>

          <SideBar right>Right Home Sidebar </SideBar>
        </div>
      </React.Fragment>
    );
  }
}

// Home.propTypes = {
//   files: PropTypes.array.isRequired,
//   fetchFiles: PropTypes.func.isRequired
// };
// function mapStateToProps(state) {
//   return {
//     files: state.files
//   };
// }
// export default connect(
//   mapStateToProps,
//   { fetchFiles }
// )(Home);
export default Home;
