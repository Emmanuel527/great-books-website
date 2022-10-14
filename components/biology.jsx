import React from 'react'
import Booklist from './booklist'

const biology = () => {
  return (
<>
    <div class='text-white m-5'> Biology is a natural science concerned with the study of life and living organisms, including their structure, function, growth, evolution, distribution, and taxonomy.
</div>

<Booklist/>
    <div class='text-white m-10'>
    <div>Hippocrates</div>
    <div class='m-5'>
    <div class='italic'>Works</div>
    </div>

    <div>Galen</div>
    <div class='m-5'>
    <div class='italic'>On the Natural Faculties</div>
    </div>
    
    <div> William Harvey</div>
    <div class='m-5'>
    <div class='italic'>On the Motion of the Heart and Blood in Animals</div>
    <div class='italic'>On the Circulation of Blood</div>
    <div class='italic'>On the Generation of Animals</div>
    </div>

    <div>Charles Darwin</div>
    <div class='m-5'>
    <div class='italic'>The Origin of Species by Means of Natural Selection</div>
    <div class='italic'>The Descent of Man, and Selection in Relation to Sex</div>
    </div>

    <div>Theodosius Dobzhansky</div>
    <div class='m-5'>
    <div class='italic'>Genetics and the Origin of Species</div>
    </div>


<div>C. H. Waddington</div>
<div class='m-5'>
<div class='italic'>The Nature of Life</div>
</div>
    </div>
    </>
  )
}

export default biology