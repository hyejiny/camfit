import React, {useEffect} from 'react'
import axios from 'axios'



function VideoClass() {

    useEffect(() => {

        axios.get('/fitclasses/',)
        .then(response => {
            if (response.data.success) {
                
            } else {
                alert('상품들을 가져오는데 실패했습니다.')
            }
        })

    })





    return (
        <div>
            <button>
              <a href="/videoclass/upload">upload</a>
            </button>

        </div>
    )
}

export default VideoClass
