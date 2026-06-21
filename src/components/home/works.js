import React from "react";
import { Button, Modal } from "antd";

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <>
        <iframe
          width="100%"
          height="540"
          padding="20px"
          src="https://rss.app/embed/v1/carousel/JaZymya66YZQnBXU"
          frameborder="0"
        ></iframe>

        <div id="works" className="block worksBlock">
          <div className="container-fluid">
            <div className="titleHolder">
              <h2>See Us in Action</h2>
              <p>
                During the Sudanese Revolution, the SDV Group organized and
                supported numerous demonstrations, campaigns, and events to
                declare our unwavering belief in democracy and the right of the
                Sudanese people to attain it. We actively worked to make the
                dream of change a reality.
              </p>
            </div>
            <div className="contentHolder">
              <Button size="large" onClick={this.showModal}>
                <i className="fas fa-play"></i>
              </Button>
            </div>

            <div className="container">
              <Modal
                visible={this.state.visible}
                onCancel={this.handleCancel}
                footer={null}
                destroyOnClose={true}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center" // Centers content vertically
                }}
              >
                <div className="titleHolder">
                  <h2>See Us in Action</h2>
                  <p>
                    {" "}
                    We actively worked to make the dream of change a reality,
                    here are some Examples in motion
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    overflowX: "100%", // Allows horizontal scrolling if content overflows
                    gap: "10px", // Adds some space between the video elements
                    maxWidth: "1300px", // Ensures the inner container doesn't exceed the Modal width
                    padding: "1px", // Adds some space around the video elements
                    height: "330px",
                    marginTop: "10px",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <video width="200px" height="200px" controls>
                      <source
                        src={`${process.env.PUBLIC_URL}/images/videos/VID_20190216_163229.mp4`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <h5>Köln Dum Demonstration</h5>
                    <p>Your browser does not support the video tag</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <video width="200px" height="200px" controls>
                      <source
                        src={`${process.env.PUBLIC_URL}/images/videos/VID_20190216_160941.mp4`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <h5> Köln Dum Demonstration 2</h5>
                    <p>Your browser does not support the video tag</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <video width="200px" height="200px" controls>
                      <source
                        src={`${process.env.PUBLIC_URL}/images/videos/VID_20190414_192653.mp4`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <h5>Take a Plink</h5>
                    <p>Your browser does not support the video tag.</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <video width="200px" height="200px" controls>
                      <source
                        src={`${process.env.PUBLIC_URL}/images/videos/VID_20190414_192657.mp4`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <h5>Take a Plink</h5>
                    <p>Your browser does not support the video tag.</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <video width="200px" height="200px" controls>
                      <source
                        src={`${process.env.PUBLIC_URL}/images/videos/VID_20190427_201018.mp4`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <h5>Take a Plink</h5>
                    <p>Your browser does not support the video tag.</p>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <video width="200px" height="200px" controls>
                      <source
                        src={`${process.env.PUBLIC_URL}/images/videos/VID_20200111_173012.mp4`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <h5>Take a Plink</h5>
                    <p>Your browser does not support the video tag.</p>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AppWorks;
