const progressBar = useRef();

const [text, setText] = useState('오늘도 운동하러 온 당신 최고!');

let percent;
let totalPercent;
let percentBar;

// useEffect(() => {
//     dispatch(groupAction.enterRoom(roomId));
//     const socket = io(url);
//     const peer = new Peer({
//       config: { iceServers: [{ url: "stun:stun.l.google.com:19302" }] },
//     });
//     peer.nick = UserNick;

//     // 클라의 영상 스트림 비디오에 넣기

//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: false })
//       .then((stream) => {
//         myStream = stream;
//         let streamId = stream.id;
//         addVideoStream(myVideo.current, stream);
//         videoGrid.current.prepend(myVideo.current);
//         allStream.current = stream;

// 타이머 이벤트
let leftTimeFloor; //getMedia 였나 그거

// 공부시간
socket.on('exercise', (wholeTime, now) => {
  const leftTime = wholeTime - now;
  leftTimeFloor = Math.floor(leftTime / 1000); //(초) (=wholeTime, now 다 초???) 1초 =1000ms
  totalPercent = leftTimeFloor;
  if (totalPercent === 0) {
    setText('오늘도 상쾌하게 운동 시작!');
  } else if (leftTime === wholeTime * 0.25) {
    setText('화이팅 화이팅!');
  } else if (leftTime === wholeTime * 0.5) {
    setText('절반까지 왔어요!');
  } else if (leftTime === wholeTime * 0.75) {
    setText('거의 다 왔어요! 조금만 더 힘내요!');
  }

  progressBar.current.style.width = `0%`;
  leftTimeFloor = leftTimeFloor - 1; //1초씩 감소
  percent = totalPercent - leftTimeFloor;
  percentBar = (percent / totalPercent) * 100;
  progressBar.current.style.width = `${percentBar}%`; // 프로그레스바 길이
  if (leftTimeFloor <= 0) {
    socket.emit('end', '뭘로 해야할까 라운드 대타');
    clearInterval(exerciseInterval); //전역 clearInterval(intervalId)메서드는 에 대한 호출로 이전에 설정된 시간이 지정된 반복 작업을 취소
    dispatch(); // 프로그레스바가 정지되고 방은 남아있을 수 있게
  }
  const exerciseInterval = setInterval(timer, 1000);
  //setInterval()메서드 는 각 호출 사이에 고정된 시간 지연으로 함수를 반복적으로 호출하거나 코드 조각을 실행합니다.
});

socket.on('exerciseEnd', (wholeTime, now) => {
  const leftTime = wholeTime - now;
  // console.log(wholeTime, now, leftTime);
  leftTimeFloor = Math.floor(leftTime / 1000);
  setText('오늘도 운동 완료! 수고하셨습니다!');
  leftTimeFloor = leftTimeFloor - 1;
  if (leftTimeFloor <= 0) {
    clearInterval(goodByeinterval);
    history.push('/');
  }
  const goodByeinterval = setInterval(timer, 1000);
});
