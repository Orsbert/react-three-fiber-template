import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo'
import { Loader } from '@react-three/drei';
import { MainCanvas } from '../components/MainCanvas';
import { HTMLOverlay } from '../components/HTMLOverlay';

export default function Home() {
  const [ isServer, setIsServer ] = useState(true)
  
  useEffect(() => setIsServer(false), [])

  return (
    <>
      <NextSeo
        title="3d Website"
        description='3d Template by @orsbert'
      />
      <MainCanvas/>
      <HTMLOverlay/>
      {!isServer && <Loader />}
    </>
  )
}