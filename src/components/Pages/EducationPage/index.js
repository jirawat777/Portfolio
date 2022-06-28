import React from 'react'
import Header from '../../Center/Header'
import Paginations from '../../Center/Pagination'
import CardContents from '../../Center/CardContent'
import './index.css'

function EducationPage() {
  const Education = [
    { id: '01', title: 'ระดับประถมศึกษา', year: '2000-2016', detail: 'ศึกษาที่ : โรงเรียนบ้านนา "นายกพิทยากร"' },
    { id: '02', title: 'ระดับมัธยมศึกษา ตอนต้น', year: '2000-2016', detail: 'ศึกษาที่ : โรงเรียนบ้านนา "นายกพิทยากร"' }
  ]
  return (
    <div className='EducationPage'>
      <Header title='ประวัติการศึกษา' icon='fas fa-university' />
      <div className='ContentEducation'>
        {Education.map((x, i) => <CardContents id={x.id} title={x.title} year={x.year} detail={x.detail} />)}
      </div>
      <Paginations count={2} />
    </div>
  )
}

export default EducationPage