/* eslint-disable react/prop-types */
import camera from '../../assets/camera.svg'
import redCamera from '../../assets/redCamera.svg'
import logo from '../../assets/logo.png'
import { BrowserRouter, Link, Route } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const CardStructure = ({cards}) => {


  return (
    <BrowserRouter>
    <div className='flex gap-14 items-center'>
      {cards.map(({id, mediumSize, bgColor, type, objetive, method, list, elements, fontMedium, center, description, url, image, imageLarge, extraLarge, cameraRed, miniDescription, price}) => (
        <article key={id} className={`${mediumSize ? 'w-[350px]' : 'w-[265px]'}`}>
          <Link to={`/${url}`}>
            <div className={`rounded-xl overflow-hidden uppercase ${mediumSize ? 'h-[350px]' : 'h-[265px]'}`}>
              <div className={`h-[43%] top w-full text-white pr-2 py-5 flex flex-col justify-center text-end`} style={{backgroundColor: bgColor}}>
                <p className={`font-semibold ${mediumSize ? 'text-2xl' : 'text-base'}`}>{type}</p>
                <p className={`font-bold ${mediumSize ? 'text-4xl' : 'text-3xl'}`}>{objetive}</p>
                <p className={`text-transparent font-black noBgText ${mediumSize ? 'text-5xl' : 'text-4xl'}`}>{method}</p>
              </div>
              <div className="h-[57%] bg-[#ebebed] p-2 flex flex-col items-end justify-center relative">
                <span className={`flex gap-1 px-2 bg-white w-max rounded-lg ml-auto absolute right-4 top-2 font-bold ${mediumSize && 'text-xl gap-2'}`}>
                  <img src={cameraRed? redCamera : camera} alt='video' className={`${mediumSize && 'w-6'}`}/>Online
                </span>
                {list ? (
                  <ul className={`normal-case w-[110px] list-disc font-semibold ${mediumSize ? 'text-xs': 'descriptionList'}`}>
                    {elements.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={`w-[115px] font-bold ${fontMedium ? 'descriptionMedium' : 'description'}  ${center ? 'text-center' : ''}`}>{description}</p>
                )}
                <img src={image} alt='personas' className={`absolute bottom-0 left-0 ${mediumSize ? 'w-[200px] h-52' : 'w-32 h-48'} ${imageLarge && 'h-64'} ${extraLarge && 'h-72'}`}/>
                <img src={logo} alt='logo' className='w-24 absolute bottom-3 right-5'/>
              </div>
            </div>
            </Link>
          <p className={`my-2 ${mediumSize && 'text-xl'}`}>{miniDescription}</p>
          <span className={`${mediumSize ? 'text-2xl' : 'text-xl'}`}><strong>{price}</strong></span>
        </article>
      ))}
    </div>
    
    </BrowserRouter>
  );
};

export default CardStructure;