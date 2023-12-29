import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
import Mainbaner from '@/home.section.1/Mainbaner';
import Baner from '@/home.section.2/Baner';
import About from '@/home.section.3/About';
import Profile from '@/home.section.4/Profile';

export default function Home() {
  return (
    <>
      <Mainbaner />
      <Baner/>
      <About/>
      <Profile/>
    </>
  )
}
