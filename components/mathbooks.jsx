import React from 'react'
import Booklist from './booklist'

const Euclids = () => {
  return (
    <>

      <div class="m-5 text-white">Mathematics (from Greek μάθημα máthēma, “knowledge, study, learning”) is the study of topics such as quantity (numbers), structure, space, and change.
        Mathematicians seek out patterns and use them to formulate new conjectures. Mathematicians resolve the truth or falsity of conjectures by mathematical proof. When mathematical structures are good models of real phenomena, then mathematical reasoning can provide insight or predictions about nature. Through the use of abstraction and logic, mathematics developed from counting, calculation, measurement, and the systematic study of the shapes and motions of physical objects. Practical mathematics has been a human activity from as far back as written records exist. The research required to solve mathematical problems can take years or even centuries of sustained inquiry <p>It is often said that "Mathematics is the language of nature" and by learning to think mathematically, one  can converse with the universe. </p></div>


      <Booklist />



      <div class='text-white m-10'>
        <div>Euclid</div>
        <div class='m-5'>
        <div class='italic'>The Thirteen Books of Euclid's Elements</div>
        </div>

        <div>Archimedes</div>
        <div class='m-5'>
        <div class='italic'>On the Sphere and Cylinder</div>
        <div class='italic'>Measurement of a Circle</div>
        <div class='italic'>On Conoids and Spheroids</div>
        <div class='italic'>On Spirals</div>
        <div class='italic'>On the Equilibrium of Planes</div>
        <div class='italic'>The Sand Reckoner</div>
        <div class='italic'>The Quadrature of the Parabola</div>
        <div class='italic'>On Floating Bodies</div>
        <div class='italic'>Book of Lemmas</div>
        <div class='italic'>The Method Treating of Mechanical Problems</div>
        </div>

        <div>Apollonius of Perga</div>
        <div class='m-5'>
        <div class='italic'>On Conic Sections</div>
        </div>

        <div>Nicomachus of Gerasa</div>
        <div class='m-5'>
        <div class='italic'>Introduction to Arithmetic</div>
        </div>

        <div>Alfred North Whitehead</div>
        <div class='m-5'>
        <div class='italic'>An Introduction to Mathematics</div>
        </div>
      </div>
    </>
  )
}

export default Euclids