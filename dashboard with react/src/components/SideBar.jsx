/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useNavigate} from "react-router-dom"
import { styled ,useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Typography from "@mui/material/Typography"
import { useLocation } from 'react-router-dom';
import { grey } from '@mui/material/colors';

export default function SideBar({open,handleDrawerClose}) {
    const drawerWidth = 240;
    const Array1=[{"text":"dashboard","icon":<HomeOutlinedIcon/>,"path":"/" },
                 {"text":"Manage team","icon":<PeopleOutlinedIcon/>,"path":"/team" },
                {"text":"Contacts information","icon":<ContactsOutlinedIcon/>,"path":"/contacts" },
                {"text":"invoices Balances","icon":<ReceiptOutlinedIcon/>,"path":"/invoices" }];
    
    const Array2=[{"text":"Profile Form","icon":<PersonOutlinedIcon/>,"path":"/form"},
    {"text":"Calendar","icon":<CalendarTodayOutlinedIcon/>,"path":"/Calendar"},
    {"text":"FAQ page","icon":<HelpOutlinedIcon/>,"path":"/faq" }]

    const Array3=[{"text":"Bar Chart","icon":<BarChartOutlinedIcon/>,"path":"/bar"},
    {"text":"Pie Chart","icon":<PieChartOutlinedIcon/>,"path":"/pie"},
    {"text":"Line Chart","icon":<TimelineOutlinedIcon/>,"path":"/line"},
    {"text":"Geography Chart","icon":<MapOutlinedIcon/>,"path":"/geography"}]
  
    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          }),
        }),
      );
      const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
      });
      
      const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
          width: `calc(${theme.spacing(8)} + 1px)`,
        },
      });
      const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));
      const theme = useTheme();
      const navigate = useNavigate();
      let location = useLocation();


  return (
   <>
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Avatar sx={{mx:"auto", height:open?60:30 ,width:open?60:30, border:"2px solid gray" ,my:"3px" ,transition:"0.26s"}} alt="" src="https://img.freepik.com/premium-vector/hand-drawing-cartoon-girl-cute-girl-drawing-profile-picture_488586-692.jpg" />
        <Typography align='center' sx={{fontSize:open? 16 :0 ,transition:"0.26s" }} >Habiba</Typography>
        <Typography align='center' sx={{fontSize:open?12:0 ,transition:"0.26s" ,color:theme.palette.info.dark}} >admin</Typography>
        
        <Divider />
        <List>
          {Array1.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <Tooltip title={open? null: item.text} placement="left">
               <ListItemButton onClick={() => {navigate(item.path) }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor:location.pathname===item.path?(theme.palette.mode==="dark"?grey[800]:grey[400]):null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
               </ListItemButton>
              </Tooltip>
              
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array2.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
             <Tooltip title={open? null: item.text} placement="left">
              <ListItemButton  onClick={() => {navigate(item.path) }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor:location.pathname===item.path?(theme.palette.mode==="dark"?grey[800]:grey[400]):null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
             </Tooltip>
             
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array3.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <Tooltip title={open? null: item.text} placement="left">
               <ListItemButton  onClick={() => {navigate(item.path) }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor:location.pathname===item.path?(theme.palette.mode==="dark"?grey[800]:grey[400]):null
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
               </ListItemButton>
              </Tooltip>
             
            </ListItem>
          ))}
        </List>
      </Drawer>
   </>
  )
}
