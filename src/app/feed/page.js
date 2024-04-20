
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
// ImageSlider.js
export default function HomePage() {
const images = [
       "https://cdn.discordapp.com/attachments/1225620233583071243/1231119177713061928/1.png?ex=6635cc15&is=66235715&hm=f56c70855813af103e077b0b4287f26c9ea49365b241f2765397c473334998c6&",
        "https://cdn.discordapp.com/attachments/1225620233583071243/1231119306780049458/2.png?ex=6635cc33&is=66235733&hm=b2a99c0dee6faf62ebcee4c5dd6f98567af7342e8622709cf4554d2c45a7643e&",
        "https://cdn.discordapp.com/attachments/1225620233583071243/1231119434328838224/3.png?ex=6635cc52&is=66235752&hm=e7c997f7d6cc61bf583c707c94e98ebc074a855b3ab8e1bb51afaed347834fc0&"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
        setNumNext(numNext + 1);
    console.log(numNext);
  };

    useEffect(() => {
        // keydown up and down arrow keys
        const handleKeyDown = (e) => {
            if(e.key === 'ArrowDown'){
                goToNextImage();
            } else if(e.key === 'ArrowUp'){
                goToPreviousImage();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
    }, []);

    const imageClicked = (e) => {
        if(e.detail === 2){
            alert('double clicked');
        }
    }
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientY)
    }

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isUpSwipe = distance > minSwipeDistance
  const isDownSwipe = distance < -minSwipeDistance
        if(isUpSwipe){
            goToNextImage();
        } else if(isDownSwipe){
            goToPreviousImage();
        }
}

const [numNext, setNumNext] = useState(0);

return (
    <div className="container flex flex-col items-center justify-center mx-auto h-screen">
            <h1 className="text-4xl pb-5">Open Challenges</h1>
        <div className="image-container h-3/4" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <Image src={images[currentImageIndex]} alt="Slider" width={3024} height={4032} className="object-scale-down max-h-full" onClick={imageClicked}/> </div> </div>
  );
}
