import { makeStyles, Tab, Tabs } from "@material-ui/core";
import { Brightness7, ArrowBackIos } from "@material-ui/icons";
import brightness from "../assets/brightness.png";
import blurr from "../assets/blur.png";
import contrast from "../assets/contrast.png";
import huerotate from "../assets/hue.png";
import grayscale from "../assets/grayscale.png";
import sepia from "../assets/sepia.jpg";
import { useState } from "react";
import "./Tabs.css";

const CusTabs = ({ options, setSelectedOptionIndex }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const useStyles = makeStyles((theme) => ({
    indicator: {
      // display: "none",
      width: "5.7px",
    },
    selected: {
      background: "#293039",
    },
    flexContainer: {
      background: "#0E1318",
    },
    labelIcon: {
      color: "white",
      textTransform: "capitalize",
      fontWeight: 600,
      minWidth: "100px",
      minHeight: "100px",
      // width: "25%",
      // borderTopRightRadius: "20px",
    },
    scrollButtons: {
      height: "70px",
      color: "white",
      fontSize: "50px",
      background: "linear-gradient(90deg,#00c4cc,#7d2ae8)",
    },
  }));

  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <div className="mainRoot">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="scrollable"
          orientation="vertical"
          classes={{
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
            scrollButtons: classes.scrollButtons,
          }}
        >
          {options.map((item, i) => (
            <Tab
              classes={{
                selected: classes.selected,
                labelIcon: classes.labelIcon,
              }}
              label={item.name}
              icon={<Brightness7 />}
              onClick={() => setSelectedOptionIndex(i)}
            ></Tab>
          ))}
        </Tabs>
        {selectedTab === 0 && <TabMtr image={brightness} title="Brightness" />}
        {selectedTab === 1 && <TabMtr image={contrast} title="Contrast" />}
        {selectedTab === 2 && <TabMtr image="" title="Saturation" />}
        {selectedTab === 3 && <TabMtr image={grayscale} title="GrayScale" />}
        {selectedTab === 4 && <TabMtr image={sepia} title="Sepia" />}
        {selectedTab === 5 && <TabMtr image={huerotate} title="HueRotate" />}
        {selectedTab === 6 && <TabMtr image={blurr} title="Blur" />}
        {/* {selectedTab === 7 && <TabMtr image={contrast} title="Contrast" />} */}
      </div>
    </div>
  );
};

export default CusTabs;

const TabMtr = ({ title, image }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#293039",
          color: "white",
          flexDirection: "column",
          width: "320px",
          zIndex: -1,
        }}
      >
        {image && <img src={image} alt="" className="image__side" />}
        <h1 style={{ marginTop: "20px" }}>{title}</h1>
      </div>
      <div className="on">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#293039",
            height: "100px",
            width: "30px",
            borderTopRightRadius: "100%",
            borderBottomRightRadius: "100%",
          }}
        >
          <ArrowBackIos />
        </div>
      </div>
    </>
  );
};
