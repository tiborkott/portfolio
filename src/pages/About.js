import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Tibor Kött</span>
              </p>
              <h2 className="about__heading">IT engineer</h2>
              <div className="about__info">
                <PText>
                  I am studying as an IT engineer at BME University.
                  <br />
                  <br />
                  My goal is to be a great mobile developer.
                  <br />
                  <br />
                  Like to develop for iOS platform.
                  <br />
                </PText>
              </div>
              {/* <Button btnText="CV" btnLink="#" /> */}
            </div>
            <div className="right">{/* <img src={AboutImg} alt="me" /> */}</div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Kossuth Lajos High School, Cegléd']}
              />
              <AboutInfoItem
                title="University"
                items={['Budapest University of Technology and Economics']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem title="Languages" items={['English', 'German']} />
              <AboutInfoItem
                title="Programming"
                items={['C', 'C++', 'C#', 'Python', 'Java', 'Kotlin', 'Swift']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem title="2017-2021" items={['Student at BME']} />
              <AboutInfoItem
                title="2020"
                items={['Front end developer at  ']}
              />
              <AboutInfoItem
                title="2021-2022"
                items={['CEM engineer at Huawei']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
