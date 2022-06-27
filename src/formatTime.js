export const formatTime = (time) => {
  const sec = time % 60;
  const getSeconds = sec < 10 ? `0${sec}` : sec;
  const minutes = Math.floor((time%3600)/60);
  const getMinutes = minutes < 10 ? `0${minutes}` : minutes; 
  const getHours = Math.floor(time/3600);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
