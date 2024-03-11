import { useState } from "react";
import "./App.css";
import PropsDemo from "./excercises/PropsDemo";
import ListDemo from "./excercises/ListDemo";
import EventDemo from "./excercises/EventDemo";
import FormUncontrolled from "./excercises/FormUncontrolled";
import StateDemo1 from "./excercises/StateDemo1";
import StateDemo2 from "./excercises/StateDemo2";
import StateDemo3 from "./excercises/StateDemo3";
import UseEffectDemo from "./excercises/UseEffect";
import FetchDemo1 from "./excercises/FetchDemo";
import LiftingState from "./excercises/LiftingState";
import ContextDemoApp from "./excercises/ContextDemo";

export default function App() {
    const [selectedView, setSelectedView] = useState("info");

    function handleSelected(selected: string) {
        setSelectedView(selected);
    }

    return (
        <>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
                        {selectedView == "props1" ? <PropsDemo title="Props demo" /> : null}
                        {selectedView == "listDemo1" ? <ListDemo title="List demo" /> : null}
                        {selectedView == "eventDemo1" ? <EventDemo title="Event demo" /> : null}
                        {selectedView == "form-uncontrolled" ? <FormUncontrolled title="Form uncontrolled" /> : null}
                        {selectedView == "stateDemo1" ? <StateDemo1 title="State Demo 1" /> : null}
                        {selectedView == "stateDemo2" ? <StateDemo2 title="State Demo 2" /> : null}
                        {selectedView == "stateDemo3" ? <StateDemo3 title="State Demo 3" /> : null}
                        {selectedView == "useEffect" ? <UseEffectDemo title="useEffect" /> : null}
                        {selectedView == "fetchDemo" ? <FetchDemo1 title="fetchDemo" /> : null}
                        {selectedView == "liftingState" ? <LiftingState title="liftingState" /> : null}
                        {selectedView == "contextDemo" ? <ContextDemoApp title="contextDemo" /> : null}
                        {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
                    </div>
                </div>
            </div>
        </>
    );
}
type ButtonProps = {
    onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
    const { onSelected: handleSelected, /*btnStyle: btnStyle*/ } = props;
    return (
        <>
            <button className="btn-w100" onClick={() => handleSelected("info")}>
                Info
            </button>
            {/* Add a new button for each of the exercises you complete */}
            <button className="btn-w100" onClick={() => handleSelected("props1")}>
                Props demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("listDemo1")}>
                List demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("eventDemo1")}>
                Event demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("form-uncontrolled")}>
                Forms uncontrolled
            </button>
            <button className="btn-w100" onClick={() => handleSelected("stateDemo1")}>
                State Demo 1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("stateDemo2")}>
                State Demo 2
            </button>
            <button className="btn-w100" onClick={() => handleSelected("stateDemo3")}>
                State Demo 3
            </button>
            <button className="btn-w100" onClick={() => handleSelected("useEffect")}>
                useEffect demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("fetchDemo")}>
                Fetch demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("liftingState")}>
                Lifting state
            </button>
            <button className="btn-w100" onClick={() => handleSelected("contextDemo")}>
                Context Demo
            </button>
        </>
    );
};
