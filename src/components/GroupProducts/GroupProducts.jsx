import people from '../../assets/peopleIcon.png'
import CardStructure from '../cardStructure/CardStructure'
import * as cards from '../../data/cardsData'


const GroupProducts = () => {

  const diferentSections = [
    {
      id: 1,
      type: 'Bootcamp',
      borderColor: '#FFC000',
      cards: cards.cardsBootcamp,
    },
    {
      id: 2,
      type: 'Asesorias',
      borderColor: '#DF321A',
      cards: cards.cardsAsesorias
    },
  ]

  return (
    <div>
      {
        diferentSections.map(section => (
        <div key={section.id} className='w-[95%] mx-auto flex justify-around items-center h-[550px] relative border-2 mt-16 mb-28 rounded-3xl' style={{borderColor: section.borderColor}}>
          <span className='flex absolute left-16 -top-6 bg-white gap-2 items-center uppercase text-2xl border-2 w-max px-3 py-1 rounded-3xl' style={{borderColor: section.borderColor}}>
              <img className='filter invert' src={people}/>
              {section.type}
          </span>
          
            <CardStructure cards={section.cards} />
          
        </div>
        ))
      }


      
      
    </div>
  )
}

export default GroupProducts