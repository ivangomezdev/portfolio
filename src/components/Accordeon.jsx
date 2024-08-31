import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordeon = ({ title, items }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
            <Typography variant='h4'>{title}</Typography>
            <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "800px" }}>
                {items.map((item, index) => (
                    <Accordion key={index}>
                        <AccordionSummary 
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography><strong>{item.question}</strong></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default Accordeon;


