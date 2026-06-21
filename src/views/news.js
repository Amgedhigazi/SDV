import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Flex } from "antd";
//import MemberGallery from '../components/home/MembersGallery';
const AppNews = () => {
  const rows = Array.from({ length: 1 });

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    maxHeight: "100%",
    marginBottom: "20px",
    maxWidth: "70%"
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
    borderRadius: "10px"
  };

  const divStyle = {
    padding: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  };

  const h5Style = {
    marginBottom: "10px"
  };

  const pStyle = {
    marginBottom: "10px"
  };

  const contentHolderStyle = {
    padding: "20px",
    backgroundColor: "#a4d2dd",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "20vh" // Ensures the content is vertically centered even with less content
  };

  return (
    <>
      <div className="container" style={containerStyle}>
        <div className="contentHolder" style={contentHolderStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex",
              alignContent: "space-between"
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/Western_Deffufa_-_Kerma (1).jpg`}
              className=" m-3 h-30"
              alt="..."
              style={{ width: "350px", borderRadius: "15px 5px" }}
            />
          </div>
          <h3>Historical View</h3>
          <p className="paragraph">
            <b>
              Historical View and Exhibition showcasing the rich and sequenced
              history of Sudan, including historical figures and key milestones
              highlighted Sudanese culture and traditions, bringing a sense of
              home and heritage to the attendees.
            </b>
          </p>
        </div>
        {rows.map((_, rowIndex) => (
          <div className="row" style={rowStyle} key={rowIndex}>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/6-Mehda.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    The Imam. Mohamed Ahmed Al-Mahdi
                  </h5>
                  <p style={pStyle}>
                    the Sudanese Mahdi, was a prominent religious and political
                    leader in Sudan during the late 19th century. Born in 1844
                    in the Dongola region of northern Sudan, he emerged as a key
                    figure who challenged both the Egyptian-Ottoman rule and
                    British colonial influence in Sudan. Imam Mohamed Ahmed
                    Al-Mahdi remains a significant historical figure in Sudan.
                    His leadership and the Mahdist revolution represent a
                    critical chapter in Sudanese history, symbolizing the
                    struggle for independence and self-determination. His vision
                    and the movement he inspired continue to influence Sudanese
                    political and religious life to this day. This is some
                    placeholder content for the custom component. It is intended
                    to mimic what some real-world content would look like, and
                    we're using it here to give the component a bit of body and
                    size.
                  </p>
                  <a href="#" className="stretched-link">
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/othman-Digna.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    Prince. Othman Digna
                  </h5>
                  <p style={pStyle}>
                    Osman Digna (Arabic: عثمان دقنة) (c. 1840–1926) was a
                    follower of Muhammad Ahmad, the self-proclaimed Mahdi, in
                    Sudan, who became his best known military commander during
                    the Mahdist War. He was claimed to be a descendant from the
                    Abbasid family. As the Mahdi's ablest general, he played an
                    important role in the fate of General Charles George Gordon
                    and the end of Turkish-Egyptian rule in Sudan. In Britain,
                    Osman Digna became a notorious figure, both demonised as a
                    savage and respected as a warrior. Winston Churchill
                    described him as an "astute" and "prudent" man, calling him
                    "the celebrated, and perhaps immortal, Osman Digna.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Osman_Digna"
                    className="stretched-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {rows.map((_, rowIndex) => (
          <div className="row" style={rowStyle} key={rowIndex}>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/Istighlal.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    Sudanese Independent Day
                  </h5>
                  <p style={pStyle}>
                    Sudan's flag raised at independence ceremony by the Prime
                    Minister Isma'il Alazhari and opposition leader Muhammad
                    Ahmad Mahgoub on 1 January 1956 Sudan achieved independence
                    without the rival political parties' having agreed on the
                    form and content of a permanent constitution. Instead, the
                    Constituent Assembly adopted a document known as the
                    Transitional Constitution, which replaced the
                    governor-general as head of state with a five-member Supreme
                    Commission that was elected by a parliament composed of an
                    indirectly elected Senate and a popularly elected House of
                    Representatives. The Transitional Constitution also
                    allocated executive power to the prime minister, who was
                    nominated by the House of Representatives and confirmed in
                    office by the Supreme Commission.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Republic_of_Sudan_(1956%E2%80%931969)"
                    className="stretched-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/Azhari.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    Leader President. Ismail Al-azhari
                  </h5>
                  <p style={pStyle}>
                    Ismail al-Azhari (Arabic: إسماعيل الأزهري, romanized:
                    ʼIsmāʻīl al-Azharī; October 20, 1900 – August 26, 1969) was
                    a Sudanese nationalist and political figure. He served as
                    the first Prime Minister of Sudan between 1954 and 1956, and
                    as Head of State of Sudan from 1965 until he was overthrown
                    by Gaafar Nimeiry in 1969.[1] He was president of the
                    National Unionist Party (now the Democratic Unionist Party)
                    when the unionist parties united under his leadership.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Ismail_al-Azhari"
                    className="stretched-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {rows.map((_, rowIndex) => (
          <div className="row" style={rowStyle} key={rowIndex}>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/omar-bashir.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    President. Omar Bashir
                  </h5>
                  <p style={pStyle}>
                    Omar Hassan Ahmad al-Bashir[a] (born 1 January 1944) is a
                    Sudanese former military officer and politician who served
                    as Sudan's head of state under various titles from 1989
                    until 2019, when he was deposed in a coup d'état.[2] He was
                    subsequently incarcerated, tried and convicted on multiple
                    corruption charges.[3][4] He came to power in 1989 when, as
                    a brigadier general in the Sudanese Army, he led a group of
                    officers in a military coup that ousted the democratically
                    elected government of prime minister Sadiq al-Mahdi after it
                    began negotiations with rebels in the south; he subsequently
                    replaced President Ahmed al-Mirghani as head of state.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Omar_al-Bashir"
                    className="stretched-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/garang.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    Former Vice President Dr. Garang De mabior
                  </h5>
                  <p style={pStyle}>
                    Dr. John Garang De Mabior (June 23, 1945 – July 30, 2005)[1]
                    was a Sudanese politician and revolutionary leader. From
                    1983 to 2005, he led the Sudan People's Liberation
                    Army/Movement (SPLA/M, Now known as South Sudan People's
                    Defense Forces) as a commander in chief during the Second
                    Sudanese Civil War. He briefly served as First Vice
                    President of Sudan for three weeks, from the comprehensive
                    peace agreement of 2005 until his death in a helicopter
                    crash on July 30, 2005.[2] A developmental economist by
                    profession,[3] Garang was one of the major influence on the
                    movement that led to the foundation of South Sudan
                    independence from the rule of the government of Omar Bashir
                    the former president of Sudan (Khartoum).
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/John_Garang"
                    className="stretched-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {rows.map((_, rowIndex) => (
          <div className="row" style={rowStyle} key={rowIndex}>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/lsadiq.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    Former Vice President Dr. El-sadiq Al-Mahdi
                  </h5>
                  <p style={pStyle}>
                    Sadiq al-Mahdi (Arabic: الصادق المهدي, romanized: aṣ-Ṣādiq
                    al-Mahdī; 25 December 1935 – 26 November 2020), also known
                    as Sadiq as-Siddiq, was a Sudanese political and religious
                    figure who was Prime Minister of Sudan from 1966 to 1967 and
                    again from 1986 to 1989. He was head of the National Umma
                    Party and Imam of the Ansar, a Sufi order that pledges
                    allegiance to Muhammad Ahmad (1844–1885), who claimed to be
                    the Mahdi, the messianic saviour of Islam.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Sadiq_al-Mahdi"
                    className="stretched-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/Almahgoub.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    Vice President. Mohamed Elmahgoub
                  </h5>
                  <p style={pStyle}>
                    Muhammad Ahmad Mahgoub (Arabic: محمد أحمد المحجوب,
                    romanized: Muḥammad Aḥmad al-Maḥjūb; 17 May 1908[1] – 23
                    June 1976[2]) was both Foreign Minister and then the 5th
                    Prime Minister of Sudan. He was also an important Sudanese
                    literary writer, who published several volumes of poetry and
                    literary criticism in Arabic.[3] He was born in the city of
                    Ed Dueim in 1908. He moved to Khartoum at the age of seven.
                    Mahgoub graduated from engineering school in 1929 and in
                    1938, he obtained a Bachelor of Laws degree from the Gordon
                    Memorial College. He was elected to parliament in 1946.
                    After independence, Mahgoub was foreign minister between
                    1956 and 1958, and then again between 1964 and 1965.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Muhammad_Ahmad_Mahgoub"
                    className="stretched-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {rows.map((_, rowIndex) => (
          <div className="row" style={rowStyle} key={rowIndex}>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/altrabi.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    Leader Dr. Hassan Abdullah Elturabi
                  </h5>
                  <p style={pStyle}>
                    Hassan al-Turabi (Arabic: حسن الترابي, romanized: Ḥassan
                    al-Turābī; 1 February 1932 – 5 March 2016) was a Sudanese
                    politician and scholar. He was the alleged architect of the
                    1989 Sudanese military coup that overthrew Sadiq al-Mahdi
                    and installed Omar al-Bashir as president.[1][2] He has been
                    called "one of the most influential figures in modern
                    Sudanese politics"[3] and a "longtime hard-line ideological
                    leader".[4] He was instrumental in institutionalizing Sharia
                    (Islamic law) in the northern part of the country and was
                    frequently imprisoned in Sudan, but these "periods of
                    detention" were "interspersed with periods of high political
                    office".[
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Hassan_al-Turabi"
                    className="stretched-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" style={colStyle}>
              <div className="d-flex position-relative" style={divStyle}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/new/nogud.jpg`}
                  className="flex-shrink-0 me-3"
                  alt="..."
                  style={imgStyle}
                />
                <div>
                  <h5 className="mt-0" style={h5Style}>
                    Leader. Mohamed Abraheen Nugud
                  </h5>
                  <p style={pStyle}>
                    Muhammad Ibrahim Nugud (1930 – 22 March 2012)
                    <br /> was a Sudanese politician who was General Secretary
                    of the Sudanese Communist Party.
                    <br />
                    He succeeded Abdel Khaliq Mahjub after the latter's
                    execution in 1971, leading the party for over four decades
                    <br />
                    his leadership was viewed as a period of long decline for
                    the party.
                    <br />
                    He stood as a candidate in the 2010 presidential election,
                    but performed poorly.
                    <br />
                    Nugud died in London in March 2012, when he was about 80
                    years old.
                  </p>
                  <a
                    href="https://en.wikipedia.org/wiki/Muhammad_Ibrahim_Nugud"
                    className="stretched-link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="container"
        style={{
          backgroundColor: "wight",
          boxShadow: "0px 3px 7px 0px #828282",
          padding: "50px",
          paddingTop: "30px",
          marginTop: "50px",
          marginBottom: "90px",
          borderTop: "70px solid #a4d2dd",
          borderRight: "10px solid #a4d2dd",
          borderBottom: " 10px solid #a4d2dd",
          borderLeft: "10px solid #a4d2dd",
          display: "block",
          borderRadius: "15px"
        }}
      >
        <MemberGallery />
      </div>
    </>
  );
};

export default AppNews;
