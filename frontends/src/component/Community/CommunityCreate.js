import React, { useState } from 'react';

function CommunityCreate() {

  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")

  // const [Images, setImages] = useState()

  // const descriptionChangeHandler = (e) => {
  //   setTitle(e.currentTarget.value)
  // }

  const titleChangeHandler = (e) => {
    setDescription(e.currentTarget.value)
  }


  return (
    <div>
      <form>

        <label>Title</label>
        <input onChange={titleChangeHandler} value={Title}/>
        <br/>
        {/* <label>Desc</label>
        <textarea onChange={descriptionChangeHandler} value={Description}/>
        <br/>
        <button>Submit</button> */}

      </form>
    </div>
  )
}


export default CommunityCreate;