import React, { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  display: flex;
  
  width: 90%;
  border: 1px solid #434345;
`;

const AccordionSection = styled.div`
  flex: ${(props) => (props.isOpen ? "0 0 500px" : "1")};
  max-width: ${(props) => (props.isOpen ? "500px" : "none")};
  background-color: ${(props) => (props.isOpen ? "#434345" : "#29292b")};
  color: white;
  cursor: pointer;
  transition: flex 0.5s ease-in-out, max-width 0.5s ease-in-out,
    background-color 0.5s ease-in-out;
  border-right: 1px solid #434345;

  &:last-child {
    border-right: none;
  }
`;

const AccordionHeader = styled.h3`
  padding: 10px;
  margin: 0;
`;

const AccordionContent = styled.p`
  padding: 10px;
  margin: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const HorizontalAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const sections = [
    { header: "01 Discovery", content: "We start with your vision: What do you want to build? How can we accelerate your company’s growth to outpace the competition?" },
    { header: "02 Staffing", content: "Next, we work with you to strategically assemble a team with the precise skills needed to deliver on that vision — and we do it fast. You’ll have resumes in hand for review within 48 hours" },
    { header: "03 Kickoff", content: "In as little as two weeks, your remote team is ready to onboard and hit the ground running" },
    { header: "04 Ramp up", content: "Ready to scale up or ramp down the team? Our flexible model was designed to grow alongside you, for as long as you need" },
  ];

  return (
    <AccordionContainer>
      {sections.map((section, index) => (
        <AccordionSection
        className="flex flex-col items-start justify-center gap-10 text-[18px] p-5 h-[230px]"
          key={index}
          isOpen={openIndex === index}
          onMouseEnter={() => setOpenIndex(index)}
        >
          <AccordionHeader>{section.header}</AccordionHeader>
          <AccordionContent isOpen={openIndex === index}>
            {section.content}
          </AccordionContent>
        </AccordionSection>
      ))}
    </AccordionContainer>
  );
};



export default HorizontalAccordion;
