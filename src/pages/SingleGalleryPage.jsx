import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import { actions } from '../store/reducers/singleGalleryPage';
import Image from "../components/Image";
import Header from "../components/Header";

const SingleGalleryPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(props.fetchGallery());
  }, []);

  const takeNewestSorting = (id) => {
    const sorting = {
      latest: false,
      oldest: false,
      popular: false,
    };
    sorting[id] = true;
    dispatch(props.fetchGallery({sorting}));
  };

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <>
      <Header
        title={"Cos tam cos tam"}
        options={props.sorting}
        takeNewestSorting={takeNewestSorting}
      />
      <InfiniteScroll
        dataLength={props.data.length}
        next={props.fetchGallery}
        hasMore={true}
      >
        <Container>
          {props.data.length > 0 ?
            props.data.map((image, index) => {
              return (
                <Image
                  key={uuidv4()}
                  id={image.id}
                  src={image.urls.regular}
                  alt={image.alt_description}
                  description={image.description}
                  delayFactor={50 * index}
                />
              )
            })
            :
            null}
        </Container>
      </InfiniteScroll>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  
  @media (min-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(540px, 1fr));
  }
`;

const mapStateToProps = state => ({
  data: state.singleGalleryPage.data,
  paging: state.singleGalleryPage.paging,
  sorting: state.singleGalleryPage.sorting,
  loading: state.singleGalleryPage.loading,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchGallery: bindActionCreators(actions.fetchGallery, dispatch),
    fetchGallerySuccess: bindActionCreators(actions.fetchGallerySuccess, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleGalleryPage);
