
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';


export default function TitlebarImageList() {
  return (
    <div className='gallerydiv'>
    <ImageList className='gallerylist' >
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div" className="gallerylistname">Gallery</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            className="imagelistsize"
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'images/imgwed.jpg',
    title: 'wedding',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
 
  {
    img: 'images/imgwed3.jpg',
    title: 'wedding',
    author: '@helloimnik',
  },
 
  {
    img: 'images/imghbd2.jpg',
    title: 'birthday',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'images/imgcorporate.jpg',
    title: 'Conference',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },

 
];

