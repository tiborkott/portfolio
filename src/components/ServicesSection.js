import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Skills" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Languages"
            desc="I have B2 level language exams for german and english. Want to learn more languages and bring all of them to a high level of communication."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Programming"
            desc="Know the basic oo principles, used many different lanuages, so far: C, C++, C#, Python, Java, Kotlin, Swift"
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Mobile development"
            desc="I have great interest and passion towards developing applications for mobile platforms. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
