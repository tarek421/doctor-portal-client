import React, { useEffect, useState, useContext} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { userContext } from "../../../App";
import useAuth from "../../../hooks/useAuth";



const Apointments = () => {
  const [apointdata, setApoinmentData] = useState([]);
  const [date] = useContext(userContext);
  const {user} = useAuth();
  const localDate = date.toLocaleDateString();
  useEffect(() => {
    const url = `https://rocky-harbor-59757.herokuapp.com/appointments?email=${user.email}&date=${localDate}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setApoinmentData(data));
  }, [localDate, user.email]);
  return (
    <TableContainer style={{ height: 420, width: "100%" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apointdata.map((row) => (
            <TableRow
              key={row.patiantName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patiantName}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="center">

                <Button variant='contained'>Not Visited</Button>


              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Apointments;
