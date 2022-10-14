import React from 'react'
import Booklist from './booklist'

const chemistry = () => {
  return (
    <><div class='text-white m-5'>Chemistry, a branch of physical science, is the study of the composition, structure, properties and change of matter.
      <Booklist />
    </div>
    
    <div class='m-10 text-white'>
        Antoine Laurent Lavoisier
        <div class='m-5'>
        <div class='italic'>Elements of Chemistry</div>
        </div>
      </div></>
  )
}

export default chemistry