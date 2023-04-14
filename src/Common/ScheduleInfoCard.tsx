import React from "react";
import styled from "styled-components";

interface Props {
  content: string;
  startDate: string;
  endDate: string;
}

const ScheduleInfoCard = (props : Props) => {
    return(
        <ScheduleInfoCardContainer>
        <ScheduleInfoCardDateTitle>
            시작 {props.startDate}
        </ScheduleInfoCardDateTitle>
        <ScheduleInfoCardDateTitle>
            종료 {props.endDate}
        </ScheduleInfoCardDateTitle>
        <ScheduleInfoCardContentTitle>
            {props.content}
        </ScheduleInfoCardContentTitle>
        </ScheduleInfoCardContainer>
    )
};

const ScheduleInfoCardContainer = styled.div`
    width: 330px;
    heigth: 90px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    box-shadow: 0px 1px 1px black;
    background-color: #D9D9D9;
    margin-top: 1rem;
`;

const ScheduleInfoCardDateTitle = styled.div`
    font-size: 35px;
    font-color: black;
    letter-spacing: -2px;
    margin-left: 20px;
    text-docoration: underline #9DD8F1 8px;
`;

const ScheduleInfoCardContentTitle = styled.div`
    font-size: 28px;
    font-color: black;
    margin-left: 20px;
`;

export default ScheduleInfoCard;