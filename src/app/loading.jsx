import Image from 'next/image'
import style from '@/app/loading.module.css'
import manImage from '@/assets/manm.svg'
import { Blinker } from 'next/font/google'
import Phrases from '@/assets/phrases.json'

const blinker = Blinker({subsets:['latin-ext'], weight:["200","300"]});

let randomNumber= 0;

function findPhrase(phrase){
   return phrase.id===randomNumber;
}

export default function loadingComponents(){
    randomNumber= Math.round(Math.random()*(20 - 1) + 1);
    const quote = Phrases.find((findPhrase))
    return(
    <>
      <div className={`${style.mainContainer} ${blinker.className} flex flex-col p-6 sm:p-16 items-center mt-32`}>
      <Image priority src={manImage} alt='A meditating man' width={400} />
      <p className=' text-center text-2xl pt-5'>"{quote.phrase}"</p>
      <p className=' md:w-1/2 text-right text-3xl font-semibold'>{'- '+quote.author}</p>
      </div>
      <span className='mt-6 text-4xl font-semibold'>Loading . . .</span>
    </>)
}