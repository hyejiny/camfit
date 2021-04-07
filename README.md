## README



#### CamFit 란?

> 웹 카메라(Cam) 과 피트니스(Fit)의 합성어

홈 피트니스(Fit)를 하는 동안, 웹 카메라(Cam)를 통해 촬영하면 AI가 사용자의 자세를 음성으로 트레이닝해주는 서비스



* 기획 배경

  

* 서비스 목적

  * AI Training 제공을 통해 운동자의 자세 교정
  * Training Class Flatform 제공을 통해 트레이너와 운동자 연결

* 주요 기능

  * AI 코칭 
    * 실시간으로 사용자의 자세를 분석해 음성으로 피드백 제공
  * 온라인 화상 클래스
    * 전문 트레이너와 운동자가 화상미팅으로 PT 진행 가능
  * [더 많은 기능 보기](#CamFit's-기능)





## 🔧 Install

* Django 실행

  1. 패키지 설치

  ```text
  $ pip install -r requirements.txt
  ```

  2. Django 실행

  ```text
  $ python manage.py runserver
  ```

* React 실행

  1. 패키지 설치

  ```text
  $ npm i
  ```

  2. React 실행

  ```text
  $ npm start
  ```





## 📑 Project Construction

[기능별 시퀀스 다이어그램](./기획/기능별 시퀀스다이어그램.md)





## CamFit's 기능

* AI 코칭
  * Teachable Machine
    * 티쳐블머신 웹 상에서 모델링 후 프론트엔드에서 적용하고 각각의 상태값을 조정하여 여러 상황에 대응하였다.
    * 시작, 갯수 세어주기, 자세 경고 등의 상황에서 각각에 맞는 wav파일을 재생하였다. 
  * TTS (음성합성)
    * ![TTS](기획\TTS.JPG)
    * 인코더
      * 문자열을 캐릭터 임베딩으로 변환한 벡터를 입력으로 받는다.
      * Convolution Layer와 Bidirectional LSTM Layer를 거쳐 feature를 인코딩한다.
    * 디코더
      * 인코더에서 얻은 encoded feature를 바탕으로 컨텍스트 벡터를 만들고 이에 attention mechanism을 적용한다.
      * 최종적으로 디코더에서 mel-spectrogram을 생성한다.
    * 보코더
      * 디코더를 통해 생성한 mel-spectrogram을 보코더에 입력하여 음성 waveform을 합성할 수 있다.
      * waveglow라는 보코더를 사용하였다.
    * TTS 구현 후 상황에 따른 wav파일을 프론트엔드에서 빠르게 쓸 수 있게 미리 만들어놓고 재생하였다.
* 온라인 화상 클래스
* 정보 게시판
* 커뮤니티





