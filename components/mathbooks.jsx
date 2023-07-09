import React from 'react'
import Booklist from './booklist'

const Euclids = () => {
  return (
    <>

<div class="flex justify-center p-10 text-5xl text-black">
       <h1 class='mr-20'>Mathematics</h1>
    </div>

      <div class="m-10 text-black text-3xl">Plato had the sentence "Let no one ignorant of number enter" inscribed in front of the Academy</div>


      <Booklist />



      <div class='text-black text-2xl m-10'>
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