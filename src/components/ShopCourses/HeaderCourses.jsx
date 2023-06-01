import { Coupon } from "../Header"
import logo from "../../assets/logo.png"


const HeaderCourses = () => {
  return (
    <div>
        <div className="w-full text-center text-lg">
        <Coupon/>
        <img src={logo} alt="logo" className="mx-auto w-60 mt-5"/>
        <hr className=" w-[90%] mx-auto border-2 border-[#F4F4F4] mt-6"/>
      </div>
    </div>
  )
}

export default HeaderCourses