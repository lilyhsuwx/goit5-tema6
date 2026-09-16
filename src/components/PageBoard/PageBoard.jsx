import {List, Item, Title, Subtitle} from "./PageBoard.styled";
import { format, differenceInHours, formatDistanceStrict } from "date-fns";

function PageBoard({event}) {
    return (
        <List>{event.map(({name, location, speaker, type, time}) => {
            return <Item key={name}>
                        <Title>{name}</Title>
                        <Subtitle>{location}</Subtitle>
                        <Subtitle>{speaker}</Subtitle>
                        <Subtitle>{type}</Subtitle>
                        <Subtitle> {format(new Date(time.start), "dd MMMM yyyy, HH:mm")}</Subtitle>
                        <Subtitle>{formatDistanceStrict(new Date(time.start), new Date(time.end))}</Subtitle>
                    </Item>
        })}</List>
    )
}

export default PageBoard