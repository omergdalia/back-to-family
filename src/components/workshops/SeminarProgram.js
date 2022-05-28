import React from "react";
import { Collapse, Timeline} from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';

import programs from './programs.json';

const { Panel } = Collapse;

const DayProgram = ({activities}) => {
    return <Timeline>
        {activities.map(({time, details}) => (
            <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" fontSize/>} color="blue">
                <b>{time}: </b>
                {details}
            </Timeline.Item>
        ))}       
    </Timeline>
}

const SeminarProgram = () => {
    return (
        <Collapse defaultActiveKey={"1"}>
            <Panel header="יום חמישי" key="1">
                <DayProgram activities={programs.thursday} />
            </Panel>
            <Panel header="יום שישי" key="2">
                <DayProgram activities={programs.friday}/>
            </Panel>
            <Panel header="יום שבת" key="3">
                <DayProgram activities={programs.saturday}/>
            </Panel>
            <Panel header="יום ראשון" key="4">
                <DayProgram activities={programs.sunday}/>
            </Panel>
            <Panel header="יום שני" key="5">
                <DayProgram activities={programs.monday}/>
            </Panel>
        </Collapse>
      );
}
export default SeminarProgram;