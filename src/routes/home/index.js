import {h} from 'preact';
import {Container, Dropdown, InputGroup} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import {useState} from "preact/hooks";


const timezones = [{name: 'America/Toronto', value: -5}, {name: 'Asia/Dubai', value: +4}];
const generateResultString = (hours, difference) => {
    let hoursTime = hours + difference;
    const formatString = (hours, end) => hours + ":00" + end;
    if (hoursTime >= 24) {
        hoursTime -= 24
        return formatString(hoursTime, " the next day");
    } else if (hoursTime < 0) {
        hoursTime += 24;
        return formatString(hoursTime, " the previous day");
    } else {
        return formatString(hoursTime, "");
    }
}
const Home = () => {
    const [fromTimezone, setFromTimezone] = useState(timezones[0]);

    const [toTimezone, setToTimezone] = useState(timezones[1]);

    const [hours, setHours] = useState(new Date().getHours());


    const onToSelection = (zone) => {
        if (zone === fromTimezone) {
            setFromTimezone(toTimezone);
            setToTimezone(fromTimezone);
        } else {
            setToTimezone(zone);
        }
    }

    const onFromSelection = (zone) => {
        if (zone === toTimezone) {
            setFromTimezone(toTimezone);
            setToTimezone(fromTimezone);
        } else {
            setFromTimezone(zone)
        }
    }

    return <div className="App">
        <Container className="text-center">
            <h1> Time zone calculator</h1>
            <div id="calculator">
                <div id="hoursWorked">
                    <InputGroup className="mb-3 d-flex justify-content-center">
                        <span className={"input-group-text"}>From: </span>
                        <Dropdown>
                            <Dropdown.Toggle>{fromTimezone.name}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {timezones.map((zone) => (
                                    <DropdownItem key={zone.name + "selection"}
                                                  onClick={() => onFromSelection(zone)}>{zone.name}</DropdownItem>))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <span className={"input-group-text"}>To: </span>
                        <Dropdown>
                            <Dropdown.Toggle>{toTimezone.name}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {timezones.map((zone) => (
                                    <DropdownItem key={zone.name + "selection"}
                                                  onClick={() => onToSelection(zone)}>{zone.name}</DropdownItem>))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup>

                </div>
                <div id="startingTime">
                    <h2>Time</h2>
                    <InputGroup className="mb-3 d-flex justify-content-center">

                        <input
                            className={"form-control"}
                            value={hours}
                            type={"number"}
                            onInput={(event) => {
                                const value = event.target.value
                                if (!isNaN(value)) {
                                    const input = parseInt(value, 10);
                                    if (input >= 0 && input < 24) {
                                        setHours(input);
                                    }
                                }
                            }}
                        />
                        <span className={"input-group-text"}>
                            :00 in {fromTimezone.name}
                        </span>
                    </InputGroup>
                </div>
                <h1> {generateResultString(hours, toTimezone.value - fromTimezone.value)} in {toTimezone.name}</h1>
            </div>
        </Container>
    </div>
};

export default Home;
