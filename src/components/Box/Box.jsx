import {EventBox} from "./Box.styled"

function Box({children}) {
    return (
        <EventBox>{children}</EventBox>
    )
}

export default Box