import chat from '../assets/chatIcon.png'
import people from '../assets/peopleIcon.png'
import whatsapp from '../assets/whatsappIcon.png'
import CardStructure from './cardStructure/CardStructure'
import { cards } from '../data/cardsData'
import GroupProducts from './GroupProducts/GroupProducts'
const Main = () => {

  return (
    <div className="flex w-[70%] flex-col mx-auto">
        <ul className="flex gap-10 text-white uppercase my-10">
            <li className="flex gap-3 rounded-3xl items-center px-3 py-1 bg-[#FFC000] border border-[#FFC000]"><img src={people} alt='people'/>Bootcamps</li>
            <li className="flex gap-3 rounded-3xl items-center px-3 py-1 bg-[#DF321A] border border-[#DF321A]"><img src={chat} alt='chat'/>Asesorías</li>
            <li className="flex gap-3 rounded-3xl items-center px-3 py-1 border border-black text-black font-semibold capitalize text-xl ml-auto">Contáctanos <img src={whatsapp} alt='whatsapp'/></li>
        </ul>
        <section className='flex gap-12 justify-around mb-16'>
            

            <CardStructure cards={cards}/>
        </section>
        <div className='text-center text-3xl border-4 border-[#F4F4F4] p-4'>
            #EmpleabilidadLaborum 
        </div>
        <GroupProducts/>
    </div>
  )
}

export default Main