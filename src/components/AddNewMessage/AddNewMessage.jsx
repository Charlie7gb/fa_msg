"use client"

import { redirect } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import { css, StyleSheet } from 'aphrodite';
import { flip, zoomOutUp } from 'react-animations';

 
export default function AddNewMessage() {

      const styles = StyleSheet.create({
        flip: {
          animationName: flip,
          animationDuration: '2s'
        },
        zoomOutUp: {
          animationName: zoomOutUp,
          animationDuration: '2s'
        }
      })

  const [message, SetMessage] = useState(' ')
  const [image, SetImage] = useState('/snapedit_1700002048382.png')
  const [DivText, SetDivText] = useState('d-block');
  const [flipDivText,SetflipDivText] = useState('')
  const [zoomOutUpimage,SetzoomOutUpDownimage] = useState('')

  function postNewMessage() {
    const userData = {
      Name: "User---------------------",
      Message: message
    }
    try {
      axios.post('Api/ApiNewMessage', JSON.stringify(userData))
        .then((response) => {

          SetflipDivText(`${css(styles.flip)}`)
          setTimeout(() => {
            SetDivText(`d-none`)
            SetImage('/message-bottle-7192425-5862562.png')
            SetzoomOutUpDownimage(`${css(styles.zoomOutUp)}`)
          },1600)
          redirect('/')

        }); 
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className='container d-flex justify-content-center p-5'>
      <div className='row justify-content-center align-items-center g-2'>
        <div className='col-md-12'>
          <div className={`position-relative ${flipDivText}`}>
            <div>
              <Image src={image} className={`w-100 ${zoomOutUpimage}`} width={400} height={400} />
            </div>
            <div className={`${DivText}`}>
              <textarea value={message} className={`form-control border-0 position-absolute h-100 w-100 bg-transparent p-5`} onChange={e => SetMessage(e.target.value)}
                style={{ "top": 0, "left": 0 }}></textarea>
            </div>
          </div>

        </div>
        <div className='col-md-12 d-flex justify-content-center justify-content-center align-items-center'>
          <button type="submit" className='btn btn-light' onClick={() => postNewMessage()}>Send</button>
        </div>
      </div>
    </div>
  )
}
