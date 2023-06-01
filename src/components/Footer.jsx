import logoBlanco from '../assets/logoBlanco.png'
import linkedinIcon from '../assets/linkedinIcon.png'
import facebookIcon from '../assets/facebookIcon.png'
import instagramIcon from '../assets/instagramIcon.png'
import globeIcon from '../assets/globeIcon.png'
import whatsappIconGray from '../assets/whatsappIconGray.png'

const Footer = () => {
  return (
    <div className="bg-[#f4f4f4] flex flex-col items-center py-10">
        <div className="w-[75%] p-5 flex gap-8">
            <div className='bg-[#DF321A] w-24 h-24 mt-2 flex items-center justify-center rounded-full'>
                <img src={logoBlanco} alt="laborum"/>
            </div>
                <div className='w-[60%]'>
                    <h3 className='text-xl mb-2'><strong>Acerca de Laborum</strong></h3>
                    <p>Con una trayectoria de más de 20 años de continuo crecimiento, 
                        nos hemos convertido en el socio estratégico de las principales 
                        empresas del Perú. Creamos soluciones innovadoras que se adaptan 
                        a la necesidad de nuestros clientes, ayudándolos a encontrar a los 
                        candidatos más adecuados para su empresa.
                    </p>
                </div>
        </div>
        <hr className='bg-red-400 p-[1px] w-[70%] mt-2'/>
        <div className='flex w-[70%] items-center justify-start gap-[150px]'>
            <div>
                <h2 className='my-4 text-xl'><strong>Contactanos</strong></h2>
                <p className='mb-4'>damaris.lescano@krowdy.com</p>
                <span>+51 932 100 662 (Solo WhatsApp)</span>
            </div>
            <div>
                <h2 className='my-4 text-xl'><strong>Siguenos</strong></h2>
                <ul className='flex gap-4 scale-110'>
                    <li><a target='_blank' href='https://www.facebook.com' rel="noreferrer"><img src={facebookIcon} alt='facebook'/></a></li>
                    <li><a target='_blank' href='https://www.instagram.com' rel="noreferrer"><img src={instagramIcon} alt='instagram'/></a></li>
                    <li><a target='_blank' href='https://www.linkedin.com' rel="noreferrer"><img src={linkedinIcon} alt='linkedin'/></a></li>
                    <li><a target='_blank' href='https://web.whatsapp.com/' rel="noreferrer"><img src={whatsappIconGray} alt='whatsapp'/></a></li>
                    <li><a target='_blank' href='https://www.google.com' rel="noreferrer"><img src={globeIcon} alt='webPage'/></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer