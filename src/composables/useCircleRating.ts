const useCircleRating = (rating: number) => {
  const counter = 0;
  const computeRating = () => {
    // modify rating by 360 degree
    // parse to the nearest whole number
    // return rating && parseInt((rating / 10) * 360);

    return rating && rating * 10;
  };

  const circleBorder = {
    width: "56px",
    height: "56px",
    display: "grid",
    placeContent: "center",
    border: "2px solid #0C0B20",
    borderRadius: "50%",
    padding: "4px",
    color: "#00d492",
    fontWeight: "bold",
    background: `linear-gradient(#0C0B20,#0C0B20) content-box,
      linear-gradient(calc( ((18/5) * ${computeRating()} - 90)*1deg), #015037 50%,transparent 0) 0/min(100%,(50 - ${computeRating()})*100%),
      linear-gradient(calc( ((18/5) * ${computeRating()} - 90)*1deg), transparent 50%, #00d492        0) 0/min(100%,(${computeRating()} - 50)*100%),
      linear-gradient(to right, #015037 50%, #00d492 0)`,
  };

  return {
    circleBorder,
  };
};

export default useCircleRating;
