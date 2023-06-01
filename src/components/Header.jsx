import headerImage from '../assets/headerImage.png'

const Header = () => {
  return (
    <div className="text-center text-lg">
      <Coupon/>
        <div className="bg-[#767676] flex justify-center">
            <img src={headerImage} alt="Laborum" className='w-[70%]'/>
        </div>
    </div>
  )
}

export default Header
export const Coupon = () => {
  return(
    <p className="bg-[#F4F4F4] p-4">Utiliza el código <strong>EmpleabilidadLaborum</strong> y obtén 10% de descuento en todos los productos</p>
  )
}