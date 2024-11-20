import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Stack } from "@mui/material";

export default function FilterSelect() {
  const [filter, setFilter] = React.useState("");
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box>
      <FormControl style={{ width: "130px" }}>
        <InputLabel style={{ marginTop: "-7px" }} id="demo-simple-select-label">
          Filter
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          style={{
            borderRadius: "50px",
            height: "40px",
            padding: "20px",
            textAlign: "center",
          }}
          onChange={handleChange}
        >
          <Stack p={2} mb={-2}>
            <label style={{ color: "#585858", fontWeight: "600" }}>
              Wagt boyunca
            </label>
          </Stack>
          <Stack p={2} mb={-2} direction="row" alignItems="center">
            {" "}
            <Stack
              alignItems="center"
              p={0.3}
              pl={2}
              pr={1}
              pt={0.4}
              style={{
                background: "#F1F1F1",
                border: "1px solid #B1B1B1",
                borderRadius: "2px 0px 0px 2px",
              }}
            >
              <label htmlFor="startDate">Start date</label>
            </Stack>
            <Stack
              p={0.8}
              alignItems="center"
              style={{
                background: "#F5F8FC",
                borderRadius: "0px 2px 2px 0px",
                border: "1px solid #B1B1B1",
              }}
            >
              <input
                style={{
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  appearance: "none",
                  MozAppearance: "none",
                }}
                type="date"
              />
            </Stack>
          </Stack>
          <Stack p={2} direction="row" alignItems="center">
            {" "}
            <Stack
              alignItems="center"
              p={0.3}
              pl={2}
              pr={1.5}
              pt={0.4}
              style={{
                background: "#F1F1F1",
                border: "1px solid #B1B1B1",
                borderRadius: "2px 0px 0px 2px",
              }}
            >
              <label htmlFor="endDate">End date</label>
            </Stack>
            <Stack
              p={0.8}
              alignItems="center"
              style={{
                background: "#F5F8FC",
                borderRadius: "0px 2px 2px 0px",
                border: "1px solid #B1B1B1",
              }}
            >
              <input
                style={{
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  appearance: "none",
                  MozAppearance: "none",
                }}
                type="date"
              />
            </Stack>
          </Stack>
          <Stack p={2} mb={-3}>
            <label style={{ fontWeight: "600", color: "#585858" }}>
              Status boyunca
            </label>
          </Stack>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            style={{ padding: "20px" }}
          >
            <FormControlLabel
              value="cykys"
              control={<Radio />}
              label="cykys jan"
            />
            <FormControlLabel
              value="girish"
              control={<Radio />}
              label="Girish jan"
            />
          </RadioGroup>
        </Select>
      </FormControl>
    </Box>
  );
}
