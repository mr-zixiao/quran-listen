import {useEffect, useState} from "react";
import {getChapters} from "@/services/chapter";
import {ChapterVo} from "@/services/chapter/type.ts";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import {useTranslation} from "@/lang";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BookIcon from '@mui/icons-material/Book';
import {useNavigate} from 'react-router'

export default function Chapter() {
    const navigate = useNavigate()
    const {lang} = useTranslation()
    const [list, setList] = useState<ChapterVo[]>([]);
    const [loading, setLoading] = useState(false);
    const getList = async () => {
        setLoading(true)
        const res = await getChapters()
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
        {list.map(item => <ListItem key={item.chapterId} onClick={()=>{
            navigate(`/qari/${item.chapterId}`)
        }}>
            <ListItemAvatar>
                <Avatar>
                    <BookIcon/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item[lang].title}
                          secondary={item[lang].subTitle}/>
        </ListItem>)}

    </List>)


}