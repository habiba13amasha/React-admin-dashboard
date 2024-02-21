import Box from "@mui/material/Box"
import { DataGrid} from '@mui/x-data-grid';
import {row,column}from "./dataInvoices"
import Header from "../../components/Header"

export default function Invoices() {
  return (
    <>
    
    <Box sx={{ height: 600, width: '98%' ,mx:"auto" ,my:"auto" }}>
      <Header titel={"INVOICES"} subtitel={"List of invoices balances"}/>
      <DataGrid rows={row} columns={column}
       checkboxSelection
      />
    </Box>

    </>
  )
}
