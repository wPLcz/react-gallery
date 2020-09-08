import React, { useEffect } from 'react';
import styled from 'styled-components';

const SocialMedia = (props) => {

  return (
    <Container>
      <iframe
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout=standard&action=like&size=small&share=true&height=35&appId=429105250872242"
        width="450" height="35" style="border:none;overflow:hidden" scrolling="no" frameBorder="0"
        allowTransparency="true" allow="encrypted-media"></iframe>
    </Container>
  )
};

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
`;

export default SocialMedia;
