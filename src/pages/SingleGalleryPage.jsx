import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import { actions } from '../store/reducers/singleGalleryPage';
import Navigation from "../components/Navigation";
import Thumbnail from "../components/Thumbnail";
import Header from "../components/Header";
import SingleImagePage from "./SingleImagePage";

const SingleGalleryPage = (props) => {
  const [showGallery, changeView] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(props.fetchGallery({keyword: props.other && props.other.location.state.keyword}));
  }, []);

  const handleViewChange = id => {
    id ?
      dispatch(props.fetchImage({ id })) :
      dispatch(props.clearImageData());
    changeView(!showGallery);
  };

  const takeNewestSorting = (id) => {
    props.clearGalleryData();
    const sorting = {
      latest: false,
      oldest: false,
      popular: false,
    };
    sorting[id] = true;
    dispatch(props.fetchGallery({ sorting }));
  };

  const createGridTiles = (collection) => (
    collection.map((image, index) => (
        <Thumbnail
          index={index}
          key={uuidv4()}
          id={image.id}
          src={image.urls.regular}
          likes={image.likes || undefined}
          location={image.location && image.location.country || undefined}
          downloads={image.downloads || undefined}
          alt={image.alt_description}
          description={image.description}
          delayFactor={50 * index}
          handleClickForDetails={id => handleViewChange(id)}
        />
      )
    ));

  return (
    <>
      <Navigation
        clearGalleryData={() => props.clearGalleryData()}
      />
      {showGallery
        ? (
          <>
            <Header
              title={props.header}
              options={props.sorting}
              takeNewestSorting={takeNewestSorting}

            />
            <InfiniteScroll
              dataLength={props.data.length}
              next={props.fetchGallery}
              hasMore={true}
            >
              <Container>
                {
                  props.data.length > 0
                    ? createGridTiles(props.data)
                    : null
                }
              </Container>
            </InfiniteScroll>
          </>) :
        <SingleImagePage image={props.image} handleClose={id => handleViewChange()}/>
      }
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
  header: state.singleGalleryPage.header,
  image: state.singleGalleryPage.image,
  paging: state.singleGalleryPage.paging,
  sorting: state.singleGalleryPage.sorting,
  loading: state.singleGalleryPage.loading,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchGallery: bindActionCreators(actions.fetchGallery, dispatch),
    fetchImage: bindActionCreators(actions.fetchImage, dispatch),
    clearImageData: bindActionCreators(actions.clearImageData, dispatch),
    clearGalleryData: bindActionCreators(actions.clearGalleryData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleGalleryPage);
