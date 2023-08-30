import React, { useState } from 'react';

function TimeConverter() {
  const [secondsInput, setSecondsInput] = useState(0);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const convertTime = () => {
    let hours = Math.floor(secondsInput / 3600);
    let minutes = Math.floor((secondsInput - (hours * 3600)) / 60);
    let seconds = secondsInput - (hours * 3600) - (minutes * 60);

    setTime({ hours, minutes, seconds });
  };

  return (
    <div>
      <input
        type="number"
        value={secondsInput}
        onChange={(e) => setSecondsInput(Number(e.target.value))}
        placeholder="Ingrese segundos"
      />
      <button onClick={convertTime}>Convertir</button>
      <p>{`${time.hours} horas, ${time.minutes} minutos, ${time.seconds} segundos`}</p>
    </div>
  );
}

export default TimeConverter;