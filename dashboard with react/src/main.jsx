import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App"
import Dashboard from './pages/dashboard/Dashboard'
import Team from './pages/team/Team'
import Contacts from './pages/contacts/Contacts'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Calendar from './pages/calendar/Calendar';
import Faq from './pages/faq/Faq';
import Form from './pages/form/Form';
import BarChart from './pages/barChart/BarChart';
import PieChart from './pages/pieChart/PieChart';
import LineChart from './pages/lineChart/LineChart';
import Invoices from './pages/invoices/Invoices';
import Geography from './pages/geography/Geography';
import NotFound from "./pages/notFound/NotFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='faq' element={<Faq />} />
      <Route path='form' element={<Form />} />
      <Route path='bar' element={<BarChart />} />
      <Route path='pie' element={<PieChart />} />
      <Route path='line' element={<LineChart />} />
      <Route path='geography' element={<Geography />} />
      
      <Route path='*' element={<NotFound />} />








    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
