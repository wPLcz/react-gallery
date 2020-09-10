import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { actions } from "../store/reducers/landingPage";
import Loader from "../components/Loader";

const LandingPage = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(props.fetchCollections());
  }, []);

  const generateTagLinks = tagsCollection => (
    tagsCollection.map(tag => (
      <StyledLink
        to={{ pathname: '/gallery', state: { keyword: tag.title} }}
        key={uuidv4()}
      >
        <Tag>
          {tag.title}
        </Tag>
      </StyledLink>
    ))
  );

  const generateSections = data => (
    data.map(section => (
      <Article key={uuidv4()}>
        <Loader/>
        <Header>{section.title}</Header>
        {section.tags && generateTagLinks(section.tags)}
        <Img src={section.cover_photo.urls.raw} alt={section.cover_photo.alt_description}/>
      </Article>
    ))
  );

  return (
    <Container>
      {props.data && generateSections(props.data)}
    </Container>
  );
};

const Article = styled.article`
  margin: 1vh 0;
  width: 90%;
  @media (min-width: 960px) {
    margin: 5vh 0;
    width: 50%;
  }
`;

const Tag = styled.span`
    max-height: 25vh;
    font-weight: 200;
    font-family: Helvetica;
    text-transform: uppercase;
    color: #999;
    @media (min-width: 960px) {
    }
`;

const StyledLink = styled(Link)`
    margin: 0 15px;
    display: inline-block;
    text-decoration: none;
     &:hover {
        ${Tag} {
          color: #CB626E;
        }
     }
`;

const Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: 25px;
`;

const Header = styled.p`
    font-size: 24px;
    text-align: center;
    max-height: 25vh;
    font-weight: 200;
    font-family: Helvetica;
    text-transform: uppercase;
    color: #999;
  
    @media (min-width: 960px) {
      font-size: 40px;
    }
`;


const Container = styled.section`
  width: 100%;
  display: grid;
  justify-items: center;
`;


const mapStateToProps = state => ({
  data: state.landingPage.data,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCollections: bindActionCreators(actions.fetchCollections, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
