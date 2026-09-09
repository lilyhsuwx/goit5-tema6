import {List, Item, Title, Subtitle} from "./PageBoard.styled"

function PageBoard({event}) {
    return (
        <List>{event.map(({name, location, speaker, type, time}) => {
            return <Item key={name}>
                        <Title>{name}</Title>
                        <Subtitle>{location}</Subtitle>
                        <Subtitle>{speaker}</Subtitle>
                        <Subtitle>{type}</Subtitle>
                        <Subtitle>{time.start}</Subtitle>
                        <Subtitle>{time.end}</Subtitle>
                    </Item>
        })}</List>
    )
}

export default PageBoard