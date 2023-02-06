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
        
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            className="imagelistsize"
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
          
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
    img: 'images/duplex01.jpg',
  },
  {
    img: 'images/office01.jpg' ,
   
  },
  {
    img: 'images/restaurant01.jpg',

  },
  {
    img: 'images/hospital01.jpg',
    
  },
  {
    img: 'images/tinyhouse01.jpg',
  
  },
  {
    img: 'images/school01.jpg',
   
  },
  {
    img:'images/apartment01.jpeg' ,
   
  },
  {
    img: 'images/container01.jpg',
  },
 
  {
    img: 'images/gallery01.jpg',
  
  },
  {
    img: 'images/gallery03.jpg',
   
  },
  {
    img:'images/gallery04.jpg' ,
   
  },
  {
    img: 'images/gallery05.jpg',
  },
 
];