import React, { useEffect, useRef, useState } from 'react';
import css from './Video.module.scss';
import pl from '../../01-Header/AudioPlayer/lists';
import { Button } from '../../00-Common/Button/Button';
import { useAppSelector } from '../../../hooks/hooks';
import { useNavigate } from 'react-router-dom';

export const Video = () => {
  const playList = pl.playlist1;
  const videoRef = useRef<HTMLVideoElement>(null);
  const userId = useAppSelector(state => state.auth.data.id);
  const navigate = useNavigate();


  const [currentVideo, setCurrentVideo] = useState(0);

  const toggleNextVideo = () => {
    if (currentVideo >= playList.length - 1) {
      setCurrentVideo(0);
      // @ts-ignore
      videoRef.current!.src = playList[0].src;

    } else {
      setCurrentVideo(prev => prev + 1);
      // @ts-ignore
      videoRef.current!.src = playList[currentVideo + 1].src;

    }
  };
  const togglePreviousVideo = () => {
    if (currentVideo > 0) {
      setCurrentVideo(prev => prev - 1);
      // @ts-ignore
      videoRef.current!.src = playList[currentVideo - 1].src;

    }
  };

  useEffect(() => {
    // @ts-ignore
    videoRef.current!.src = playList[0].src;
  }, []);
  useEffect(() => {
    !userId && navigate('/');
  }, []);

  return (
    <nav className={css.video}>
      <div className={css.controls}>
        <Button onClick={togglePreviousVideo}>Prev</Button>
        <Button onClick={toggleNextVideo}>Next</Button>
        <span className={css.title}>{playList[currentVideo].title}</span>
      </div>
      <video className={css.videoItem} src={playList[currentVideo].src} width="100%" controls={true} ref={videoRef} />
    </nav>
  );
};
