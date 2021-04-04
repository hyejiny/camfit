import React,{useState} from 'react';
import './page.css';
import CamFitWhat from '../component/Mainpage/CamFitWhat';
import CamFitWhy from '../component/Mainpage/CamFitWhy';
import CamFitHow from '../component/Mainpage/CamFitHow';
import MainTop from '../component/Mainpage/MainTop';
import Modal from '../pages/utils/Modal';

function Mainpage () {
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    return (
        <div className="Mainpage">
            <row>
            {/* <MainTop /> */}
            </row>
        <row>
            <div>
            <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); setVideoModalOpen(true); }} aria-controls="modal">
                <span className="ml-3">캠피트 소개 영상 시청</span>
              </button>
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>
            </div>

            {/* <CamFitWhat/>
            <h2>홈 피트니스(Fit)를 하는 동안, 웹 카메라(Cam)를 통해 촬영하면</h2>
            <h2>AI가 사용자의 자세를 음성으로 트레이닝해주는 서비스</h2>
            <CamFitWhy/>
            <CamFitHow/> */}
        </row>
        </div>
    )
}


export default Mainpage;