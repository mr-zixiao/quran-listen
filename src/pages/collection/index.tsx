import {getCollectionList} from "@/services/collection";
import {useEffect, useState} from "react";
import {CollectionVo} from "@/services/collection/type.ts";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";

export default function Collection() {
    const [list, setList] = useState<CollectionVo[]>([]);
    const [loading, setLoading] = useState(false);
    const getList = async () => {
        setLoading(true)
        const res = await getCollectionList()
        setList(res)
        setLoading(false)
    }
    useEffect(() => {
        getList().then(undefined)
    }, []);
    if (loading) {
        return <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4}}>
            <CircularProgress/>
        </Box>
    }
    return (<List>
        {list.map(item => <ListItem key={item.id} onClick={() => {

        }}>
            <ListItemAvatar>
                {/*<Avatar src={item.avatar}></Avatar>*/}
                <Avatar>{item.title[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.subTitle}
            />
        </ListItem>)}

    </List>)
}