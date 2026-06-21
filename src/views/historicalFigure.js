import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import TheCarousel from '../components/home/historicCarousel'
const AppNews1 = () => {
  const content = [
    {
      id: 1,
      title: "The Imam. Mohamed Ahmed Al-Mahdi",
      imgSrc: `${process.env.PUBLIC_URL}/images/new/6-Mehda.jpg`,
      text: `The Sudanese Mahdi, was a prominent religious and political leader in Sudan during the late 19th century. Born in 1844 in the Dongola region of northern Sudan, he emerged as a key figure who challenged both the Egyptian-Ottoman rule and British colonial influence in Sudan.
            Imam Mohamed Ahmed Al-Mahdi remains a significant historical figure in Sudan. His leadership and the Mahdist revolution represent a critical chapter in Sudanese history, symbolizing the struggle for independence and self-determination. His vision and the movement he inspired continue to influence Sudanese political and religious life to this day. This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.`
    },
    {
      id: 2,
      title: "Prince. Othman Digna",
      imgSrc: `${process.env.PUBLIC_URL}/images/new/othman-Digna.jpg`,
      text: `This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size. This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.`
    },
    {
      id: 3,
      title: "Prince. Othman Digna",
      imgSrc: `${process.env.PUBLIC_URL}/images/new/othman-Digna.jpg`,
      text: `This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size. This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.`
    },
    {
      id: 4,
      title: "Prince. Othman Digna",
      imgSrc: `${process.env.PUBLIC_URL}/images/new/othman-Digna.jpg`,
      text: `This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size. This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.`
    },
    {
      id: 5,
      title: "Prince. Othman Digna",
      imgSrc: `${process.env.PUBLIC_URL}/images/new/othman-Digna.jpg`,
      text: `This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size. This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.`
    },
    {
      id: 6,
      title: "Prince. Othman Digna",
      imgSrc: `${process.env.PUBLIC_URL}/images/new/othman-Digna.jpg`,
      text: `This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size. This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.`
    }
    // Add more content objects as needed
  ];

  const [expanded, setExpanded] = useState(content.map(() => false));

  const toggleReadMore = (index) => {
    setExpanded(expanded.map((state, i) => (i === index ? !state : state)));
  };

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    Height: "100%",
    marginBottom: "20px",
    maxWidth: "100%",
    columnCount: "2",
    flexDirection: "column"
  };

  const rowStyle = {
    marginBottom: "20px"
  };

  const colStyle = {
    padding: "10px"
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px",
    position: "relative"
  };

  const divStyle = {
    padding: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "100%"
  };

  const h5Style = {
    marginBottom: "10px"
  };

  const pStyle = {
    marginBottom: "10px"
  };

  const contentHolderStyle = {
    marginLeft: "460px",
    height: "100%",
    padding: "60px",
    PaddingBottom: "60px",
    paddingLeft: "100px",
    paddingRight: "100px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgb(164, 210, 221)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "15vh", // Ensures the content is vertically centered even with less
    maxWidth: "50%",
    objectFit: "cover"
  };

  const getPreviewText = (text, isExpanded) => {
    if (isExpanded) {
      return text;
    }
    const previewLines = text.split(". ").slice(0, 2).join(". ") + ".";
    return previewLines;
  };

  return (
    <>
      <div className="container" style={containerStyle}>
        <div className="contentHolder" style={contentHolderStyle}>
          <h3>Historical View</h3>
          <p>
            Historical View and Exhibition showcasing the rich <br />
            and sequenced history of Sudan, <br /> including historical figures
            and key milestones highlighted Sudanese culture and traditions,
            bringing a sense of home and heritage to the attendees.
          </p>
        </div>

        {content.map((item, index) => (
          <div className="row" style={rowStyle} key={item.id}>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={item.imgSrc}
                  className="flex-shrink-0 mt-5 me-3 pt-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-5" style={h5Style}>
                    {item.title}
                  </h5>
                  <p style={pStyle}>
                    {getPreviewText(item.text, expanded[index])}
                  </p>
                  <a
                    href="#"
                    className="stretched-link"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expanded[index] ? "Read less" : "Read more"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppNews1;
