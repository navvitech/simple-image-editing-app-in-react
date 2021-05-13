import { Button, makeStyles } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import { useState } from "react";
import Slider from "./Slider";
const Body = ({ selectedOption, handleSliderChange, getImageStyle }) => {
  const useStyles = makeStyles({
    image: {
      width: "100%",
      objectFit: "contain",
      objectPosition: "center",
    },
    imageCont: {
      width: "500px",
      height: "370px",
      border: "2px solid green",
    },

    input: {
      display: "none",
    },
    buttonBlue: {
      width: "250px",
      height: "50px",
      background: "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
      fontWeight: "700",
      fontSize: "17px",
      textTransform: "capitalize",
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)",
    },
    buttonOrange: {
      width: "250px",
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)",
      height: "50px",
      fontWeight: "700",
      fontSize: "17px",
      textTransform: "capitalize",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  });
  const [image, setImage] = useState("");
  const classes = useStyles();
  const upload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(image);
  };
  return (
    <>
      <div
        style={{
          height: "10%",
          // border: "1px solid green",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          background: "#212121",
          marginLeft: "-31px",
        }}
      >
        <div className="">
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            // multiple
            type="file"
            onChange={upload}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<CloudUpload style={{ fontSize: "30px" }} />}
              className={classes.buttonOrange}
            >
              Upload
            </Button>
          </label>
        </div>
        {/* <Button
          variant="contained"
          color="primary"
          component="a"
          download
          href={image}
          startIcon={<GetApp style={{ fontSize: "30px" }} />}
          className={classes.buttonBlue}
        >
          download
        </Button> */}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "90%",
          flexDirection: "column",
          marginTop: "40px",
        }}
      >
        <div className={classes.imageCont}>
          <img
            // src="https://wallpaperaccess.com/full/31191.jpg"
            // src="https://i.pinimg.com/originals/c2/70/bf/c270bfb9be80bf1509b93bc3583ce655.jpg"
            src={image}
            alt=""
            style={getImageStyle()}
            className={classes.image}
          />
        </div>
        <div style={{ padding: "10px", textAlign: "center" }}>
          <h1 style={{ fontStyle: "italic", color: "orangered" }}>
            {selectedOption.name}
          </h1>
          <Slider
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSliderChange}
            unit={selectedOption.unit}
          />
        </div>
      </div>
    </>
  );
};

export default Body;
