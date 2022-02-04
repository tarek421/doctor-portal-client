import React from 'react';
import caudi from "../../../images/people-1.png"
import caudi2 from "../../../images/people-2.png"
import chair from "../../../images/bg.png"
import Card from './Card';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Blog = () => {
   const doctors=[
      {
         name:'Rased Kabir',
         date: '22 Aug 2018',
         title: 'Check at last a doctor in a year or your teath.',
         description: <svg data-testid="ArrowRightAltIcon"></svg>,
         bgColor: 'rgb(21 209 195 / 90%)',
         bgImage: `${chair}`
      },
      {
         name:'Dr. Caudi',
         image: `${caudi}`,
         date: '23 Apr 2019',
         title: '2 times brush in a day can keep you healthy.',
         description: "It's long established fact by that by the readable content of a lot layout. The point"
      },
      {
         name:'Dr. John michael',
         image: `${caudi2}`,
         date: '23 Apr 2019',
         title: 'Check at last a doctor in a year or your teath.',
         description: "It's long established fact by that by the readable content of a lot layout. The point"
      }
   ];
   return (
      <div>
         <div className="container my-5 py-5">
            <h5>Our Blog</h5>
            <h1>From Our Blog News</h1>
            <div className="row mt-5">
               {
                  doctors.map(doctor => <Card data={doctor}></Card>)
               }
            </div>
         </div>
      </div>
   );
};

export default Blog;