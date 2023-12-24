"use client"

import RenderWave from './RenderWave';
import { css, StyleSheet } from 'aphrodite';
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react'
import { flip, zoomInDown } from 'react-animations';
import Link from 'next/link';


export default function Wave() {

    const styles = StyleSheet.create({
        flip: {
            animationName: flip,
            animationDuration: '2s'
        },
        zoomInDown: {
            animationName: zoomInDown,
            animationDuration: '2s'
        }
    })

    const [animatinFadeinDown, setanimatinFadeinDown] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [Img, setImg] = useState('/message-bottle-7192425-5862562.png');
    const [MessageRender, setMessageRender] = useState([]);
    const [DivImage, setDivImage] = useState('d-block');
    const [DivText, setDivText] = useState('d-none');

    const fetchMessage = async () => {
        try {
             
            const result = await axios.get(`Api/ApiNewMessage`);
            setMessageRender(result.data.msgO.Message);
        } catch (error) {
            alert("error");
        }
    }

    const handleClick = () => {
        setIsVisible(false);
        setDivImage('d-block');
        setDivText('d-none');


        setTimeout(() => {
            setIsVisible(true);
            setanimatinFadeinDown(css(styles.zoomInDown));
            setTimeout(
                () => {
                    setanimatinFadeinDown('');
                    setanimatinFadeinDown(css(styles.flip));
                }, 2000);
            fetchMessage();
        }, 4000);

        setTimeout(() => {
            setDivImage('d-none');
            setDivText('d-block');
        }, 6500);

        setanimatinFadeinDown('');

    }
    return (
        <div>
            <div className={`${isVisible ? 'd-none' : 'd-block'} MainWavwDiv`}>
                <RenderWave />
            </div>
            <div className='container d-flex justify-content-center p-5'>
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col-12">
                        <div className={`${animatinFadeinDown} test d-flex justify-content-center align-items-center`}>
                            <div className={`${DivImage}`} style={{ width: 400, height: 400, background: `url(${Img})` }}></div>
                            <div className={`${DivText}`}>
                                <div className='d-flex p-5 justify-content-center align-items-center' style={{
                                    width: 400,
                                    height: 300,
                                    backgroundImage: 'url(/snapedit_1700002048382.png)',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                    <div className='px-4'>
                                        {MessageRender}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className='row w-100 text-center d-flex justify-content-center align-items-center'>
                            <div className='col-md-4'>
                                <button className="btn" onClick={() => handleClick()}>
                                    R-Message
                                </button>
                            </div>
                            <div className='col-md-4'>
                                <Link href='/NewMessage' className='btn'>Create Message</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}