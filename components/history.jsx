import React from 'react'
import Booklist from './booklist'

const history = () => {
  return (
    <><div class='text-white m-5'>History (from Greek ἱστορία - historia, meaning "inquiry, knowledge acquired by investigation") is the discovery, collection, organization, and presentation of information about past events.</div>
    <Booklist/>
    
    <div class='text-white m-10'>
      <div>Herodotus</div>
      <div class='m-5'>
      <div class='italic'>The History</div>
      </div>

      <div>Thucydides</div>
      <div class='m-5'>
      <div class='italic'>History of the Peloponnesian War</div>
      </div>

      <div>Plutarch</div>
      <div class='m-5'>
      <div class='italic'>The Lives of the Noble Grecians and Romans</div>
      </div>

      <div>P. Cornelius Tacitus</div>
      <div class='m-5'>
      <div class='italic'>The Annals</div>
      <div class='italic'>The Histories</div>
      </div>

      <div>Edward Gibbon</div>
      <div class='m-5'>
      <div class='italic'>The Decline and Fall of the Roman Empire</div>
      </div>

      <div>James Boswell</div>
      <div class='m-5'>
      <div class='italic'>The Life of Samuel Johnson, LL.D.</div>
      </div>

      <div>Max Planck</div>
      <div class='m-5'>
      <div class='italic'>Scientific Autobiography and Other Papers</div>
      </div>

      <div>Johan Huizinga</div>
      <div class='m-5'>
      <div class='italic'>The Autumn of the Middle Ages</div>
      </div>
    </div></>

    
  )
}

export default history