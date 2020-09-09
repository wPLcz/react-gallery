import React from 'react';
import Iframe from "react-iframe";

const SocialMedia = () => {
  return (
    <Iframe url="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=162&layout=button_count&action=like&size=large&share=true&height=46&appId=429105250872242"
            width="260"
            height="46"
            allow="encrypted-media"
            frameBorder="0"
    />
  )
};

export default SocialMedia;
