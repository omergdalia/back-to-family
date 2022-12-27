import React from 'react';
import { Avatar, Comment, List } from 'antd';
import ShowMoreText from "react-show-more-text";
import { FaUser } from 'react-icons/fa';

import reviews from './reviews.json';

const Reviews = () => (
    <List
      className="comment-list col-1"
      header={`${reviews.length} תגובות`}
      itemLayout="horizontal"
      dataSource={reviews}
      renderItem={(item) => (
        <li>
          <Comment
            author={item.author}
            avatar={
              <Avatar 
                icon={<FaUser />}
                size="large"
                style={{
                  backgroundColor: "transparent",
                  color: item.gender === "female" ? "#ea088d" : "#5778b3",
                  margin: "0px 0px 0px 12px"
                }} />
            }
            content={
              <ShowMoreText 
                  lines={3}
                  width={420}
                  keepNewLines={true}
                  more="הצגת התגובה המלאה"
                  less="הסתרת התגובה המלאה"
                  className="content-css"
                  anchorClass="show-more-less-clickable">
                      {item.content}
              </ShowMoreText>}
          />
        </li>
      )}
    />
  );
  
export default Reviews;