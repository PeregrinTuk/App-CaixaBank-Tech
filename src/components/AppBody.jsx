import React from 'react';
import Paragraph from './Paragraph';
import Box from './Box';

export default function AppBody() {
    const paragraph_title   = "Transactions history";
    const paragraph_body    = "These are your monthly and daily actions.";
    const box_today_title   = "TODAY";
    const box_today_number  = "3";
    const box_month_title   = "LAST MONTH";
    const box_month_number  = "35";
    const box_year_title    = "LAST YEAR";

    return (
        <React.Fragment>
            <Paragraph  title = {paragraph_title}
                        body = {paragraph_body}
            />
            <div className="box-container">
                <Box    box_size = "box_size_S"
                        title = {box_month_title}
                >
                    <p>{box_month_number}</p>
                </Box>
                <Box    box_size = "box_size_S"
                        title={box_today_title}
                >
                    <p>{box_today_number}</p>
                </Box>
            </div>
            <Box    box_size = "box_size_L"
                    title={box_year_title}
            >

            </Box>
        </React.Fragment>
    )
}