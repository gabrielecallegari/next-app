import React from 'react'

interface Props {
  params: {
    id: number;
    photo_id: number;
  };
}

const PhotoId = ({params: {id, photo_id}}:Props) => {
  return (
    <div>
      <p>Photo id: {photo_id}, User Id: {id} </p>
    </div>
  )
}

export default PhotoId