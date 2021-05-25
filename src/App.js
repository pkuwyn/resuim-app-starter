import React from "react";

import { Viewer, Entity } from "resium";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  "@global": {
    ".cesium-widget-credits": {
      display: "none !important",
    },
  },
});

const App = () => {
  useStyles();
  return (
    <Viewer
      full
      baseLayerPicker={false}
      animation={false}
      timeline={false}
      vrButton={false}
      homeButton={false}
      sceneModePicker={false}
      navigationHelpButton={false}
      geocoder={false}
      skyBox={false}
    />
  );
};

export default App;
