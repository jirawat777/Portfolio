import React from 'react'
import Header from '../../Center/Header'
import Paginations from '../../Center/Pagination'
import CardContents from '../../Center/CardContent'
import './index.scss'

function EducationPage() {
  const Education = [
    { id: '01', title: 'ระดับประถมศึกษา', year: '2000-2016', detail: 'ศึกษาที่ : โรงเรียนบ้านนา "นายกพิทยากร"' },
    { id: '02', title: 'ระดับมัธยมศึกษา ตอนต้น', year: '2000-2016', detail: 'ศึกษาที่ : โรงเรียนบ้านนา "นายกพิทยากร"' },
    { id: '03', title: 'ระดับมัธยมศึกษา ตอนปลาย', year: '2000-2016', detail: 'ศึกษาที่ : โรงเรียนบ้านนา "นายกพิทยากร"' },
    { id: '04', title: 'ระดับมัธยมศึกษา ตอนต้น', year: '2000-2016', detail: 'ศึกษาที่ : โรงเรียนบ้านนา "นายกพิทยากร"' }
  ]
  return (
    <div className='EducationPage'>
      <Header title='ประวัติการศึกษา' icon='fas fa-university' />
      <div className='ContentEducation'>

      </div>
    </div>
  )
}

export default EducationPage