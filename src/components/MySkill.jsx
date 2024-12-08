import React from 'react'

const MySkill = (props) => {
  /* props = {
      title : ...,
      skills : [
        {
          ....
        }
      ]
  }
  */
  const skills = props.skills;
  return (
    <div className='myskill pt-4'>
        <h4 className='ms-4'>{props.title}</h4>
        <div className="card-container d-flex justify-content-between px-1">
            {
              skills.map(item => {
                  return (
                      <div className="card px-2" style={{width : '24%'}}>
                         <img style={{width : '30px',display : 'block',margin:'10px auto'}} src={item.image} alt="" />
                         <p className='text-center my-2'>{item.title}</p>
                         <p className='text-center'>{item.desc}</p>
                         <button className="btn btn-primary">Get Started</button>
                      </div>
                  )
              })
            }
        </div>
    </div>
  )
}

export default MySkill