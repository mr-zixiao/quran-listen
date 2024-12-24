import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GetAppIcon from '@mui/icons-material/GetApp';
import {
    Link,
    useLocation
} from 'react-router';
import {LangKey, useTranslation} from "@/lang";
import {ReactNode} from "react";

interface Props {
    open: boolean;
    onClose: () => void;
}

interface MenuItem {
    name: LangKey;
    icon: ReactNode,
    to: string
}

const pages: MenuItem[] = [
    {
        name: 'menu.pages.chapter',
        icon: <ListAltIcon/>,
        to: '/chapter/all'
    },
    {
        name: 'menu.pages.qari',
        icon: <PeopleAltIcon/>,
        to: '/qari/all'
    }, {
        name: 'menu.pages.collection',
        icon: <YouTubeIcon/>,
        to: '/collection'
    }, {
        name: 'menu.pages.setting',
        icon: <SettingsIcon/>,
        to: '/setting'
    },
]
const links: MenuItem[] = [
    {
        name: 'menu.links.Management',
        icon: <AdminPanelSettingsIcon/>,
        to: 'https://quran.zixiaocloud.online'
    },
    {
        name: 'menu.links.DownloadApp',
        icon: <GetAppIcon/>,
        to: 'https://quran.zixiaocloud.online/download.html'
    }
]

function DrawerList(props: Props) {
    const {onClose} = props;
    const location = useLocation();
    const {t} = useTranslation()
    const isSelected = (to: string) => {
        if (to === '/chapter/all') {
            return location.pathname.startsWith('/chapter/')
        }
        if (to === '/qari/all') {
            return location.pathname.startsWith('/qari/')
        }
        return location.pathname === to
    }
    return (
        <Box sx={{width: 250}} role="presentation">
            <List>
                {pages.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton selected={isSelected(item.to)} component={Link} to={item.to}
                                        onClick={onClose}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={t(item.name)}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {links.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton href={item.to}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={t(item.name)}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default function AppDrawer(props: Props) {
    const {open, onClose} = props;
    return (
        <Drawer open={open} onClose={onClose}>
            <DrawerList {...props}/>
        </Drawer>
    );
};