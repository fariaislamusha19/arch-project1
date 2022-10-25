import { Box, Paper } from "@mui/material";
import React from "react";
import "../../CSS/DashboardComponent.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";


// export const useStyles = makeStyles(() =>
//   createStyles({
//     rotateIcon: {
//       animation: "$spin 2s linear infinite",
//     },
//     "@keyframes spin": {
//       "0%": {
//         transform: "rotate(360deg)",
//       },
//       "100%": {
//         transform: "rotate(0deg)",
//       },
//     },
//   })
// );

const CardElement = () => {
  // const classes = useStyles();

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 400,
            height: 400,
          },
        }}
      >
        <Paper sx={{ backgroundColor: "#000", opacity: ".5" }}>
          <div className="insidePaper">
            <FormatQuoteIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
          <div className="paperText"> In ancient India, architects would also function as interior designers. This can be seen from the references of Vishwakarma the architect—one of the gods in Indian mythology. In these architects' design of 17th-century Indian homes, sculptures depicting ancient texts and events are seen inside the palaces, while during the medieval times wall art paintings were a common there are still around 2000 havelis in this continent.
                         -Bill Gates
          </div>
        </Paper>
        <Paper sx={{ backgroundColor: "#000", opacity: ".5" }}>
          <div className="insidePaper">
            <FormatQuoteIcon sx={{ transform: "rotate(180deg)" }} />
          </div>
          <div className="paperText"> Interior design is the art and science of understanding people's behavior to create functional spaces, that are aesthetically pleasing, within a building. Decoration is the furnishing or adorning of a space with decorative elements, sometimes complemented by advice and practical assistance. In short, interior designers may decorate, wher decorators does not design home.-Sheikh Hasina</div>
        </Paper>
      </Box>
    </div>
  );
};

export default CardElement;
