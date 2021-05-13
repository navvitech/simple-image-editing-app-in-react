import { AppBar, Grid, makeStyles, Toolbar } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import CusTabs from "./components/Tabs";
const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];
function App() {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      background: "linear-gradient(90deg,#00c4cc,#7d2ae8)",
    },
  }));
  const classes = useStyles();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  }

  console.log(getImageStyle());
  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "19px", fontWeight: 600 }}>
            Navchi Photo editor
          </p>
          <p
            style={{
              fontSize: "19px",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            upload and edit your photo
          </p>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item lg={4}>
          <CusTabs
            options={options}
            setSelectedOptionIndex={setSelectedOptionIndex}
          />
        </Grid>
        <Grid item lg={8}>
          <Body
            selectedOption={selectedOption}
            getImageStyle={getImageStyle}
            handleSliderChange={handleSliderChange}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
