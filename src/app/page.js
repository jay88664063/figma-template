import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
import Mainbaner from '@/app/Home/Mainbaner';
import Baner from '@/app/Home/Baner';
import About from '@/app/Home/About';
import Profile from '@/app/Home/Profile';
import Review from '@/app/Home/Review';
import Seminar from '@/app/Home/Seminar';

export default function Home() {
  return (
    <>
      <Mainbaner />
      <Baner/>
      <About/>
      <Profile/>
      <Review/>
      <Seminar/>
    </>
  )
}
