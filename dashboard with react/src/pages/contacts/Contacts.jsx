import Box from "@mui/material/Box"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {row,column}from "./dataContacts"
import Header from "../../components/Header"

export default function Contacts() {
  return (
    <>
    
    <Box sx={{ height: 600, width: '98%' ,mx:"auto" ,my:"auto" }}>
      <Header titel={"CONTACTS"} subtitel={"List of contacts for future reference"}/>
      <DataGrid rows={row} columns={column}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>

    </>
  )
}
